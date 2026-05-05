import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* HERO */}
      <section className="bg-bg-primary pt-32 pb-20 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="label text-accent-gold mb-6">ALTA MEDICINA ESTÉTICA · SÃO PAULO</p>
            <h1 className="font-display font-extrabold text-[96px] leading-[0.95] text-text-primary mb-6">
              Sua pele <br/>merece o <br/><span className="text-accent-gold">extraordinário.</span>
            </h1>
            <p className="text-text-muted text-lg mb-10 max-w-lg">
              Protocolos exclusivos para quem exige resultados reais. Alta tecnologia mãos expertas.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/agendamento"
                className="bg-accent-gold text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-accent-mocha transition-all duration-300"
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
            <div className="bg-bg-blush rounded-[24px] h-[520px] w-full" />
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="font-body font-semibold">4.9 · 847 pacientes transformadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-bg-dark py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-center items-center gap-20">
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[40px]">+847</span>
              <p className="text-text-muted text-[13px] mt-1">Pacientes</p>
            </div>
            <div className="w-px h-12 bg-accent-gold/30" />
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[40px]">98%</span>
              <p className="text-text-muted text-[13px] mt-1">Satisfação</p>
            </div>
            <div className="w-px h-12 bg-accent-gold/30" />
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[40px]">12</span>
              <p className="text-text-muted text-[13px] mt-1">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[56px] text-center text-text-primary mb-16">
            O que nos diferencia
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white border border-border-rose rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[24px] text-text-primary mb-3">Lentidão digital</h3>
                <p className="text-text-muted text-sm">Sites lentos afastam 53% dos visitantes. Nossa tecnologia garante carregamento em menos de 1 segundo.</p>
              </div>
            </div>
            <div className="bg-white border border-border-rose rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[24px] text-text-primary mb-3">Design amador</h3>
                <p className="text-text-muted text-sm">Primeiras impressões determinam conversão. Aparência profissional gera confiança imediata.</p>
              </div>
            </div>
            <div className="bg-white border border-border-rose rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <div className="border-l-[3px] border-accent-gold pl-6">
                <h3 className="font-display font-semibold text-[24px] text-text-primary mb-3">CTAs genéricos</h3>
                <p className="text-text-muted text-sm">Botões que não convertem são prejuízo. Nossos calls-to-action são magneticamente persuasivos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-[1px] h-16 bg-accent-gold mb-6" />
            <p className="label text-accent-gold mb-4">NOSSA SOLUÇÃO</p>
            <h2 className="font-display font-bold text-[52px] text-bg-blush leading-tight">
              Uma presença digital <br/>que seduz, convence <br/>e converte.
            </h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
              <div>
                <span className="text-bg-blush font-body font-semibold">Carregamento &lt;1s</span>
                <p className="text-text-muted text-sm mt-1">Performance extrema para nenhuma perda de visitantes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
              <div>
                <span className="text-bg-blush font-body font-semibold">UX sofisticada</span>
                <p className="text-text-muted text-sm mt-1">Jornada do usuário otimizada para converter em cada clique.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
              <div>
                <span className="text-bg-blush font-body font-semibold">CTAs magnéticos</span>
                <p className="text-text-muted text-sm mt-1">Botões desenhados com psicologia de conversão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRATAMENTOS PREVIEW */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display font-bold text-[52px] text-text-primary">Nossos Protocolos</h2>
            <Link href="/tratamentos" className="text-accent-gold hover:text-accent-mocha transition-colors text-sm font-semibold">
              Ver Todos →
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white border border-border-rose rounded-[20px] p-9 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <span className="label text-accent-gold">FACIAL</span>
              <h3 className="font-display text-[28px] text-text-primary mt-2 mb-4">Bioestimulação Facial</h3>
              <p className="text-text-muted text-sm mb-6">Estimule colágeno e recupere a firmeza natural da pele com técnicas avançadas.</p>
              <div className="flex justify-between items-center pt-4 border-t border-border-rose">
                <span className="text-accent-gold font-body font-semibold">A partir de R$280</span>
                <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Saiba mais →</span>
              </div>
            </div>
            
            <div className="bg-white border border-border-rose rounded-[20px] p-9 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <span className="label text-accent-gold">LABIAL</span>
              <h3 className="font-display text-[28px] text-text-primary mt-2 mb-4">Preenchimento Labial</h3>
              <p className="text-text-muted text-sm mb-6">Volume natural e harmonioso com produtos premium e técnica precisa.</p>
              <div className="flex justify-between items-center pt-4 border-t border-border-rose">
                <span className="text-accent-gold font-body font-semibold">A partir de R$350</span>
                <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Saiba mais →</span>
              </div>
            </div>
            
            <div className="bg-white border border-border-rose rounded-[20px] p-9 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <span className="label text-accent-gold">MINIMAMENTE INVASIVO</span>
              <h3 className="font-display text-[28px] text-text-primary mt-2 mb-4">Fios de PDO</h3>
              <p className="text-text-muted text-sm mb-6">Lifting não cirúrgico com fios absorvíveis para sustentação imediata.</p>
              <div className="flex justify-between items-center pt-4 border-t border-border-rose">
                <span className="text-accent-gold font-body font-semibold">A partir de R$450</span>
                <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Saiba mais →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <span className="font-display font-black text-[160px] text-text-primary leading-none">+45%</span>
          <p className="text-text-muted text-xl mt-6 mb-8">de conversão em pacientes particulares nos primeiros 60 dias.</p>
          <p className="font-display italic text-[28px] text-text-muted">"A clínica triplicou agendamentos premium em 90 dias."</p>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-display text-[120px] text-accent-gold leading-none block">"</span>
            <p className="font-display italic text-[28px] text-bg-blush mb-8">
              Em 30 dias obtivemos mais agendamentos do que no trimestre anterior inteiro. A transformação digital excedeu todas as expectativas da equipe.
            </p>
            <p className="text-accent-gold font-body font-semibold">Dra. Marina Souza · Clínica Estética SP</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-8">
            Sua clínica merece <br/>pacientes à sua altura.
          </h2>
          <div className="flex justify-center gap-6">
            <Link 
              href="/agendamento"
              className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
            >
              Quero Minha Landing Page →
            </Link>
            <Link 
              href="/resultados"
              className="border border-white text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-white hover:text-text-primary transition-all duration-300"
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