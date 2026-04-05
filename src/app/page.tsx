'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/hero';
import { Header } from '@/components/header';
import { Agenda } from '@/components/agenda';
import { FoodMenu } from '@/components/food-menu';
import { Gallery } from '@/components/gallery';
import { Footer } from '@/components/footer';
import { AdminDashboard } from '@/components/admin-dashboard';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAdmin(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="agenda" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              The Day's Agenda
            </h2>
            <Agenda />
          </div>
        </section>
        
        <Separator className="container my-8 bg-border/20" />

        <section id="menu" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Gastronomic Journey
            </h2>
            <FoodMenu />
          </div>
        </section>

        <Separator className="container my-8 bg-border/20" />

        <section id="gallery" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
             <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
              Memory Lane
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-muted-foreground">
              A collection of moments that we will cherish forever. Relive the laughter, the joy, and the camaraderie.
            </p>
            <Gallery />
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="https://drive.google.com/drive/folders/1-x4mW5z_1YdTltMvSzO8cLYnmp5nbmzZ?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  View Full Photo Album
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <AdminDashboard open={showAdmin} onOpenChange={setShowAdmin} />
    </>
  );
}
