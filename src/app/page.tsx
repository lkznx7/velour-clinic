import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-32 min-h-screen flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-[55%_45%] gap-16 items-center py-20">
          <div>
            <p className="label text-accent-gold mb-8 tracking-widest">ALTA MEDICINA ESTÉTICA · SÃO PAULO</p>
            <h1 className="font-display font-extrabold text-[80px] lg:text-[110px] leading-[0.9] text-text-primary mb-8">
              Sua pele <br/>merece o <br/><span className="text-accent-gold">extraordinário.</span>
            </h1>
            <p className="text-text-muted text-lg mb-12 max-w-lg leading-relaxed">
              Protocolos exclusivos para quem exige resultados reais. Alta tecnologia em mãos expertas.
            </p>
            <div className="flex gap-6">
              <Link
                href="/agendamento"
                className="bg-accent-gold text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-accent-mocha transition-all duration-300 shadow-lg shadow-accent-gold/20"
              >
                Agendar Consulta →
              </Link>
              <Link
                href="/tratamentos"
                className="border border-text-primary text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-text-primary hover:text-white transition-all duration-300"
              >
                Conhecer Tratamentos
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-bg-blush to-accent-gold/20 rounded-[32px] h-[560px] w-full shadow-2xl shadow-accent-gold/10" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border-rose">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-gold to-bg-blush border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="font-body font-bold text-text-primary text-sm">4.9 ★★★★★</p>
                  <p className="text-text-muted text-xs">847 pacientes transformadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-bg-dark py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-center items-center gap-24">
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px] font-bold">+847</span>
              <p className="text-text-muted text-sm mt-2 font-body">Pacientes Transformadas</p>
            </div>
            <div className="w-px h-16 bg-accent-gold/20" />
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px] font-bold">98%</span>
              <p className="text-text-muted text-sm mt-2 font-body">Satisfação</p>
            </div>
            <div className="w-px h-16 bg-accent-gold/20" />
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px] font-bold">12</span>
              <p className="text-text-muted text-sm mt-2 font-body">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-bg-primary py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4">POR QUE NOS ESCOLHER</p>
            <h2 className="font-display font-bold text-[56px] text-text-primary">
              O que nos diferencia
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-accent-gold text-2xl">⚡</span>
              </div>
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[28px] text-text-primary mb-4">Lentidão digital</h3>
                <p className="text-text-muted text-sm leading-relaxed">Sites lentos afastam 53% dos visitantes. Nossa tecnologia garante carregamento em menos de 1 segundo.</p>
              </div>
            </div>
            <div className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-accent-gold text-2xl">✦</span>
              </div>
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[28px] text-text-primary mb-4">Design amador</h3>
                <p className="text-text-muted text-sm leading-relaxed">Primeiras impressões determinam conversão. Aparência profissional gera confiança imediata.</p>
              </div>
            </div>
            <div className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-accent-gold text-2xl">◈</span>
              </div>
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[28px] text-text-primary mb-4">CTAs genéricos</h3>
                <p className="text-text-muted text-sm leading-relaxed">Botões que não convertem são prejuízo. Nossos calls-to-action são magneticamente persuasivos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-bg-dark py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-[45%_55%] gap-20 items-center">
          <div>
            <div className="w-[1px] h-20 bg-gradient-to-b from-accent-gold to-transparent mb-8" />
            <p className="label text-accent-gold mb-6 tracking-widest">NOSSA SOLUÇÃO</p>
            <h2 className="font-display font-bold text-[52px] text-bg-blush leading-[1.1]">
              Uma presença digital <br/>que seduz, convence <br/>e converte.
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { title: "Carregamento <1s", desc: "Performance extrema para nenhuma perda de visitantes." },
              { title: "UX sofisticada", desc: "Jornada do usuário otimizada para converter em cada clique." },
              { title: "CTAs magnéticos", desc: "Botões desenhados com psicologia de conversão." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-[#2A1E17] rounded-2xl border border-[rgba(196,149,106,0.1)] hover:border-accent-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <span className="text-bg-blush font-body font-semibold text-lg">{item.title}</span>
                  <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRATAMENTOS PREVIEW */}
      <section className="bg-bg-primary py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="label text-accent-gold mb-4 tracking-widest">NOSSOS PROTOCOLOS</p>
              <h2 className="font-display font-bold text-[52px] text-text-primary">Tratamentos exclusivos</h2>
            </div>
            <Link href="/tratamentos" className="text-accent-gold hover:text-accent-mocha transition-colors text-sm font-semibold border-b border-accent-gold pb-1">
              Ver Todos →
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {[
              { tag: "FACIAL", nome: "Bioestimulação Facial", desc: "Estimule colágeno e recupere a firmeza natural da pele com técnicas avançadas.", preco: "R$280" },
              { tag: "LABIAL", nome: "Preenchimento Labial", desc: "Volume natural e harmonioso com produtos premium e técnica precisa.", preco: "R$350" },
              { tag: "MINIMAMENTE INVASIVO", nome: "Fios de PDO", desc: "Lifting não cirúrgico com fios absorvíveis para sustentação imediata.", preco: "R$450" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300 group">
                <span className="label text-accent-gold">{item.tag}</span>
                <h3 className="font-display text-[32px] text-text-primary mt-3 mb-4">{item.nome}</h3>
                <p className="text-text-muted text-sm mb-8 leading-relaxed">{item.desc}</p>
                <div className="flex justify-between items-center pt-6 border-t border-border-rose">
                  <span className="text-accent-gold font-body font-semibold text-lg">A partir de {item.preco}</span>
                  <span className="text-text-muted text-sm group-hover:text-accent-gold cursor-pointer transition-colors font-semibold">Saiba mais →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="bg-bg-blush py-[140px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <span className="font-display font-black text-[180px] text-text-primary leading-none block">+45%</span>
          <p className="text-text-muted text-2xl mt-8 mb-10 font-body">de conversão em pacientes particulares nos primeiros 60 dias.</p>
          <p className="font-display italic text-[32px] text-text-muted max-w-2xl mx-auto">"A clínica triplicou agendamentos premium em 90 dias."</p>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-bg-dark py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-display text-[120px] text-accent-gold leading-none block mb-4">"</span>
            <p className="font-display italic text-[32px] text-bg-blush mb-10 leading-relaxed">
              Em 30 dias obtivemos mais agendamentos do que no trimestre anterior inteiro. A transformação digital excedeu todas as expectativas da equipe.
            </p>
            <div className="w-12 h-px bg-accent-gold mx-auto mb-6" />
            <p className="text-accent-gold font-body font-semibold text-lg">Dra. Marina Souza · Clínica Estética SP</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-accent-gold to-accent-mocha py-[140px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-10 leading-[1.05]">
            Sua clínica merece <br/>pacientes à sua altura.
          </h2>
          <div className="flex justify-center gap-6">
            <Link
              href="/agendamento"
              className="bg-white text-text-primary rounded-full px-12 py-5 font-body font-semibold hover:bg-bg-blush transition-all duration-300 text-lg shadow-xl"
            >
              Quero Minha Landing Page →
            </Link>
            <Link
              href="/resultados"
              className="border-2 border-white text-white rounded-full px-12 py-5 font-body font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Ver Outros Cases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
