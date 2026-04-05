'use server';
/**
 * @fileOverview An AI agent to analyze uploaded images, suggest optimal preview crops, and generate descriptive alt text.
 *
 * - adminGalleryImageAutoSuggest - A function that handles the image analysis process.
 * - AdminGalleryImageAutoSuggestInput - The input type for the adminGalleryImageAutoSuggest function.
 * - AdminGalleryImageAutoSuggestOutput - The return type for the adminGalleryImageAutoSuggest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminGalleryImageAutoSuggestInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A gallery image, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  imageContext: z.string().optional().describe('Optional context about the image or event it belongs to.'),
});
export type AdminGalleryImageAutoSuggestInput = z.infer<typeof AdminGalleryImageAutoSuggestInputSchema>;

const SuggestedCropSchema = z.object({
  description: z.string().describe('A description of the suggested crop area (e.g., "focus on the main subject", "tight crop around the faces").'),
});

const AdminGalleryImageAutoSuggestOutputSchema = z.object({
  altText: z.string().describe('A concise and descriptive alt text for the image, suitable for accessibility and SEO.'),
  suggestedCrops: z.array(SuggestedCropSchema).describe('An array of suggested optimal preview crop descriptions.'),
});
export type AdminGalleryImageAutoSuggestOutput = z.infer<typeof AdminGalleryImageAutoSuggestOutputSchema>;

export async function adminGalleryImageAutoSuggest(input: AdminGalleryImageAutoSuggestInput): Promise<AdminGalleryImageAutoSuggestOutput> {
  return adminGalleryImageAutoSuggestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminGalleryImageAutoSuggestPrompt',
  input: {schema: AdminGalleryImageAutoSuggestInputSchema},
  output: {schema: AdminGalleryImageAutoSuggestOutputSchema},
  prompt: `You are an expert image analyst and an SEO specialist. Your task is to analyze the provided image and generate two things:
1. A descriptive and concise alt text that accurately describes the image content, is useful for accessibility, and good for SEO.
2. Suggestions for optimal preview crops. Describe the crop regions focusing on the most important or aesthetically pleasing parts of the image.

Here is the image to analyze:
{{media url=imageDataUri}}

{{#if imageContext}}
Additional context about the image: {{{imageContext}}}
{{/if}}

Please provide the output in JSON format, following the AdminGalleryImageAutoSuggestOutputSchema.
`,
});

const adminGalleryImageAutoSuggestFlow = ai.defineFlow(
  {
    name: 'adminGalleryImageAutoSuggestFlow',
    inputSchema: AdminGalleryImageAutoSuggestInputSchema,
    outputSchema: AdminGalleryImageAutoSuggestOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input, {
      model: 'googleai/gemini-2.5-flash-image', // Use the multimodal model for image analysis
      config: {
        responseModalities: ['TEXT'], // We only expect text output (JSON)
      },
    });
    return output!;
  }
);
