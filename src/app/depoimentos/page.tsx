import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const depoimentos = [
  { nome: "A.C.", tratamento: "Bioestimulação Facial", texto: "Minha pele ficou impecável. O resultado superou todas as expectativas." },
  { nome: "M.R.", tratamento: "Preenchimento Labial", texto: "Quis lábios naturais e ficou perfeito. Recomendo para todas." },
  { nome: "L.F.", tratamento: "Toxina Botulínica", texto: "Testa lisinha sem parecer congelada. As pessoas notam que estou bem." },
  { nome: "R.S.", tratamento: "Fios de PDO", texto: "Os fios liftingaram sem necessidade de cirurgia. Incrível." },
  { nome: "T.B.", tratamento: "Criolipólise", texto: "Perdi 5 cm na barriga em 2 meses. Tecnologia realmente funciona." },
  { nome: "D.P.", tratamento: "Skinbooster", texto: "Hidratação profunda que transformou minha pele completamente." },
  { nome: "C.H.", tratamento: "Mesoterapia Capilar", texto: "Minha queda de cabelo parou completamente depois de 3 meses." },
  { nome: "S.W.", tratamento: "Radiofrequência", texto: "Celulite melhorou muito. Minha pele está mais firme e lisa." },
  { nome: "J.K.", tratamento: "Peel Químico", texto: "Manchas de sol sumiram após 2 sessões. Pele uniforme." },
];

export default function DepoimentosPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-40 pb-20 min-h-[50vh] flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="label text-accent-gold mb-4">Depoimentos reais</p>
          <h1 className="font-display text-[80px] text-text-primary leading-[0.95] mb-8">
            Histórias de <span className="italic text-accent-gold">transformação.</span>
          </h1>
          <div className="flex justify-center gap-12">
            {[
              { num: "847+", label: "Pacientes" },
              { num: "98%", label: "Satisfação" },
              { num: "4.9★", label: "Nota" },
              { num: "12", label: "Anos" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span className="font-display italic text-accent-gold text-4xl font-semibold">{s.num}</span>
                <p className="text-text-muted text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO DESTAQUE */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <span className="font-display text-accent-gold text-7xl block mb-4 leading-none">"</span>
          <p className="font-display italic text-2xl text-bg-blush mb-6 leading-relaxed">
            Depois de 8 anos me sentindo insegura, a Velour me devolveu a vontade de me olhar no espelho.
          </p>
          <div className="w-8 h-px bg-accent-gold mx-auto mb-4" />
          <p className="text-accent-gold text-sm">Paciente Anônima · Facial Completo</p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {depoimentos.map((d, i) => (
              <div key={i} className="card-soft group hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent-gold text-sm">★</span>
                  ))}
                </div>
                <p className="font-display italic text-lg text-text-primary mb-6 leading-relaxed">"{d.texto}"</p>
                <div className="pt-4 border-t border-border-rose/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-bg-blush rounded-full flex items-center justify-center">
                      <span className="text-accent-gold text-xs font-medium">{d.nome}</span>
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-medium">Paciente {d.nome}</p>
                      <p className="text-text-muted text-xs">{d.tratamento}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="bg-bg-blush section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label text-accent-gold mb-4">Em vídeo</p>
            <h2 className="font-display text-5xl text-text-primary">Depoimentos em Vídeo</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((v, i) => (
              <div key={i} className="bg-bg-dark rounded-2xl h-56 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl ml-0.5">▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-4 leading-tight">Sua história começa com uma consulta</h2>
          <p className="text-white/80 mb-10">Junte-se a centenas de mulheres transformadas.</p>
          <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
            Agendar Consulta →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
