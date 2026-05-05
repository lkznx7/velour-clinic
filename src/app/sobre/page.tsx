import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const equipe = [
  { nome: "Dra. Fernanda Lux", especialidade: "Direção Clínica", bio: "CRM-SP 123456. Especialista em medicina estética com 12 anos de experiência." },
  { nome: "Dra. Carolina Matos", especialidade: "Dermatologia", bio: "CRM-SP 234567. Especialista em procedimentos minimamente invasivos." },
  { nome: "Dra. Isabela Rocha", especialidade: "Medicina Estética", bio: "CRM-SP 345678. Expert em bioestimulação e preenchimentos." },
  { nome: "Dra. Priya Mendes", especialidade: "Biomedicina Estética", bio: "CRBM 456789. Especialidade em tratamentos capilares e corporais." },
];

export default function SobrePage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-dark pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center py-20">
          <div>
            <p className="label text-accent-gold mb-6 tracking-widest">NOSSA HISTÓRIA</p>
            <h1 className="font-display font-bold text-[80px] text-bg-blush leading-[1.05]">
              Fundada na crença <br/>de que beleza é <br/><span className="text-accent-gold">autoconfiança.</span>
            </h1>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2A1E17] to-accent-gold/10 rounded-[32px] h-[480px] shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-8 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-border-rose">
              <p className="font-display font-semibold text-2xl text-text-primary">Dra. Fernanda Lux</p>
              <p className="text-text-muted text-sm">Fundadora · 12 anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-bg-primary py-[120px]">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <div className="w-12 h-px bg-accent-gold mx-auto mb-8" />
          <p className="font-display italic text-[48px] text-text-primary leading-tight mb-8">
            "Beleza real não é sobre parecer diferente. É sobre finalmente parecer você mesma."
          </p>
          <span className="label text-accent-gold">— Velour Clinic</span>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20">
          <div>
            <p className="label text-accent-gold mb-4 tracking-widest">NOSSOS VALORES</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">
              O que nos guia
            </h2>
          </div>
          <div className="space-y-10">
            {[
              { title: "Precisão Científica", desc: "Cada procedimento é baseado em evidências científicas. Não seguimos tendências, priorizamos resultados comprovados." },
              { title: "Cuidado Individualizado", desc: "Cada paciente é único. Nossos protocolos são personalizados para suas características e objetivos específicos." },
              { title: "Resultados Éticos", desc: "Prometemos apenas o que podemos entregar. Honestidade é a base de toda nossa relação com as pacientes." },
            ].map((item, idx) => (
              <div key={idx} className="pt-8 border-t-2 border-accent-gold/30">
                <h3 className="font-display font-semibold text-2xl text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-bg-blush py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label text-accent-gold mb-4 tracking-widest">NOSSA EQUIPE</p>
            <h2 className="font-display font-bold text-[52px] text-text-primary">Profissionais de excelência</h2>
          </div>

          <div className="grid grid-cols-4 gap-10">
            {equipe.map((membro, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[24px] p-10 text-center hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,149,106,0.15)] transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-bg-blush to-accent-gold/10 rounded-full mx-auto mb-6" />
                <h3 className="font-display font-semibold text-xl text-text-primary">{membro.nome}</h3>
                <p className="label text-accent-gold mt-2 mb-4">{membro.especialidade}</p>
                <p className="text-text-muted text-sm leading-relaxed">{membro.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLÍNICA */}
      <section className="bg-bg-dark py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div className="bg-gradient-to-br from-[#2A1E17] to-accent-gold/10 rounded-[32px] h-[500px] shadow-2xl" />
          <div>
            <p className="label text-accent-gold mb-4 tracking-widest">NOSSO ESPAÇO</p>
            <h2 className="font-display font-bold text-[52px] text-bg-blush mb-10 leading-[1.1]">
              Um espaço pensado <br/>para você
            </h2>
            <div className="space-y-6">
              {[
                "Ambiente privativo e acolhedor",
                "Tecnologia de última geração",
                "Protocolos de segurança rigorosos",
                "Equipe altamente qualificada",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-bg-blush font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="bg-bg-primary py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex justify-center gap-8 flex-wrap">
            {["CFM", "SBDV", "ISO 9001", "ANVISA", "12 Anos de Excelência"].map((cert, index) => (
              <div key={index} className="bg-bg-blush px-8 py-3 rounded-full border border-border-rose">
                <span className="text-text-primary font-body font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent-gold to-accent-mocha py-[140px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6 leading-[1.05]">
            Venha nos conhecer
          </h2>
          <p className="text-white/80 text-lg mb-12">Agende uma visita e descubra como podemos transformar sua confiança.</p>
          <Link
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-12 py-5 font-body font-semibold hover:bg-bg-blush transition-all duration-300 text-lg shadow-xl"
          >
            Agendar Visita →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
