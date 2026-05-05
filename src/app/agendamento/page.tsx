import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const faqs = [
  { pergunta: "A avaliação é gratuita?", resposta: "Sim! A primeira avaliação é completamente gratuita. Conversamos sobre seus objetivos e criamos um plano personalizado." },
  { pergunta: "Quanto tempo dura o tratamento?", resposta: "Varia conforme o procedimento. Toxina botulínica dura 4-6 meses, preenchimentos 8-12 meses, e protocolos de pele precisam de sessões recorrentes." },
  { pergunta: "Os resultados são permanentes?", resposta: "Alguns procedimentos oferecem resultados duradouros, outros necessitam de manutenção. Isso será detalhado na sua avaliação." },
  { pergunta: "Vocês aceitam convênio?", resposta: "Trabalhamos com pagamento particular. Alguns procedimentos podem ser parcelados em até 12x sem juros." },
  { pergunta: "Qual o intervalo entre sessões?", resposta: "Depende do tratamento. Bioestimulação a cada 30 dias, toxina botulínica a cada 4-6 meses." },
  { pergunta: "Posso fazer mais de um tratamento?", resposta: "Sim! Muitos protocolos combinam tratamentos. Avaliaremos a melhor sequência para seus objetivos." },
];

export default function AgendamentoPage() {
  return (
    <main>
      <Navbar />

      {/* HERO BOOKING */}
      <section className="bg-bg-primary pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="label text-accent-gold mb-4">AGENDAMENTO</p>
            <h1 className="font-display font-bold text-[80px] text-text-primary leading-tight mb-8">
              Sua transformação <br/><span className="text-accent-gold">começa aqui.</span>
            </h1>
            <div className="space-y-4 mb-10">
              {[
                "Avaliação personalizada gratuita",
                "Protocolos exclusivos criados para você",
                "Equipe altamente qualificada",
                "Ambiente privativo e acolhedor",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-accent-gold text-lg">✓</span>
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#" className="text-accent-gold font-body font-semibold hover:underline transition-colors">
              Ou prefere WhatsApp? →
            </Link>
          </div>

          <div className="bg-white border border-border-rose rounded-[24px] p-12 shadow-[0_20px_60px_rgba(196,149,106,0.08)]">
            <h2 className="font-display font-semibold text-3xl text-text-primary mb-8">Agende Sua Avaliação</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Nome completo</label>
                <input type="text" className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">WhatsApp</label>
                <div className="flex">
                  <span className="px-4 py-3 bg-bg-blush border border-r-0 border-border-rose rounded-l-lg text-text-muted">+55</span>
                  <input type="tel" className="flex-1 px-4 py-3 border border-border-rose rounded-r-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Tratamento de interesse</label>
                <select className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all bg-white">
                  <option>Selecione um tratamento</option>
                  <option>Bioestimulação Facial</option>
                  <option>Preenchimento Labial</option>
                  <option>Toxina Botulínica</option>
                  <option>Fios de PDO</option>
                  <option>Criolipólise</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Como nos encontrou?</label>
                <select className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all bg-white">
                  <option>Selecione</option>
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Indicação</option>
                  <option>Facebook</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Mensagem (opcional)</label>
                <textarea rows={3} className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none" placeholder="Conte-nos mais sobre seus objetivos..." />
              </div>
              <button type="submit" className="w-full bg-accent-gold text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-accent-mocha transition-all duration-300">
                Agendar Minha Avaliação →
              </button>
              <p className="text-text-muted text-sm text-center">🔒 Seus dados estão seguros</p>
            </form>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-bg-blush py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[52px] text-text-primary text-center mb-16">Como Funciona</h2>

          <div className="flex items-center justify-between relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-accent-gold/30" />

            {[
              { num: "01", titulo: "Confirmação", desc: "Confirmação por e-mail e WhatsApp" },
              { num: "02", titulo: "Avaliação", desc: "Análise completa e plano personalizado" },
              { num: "03", titulo: "Protocolo", desc: "Agendamento das sessões" },
              { num: "04", titulo: "Transformação", desc: "Início do seu tratamento" },
            ].map((passo, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-xl text-white">{passo.num}</span>
                </div>
                <h3 className="font-display font-semibold text-2xl text-text-primary">{passo.titulo}</h3>
                <p className="text-text-muted text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCOLHA TRATAMENTO */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[52px] text-text-primary text-center mb-4">
            Ainda não sabe qual escolher?
          </h2>
          <p className="text-text-muted text-center mb-12">Nossa equipe vai ajudar você a encontrar o tratamento ideal.</p>

          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-border-rose rounded-[20px] p-8 text-center hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">Tratamentos Faciais</h3>
              <p className="text-text-muted text-sm mb-6">Bioestimulação, preenchimentos, toxina e mais.</p>
              <Link href="/tratamentos" className="text-accent-gold font-body font-semibold text-sm hover:underline transition-colors">Ver Tratamentos →</Link>
            </div>
            <div className="bg-white border border-border-rose rounded-[20px] p-8 text-center hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">Tratamentos Corporais</h3>
              <p className="text-text-muted text-sm mb-6">Criolipólise, radiofrequência e modelagem.</p>
              <Link href="/tratamentos" className="text-accent-gold font-body font-semibold text-sm hover:underline transition-colors">Ver Tratamentos →</Link>
            </div>
            <div className="bg-white border border-border-rose rounded-[20px] p-8 text-center hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
              <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">Não sei por onde começar</h3>
              <p className="text-text-muted text-sm mb-6">Agende avaliação e deixe-nos ajudar.</p>
              <Link href="/agendamento" className="text-accent-gold font-body font-semibold text-sm hover:underline transition-colors">Agendar →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20">
          <div>
            <p className="label text-accent-gold mb-4">PERGUNTAS FREQUENTES</p>
            <h2 className="font-display font-bold text-[52px] text-bg-blush mb-10">
              Tire suas dúvidas
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group border-b border-[rgba(196,149,106,0.15)] pb-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-body font-semibold text-bg-blush">{faq.pergunta}</h3>
                  <span className="text-accent-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-muted text-sm mt-3">{faq.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECUNDÁRIO */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6">
            Pronta para começar?
          </h2>
          <p className="text-white/80 text-lg mb-10">Sua transformação está a uma consulta de distância.</p>
          <Link
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
          >
            Agendar Agora →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
