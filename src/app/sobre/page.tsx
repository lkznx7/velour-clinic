import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const equipe = [
  { nome: "Dra. Fernanda Lux", especialidade: "Direção Clínica", bio: "CRM-SP 123456. 12 anos de experiência em medicina estética." },
  { nome: "Dra. Carolina Matos", especialidade: "Dermatologia", bio: "CRM-SP 234567. Especialista em procedimentos minimamente invasivos." },
  { nome: "Dra. Isabela Rocha", especialidade: "Medicina Estética", bio: "CRM-SP 345678. Expert em bioestimulação e preenchimentos." },
  { nome: "Dra. Priya Mendes", especialidade: "Biomedicina Estética", bio: "CRBM 456789. Tratamentos capilares e corporais." },
];

export default function SobrePage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-bg-dark pt-40 pb-20 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <p className="label text-accent-gold mb-4">Nossa história</p>
            <h1 className="font-display text-[80px] text-bg-blush leading-[0.95]">
              Fundada na crença<br/>de que beleza é<br/><span className="italic text-accent-gold">autoconfiança.</span>
            </h1>
          </div>
          <div className="pr-4">
            <div className="bg-[#2A1E17] rounded-2xl h-[400px]" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <div className="w-8 h-px bg-accent-gold mx-auto mb-8" />
          <p className="font-display italic text-[40px] text-text-primary leading-snug mb-6">
            "Beleza real não é sobre parecer diferente. É sobre finalmente parecer você mesma."
          </p>
          <span className="label text-accent-gold">— Velour Clinic</span>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-bg-primary section-pad">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="label text-accent-gold mb-4">Valores</p>
          <h2 className="font-display text-5xl text-text-primary mb-16">O que nos guia</h2>
          <div className="space-y-12">
            {[
              { title: "Precisão Científica", desc: "Cada procedimento é baseado em evidências. Priorizamos resultados comprovados." },
              { title: "Cuidado Individualizado", desc: "Protocolos personalizados para suas características e objetivos específicos." },
              { title: "Resultados Éticos", desc: "Prometemos apenas o que podemos entregar. Honestidade como base." },
            ].map((item, i) => (
              <div key={i} className="pt-8 border-t border-border-rose/50">
                <h3 className="font-display text-2xl text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-bg-blush section-pad">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="label text-accent-gold mb-4">Equipe</p>
            <h2 className="font-display text-5xl text-text-primary">Profissionais de excelência</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {equipe.map((m, i) => (
              <div key={i} className="card-soft text-center">
                <div className="w-20 h-20 bg-bg-blush rounded-full mx-auto mb-4" />
                <h3 className="font-display text-lg text-text-primary">{m.nome}</h3>
                <p className="label text-accent-gold mt-1 mb-3">{m.especialidade}</p>
                <p className="text-text-muted text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLÍNICA */}
      <section className="bg-bg-dark section-pad">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 gap-16 items-center">
          <div className="pl-4">
            <div className="bg-[#2A1E17] rounded-2xl h-[400px]" />
          </div>
          <div className="space-y-4 pr-4">
            <p className="label text-accent-gold mb-4">Nosso espaço</p>
            <h2 className="font-display text-5xl text-bg-blush mb-8">Um espaço pensado<br/>para você</h2>
            {["Ambiente privativo e acolhedor", "Tecnologia de última geração", "Protocolos de segurança rigorosos", "Equipe altamente qualificada"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span className="text-bg-blush/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="font-display text-6xl text-white mb-4 leading-tight">Venha nos conhecer</h2>
          <p className="text-white/80 mb-10">Agende uma visita.</p>
          <Link href="/agendamento" className="bg-white text-text-primary rounded-full px-8 py-3 font-body font-medium hover:bg-bg-blush transition-colors">
            Agendar Visita →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
