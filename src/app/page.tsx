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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
              className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent"
            >
              Gallery
            </h2>
            <Gallery />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
