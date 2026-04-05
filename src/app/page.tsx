'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Agenda } from '@/components/agenda';
import { FoodMenu } from '@/components/food-menu';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { Gallery } from '@/components/gallery';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { Countdown } from '@/components/countdown';
import { useToast } from '@/hooks/use-toast';

const linkRevealDate = new Date('2026-04-15T09:59:00');

export default function Home() {
  const [showAlbumLink, setShowAlbumLink] = useState(false);
  const [galleryClicks, setGalleryClicks] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const checkDate = () => {
      if (new Date() >= linkRevealDate) {
        setShowAlbumLink(true);
      }
    };

    checkDate(); // Check on initial render
    const interval = setInterval(checkDate, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleGalleryClick = () => {
    const newClicks = galleryClicks + 1;
    setGalleryClicks(newClicks);

    if (newClicks >= 3) {
      setShowAlbumLink(true);
      toast({
        title: 'Secret Unlocked!',
        description: "You've found the hidden album link!",
      });
      setGalleryClicks(0); // Reset for fun
    }
  };
  
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="agenda" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              The Day's Agenda
            </h2>
            <Agenda />
          </div>
        </section>
        
        <Separator className="container my-8 bg-border" />

        <section id="menu" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Gastronomic Journey
            </h2>
            <FoodMenu />
          </div>
        </section>

        <Separator className="container my-8 bg-border" />

        <section id="gallery" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent cursor-pointer select-none"
              onClick={handleGalleryClick}
              title="What could happen?"
            >
              Gallery
            </h2>
            <Gallery />
            {showAlbumLink ? (
              <Button asChild className="mt-8">
                  <Link href="https://drive.google.com/drive/folders/1-x4mW5z_1YdTltMvSzO8cLYnmp5nbmzZ?usp=drive_link" target="_blank">
                      <Camera className="mr-2" />
                      View Full Album
                  </Link>
              </Button>
            ) : (
              <div className="mt-8 text-center p-8 rounded-lg border-2 border-dashed border-accent/30 max-w-2xl mx-auto">
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-4">
                  Full Album Coming Soon!
                </h3>
                <p className="text-muted-foreground mb-6">
                  The complete photo album will be available after the event. Countdown to reveal:
                </p>
                <Countdown targetDate={linkRevealDate} />
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
