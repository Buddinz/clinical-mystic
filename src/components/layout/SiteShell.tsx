"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isFrameworks = pathname?.startsWith("/frameworks");

  if (isFrameworks) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="border-b border-soft">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:max-w-[72rem]">
          <Link href="/" className="text-sm font-medium uppercase tracking-[0.18em]">
            The Clinical Mystic
          </Link>
          <div className="hidden items-center gap-6 text-sm sm:flex">
            <Link href="/frameworks" className="transition hover:underline">
              Frameworks
            </Link>
            <Link href="/axioms" className="transition hover:underline">
              Axioms
            </Link>
            <Link href="/essays" className="transition hover:underline">
              Essays
            </Link>
            <Link href="/audio" className="transition hover:underline">
              Audio
            </Link>
            <Link href="/about" className="transition hover:underline">
              About
            </Link>
            <Link href="/contact" className="transition hover:underline">
              Contact
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <footer className="border-t border-soft">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:max-w-[72rem]">
          <span>Private research platform for The Clinical Mystic.</span>
          <span>© 2026 The Clinical Mystic. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
