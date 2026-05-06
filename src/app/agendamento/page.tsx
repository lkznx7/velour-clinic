import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const faqs = [
  { pergunta: "A avaliação é gratuita?", resposta: "Sim! A primeira avaliação é completamente gratuita. Conversamos sobre seus objetivos e criamos um plano personalizado." },
  { pergunta: "Quanto tempo dura o tratamento?", resposta: "Varia conforme o procedimento. Toxina botulínica dura 4-6 meses, preenchimentos 8-12 meses." },
  { pergunta: "Os resultados são permanentes?", resposta: "Alguns oferecem resultados duradouros, outros necessitam de manutenção. Será detalhado na sua avaliação." },
  { pergunta: "Vocês aceitam convênio?", resposta: "Trabalhamos com pagamento particular. Alguns procedimentos podem ser parcelados em até 12x sem juros." },
  { pergunta: "Qual o intervalo entre sessões?", resposta: "Depende do tratamento. Bioestimulação a cada 30 dias, toxina a cada 4-6 meses." },
  { pergunta: "Posso fazer mais de um tratamento?", resposta: "Sim! Muitos protocolos combinam tratamentos. Avaliaremos a melhor sequência." },
];

export default function AgendamentoPage() {
  return (
    <main>
      <Navbar />

      {/* HERO BOOKING */}
      <section className="bg-bg-primary pt-40 pb-20 min-h-screen flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <p className="label text-accent-gold mb-4">Agendamento</p>
            <h1 className="font-display text-[80px] text-text-primary leading-[0.95] mb-8">
              Sua transformação<br/><span className="italic text-accent-gold">começa aqui.</span>
            </h1>
            <div className="space-y-3 mb-10">
              {[
                "Avaliação personalizada gratuita",
                "Protocolos exclusivos para você",
                "Equipe altamente qualificada",
                "Ambiente privativo e acolhedor",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-accent-gold">✓</span>
                  <span className="text-text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#" className="text-accent-gold font-body font-medium hover:underline">
              Ou prefere WhatsApp? →
            </Link>
          </div>

          <div className="card-soft pr-4">
            <h2 className="font-display text-2xl text-text-primary mb-8">Agende Sua Avaliação</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-text-muted mb-2">Nome completo</label>
                <input type="text" className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">WhatsApp</label>
                <div className="flex">
                  <span className="px-4 py-3 bg-bg-blush border border-r-0 border-border-rose rounded-l-lg text-text-muted text-sm">+55</span>
                  <input type="tel" className="flex-1 px-4 py-3 border border-border-rose rounded-r-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Tratamento de interesse</label>
                <select className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all bg-white">
                  <option>Selecione um tratamento</option>
                  <option>Bioestimulação Facial</option>
                  <option>Preenchimento Labial</option>
                  <option>Toxina Botulínica</option>
                  <option>Fios de PDO</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Como nos encontrou?</label>
                <select className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all bg-white">
                  <option>Selecione</option>
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Indicação</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Mensagem (opcional)</label>
                <textarea rows={3} className="w-full px-4 py-3 border border-border-rose rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 outline-none transition-all resize-none" placeholder="Conte-nos mais sobre seus objetivos..." />
              </div>
              <button type="submit" className="w-full btn-primary">
                Agendar Minha Avaliação →
              </button>
              <p className="text-text-muted text-xs text-center">🔒 Seus dados estão seguros</p>
            </form>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-bg-blush section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label text-accent-gold mb-4">Passo a passo</p>
            <h2 className="font-display text-5xl text-text-primary">Como Funciona</h2>
          </div>
          <div className="flex justify-between">
            {[
              { num: "01", titulo: "Confirmação", desc: "Por e-mail e WhatsApp" },
              { num: "02", titulo: "Avaliação", desc: "Análise completa" },
              { num: "03", titulo: "Protocolo", desc: "Agendamento das sessões" },
              { num: "04", titulo: "Transformação", desc: "Início do tratamento" },
            ].map((p, i) => (
              <div key={i} className="text-center flex-1 relative">
                {i < 3 && <div className="absolute top-4 left-[60%] right-[-40%] h-px bg-accent-gold/20" />}
                <span className="font-display text-3xl text-accent-gold font-semibold">{p.num}</span>
                <h3 className="font-display text-xl text-text-primary mt-2">{p.titulo}</h3>
                <p className="text-text-muted text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4">Perguntas frequentes</p>
            <h2 className="font-display text-5xl text-bg-blush">Tire suas dúvidas</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-[rgba(196,149,106,0.1)] pb-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-bg-blush/90 text-sm font-medium">{faq.pergunta}</h3>
                  <span className="text-accent-gold/60 group-open:rotate-180 transition-transform text-sm">▼</span>
                </summary>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">{faq.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-4 leading-tight">Pronta para começar?</h2>
          <p className="text-white/80 mb-10">Sua transformação está a uma consulta de distância.</p>
          <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
            Agendar Agora →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
