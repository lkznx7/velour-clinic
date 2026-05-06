import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-40 pb-20 min-h-screen flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <p className="label text-accent-gold mb-8">Alta Medicina Estética · São Paulo</p>
            <h1 className="font-display font-semibold text-[110px] leading-[0.9] text-text-primary mb-8">
              Sua pele<br/>merece o<br/><span className="italic text-accent-gold">extraordinário.</span>
            </h1>
            <p className="text-text-muted text-lg mb-10 max-w-sm leading-relaxed">
              Protocolos exclusivos para quem exige resultados reais.
            </p>
            <div className="flex gap-4">
              <Link href="/agendamento" className="btn-primary">
                Agendar Consulta →
              </Link>
              <Link href="/tratamentos" className="btn-ghost">
                Conhecer Tratamentos
              </Link>
            </div>
          </div>
          <div className="pr-4 relative">
            <div className="bg-bg-blush rounded-2xl h-[500px] w-full" />
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4">
              <p className="font-body text-sm text-text-primary font-medium">4.9 ★ · 847 pacientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-bg-dark py-12">
        <div className="max-w-[1100px] mx-auto px-6 flex justify-center items-center gap-16">
          <div className="text-center">
            <span className="font-display italic text-accent-gold text-4xl font-semibold">+847</span>
            <p className="text-text-muted text-xs mt-1">Pacientes</p>
          </div>
          <div className="w-px h-10 bg-accent-gold/20" />
          <div className="text-center">
            <span className="font-display italic text-accent-gold text-4xl font-semibold">98%</span>
            <p className="text-text-muted text-xs mt-1">Satisfação</p>
          </div>
          <div className="w-px h-10 bg-accent-gold/20" />
          <div className="text-center">
            <span className="font-display italic text-accent-gold text-4xl font-semibold">12</span>
            <p className="text-text-muted text-xs mt-1">Anos</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4">Por que nos escolher</p>
            <h2 className="font-display text-5xl text-text-primary">O que nos diferencia</h2>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {[
              { title: "Carregamento &lt;1s", desc: "Sites lentos afastam 53% dos visitantes. Garantimos performance instantânea." },
              { title: "Design editorial", desc: "Primeiras impressões determinam conversão. Aparência que gera confiança." },
              { title: "CTAs magnéticos", desc: "Botões desenhados com psicologia de conversão, não com genéricos." },
            ].map((item, idx) => (
              <div key={idx} className="card-soft hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-px h-8 bg-accent-gold mb-6" />
                <h3 className="font-display text-2xl text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <div className="w-px h-16 bg-accent-gold mb-6" />
            <p className="label text-accent-gold mb-4">Nossa solução</p>
            <h2 className="font-display text-5xl text-bg-blush leading-tight">
              Uma presença digital<br/>que seduz e converte.
            </h2>
          </div>
          <div className="space-y-8 pr-4">
            {[
              "Performance extrema, nenhuma perda de visitantes",
              "Jornada otimizada para conversão em cada clique",
              "Calls-to-action com psicologia de conversão",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                <span className="text-bg-blush/80 font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRATAMENTOS PREVIEW */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="label text-accent-gold mb-4">Protocolos</p>
              <h2 className="font-display text-5xl text-text-primary">Tratamentos exclusivos</h2>
            </div>
            <Link href="/tratamentos" className="text-accent-gold hover:text-accent-mocha transition-colors text-sm">
              Ver Todos →
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { tag: "Facial", nome: "Bioestimulação Facial", desc: "Estimule colágeno e recupere a firmeza natural.", preco: "R$280" },
              { tag: "Labial", nome: "Preenchimento Labial", desc: "Volume natural com produtos premium.", preco: "R$350" },
              { tag: "Minimamente Invasivo", nome: "Fios de PDO", desc: "Lifting não cirúrgico com sustentação imediata.", preco: "R$450" },
            ].map((item, idx) => (
              <div key={idx} className="card-soft group hover:translate-y-[-4px] transition-transform duration-300">
                <span className="label text-accent-gold">{item.tag}</span>
                <h3 className="font-display text-2xl text-text-primary mt-2 mb-3">{item.nome}</h3>
                <p className="text-text-muted text-sm mb-6">{item.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t border-border-rose/50">
                  <span className="text-accent-gold text-sm font-medium">A partir de {item.preco}</span>
                  <span className="text-text-muted text-sm group-hover:text-accent-gold transition-colors">Saiba mais →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <span className="font-display font-semibold text-[140px] text-text-primary leading-none">+45%</span>
          <p className="text-text-muted text-lg mt-6 mb-4">de conversão em pacientes particulares nos primeiros 60 dias.</p>
          <p className="font-display italic text-2xl text-text-muted">"A clínica triplicou agendamentos premium."</p>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <span className="font-display text-accent-gold text-7xl block mb-4 leading-none">"</span>
          <p className="font-display italic text-2xl text-bg-blush mb-6 leading-relaxed">
            Em 30 dias obtivemos mais agendamentos do que no trimestre anterior inteiro.
          </p>
          <div className="w-8 h-px bg-accent-gold mx-auto mb-4" />
          <p className="text-accent-gold text-sm font-body">Dra. Marina Souza · Clínica Estética SP</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-8 leading-tight">
            Sua clínica merece<br/>pacientes à sua altura.
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
              Quero Minha Landing Page →
            </Link>
            <Link href="/resultados" className="border border-white text-white rounded-full px-8 py-3 font-body font-medium hover:bg-white/10 transition-colors">
              Ver Outros Cases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
