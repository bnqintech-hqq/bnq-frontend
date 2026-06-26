"use client";

import type { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";

function NavbarFallback() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20 bg-white border-b border-slate-200 flex items-center px-6">
      <a href="/" className="text-xl font-black text-slate-900">
        <span className="text-blue-600">BNQ</span>inTECH
      </a>
    </header>
  );
}

function FooterFallback() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-8 text-sm">
      <p>&copy; {new Date().getFullYear()} BNQinTECH. All rights reserved.</p>
    </footer>
  );
}

export default function SafeShell({
  navbar,
  footer,
  children,
}: {
  navbar: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <ErrorBoundary fallback={<NavbarFallback />}>{navbar}</ErrorBoundary>
      {children}
      <ErrorBoundary fallback={<FooterFallback />}>{footer}</ErrorBoundary>
    </>
  );
}
