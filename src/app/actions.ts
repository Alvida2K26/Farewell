'use server';

import {
  adminGalleryImageAutoSuggest,
  type AdminGalleryImageAutoSuggestOutput,
} from '@/ai/flows/admin-gallery-image-auto-suggest-flow';

export async function getAiSuggestions(imageDataUri: string, imageContext?: string): Promise<AdminGalleryImageAutoSuggestOutput | null> {
  try {
    const result = await adminGalleryImageAutoSuggest({
      imageDataUri,
      imageContext,
    });
    return result;
  } catch (error) {
    console.error('Error in getAiSuggestions server action:', error);
    // Depending on the desired error handling, you might want to throw
    // the error or return a specific error structure.
    // For now, returning null to be handled by the client.
    return null;
  }
}
