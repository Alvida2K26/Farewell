'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { Countdown } from './countdown';

export function Gallery() {
  const [clickCount, setClickCount] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Set the target date to April 15, 2026, 10:00 AM as per user request and blueprint.
  const targetDate = new Date('2026-04-15T10:00:00');

  useEffect(() => {
    const checkDate = () => {
      if (new Date().getTime() > targetDate.getTime()) {
        setShowButton(true);
      }
    };

    checkDate();
    const timer = setInterval(checkDate, 1000 * 60); // Check every minute

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    if (newClickCount >= 3) {
      setShowButton(true);
    }
  };

  if (showButton) {
    return (
      <div className="text-center">
        <Button asChild className="mt-8">
          <Link href="https://drive.google.com/drive/folders/1-x4mW5z_1YdTltMvSzO8cLYnmp5nbmzZ?usp=drive_link" target="_blank">
            <Camera className="mr-2" />
            View Full Album
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">The gallery is now unlocked. Click the button to view the photos.</p>
      </div>
    );
  }

  return (
    <div
      className="text-center p-8 rounded-lg border-2 border-dashed border-accent/30 max-w-2xl mx-auto cursor-pointer"
      onClick={handleClick}
      title="You might find something if you keep clicking..."
    >
      <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-4">
        Gallery Unlocks In
      </h3>
      <div className="mb-6">
        <Countdown targetDate={targetDate} />
      </div>
      <p className="text-sm text-muted-foreground mt-2">The gallery will be unlocked after the event starts . For now, enjoy the countdown.</p>
    </div>
  );
}
