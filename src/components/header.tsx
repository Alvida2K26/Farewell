'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GraduationCap, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { href: '#agenda', label: 'Agenda' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-start gap-4">
        {/* Navigation */}
        <div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-0 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                   <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                     <GraduationCap className="h-6 w-6 text-primary" />
                     <span className="text-lg font-bold font-headline text-foreground">
                        The Final Prescription
                      </span>
                   </Link>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-3xl font-headline hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                 <div className='p-4 mt-auto text-center text-xs text-muted-foreground'>
                  &copy; {new Date().getFullYear()}
                </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">
            The Final Prescription
          </span>
        </Link>
      </div>
    </header>
  );
}
