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
import { Image as ImageIcon } from 'lucide-react';

export function AdminDashboard({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAddToGallery = () => {
    // TODO: Implement image upload and add to gallery logic.
    alert('This feature is not yet implemented.');
    console.log('Adding to gallery (not implemented)...', file);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-headline text-2xl">Admin Gallery Management</SheetTitle>
          <SheetDescription>
            Manage gallery images. (Ctrl+Shift+A to toggle)
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2"><ImageIcon className="text-primary"/> Image Upload</h3>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          {imagePreview && (
            <div className="space-y-4 pt-4 border-t">
              <img src={imagePreview} alt="Preview" className="rounded-md max-h-60 w-auto mx-auto" />
               <Button onClick={handleAddToGallery} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Add to Gallery</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
