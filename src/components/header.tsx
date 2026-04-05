'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  GraduationCap,
  Menu,
  CalendarDays,
  Utensils,
  Camera,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { href: '#agenda', label: 'Agenda', icon: CalendarDays },
  { href: '#menu', label: 'Menu', icon: Utensils },
  { href: '#gallery', label: 'Gallery', icon: Camera },
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
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[320px] bg-card p-0 flex flex-col"
            >
              <div className="flex flex-col items-center p-6 border-b border-border/20 bg-background">
                <Link
                  href="/"
                  className="flex flex-col items-center space-y-2"
                  onClick={handleLinkClick}
                >
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <span className="text-xl font-bold font-headline text-foreground">
                    The Final Prescription
                  </span>
                </Link>
              </div>
              <nav className="flex flex-col flex-1 p-4 mt-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-4 px-4 py-3 text-lg rounded-lg font-headline text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <link.icon className="w-6 h-6" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">
              The Final Prescription
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
