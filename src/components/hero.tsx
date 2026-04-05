'use client';

import { Countdown } from './countdown';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
  const targetDate = new Date('2026-04-15T10:00:00.000+05:30'); // IST

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-4 py-16">
      <div 
        className="absolute inset-0 bg-black/60 -z-10"
      />
      
      <div 
        className="relative z-10 p-6 md:p-8 border-2 border-accent/30 rounded-lg max-w-3xl w-full bg-card/50 backdrop-blur-sm"
      >
        <p className="font-body text-base md:text-lg text-muted-foreground">
          You Are Cordially Invited To
        </p>

        <h1 className="font-headline text-5xl md:text-7xl font-bold text-accent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] my-4">
          FINAL PRESCRIPTION
        </h1>

        <p className="text-lg md:text-xl text-foreground/90">
          A Grand Farewell For B.Pharm Seniors
        </p>
        
        <div className="my-6 inline-block bg-primary/20 border border-primary/50 px-4 py-2 rounded-lg">
            <p className="text-white font-semibold tracking-wider">BATCH OF 2022 - 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-white">
            <div className="flex flex-col items-center gap-2">
                <Calendar className="w-8 h-8 text-accent"/>
                <p className="uppercase tracking-wider text-sm text-muted-foreground">Date</p>
                <p className="font-headline text-2xl text-foreground/90">15th April 2026</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <MapPin className="w-8 h-8 text-accent"/>
                <p className="uppercase tracking-wider text-sm text-muted-foreground">Venue</p>
                <p className="font-headline text-2xl text-foreground/90">Avanthi Gandhi Auditorium</p>
            </div>
        </div>

        <div className="mt-8 mb-8 scale-90">
          <Countdown targetDate={targetDate} />
        </div>

        <p className="font-body italic text-base md:text-lg text-muted-foreground">
          &ldquo;From Students to Lifesavers... The Journey Continues&rdquo;
        </p>

      </div>
    </section>
  );
}
