import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const tratamentos = [
  { id: 1, categoria: "FACIAL", nome: "Bioestimulação Facial", descricao: "Estimulação de colágeno com técnica avançada para rejuvenescimento natural e duradouro.", preco: "R$280" },
  { id: 2, categoria: "LABIAL", nome: "Preenchimento Labial", descricao: "Volume e definição com productos premium para lábios naturais e harmoniosos.", preco: "R$350" },
  { id: 3, categoria: "FACIAL", nome: "Toxina Botulínica", descricao: "Rugas de expressão suavizadas com aplicação precisa e resultados naturais.", preco: "R$420" },
  { id: 4, categoria: "FACIAL", nome: "Peel Químico", descricao: "Renovação celular profunda para textura e tom uniforme da pele.", preco: "R$250" },
  { id: 5, categoria: "MINIMAMENTE INVASIVO", nome: "Fios de PDO", descricao: "Lifting não cirúrgico com fios absorvíveis para sustentação imediata.", preco: "R$450" },
  { id: 6, categoria: "FACIAL", nome: "Skinbooster", descricao: "Hidratação profunda com ácido hialurônico para viço e luminosidade.", preco: "R$320" },
  { id: 7, categoria: "CORPORAL", nome: "Lipo de Papada", descricao: "Eliminação de gordura submentoniana com tecnologia de ultrassom.", preco: "R$380" },
  { id: 8, categoria: "CORPORAL", nome: "Criolipólise", descricao: "Redução de gordura localizada com congelamento controlado.", preco: "R$500" },
  { id: 9, categoria: "CORPORAL", nome: "Radiofrequência", descricao: "Contorno corporal com Stimulação de colágeno e redução de celulite.", preco: "R$280" },
  { id: 10, categoria: "CAPILAR", nome: "Mesoterapia Capilar", descricao: "Aplicação de nutrientes diretamente no couro cabeludo para fortalecimento.", preco: "R$300" },
  { id: 11, categoria: "CAPILAR", nome: "Bioestimulação Capilar", descricao: "Tratamento para queda de cabelo com fatores de crescimento.", preco: "R$350" },
  { id: 12, categoria: "BEM-ESTAR", nome: "Drenagem Premium", descricao: "Massagem modeladora com técnicas manuais avançadas para eliminação de toxins.", preco: "R$180" },
];

const filtros = ["Todos", "Facial", "Corporal", "Capilar", "Minimamente Invasivo", "Bem-Estar"];

export default function TratamentosPage() {
  return (
    <main>
      <Navbar />
      
      {/* HERO */}
      <section className="bg-bg-dark pt-32 pb-20 min-h-[70vh]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="label text-accent-gold mb-4">PORTFÓLIO COMPLETO</p>
            <h1 className="font-display font-bold text-[80px] text-bg-blush leading-tight">
              Tratamentos que <br/>transformam.
            </h1>
          </div>
          <div className="relative">
            <div className="bg-[#2A1E17] rounded-[24px] h-[480px] w-full" />
            <div className="absolute bottom-8 left-8 bg-accent-gold rounded-2xl px-6 py-3">
              <span className="text-white font-body font-semibold">12 protocolos exclusivos</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white py-6 border-b border-border-rose">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex gap-4">
            {filtros.map((filtro, index) => (
              <button 
                key={index}
                className={`px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  index === 0 
                    ? "bg-accent-gold text-white" 
                    : "bg-bg-blush text-text-primary hover:bg-accent-gold hover:text-white"
                }`}
              >
                {filtro}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID TRATAMENTOS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {tratamentos.map((tratamento) => (
              <div key={tratamento.id} className="bg-white border border-border-rose rounded-[20px] p-9 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
                <span className="label text-accent-gold">{tratamento.categoria}</span>
                <h3 className="font-display text-[28px] text-text-primary mt-2 mb-3">{tratamento.nome}</h3>
                <p className="text-text-muted text-sm mb-6 line-clamp-2">{tratamento.descricao}</p>
                <div className="pt-4 border-t border-border-rose">
                  <div className="flex justify-between items-center">
                    <span className="text-accent-gold font-body font-semibold">A partir de {tratamento.preco}</span>
                    <span className="text-text-muted text-sm hover:text-accent-gold cursor-pointer">Saiba mais →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLO DESTAQUE */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <span className="label text-accent-gold mb-4">MAIS VENDIDO</span>
            <h2 className="font-display font-bold text-[52px] text-bg-blush mb-6">
              Protocolo Gold <br/>Rejuvenescimento
            </h2>
            <p className="text-text-muted mb-8">
              O protocolo mais procurado combina Bioestimulação Facial + Skinbooster + Toxina Botulínica para resultados abrangentes e naturais.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span className="text-bg-blush">3 sessões com intervalo de 30 dias</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span className="text-bg-blush">Resultado natural e progressivo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span className="text-bg-blush">Manutenção anual recomendada</span>
              </li>
            </ul>
            <Link 
              href="/agendamento"
              className="inline-block bg-accent-gold text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-accent-mocha transition-all duration-300"
            >
              Agendar Este Protocolo →
            </Link>
          </div>
          <div className="bg-[#2A1E17] rounded-[24px] h-[480px]" />
        </div>
      </section>

      {/* JORNADA */}
      <section className="bg-bg-blush py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[52px] text-center text-text-primary mb-16">Sua Jornada</h2>
          
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-accent-gold/30 border-t border-dashed border-accent-gold/30" style={{ transform: 'translateY(-50%)' }} />
            
            {[
              { num: "01", titulo: "Avaliação", desc: "Análise completa" },
              { num: "02", titulo: "Protocolo", desc: "Plano personalizado" },
              { num: "03", titulo: "Tratamento", desc: "Sessões especializadas" },
              { num: "04", titulo: "Resultado", desc: "Transformação" },
            ].map((passo, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-[24px] text-white">{passo.num}</span>
                </div>
                <h3 className="font-display font-semibold text-[24px] text-text-primary">{passo.titulo}</h3>
                <p className="text-text-muted text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6">
            Qual tratamento é feito para você?
          </h2>
          <p className="text-white/80 text-lg mb-10">Agende uma avaliação gratuita e descubra o protocolo ideal para seu objetivos.</p>
          <div className="flex justify-center gap-6">
            <Link 
              href="/agendamento"
              className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
            >
              Agendar Avaliação Gratuita →
            </Link>
            <button className="border border-white text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-white hover:text-text-primary transition-all duration-300">
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}