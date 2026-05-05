import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const depoimentos = [
  { nome: "A.C.", tratamento: "Bioestimulação Facial", nota: 5, texto: "Minha pele ficou impecável. O resultado superou todas as expectativas. Equipe extremamente profissional." },
  { nome: "M.R.", tratamento: "Preenchimento Labial", nota: 5, texto: "Quis lábios naturais e ficou perfeito. Não artificial nem exagerado. Recomendo para todas as minhas amigas." },
  { nome: "L.F.", tratamento: "Toxina Botulínica", nota: 5, texto: "Testa lisinha sem parecer 'congelada'. As pessoas notam que estou bem, mas não percebem o procedimento." },
  { nome: "R.S.", tratamento: "Fios de PDO", nota: 5, texto: "Com 40 anos, meu rosto precisava de um up. Os fios liftingaram sem necessidade de cirurgia. Incrível!" },
  { nome: "T.B.", tratamento: "Criolipólise", nota: 5, texto: "Perdi 5 cm na barriga em 2 meses. Não acreditei quando medi. Tecnologia realmente funciona." },
  { nome: "D.P.", tratamento: "Skinbooster", nota: 5, texto: "Hidratação profunda que transformou minha pele opaca em algo brilhante e saudável." },
  { nome: "C.H.", tratamento: "Mesoterapia Capilar", nota: 5, texto: "Minha queda de cabelo parou completamente. Depois de 3 meses, novos fios nascendo." },
  { nome: "S.W.", tratamento: "Radiofrequência Corporal", nota: 5, texto: "Celulite melhorou muito. Minha pele está muito mais firme e lisa." },
  { nome: "J.K.", tratamento: "Peel Químico", nota: 5, texto: "Manchas de sol sumiram após 2 sessões. Pele uniforme pela primeira vez em anos." },
];

export default function DepoimentosPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-primary pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-6 tracking-widest">DEPOIMENTOS REAIS</p>
            <h1 className="font-display font-bold text-[80px] text-text-primary leading-[1.05]">
              Histórias reais de <br/><span className="text-accent-gold">transformação.</span>
            </h1>
          </div>

          <div className="flex justify-center gap-24">
            {[
              { num: "847+", label: "Pacientes" },
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
      <section className="bg-bg-dark py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-display text-[160px] text-accent-gold/30 leading-none block">"</span>
          </div>
          <div>
            <p className="font-display italic text-[36px] text-bg-blush mb-8 leading-relaxed">
              Depois de 8 anos me sentindo insegura com minha aparência facial, a Velour me devolveu a vontade de me olhar no espelho todos os dias.
            </p>
            <div className="w-12 h-px bg-accent-gold mb-4" />
            <p className="text-accent-gold font-body font-semibold">Paciente Anônima · Facial Completo</p>
          </div>
        </div>
      </section>

      {/* GRID DEPOIMENTOS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-10">
            {depoimentos.map((depo, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[24px] p-10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(depo.nota)].map((_, i) => (
                    <span key={i} className="text-accent-gold text-lg">★</span>
                  ))}
                </div>
                <p className="font-display italic text-xl text-text-primary mb-8 leading-relaxed">"{depo.texto}"</p>
                <div className="pt-6 border-t border-border-rose">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-bg-blush to-accent-gold/10 rounded-full flex items-center justify-center">
                      <span className="text-accent-gold font-body font-semibold text-sm">{depo.nome}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-text-primary">Paciente {depo.nome}</p>
                      <p className="text-text-muted text-xs">{depo.tratamento}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4 tracking-widest">EM VÍDEO</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">Depoimentos em Vídeo</h2>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-bg-dark rounded-[24px] h-72 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shadow-xl group">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl ml-1">▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4 tracking-widest">AVALIAÇÕES</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">Presença nas plataformas</h2>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {[
              { plataforma: "Google", nota: "4.9★", total: "847 avaliações" },
              { plataforma: "Instagram", nota: "4.9★", total: "12.5k seguidores" },
              { plataforma: "Doctoralia", nota: "5.0★", total: "324 avaliações" },
              { plataforma: "Reclame Aqui", nota: "9.8★", total: "0 reclamações" },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[24px] p-10 text-center hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
                <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">{item.plataforma}</h3>
                <span className="text-accent-gold text-4xl font-display italic font-bold block mb-2">{item.nota}</span>
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
            Sua história começa com uma consulta
          </h2>
          <p className="text-white/80 text-lg mb-12">Junte-se a centenas de mulheres que transformaram sua confiança na Velour.</p>
          <Link
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-12 py-5 font-body font-semibold hover:bg-bg-blush transition-all duration-300 text-lg shadow-xl"
          >
            Agendar Consulta →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
