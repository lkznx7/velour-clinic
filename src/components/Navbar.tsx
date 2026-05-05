import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-rose-200/20">
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl italic text-accent-gold">
          Velour
        </Link>
        
        <div className="flex items-center gap-10">
          <Link href="/tratamentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group">
            Tratamentos
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/resultados" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group">
            Resultados
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/sobre" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/depoimentos" className="text-text-primary hover:text-accent-gold transition-colors duration-300 relative group">
            Depoimentos
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <Link 
          href="/agendamento"
          className="bg-accent-gold text-white rounded-full px-7 py-3 font-body font-semibold hover:bg-accent-mocha transition-all duration-300"
        >
          Agendar Consulta
        </Link>
      </div>
    </nav>
  );
}