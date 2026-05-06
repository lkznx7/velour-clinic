import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="max-w-[1100px] mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl italic text-accent-gold font-semibold mb-4">Velour</h3>
            <p className="text-text-muted text-sm leading-relaxed">Alta medicina estética em São Paulo.</p>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-4">Tratamentos</h4>
            <ul className="space-y-3">
              {["Bioestimulação", "Preenchimento", "Toxina Botulínica", "Fios de PDO"].map((item) => (
                <li key={item}><Link href="/tratamentos" className="text-text-muted hover:text-accent-gold transition-colors text-sm">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-4">Clínica</h4>
            <ul className="space-y-3">
              {["Sobre", "Resultados", "Depoimentos", "Agendar"].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-text-muted hover:text-accent-gold transition-colors text-sm">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-text-muted text-sm">Rua Augusta, 2547</li>
              <li className="text-text-muted text-sm">(11) 99999-9999</li>
              <li className="text-text-muted text-sm">contato@velour.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(196,149,106,0.1)] pt-8">
          <p className="text-text-muted/50 text-sm">&copy; 2026 Velour Clinic.</p>
        </div>
      </div>
    </footer>
  );
}
