"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-[rgba(196,149,106,0.2)]">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl italic text-accent-gold">
          Velour
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/tratamentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group font-body text-sm">
            Tratamentos
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/resultados" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group font-body text-sm">
            Resultados
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/sobre" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group font-body text-sm">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/depoimentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group font-body text-sm">
            Depoimentos
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <Link
          href="/agendamento"
          className="hidden md:inline-block bg-accent-gold text-white rounded-full px-7 py-3 font-body font-semibold hover:bg-accent-mocha transition-all duration-300 text-sm"
        >
          Agendar Consulta
        </Link>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-[rgba(196,149,106,0.2)] py-6 px-8 space-y-4">
          <Link href="/tratamentos" className="block text-text-primary hover:text-accent-gold font-body" onClick={() => setMobileOpen(false)}>Tratamentos</Link>
          <Link href="/resultados" className="block text-text-primary hover:text-accent-gold font-body" onClick={() => setMobileOpen(false)}>Resultados</Link>
          <Link href="/sobre" className="block text-text-primary hover:text-accent-gold font-body" onClick={() => setMobileOpen(false)}>Sobre</Link>
          <Link href="/depoimentos" className="block text-text-primary hover:text-accent-gold font-body" onClick={() => setMobileOpen(false)}>Depoimentos</Link>
          <Link href="/agendamento" className="inline-block bg-accent-gold text-white rounded-full px-7 py-3 font-body font-semibold text-sm" onClick={() => setMobileOpen(false)}>Agendar Consulta</Link>
        </div>
      )}
    </nav>
  );
}
