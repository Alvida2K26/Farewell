'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import placeholderData from '@/lib/placeholder-images.json';

export function Gallery() {
  const images = placeholderData.gallery;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden break-inside-avoid">
          <CardContent className="p-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              data-ai-hint={image.hint}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
