'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lightbulb, Image as ImageIcon } from 'lucide-react';
import { getAiSuggestions } from '@/app/actions';

type Suggestions = {
  altText: string;
  suggestedCrops: { description: string }[];
};

export function AdminDashboard({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageContext, setImageContext] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setSuggestions(null); // Reset suggestions on new file
    }
  };

  const handleGenerateSuggestions = async () => {
    if (!file || !imagePreview) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please select an image file first.',
      });
      return;
    }

    setIsLoading(true);
    setSuggestions(null);

    try {
      const result = await getAiSuggestions(imagePreview, imageContext);
      if (result) {
        setSuggestions(result);
        toast({
          title: 'Success',
          description: 'AI suggestions generated!',
        });
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'AI Analysis Failed',
        description: 'Could not generate suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">Admin Gallery Management</SheetTitle>
          <SheetDescription>
            Manage gallery images and use AI to generate metadata.
            (Ctrl+Shift+A to toggle)
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2"><ImageIcon className="text-primary"/> Image Upload</h3>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          {imagePreview && (
            <div className="space-y-4">
              <img src={imagePreview} alt="Preview" className="rounded-md max-h-60 w-auto mx-auto" />
              
              <Textarea
                placeholder="Optional: Add context about the image (e.g., 'Taken during the awards ceremony')"
                value={imageContext}
                onChange={(e) => setImageContext(e.target.value)}
              />

              <Button onClick={handleGenerateSuggestions} disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Generate AI Suggestions
                  </>
                )}
              </Button>
            </div>
          )}

          {suggestions && (
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold text-lg">AI Suggestions</h3>
              <div className="space-y-2">
                <label className="font-medium">Suggested Alt Text</label>
                <Textarea readOnly value={suggestions.altText} className="bg-muted"/>
              </div>
              <div className="space-y-2">
                <label className="font-medium">Suggested Crops</label>
                 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                   {suggestions.suggestedCrops.map((crop, index) => (
                    <li key={index}>{crop.description}</li>
                  ))}
                </ul>
              </div>
               <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Add to Gallery</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
