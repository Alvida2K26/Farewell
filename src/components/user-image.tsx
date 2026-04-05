'use client';
import Image from 'next/image';

export function UserImage() {
  return (
    <div className="p-4 border-2 border-dashed border-accent/50 rounded-lg max-w-3xl mx-auto">
       <p className="text-center text-muted-foreground mb-4">Your photo has been successfully added!</p>
       <Image
          src="/images/my-photo.png"
          alt="Your uploaded image"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-md"
       />
    </div>
  );
}
