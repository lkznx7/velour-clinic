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
      <section className="bg-bg-dark pt-32 pb-20 min-h-[70vh]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="label text-accent-gold mb-4">NOSSA HISTÓRIA</p>
            <h1 className="font-display font-bold text-[80px] text-bg-blush leading-tight">
              Fundada na crença <br/>de que beleza é <br/><span className="text-accent-gold">autoconfiança.</span>
            </h1>
          </div>
          <div className="relative">
            <div className="bg-[#2A1E17] rounded-[24px] h-[480px]" />
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-4">
              <p className="font-display font-semibold text-[20px] text-text-primary">Dra. Fernanda Lux</p>
              <p className="text-text-muted text-sm">Fundadora</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center px-[240px]">
          <p className="font-display italic text-[52px] text-text-primary leading-tight mb-8">
            "Beleza real não é sobre parecer diferente. <br/>É sobre finalmente parecer você mesma."
          </p>
          <span className="label text-accent-gold">— Velour Clinic</span>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-bg-primary py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20">
          <div>
            <h2 className="font-display font-bold text-[52px] text-text-primary">
              O que nos guia
            </h2>
          </div>
          <div className="space-y-8">
            <div className="pt-6 border-t border-accent-gold">
              <h3 className="font-display font-semibold text-[28px] text-text-primary mb-3">Precisão Científica</h3>
              <p className="text-text-muted">Cada procedimento é baseado em evidências científicas. Não seguimos tendências, priorizamos resultados comprovados.</p>
            </div>
            <div className="pt-6 border-t border-accent-gold">
              <h3 className="font-display font-semibold text-[28px] text-text-primary mb-3">Cuidado Individualizado</h3>
              <p className="text-text-muted">Cada paciente é único. Nossos protocolos são personalizados para suas características e objetivos específicos.</p>
            </div>
            <div className="pt-6 border-t border-accent-gold">
              <h3 className="font-display font-semibold text-[28px] text-text-primary mb-3">Resultados Éticos</h3>
              <p className="text-text-muted">Prometemos apenas o que podemos entregar. Honestidade é a base de toda nossa relação com as pacientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="bg-bg-blush py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="font-display font-bold text-[52px] text-text-primary text-center mb-16">Nossa Equipe</h2>
          
          <div className="grid grid-cols-4 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="bg-white border border-border-rose rounded-[20px] p-8 text-center hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(196,149,106,0.12)] transition-all duration-300">
                <div className="w-24 h-24 bg-bg-blush rounded-full mx-auto mb-6" />
                <h3 className="font-display font-semibold text-[20px] text-text-primary">{membro.nome}</h3>
                <p className="label text-accent-gold mt-2 mb-4">{membro.especialidade}</p>
                <p className="text-text-muted text-sm">{membro.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLÍNICA */}
      <section className="bg-bg-dark py-[100px]">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          <div className="bg-[#2A1E17] rounded-[24px] h-[500px]" />
          <div>
            <h2 className="font-display font-bold text-[52px] text-bg-blush mb-10">
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
                  <span className="w-2 h-2 rounded-full bg-accent-gold" />
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
              <div key={index} className="bg-bg-blush px-8 py-3 rounded-full">
                <span className="text-text-primary font-body font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-gold py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="font-display font-extrabold text-[72px] text-white mb-6">
            Venha nos conhecer
          </h2>
          <p className="text-white/80 text-lg mb-10">Agende uma visita e descubra como podemos transformar sua confiança.</p>
          <Link 
            href="/agendamento"
            className="bg-white text-text-primary rounded-full px-10 py-4 font-body font-semibold hover:bg-bg-blush transition-all duration-300"
          >
            Agendar Visita →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}