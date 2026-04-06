'use client';

import { useState } from 'react';
import { SecretButton } from './secret-button';
import { useMenu } from '@/context/menu-context';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const [clicks, setClicks] = useState(0);
  const { revealMenu } = useMenu();
  const { toast } = useToast();

  const handleCopyrightClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 3) {
      revealMenu();
      toast({
        title: "Secret Unlocked!",
        description: "You've found the hidden menu. Enjoy the sneak peek!",
      });
      setClicks(0); // Reset for fun
    }
  };

  return (
    <footer className="bg-background border-t border-border mt-auto py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p 
              onClick={handleCopyrightClick} 
              className="cursor-pointer select-none"
              title="A secret may be revealed..."
            >
              &copy; Alvida 2K26. All rights reserved.
            </p>
            <SecretButton />
        </div>
      </div>
    </footer>
  );
}
