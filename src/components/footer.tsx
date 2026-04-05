import Link from 'next/link';
import { SecretButton } from './secret-button';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} The Final Prescription. All rights reserved.</p>
            <SecretButton />
            <p>Designed with ❤️ for the class of 2026.</p>
        </div>
      </div>
    </footer>
  );
}
