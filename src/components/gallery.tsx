'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import images from '@/lib/placeholder-images.json';

const imageList = Object.values(images).filter((image) => image.src);

type Image = (typeof imageList)[0];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageList.map((image, index) => (
          <div
            key={index}
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
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              className="w-full h-auto object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
