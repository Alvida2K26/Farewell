'use client';

import React from 'react';
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

export default function Home() {
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
        
        <Separator className="container my-8 bg-border/20" />

        <section id="menu" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Gastronomic Journey
            </h2>
            <FoodMenu />
          </div>
        </section>

        <Separator className="container my-8 bg-border/20" />

        <section id="gallery" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Gallery
            </h2>
            <Gallery />
            <Button asChild className="mt-8">
                <Link href="https://drive.google.com/drive/folders/1-x4mW5z_1YdTltMvSzO8cLYnmp5nbmzZ?usp=drive_link" target="_blank">
                    <Camera className="mr-2" />
                    View Full Album
                </Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
