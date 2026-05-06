import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velour Clinic | Alta Medicina Estética São Paulo",
  description: "Protocolos exclusivos de medicina estética para quem exige resultados reais. Bioestimulação, preenchimento, toxina botulínica e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
