'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

interface LightboxProps {
  image: ImagePlaceholder;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image.imageUrl.replace('/600/400', '/1200/800')}
          alt={image.description}
          width={1200}
          height={800}
          data-ai-hint={image.imageHint}
          className="object-contain w-full h-full rounded-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:text-accent"
          onClick={onClose}
        >
          <X size={32} />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
