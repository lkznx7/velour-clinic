import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-3xl italic text-accent-gold mb-4">Velour</h3>
            <p className="text-text-muted text-sm">Alta medicina estética em São Paulo. Protocolos exclusivos para resultados reais.</p>
          </div>
          
          <div>
            <h4 className="label text-accent-gold mb-4">Tratamentos</h4>
            <ul className="space-y-3">
              <li><Link href="/tratamentos" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Bioestimulação Facial</Link></li>
              <li><Link href="/tratamentos" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Preenchimento Labial</Link></li>
              <li><Link href="/tratamentos" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Toxina Botulínica</Link></li>
              <li><Link href="/tratamentos" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Fios de PDO</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="label text-accent-gold mb-4">Clínica</h4>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link href="/resultados" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Resultados</Link></li>
              <li><Link href="/depoimentos" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Depoimentos</Link></li>
              <li><Link href="/agendamento" className="text-bg-blush hover:text-accent-gold transition-colors text-sm">Agendar</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="label text-accent-gold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-bg-blush text-sm">Rua Augusta, 2547</li>
              <li className="text-bg-blush text-sm">Jardim América, São Paulo</li>
              <li className="text-bg-blush text-sm">(11) 99999-9999</li>
              <li className="text-bg-blush text-sm">contato@velour.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-rose-200/10 mt-12 pt-8 flex justify-between items-center">
          <p className="text-text-muted text-sm">© 2026 Velour Clinic. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Instagram</span>
            <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Facebook</span>
            <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}