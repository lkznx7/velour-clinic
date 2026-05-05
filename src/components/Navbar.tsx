"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-[rgba(196,149,106,0.15)]">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-4xl italic text-accent-gold font-bold hover:opacity-80 transition-opacity">
          Velour
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {["Tratamentos", "Resultados", "Sobre", "Depoimentos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group font-body text-sm font-medium">
              {item}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="/agendamento"
          className="hidden md:inline-block bg-accent-gold text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-accent-mocha transition-all duration-300 text-sm shadow-md shadow-accent-gold/20"
        >
          Agendar Consulta
        </Link>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg-primary border-t border-[rgba(196,149,106,0.15)] py-8 px-8 space-y-6">
          {["Tratamentos", "Resultados", "Sobre", "Depoimentos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="block text-text-primary hover:text-accent-gold font-body text-lg" onClick={() => setMobileOpen(false)}>{item}</Link>
          ))}
          <Link href="/agendamento" className="inline-block bg-accent-gold text-white rounded-full px-8 py-3 font-body font-semibold text-sm" onClick={() => setMobileOpen(false)}>Agendar Consulta</Link>
        </div>
      )}
    </nav>
  );
}
