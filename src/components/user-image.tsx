'use client';
import Image from 'next/image';

export function UserImage() {
  return (
    <div className="p-4 border-2 border-dashed border-accent/50 rounded-lg max-w-3xl mx-auto">
       <p className="text-center text-muted-foreground mb-4">To add your photo, replace the `my-photo.jpg` file in the `public/images` folder.</p>
       <Image
          src="/images/my-photo.jpg"
          alt="Your uploaded image"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-md"
       />
    </div>
  );
}
