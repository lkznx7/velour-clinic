"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const casos = [
  { id: 1, categoria: "FACIAL", paciente: "M.S.", tratamento: "Bioestimulação Facial", tempo: "3 meses", texto: "Minha pele nunca ficou tão bonita." },
  { id: 2, categoria: "LABIAL", paciente: "A.R.", tratamento: "Preenchimento Labial", tempo: "60 dias", texto: "Natural e harmonioso, exatamente o que queria." },
  { id: 3, categoria: "CORPORAL", paciente: "C.P.", tratamento: "Criolipólise", tempo: "4 meses", texto: "Perdi 4 cm na cintura." },
  { id: 4, categoria: "CAPILAR", paciente: "L.T.", tratamento: "Mesoterapia Capilar", tempo: "90 dias", texto: "Meu cabelo voltou a crescer." },
  { id: 5, categoria: "FACIAL", paciente: "R.B.", tratamento: "Toxina Botulínica", tempo: "30 dias", texto: "Testa lisa sem parecer congelada." },
  { id: 6, categoria: "INVASIVO", paciente: "F.J.", tratamento: "Fios de PDO", tempo: "2 meses", texto: "Lifting sem cirurgia, incrível." },
  { id: 7, categoria: "FACIAL", paciente: "D.K.", tratamento: "Skinbooster", tempo: "45 dias", texto: "Hidratação profunda que mudou minha pele." },
  { id: 8, categoria: "CORPORAL", paciente: "S.M.", tratamento: "Lipo de Papada", tempo: "60 dias", texto: "Queixo duplo sumiu completamente." },
  { id: 9, categoria: "FACIAL", paciente: "T.A.", tratamento: "Peel Químico", tempo: "90 dias", texto: "Manchas sumiram, textura 100% melhor." },
];

const filtros = ["Todos", "Facial", "Corporal", "Capilar"];

export default function ResultadosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-40 pb-20 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="label text-accent-gold mb-4">Resultados reais</p>
            <h1 className="font-display text-[80px] text-text-primary leading-[0.95]">
              Resultados que<br/>você pode <span className="italic text-accent-gold">ver.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-bg-blush rounded-2xl h-[360px]" />
            <div className="w-px bg-accent-gold/20 self-stretch" />
            <div className="flex-1 bg-accent-gold/10 rounded-2xl h-[360px]" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-bg-dark py-12">
        <div className="max-w-[1100px] mx-auto px-6 flex justify-center items-center gap-16">
          {[
            { num: "+847", label: "Transformações" },
            { num: "45%", label: "Conversão" },
            { num: "98%", label: "Satisfação" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-display italic text-accent-gold text-3xl font-semibold">{s.num}</span>
              <p className="text-text-muted text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex gap-3 mb-12">
            {filtros.map((f) => (
              <button
                key={f}
                onClick={() => setFiltroAtivo(f)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                  filtroAtivo === f ? "bg-accent-gold text-white" : "bg-bg-blush/50 text-text-primary hover:bg-accent-gold hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-8">
            {casos.map((c) => (
              <div key={c.id} className="card-soft group hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 bg-bg-blush rounded-xl h-32" />
                  <div className="flex-1 bg-accent-gold/10 rounded-xl h-32" />
                </div>
                <span className="label text-accent-gold">{c.categoria}</span>
                <p className="font-display italic text-lg text-text-primary mt-2 mb-3">"{c.texto}"</p>
                <div className="flex justify-between items-center pt-3 border-t border-border-rose/50">
                  <span className="text-text-muted text-xs">Paciente {c.paciente} · {c.tempo}</span>
                  <span className="text-accent-gold text-sm">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTO */}
      <section className="bg-bg-blush section-pad">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <span className="font-display text-accent-gold text-7xl block mb-4 leading-none">"</span>
          <p className="font-display italic text-2xl text-text-primary mb-6 leading-relaxed">
            Depois de 8 anos me sentindo insegura, a Velour me devolveu a vontade de me olhar no espelho.
          </p>
          <div className="w-8 h-px bg-accent-gold mx-auto mb-4" />
          <p className="text-accent-gold text-sm">Paciente anônima · Facial Completo</p>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label text-accent-gold mb-4">Avaliações</p>
            <h2 className="font-display text-5xl text-text-primary">O que dizem sobre nós</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              { p: "Google", n: "4.9", t: "847 avaliações" },
              { p: "Instagram", n: "4.9", t: "12.5k seguidores" },
              { p: "Doctoralia", n: "5.0", t: "324 avaliações" },
              { p: "Reclame Aqui", n: "9.8", t: "0 reclamações" },
            ].map((item, i) => (
              <div key={i} className="card-soft text-center">
                <h3 className="font-display text-xl text-text-primary mb-2">{item.p}</h3>
                <span className="font-display text-3xl text-accent-gold italic font-semibold">{item.n}</span>
                <span className="text-accent-gold ml-1">★</span>
                <p className="text-text-muted text-xs mt-2">{item.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-4 leading-tight">
            Seu resultado pode ser o próximo.
          </h2>
          <p className="text-white/80 mb-10">Agende sua avaliação.</p>
          <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
            Agendar Avaliação →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
