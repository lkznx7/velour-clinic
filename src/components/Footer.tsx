import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="max-w-[1440px] mx-auto px-8 pt-20 pb-8">
        <div className="grid grid-cols-4 gap-16 mb-16">
          <div className="col-span-1">
            <h3 className="font-display text-4xl italic text-accent-gold font-bold mb-6">Velour</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">Alta medicina estética em São Paulo. Protocolos exclusivos para resultados reais.</p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <span key={social} className="text-text-muted text-sm hover:text-accent-gold cursor-pointer transition-colors">{social}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-6">Tratamentos</h4>
            <ul className="space-y-4">
              {["Bioestimulação Facial", "Preenchimento Labial", "Toxina Botulínica", "Fios de PDO", "Criolipólise"].map((item) => (
                <li key={item}><Link href="/tratamentos" className="text-bg-blush/70 hover:text-accent-gold transition-colors text-sm">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-6">Clínica</h4>
            <ul className="space-y-4">
              {["Sobre Nós", "Resultados", "Depoimentos", "Agendar"].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-bg-blush/70 hover:text-accent-gold transition-colors text-sm">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-accent-gold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-bg-blush/70 text-sm">Rua Augusta, 2547</li>
              <li className="text-bg-blush/70 text-sm">Jardim América, São Paulo</li>
              <li className="text-bg-blush/70 text-sm font-semibold">(11) 99999-9999</li>
              <li className="text-bg-blush/70 text-sm">contato@velour.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(196,149,106,0.1)] pt-8 flex justify-between items-center">
          <p className="text-text-muted/50 text-sm">&copy; 2026 Velour Clinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
