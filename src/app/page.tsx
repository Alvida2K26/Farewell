'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Agenda } from '@/components/agenda';
import { FoodMenu } from '@/components/food-menu';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Gallery } from '@/components/gallery';

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
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Memory Lane
            </h2>
            <Gallery />
            <div className="text-center mt-12">
              <Link href="https://drive.google.com/drive/folders/1-x4mW5z_1YdTltMvSzO8cLYnmp5nbmzZ?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  View Full Photo Album
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
