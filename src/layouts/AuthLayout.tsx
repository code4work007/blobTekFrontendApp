import { Outlet, Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { APP_CONFIG } from '@/constants';
import { Layers } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Branding panel (hidden on mobile) */}
      <div className="hidden lg:flex flex-col bg-primary p-10 text-primary-foreground">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Layers className="h-6 w-6" />
          {APP_CONFIG.name}
        </Link>
        <div className="mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg leading-relaxed">
              "Empower your team with a platform built for speed, collaboration, and growth."
            </p>
            <footer className="text-sm opacity-80">— The {APP_CONFIG.name} Team</footer>
          </blockquote>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between p-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg lg:invisible"
          >
            <Layers className="h-5 w-5 text-primary" />
            {APP_CONFIG.name}
          </Link>
          <ThemeToggle />
        </header>

        {/* Centered form */}
        <main className="flex flex-1 items-center justify-center px-6 pb-12">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
