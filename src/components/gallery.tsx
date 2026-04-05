'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Lightbox } from './lightbox';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const openLightbox = (image: ImagePlaceholder) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PlaceHolderImages.map((image) => (
          <Card
            key={image.id}
            className="overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-w-3 aspect-h-2">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                data-ai-hint={image.imageHint}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          </Card>
        ))}
      </div>
      {selectedImage && <Lightbox image={selectedImage} onClose={closeLightbox} />}
    </>
  );
}
