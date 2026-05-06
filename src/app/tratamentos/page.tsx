"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const tratamentos = [
  { id: 1, categoria: "FACIAL", nome: "Bioestimulação Facial", descricao: "Estimulação de colágeno para rejuvenescimento natural.", preco: "R$280" },
  { id: 2, categoria: "LABIAL", nome: "Preenchimento Labial", descricao: "Volume e definição com produtos premium.", preco: "R$350" },
  { id: 3, categoria: "FACIAL", nome: "Toxina Botulínica", descricao: "Rugas suavizadas com resultados naturais.", preco: "R$420" },
  { id: 4, categoria: "FACIAL", nome: "Peel Químico", descricao: "Renovação celular para textura uniforme.", preco: "R$250" },
  { id: 5, categoria: "MINIMAMENTE INVASIVO", nome: "Fios de PDO", descricao: "Lifting não cirúrgico com sustentação imediata.", preco: "R$450" },
  { id: 6, categoria: "FACIAL", nome: "Skinbooster", descricao: "Hidratação profunda para viço e luminosidade.", preco: "R$320" },
  { id: 7, categoria: "CORPORAL", nome: "Lipo de Papada", descricao: "Eliminação de gordura com ultrassom.", preco: "R$380" },
  { id: 8, categoria: "CORPORAL", nome: "Criolipólise", descricao: "Redução de gordura com congelamento controlado.", preco: "R$500" },
  { id: 9, categoria: "CORPORAL", nome: "Radiofrequência", descricao: "Contorno corporal e redução de celulite.", preco: "R$280" },
  { id: 10, categoria: "CAPILAR", nome: "Mesoterapia Capilar", descricao: "Nutrição no couro cabeludo para fortalecimento.", preco: "R$300" },
  { id: 11, categoria: "CAPILAR", nome: "Bioestimulação Capilar", descricao: "Tratamento para queda com fatores de crescimento.", preco: "R$350" },
  { id: 12, categoria: "BEM-ESTAR", nome: "Drenagem Premium", descricao: "Massagem modeladora com técnicas avançadas.", preco: "R$180" },
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
      <section className="bg-bg-dark pt-40 pb-20 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <p className="label text-accent-gold mb-4">Portfólio completo</p>
            <h1 className="font-display text-[80px] text-bg-blush leading-[0.95]">
              Tratamentos que<br/><span className="italic text-accent-gold">transformam.</span>
            </h1>
          </div>
          <div className="pr-4">
            <div className="bg-[#2A1E17] rounded-2xl h-[400px]" />
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white py-6 border-b border-border-rose/50">
        <div className="max-w-[1100px] mx-auto px-6 flex gap-3">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              onClick={() => setFiltroAtivo(filtro)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-colors duration-300 ${
                filtroAtivo === filtro
                  ? "bg-accent-gold text-white"
                  : "bg-bg-blush/50 text-text-primary hover:bg-accent-gold hover:text-white"
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {filtrados.map((t) => (
              <div key={t.id} className="card-soft group hover:translate-y-[-4px] transition-transform duration-300">
                <span className="label text-accent-gold">{t.categoria}</span>
                <h3 className="font-display text-2xl text-text-primary mt-2 mb-3">{t.nome}</h3>
                <p className="text-text-muted text-sm mb-6">{t.descricao}</p>
                <div className="flex justify-between items-center pt-4 border-t border-border-rose/50">
                  <span className="text-accent-gold text-sm font-medium">A partir de {t.preco}</span>
                  <span className="text-text-muted text-sm group-hover:text-accent-gold transition-colors">Saiba mais →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLO DESTAQUE */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <span className="label text-accent-gold mb-4">Mais vendido</span>
            <h2 className="font-display text-5xl text-bg-blush mb-6">Protocolo Gold<br/>Rejuvenescimento</h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              Bioestimulação Facial + Skinbooster + Toxina Botulínica para resultados abrangentes.
            </p>
            <div className="space-y-4 mb-10">
              {["3 sessões com intervalo de 30 dias", "Resultado natural e progressivo", "Manutenção anual recomendada"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-gold" />
                  <span className="text-bg-blush/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/agendamento" className="btn-primary">Agendar Este Protocolo →</Link>
          </div>
          <div className="pr-4">
            <div className="bg-[#2A1E17] rounded-2xl h-[440px]" />
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="bg-bg-blush section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4">Como funciona</p>
            <h2 className="font-display text-5xl text-text-primary">Sua Jornada</h2>
          </div>
          <div className="flex justify-between">
            {[
              { num: "01", titulo: "Avaliação", desc: "Análise completa" },
              { num: "02", titulo: "Protocolo", desc: "Plano personalizado" },
              { num: "03", titulo: "Tratamento", desc: "Sessões especializadas" },
              { num: "04", titulo: "Resultado", desc: "Transformação" },
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

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-4 leading-tight">
            Qual tratamento é feito para você?
          </h2>
          <p className="text-white/80 mb-10">Agende uma avaliação gratuita.</p>
          <div className="flex justify-center gap-4">
            <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
              Agendar Avaliação Gratuita →
            </Link>
            <button className="border border-white text-white rounded-full px-8 py-3 font-body font-medium hover:bg-white/10 transition-colors">
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
