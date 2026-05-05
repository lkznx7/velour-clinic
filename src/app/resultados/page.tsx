import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const casos = [
  { id: 1, categoria: "FACIAL", paciente: "M.S.", tratamento: "Bioestimulação Facial", tempo: "3 meses", nota: 5, texto: "Minha pele nunca ficou tão bonita. O glow é自然的 demais." },
  { id: 2, categoria: "LABIAL", paciente: "A.R.", tratamento: "Preenchimento Labial", tempo: "60 dias", nota: 5, texto: "Exatamente o que eu queria. Natural e harmonioso." },
  { id: 3, categoria: "CORPORAL", paciente: "C.P.", tratamento: "Criolipólise + Radiofrequência", tempo: "4 meses", nota: 5, texto: "Perdi 4 cm na cintura. Não acreditei até medir." },
  { id: 4, categoria: "CAPILAR", paciente: "L.T.", tratamento: "Mesoterapia Capilar", tempo: "90 dias", nota: 5, texto: "Meu cabelo voltou a crescer. Finamente resolvi a queda." },
  { id: 5, categoria: "FACIAL", paciente: "R.B.", tratamento: "Toxina Botulínica", tempo: "30 dias", nota: 5, texto: "Testas completamente lisa sem parecer congelada." },
  { id: 6, categoria: "MINIMAMENTE INVASIVO", paciente: "F.J.", tratamento: "Fios de PDO", tempo: "2 meses", nota: 5, texto: "Olho para o espelho e não acredito no antes/depois." },
  { id: 7, categoria: "FACIAL", paciente: "D.K.", tratamento: "Skinbooster", tempo: "45 dias", nota: 5, texto: "Hidratação profunda que mudou minha pele." },
  { id: 8, categoria: "CORPORAL", paciente: "S.M.", tratamento: "Lipo de Papada", tempo: "60 dias", nota: 5, texto: "Queixo duplo sumiu. Contorno definidas." },
  { id: 9, categoria: "FACIAL", paciente: "T.A.", tratamento: "Peel Químico", tempo: "90 dias", nota: 5, texto: "Manchas sumiram e textura melhorou 100%." },
];

const filtros = ["Todos", "Facial", "Corporal", "Capilar", "-30 dias", "+3 meses"];

export default function ResultadosPage() {
  return (
    <main>
      <Navbar />
      
      {/* HERO */}
      <section className="bg-bg-primary pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="label text-accent-gold mb-4">RESULTADOS REAIS</p>
            <h1 className="font-display font-bold text-[80px] text-text-primary leading-tight">
              Resultados que <br/>você pode ver. <br/><span className="text-accent-gold">E sentir.</span>
            </h1>
            <div className="flex gap-8 mt-10">
              <div className="text-center">
                <span className="font-display italic text-accent-gold text-[40px]">+847</span>
                <p className="text-text-muted text-sm">Transformações</p>
              </div>
              <div className="text-center">
                <span className="font-display italic text-accent-gold text-[40px]">45%</span>
                <p className="text-text-muted text-sm">Conversão</p>
              </div>
              <div className="text-center">
                <span className="font-display italic text-accent-gold text-[40px]">98%</span>
                <p className="text-text-muted text-sm">Satisfação</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 bg-bg-blush rounded-[24px] h-[400px]" />
            <div className="w-px bg-accent-gold mx-2" />
            <div className="w-1/2 bg-accent-gold/20 rounded-[24px] h-[400px]" />
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

      {/* MASONRY GRID */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {casos.map((caso) => (
              <div key={caso.id} className="bg-white border border-border-rose rounded-[20px] p-6 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 bg-bg-blush rounded-[16px] h-40" />
                  <div className="flex-1 bg-accent-gold/20 rounded-[16px] h-40" />
                </div>
                <span className="label text-accent-gold">{caso.categoria}</span>
                <p className="text-text-muted text-xs mt-1">Paciente {caso.paciente}</p>
                <p className="font-display italic text-[20px] text-text-primary mt-3">"{caso.texto}"</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-border-rose">
                  <span className="text-text-muted text-sm">{caso.tempo}</span>
                  <div className="flex gap-1">
                    {[...Array(caso.nota)].map((_, i) => (
                      <span key={i} className="text-accent-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-bg-dark py-12">
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
              <span className="font-display italic text-accent-gold text-[40px]">4.9★</span>
              <p className="text-text-muted text-[13px] mt-1">Nota Média</p>
            </div>
            <div className="w-px h-12 bg-accent-gold/30" />
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[40px]">12</span>
              <p className="text-text-muted text-[13px] mt-1">Anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTO HERO */}
      <section className="bg-bg-blush py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div className="text-right">
            <span className="font-display text-[150px] text-accent-gold leading-none block" style={{ transform: 'scaleX(-1)' }}>"</span>
          </div>
          <div>
            <p className="font-display italic text-[32px] text-text-primary mb-8">
              Depois de 8 anos me sentindo insegura com minha aparência, a Velour me devolveu a vontade de me olhar no espelho. Não é só sobre beleza, é sobre autoconfiança.
            </p>
            <p className="text-accent-gold font-body font-semibold">Paciente anônima · Tratamento Facial Completo</p>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {[
              { plataforma: "Google", nota: "4.9", total: "847 avaliações" },
              { plataforma: "Instagram", nota: "4.9", total: "12.5k seguidores" },
              { plataforma: "Doctoralia", nota: "5.0", total: "324 avaliações" },
              { plataforma: "Reclame Aqui", nota: "9.8", total: "0 reclamações" },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[20px] p-8 text-center">
                <h3 className="font-display font-semibold text-[24px] text-text-primary mb-2">{item.plataforma}</h3>
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="text-accent-gold text-3xl font-display italic">{item.nota}</span>
                  <span className="text-accent-gold">★</span>
                </div>
                <p className="text-text-muted text-sm">{item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6">
            Seu resultado pode ser o próximo.
          </h2>
          <p className="text-white/80 text-lg mb-10">Agende sua avaliação e conquiste a transformação que você merece.</p>
          <Link 
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
          >
            Agendar Avaliação →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}