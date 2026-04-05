'use client';

import { Countdown } from './countdown';
import { Particles } from './particles';

export function Hero() {
  const targetDate = new Date('2026-04-15T10:00:00.000+05:30'); // IST

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Particles />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg">
          The Final Prescription
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 drop-shadow-md max-w-3xl mx-auto font-body">
          One last dose of memories before we write our next chapter.
        </p>
        <div className="mt-12">
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}
