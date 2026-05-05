"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const tratamentos = [
  { id: 1, categoria: "FACIAL", nome: "Bioestimulação Facial", descricao: "Estimulação de colágeno com técnica avançada para rejuvenescimento natural e duradouro.", preco: "R$280" },
  { id: 2, categoria: "LABIAL", nome: "Preenchimento Labial", descricao: "Volume e definição com produtos premium para lábios naturais e harmoniosos.", preco: "R$350" },
  { id: 3, categoria: "FACIAL", nome: "Toxina Botulínica", descricao: "Rugas de expressão suavizadas com aplicação precisa e resultados naturais.", preco: "R$420" },
  { id: 4, categoria: "FACIAL", nome: "Peel Químico", descricao: "Renovação celular profunda para textura e tom uniforme da pele.", preco: "R$250" },
  { id: 5, categoria: "MINIMAMENTE INVASIVO", nome: "Fios de PDO", descricao: "Lifting não cirúrgico com fios absorvíveis para sustentação imediata.", preco: "R$450" },
  { id: 6, categoria: "FACIAL", nome: "Skinbooster", descricao: "Hidratação profunda com ácido hialurônico para viço e luminosidade.", preco: "R$320" },
  { id: 7, categoria: "CORPORAL", nome: "Lipo de Papada", descricao: "Eliminação de gordura submentoniana com tecnologia de ultrassom.", preco: "R$380" },
  { id: 8, categoria: "CORPORAL", nome: "Criolipólise", descricao: "Redução de gordura localizada com congelamento controlado.", preco: "R$500" },
  { id: 9, categoria: "CORPORAL", nome: "Radiofrequência", descricao: "Contorno corporal com estimulação de colágeno e redução de celulite.", preco: "R$280" },
  { id: 10, categoria: "CAPILAR", nome: "Mesoterapia Capilar", descricao: "Aplicação de nutrientes diretamente no couro cabeludo para fortalecimento.", preco: "R$300" },
  { id: 11, categoria: "CAPILAR", nome: "Bioestimulação Capilar", descricao: "Tratamento para queda de cabelo com fatores de crescimento.", preco: "R$350" },
  { id: 12, categoria: "BEM-ESTAR", nome: "Drenagem Premium", descricao: "Massagem modeladora com técnicas manuais avançadas para eliminação de toxinas.", preco: "R$180" },
];

const filtros = ["Todos", "Facial", "Corporal", "Capilar", "Minimamente Invasivo", "Bem-Estar"];

export default function TratamentosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const filtrados = filtroAtivo === "Todos"
    ? tratamentos
    : tratamentos.filter(t => t.categoria.toUpperCase() === filtroAtivo.toUpperCase());

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-dark pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center py-20">
          <div>
            <p className="label text-accent-gold mb-6 tracking-widest">PORTFÓLIO COMPLETO</p>
            <h1 className="font-display font-bold text-[80px] text-bg-blush leading-[1.05]">
              Tratamentos que <br/><span className="text-accent-gold">transformam.</span>
            </h1>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2A1E17] to-accent-gold/10 rounded-[32px] h-[480px] w-full shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-accent-gold rounded-2xl px-8 py-4 shadow-xl">
              <span className="text-white font-body font-semibold">12 protocolos exclusivos</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white py-8 border-b border-border-rose sticky top-20 z-40">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex gap-3">
            {filtros.map((filtro) => (
              <button
                key={filtro}
                onClick={() => setFiltroAtivo(filtro)}
                className={`px-6 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  filtroAtivo === filtro
                    ? "bg-accent-gold text-white shadow-md shadow-accent-gold/20"
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
          <div className="grid grid-cols-3 gap-10">
            {filtrados.map((tratamento) => (
              <div key={tratamento.id} className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300 group">
                <span className="label text-accent-gold">{tratamento.categoria}</span>
                <h3 className="font-display text-[28px] text-text-primary mt-3 mb-4">{tratamento.nome}</h3>
                <p className="text-text-muted text-sm mb-8 leading-relaxed line-clamp-2">{tratamento.descricao}</p>
                <div className="pt-6 border-t border-border-rose">
                  <div className="flex justify-between items-center">
                    <span className="text-accent-gold font-body font-semibold text-lg">A partir de {tratamento.preco}</span>
                    <span className="text-text-muted text-sm group-hover:text-accent-gold cursor-pointer transition-colors font-semibold">Saiba mais →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLO DESTAQUE */}
      <section className="bg-bg-dark py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <span className="label text-accent-gold mb-6 tracking-widest">MAIS VENDIDO</span>
            <h2 className="font-display font-bold text-[52px] text-bg-blush mb-6 leading-[1.1]">
              Protocolo Gold <br/>Rejuvenescimento
            </h2>
            <p className="text-text-muted mb-10 text-lg leading-relaxed">
              O protocolo mais procurado combina Bioestimulação Facial + Skinbooster + Toxina Botulínica para resultados abrangentes e naturais.
            </p>
            <ul className="space-y-6 mb-12">
              {["3 sessões com intervalo de 30 dias", "Resultado natural e progressivo", "Manutenção anual recomendada"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-gold flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-bg-blush font-body">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/agendamento"
              className="inline-block bg-accent-gold text-white rounded-full px-10 py-4 font-body font-semibold hover:bg-accent-mocha transition-all duration-300 shadow-lg shadow-accent-gold/20"
            >
              Agendar Este Protocolo →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-[#2A1E17] to-accent-gold/10 rounded-[32px] h-[520px] shadow-2xl" />
        </div>
      </section>

      {/* JORNADA */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4 tracking-widest">COMO FUNCIONA</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">Sua Jornada</h2>
          </div>

          <div className="flex items-start justify-between relative">
            <div className="absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-accent-gold/20 via-accent-gold to-accent-gold/20" />

            {[
              { num: "01", titulo: "Avaliação", desc: "Análise completa da pele" },
              { num: "02", titulo: "Protocolo", desc: "Plano personalizado" },
              { num: "03", titulo: "Tratamento", desc: "Sessões especializadas" },
              { num: "04", titulo: "Resultado", desc: "Transformação visível" },
            ].map((passo, index) => (
              <div key={index} className="relative z-10 text-center flex-1">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-accent-gold">
                  <span className="font-display font-bold text-xl text-accent-gold">{passo.num}</span>
                </div>
                <h3 className="font-display font-semibold text-2xl text-text-primary mb-2">{passo.titulo}</h3>
                <p className="text-text-muted text-sm">{passo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent-gold to-accent-mocha py-[140px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6 leading-[1.05]">
            Qual tratamento é feito para você?
          </h2>
          <p className="text-white/80 text-lg mb-12">Agende uma avaliação gratuita e descubra o protocolo ideal para seus objetivos.</p>
          <div className="flex justify-center gap-6">
            <Link
              href="/agendamento"
              className="bg-white text-text-primary rounded-full px-12 py-5 font-body font-semibold hover:bg-bg-blush transition-all duration-300 text-lg shadow-xl"
            >
              Agendar Avaliação Gratuita →
            </Link>
            <button className="border-2 border-white text-white rounded-full px-12 py-5 font-body font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
