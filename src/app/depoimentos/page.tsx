import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const depoimentos = [
  { nome: "Paciente A.C.", tratamento: "Bioestimulação Facial", nota: 5, texto: "Minha pele ficou impecável. O resultado superou todas as expectativas. Equipe extremamente profissional." },
  { nome: "Paciente M.R.", tratamento: "Preenchimento Labial", nota: 5, texto: "Quis lábios naturais e ficou perfeito. Não artificial nem exagerado. Recomendo para todas as minhas amigas." },
  { nome: "Paciente L.F.", tratamento: "Toxina Botulínica", nota: 5, texto: "Testa lisinha sem parecer 'congelada'. As pessoas notam que estou bem, mas não percebem o procedimento." },
  { nome: "Paciente R.S.", tratamento: "Fios de PDO", nota: 5, texto: "Com 40 anos, meu rosto precisava de um up. Os fios liftingaram sem necessidade de cirurgia. Incrível!" },
  { nome: "Paciente T.B.", tratamento: "Criolipólise", nota: 5, texto: "Perdi 5 cm na barriga em 2 meses. Não acreditei quando medi. Tecnologia realmente funciona." },
  { nome: "Paciente D.P.", tratamento: "Skinbooster", nota: 5, texto: "Hidratação profunda que transformou minha pele opaca em algo brilhante e saudável." },
  { nome: "Paciente C.H.", tratamento: "Mesoterapia Capilar", nota: 5, texto: "Minha queda de cabelo parou completamente. depois de 3 meses, novos fios nascendo." },
  { nome: "Paciente S.W.", tratamento: "Radiofrequência Corporal", nota: 5, texto: "Celulite melhorou muito. Minha pele está muito mais firme e lisa." },
  { nome: "Paciente J.K.", tratamento: "Peel Químico", nota: 5, texto: "Manchas de sol sumiram após 2 sessões. Pele uniforme pela primeira vez em anos." },
];

export default function DepoimentosPage() {
  return (
    <main>
      <Navbar />
      
      {/* HERO */}
      <section className="bg-bg-primary pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4">DEPOIMENTOS REAIS</p>
            <h1 className="font-display font-bold text-[80px] text-text-primary leading-tight">
              Histórias reais de <br/><span className="text-accent-gold">transformação.</span>
            </h1>
          </div>
          
          <div className="flex justify-center gap-20">
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px]">847+</span>
              <p className="text-text-muted text-sm mt-1">Pacientes</p>
            </div>
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px]">98%</span>
              <p className="text-text-muted text-sm mt-1">Satisfação</p>
            </div>
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px]">4.9★</span>
              <p className="text-text-muted text-sm mt-1">Nota Média</p>
            </div>
            <div className="text-center">
              <span className="font-display italic text-accent-gold text-[48px]">12</span>
              <p className="text-text-muted text-sm mt-1">Anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTO HERO */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-display text-[150px] text-accent-gold leading-none block" style={{ transform: 'scaleX(-1)' }}>"</span>
          </div>
          <div>
            <p className="font-display italic text-[36px] text-bg-blush mb-8">
              Depois de 8 anos me sentindo insegura com minha aparência facial, a Velour me devolveu a vontade de me olhar no espelho todos os dias.
            </p>
            <p className="text-accent-gold font-body font-semibold">Paciente Anônima · Facial Completo</p>
          </div>
        </div>
      </section>

      {/* GRID DEPOIMENTOS */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {depoimentos.map((depo, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[20px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(depo.nota)].map((_, i) => (
                    <span key={i} className="text-accent-gold">★</span>
                  ))}
                </div>
                <p className="font-display italic text-[20px] text-text-primary mb-6">"{depo.texto}"</p>
                <div className="pt-4 border-t border-border-rose">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-bg-blush rounded-full flex items-center justify-center">
                      <span className="text-accent-gold font-body font-semibold text-sm">{depo.nome.charAt(8)}{depo.nome.charAt(9)}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-text-primary">{depo.nome}</p>
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
      <section className="bg-bg-blush py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[52px] text-text-primary text-center mb-16">Depoimentos em Vídeo</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-bg-dark rounded-[24px] h-64 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center">
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
          <div className="grid grid-cols-4 gap-8">
            {[
              { plataforma: "Google", nota: "4.9★", total: "847 avaliações" },
              { plataforma: "Instagram", nota: "4.9★", total: "12.5k seguidores" },
              { plataforma: "Doctoralia", nota: "5.0★", total: "324 avaliações" },
              { plataforma: "Reclame Aqui", nota: "9.8★", total: "0 reclamações" },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[20px] p-8 text-center">
                <h3 className="font-display font-semibold text-[24px] text-text-primary mb-4">{item.plataforma}</h3>
                <span className="text-accent-gold text-4xl font-display italic block mb-2">{item.nota}</span>
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
            Sua história começa com uma consulta
          </h2>
          <p className="text-white/80 text-lg mb-10">Junte-se a centenas de mulheres que transformaram sua confiança na Velour.</p>
          <Link 
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
          >
            Agendar Consulta →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}