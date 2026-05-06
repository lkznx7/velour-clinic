"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border-rose/50">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl italic text-accent-gold font-semibold">
          Velour
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/tratamentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-body text-sm font-medium">
            Tratamentos
          </Link>
          <Link href="/resultados" className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-body text-sm font-medium">
            Resultados
          </Link>
          <Link href="/sobre" className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-body text-sm font-medium">
            Sobre
          </Link>
          <Link href="/depoimentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-body text-sm font-medium">
            Depoimentos
          </Link>
        </div>

        <Link
          href="/agendamento"
          className="hidden md:inline-block btn-primary"
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
        <div className="md:hidden bg-bg-primary border-t border-border-rose py-8 px-6 space-y-6">
          {["Tratamentos", "Resultados", "Sobre", "Depoimentos"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="block text-text-primary hover:text-accent-gold font-body text-lg" onClick={() => setMobileOpen(false)}>{item}</Link>
          ))}
          <Link href="/agendamento" className="inline-block btn-primary" onClick={() => setMobileOpen(false)}>Agendar Consulta</Link>
        </div>
      )}
    </nav>
  );
}
