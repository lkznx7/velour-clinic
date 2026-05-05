"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const casos = [
  { id: 1, categoria: "FACIAL", paciente: "M.S.", tratamento: "Bioestimulação Facial", tempo: "3 meses", nota: 5, texto: "Minha pele nunca ficou tão bonita. O glow é natural demais." },
  { id: 2, categoria: "LABIAL", paciente: "A.R.", tratamento: "Preenchimento Labial", tempo: "60 dias", nota: 5, texto: "Exatamente o que eu queria. Natural e harmonioso." },
  { id: 3, categoria: "CORPORAL", paciente: "C.P.", tratamento: "Criolipólise + Radiofrequência", tempo: "4 meses", nota: 5, texto: "Perdi 4 cm na cintura. Não acreditei até medir." },
  { id: 4, categoria: "CAPILAR", paciente: "L.T.", tratamento: "Mesoterapia Capilar", tempo: "90 dias", nota: 5, texto: "Meu cabelo voltou a crescer. Finalmente resolvi a queda." },
  { id: 5, categoria: "FACIAL", paciente: "R.B.", tratamento: "Toxina Botulínica", tempo: "30 dias", nota: 5, texto: "Testa completamente lisa sem parecer congelada." },
  { id: 6, categoria: "MINIMAMENTE INVASIVO", paciente: "F.J.", tratamento: "Fios de PDO", tempo: "2 meses", nota: 5, texto: "Olho para o espelho e não acredito no antes e depois." },
  { id: 7, categoria: "FACIAL", paciente: "D.K.", tratamento: "Skinbooster", tempo: "45 dias", nota: 5, texto: "Hidratação profunda que mudou minha pele." },
  { id: 8, categoria: "CORPORAL", paciente: "S.M.", tratamento: "Lipo de Papada", tempo: "60 dias", nota: 5, texto: "Queixo duplo sumiu. Contorno definido." },
  { id: 9, categoria: "FACIAL", paciente: "T.A.", tratamento: "Peel Químico", tempo: "90 dias", nota: 5, texto: "Manchas sumiram e textura melhorou 100%." },
];

const filtros = ["Todos", "Facial", "Corporal", "Capilar", "-30 dias", "+3 meses"];

export default function ResultadosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center py-20">
          <div>
            <p className="label text-accent-gold mb-6 tracking-widest">RESULTADOS REAIS</p>
            <h1 className="font-display font-bold text-[80px] text-text-primary leading-[1.05]">
              Resultados que <br/>você pode ver. <br/><span className="text-accent-gold">E sentir.</span>
            </h1>
            <div className="flex gap-10 mt-12">
              {[
                { num: "+847", label: "Transformações" },
                { num: "45%", label: "Conversão" },
                { num: "98%", label: "Satisfação" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <span className="font-display italic text-accent-gold text-[48px] font-bold">{stat.num}</span>
                  <p className="text-text-muted text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-gradient-to-br from-bg-blush to-accent-gold/10 rounded-[24px] h-[420px] flex items-end justify-center pb-6 shadow-xl">
              <span className="text-text-muted/60 text-sm font-body font-medium">Antes</span>
            </div>
            <div className="w-px bg-accent-gold/30" />
            <div className="flex-1 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-[24px] h-[420px] flex items-end justify-center pb-6 shadow-xl">
              <span className="text-accent-gold text-sm font-body font-medium">Depois</span>
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

      {/* MASONRY GRID */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-10">
            {casos.map((caso) => (
              <div key={caso.id} className="bg-white border border-border-rose rounded-[24px] p-8 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
                <div className="flex gap-3 mb-8">
                  <div className="flex-1 bg-gradient-to-br from-bg-blush to-bg-blush/50 rounded-[16px] h-40" />
                  <div className="flex-1 bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-[16px] h-40" />
                </div>
                <span className="label text-accent-gold">{caso.categoria}</span>
                <p className="text-text-muted text-xs mt-2">Paciente {caso.paciente} · {caso.tratamento}</p>
                <p className="font-display italic text-xl text-text-primary mt-4 leading-relaxed">"{caso.texto}"</p>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-border-rose">
                  <span className="text-text-muted text-sm font-medium">{caso.tempo}</span>
                  <div className="flex gap-1">
                    {[...Array(caso.nota)].map((_, i) => (
                      <span key={i} className="text-accent-gold text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-bg-dark py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-center items-center gap-24">
            {[
              { num: "+847", label: "Pacientes" },
              { num: "98%", label: "Satisfação" },
              { num: "4.9★", label: "Nota Média" },
              { num: "12", label: "Anos" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="font-display italic text-accent-gold text-[48px] font-bold">{stat.num}</span>
                <p className="text-text-muted text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO HERO */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div className="text-right">
            <span className="font-display text-[160px] text-accent-gold/30 leading-none block">"</span>
          </div>
          <div>
            <p className="font-display italic text-[36px] text-text-primary mb-8 leading-relaxed">
              Depois de 8 anos me sentindo insegura com minha aparência, a Velour me devolveu a vontade de me olhar no espelho. Não é só sobre beleza, é sobre autoconfiança.
            </p>
            <div className="w-12 h-px bg-accent-gold mb-4" />
            <p className="text-accent-gold font-body font-semibold">Paciente anônima · Tratamento Facial Completo</p>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4 tracking-widest">AVALIAÇÕES</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">O que dizem sobre nós</h2>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {[
              { plataforma: "Google", nota: "4.9", total: "847 avaliações" },
              { plataforma: "Instagram", nota: "4.9", total: "12.5k seguidores" },
              { plataforma: "Doctoralia", nota: "5.0", total: "324 avaliações" },
              { plataforma: "Reclame Aqui", nota: "9.8", total: "0 reclamações" },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[24px] p-10 text-center hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
                <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">{item.plataforma}</h3>
                <div className="flex justify-center items-center gap-2 mb-3">
                  <span className="text-accent-gold text-4xl font-display italic font-bold">{item.nota}</span>
                  <span className="text-accent-gold text-2xl">★</span>
                </div>
                <p className="text-text-muted text-sm">{item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent-gold to-accent-mocha py-[140px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6 leading-[1.05]">
            Seu resultado pode ser o próximo.
          </h2>
          <p className="text-white/80 text-lg mb-12">Agende sua avaliação e conquiste a transformação que você merece.</p>
          <Link
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-12 py-5 font-body font-semibold hover:bg-bg-blush transition-all duration-300 text-lg shadow-xl"
          >
            Agendar Avaliação →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
