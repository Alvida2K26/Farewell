'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import images from '@/lib/placeholder-images.json';

const imageList = Object.values(images).filter((image) => image.src && image.width && image.height);

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  hint?: string;
};


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageList.map((image, index) => (
          <div
            key={image.src || index}
            className="break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Card className="overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
              <CardContent className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.hint}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
          <DialogTitle className="sr-only">Image</DialogTitle>
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="w-full h-auto object-contain rounded-lg"
              style={{ maxHeight: '90vh' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
