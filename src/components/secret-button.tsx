'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SecretButton() {
  const [clicks, setClicks] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (revealed) return;
    
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 3) {
      setRevealed(true);
    }
  };

  return (
    <div className="relative">
      <Button variant="ghost" onClick={handleClick}>
        {revealed ? '❤️ 3rd B.Pharm ❤️' : 'A Secret'}
      </Button>
      {revealed && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="confetti"></div>
          ))}
        </div>
      )}
    </div>
  );
}
