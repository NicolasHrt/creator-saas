'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Creator SaaS</span>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="default" size="sm">
            Démarrer
          </Button>
        </div>
      </div>
    </nav>
  );
}
