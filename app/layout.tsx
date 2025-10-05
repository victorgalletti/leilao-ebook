import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ebook Leilões de Imóveis: Do Básico ao Avançado | CB Leilão",
  description:
    "Aprenda a arrematar imóveis em leilão com até 70% de desconto. Nosso ebook completo ensina o passo a passo, desde encontrar as melhores oportunidades até a desocupação do imóvel[cite: 15, 47, 196, 197].",
  keywords: [
    "leilão de imóveis",
    "ebook leilão",
    "arrematar imóvel",
    "guia de leilões",
    "investir em leilões",
    "comprar imóvel em leilão",
    "leilão judicial",
    "leilão extrajudicial",
    "lucro com leilões",
    "Junior Rocha",
    "Wagner Mendes",
  ],
  authors: [{ name: "Junior Rocha" }, { name: "Wagner Mendes" }],
  icons: {
    icon: "/favicon.ico",
  },
  // Metadados para Open Graph (compartilhamento em redes sociais como Facebook, LinkedIn)
  openGraph: {
    title: "Ebook Leilões de Imóveis: Do Básico ao Avançado",
    description:
      "O guia definitivo para investir com segurança e lucratividade no mercado de leilões de imóveis. [cite: 15, 20, 214]",
    url: "https://www.leilao.cbbrazil.com.br", // Substitua pela URL final do seu site
    siteName: "CB Leilão",
    images: [
      {
        url: "/og-image.png", // Crie e coloque uma imagem de 1200x630px na pasta /public
        width: 1200,
        height: 630,
        alt: "Capa do Ebook Leilões de Imóveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  // Metadados para Twitter Cards (compartilhamento no Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Ebook Leilões de Imóveis: Do Básico ao Avançado | CB Leilão",
    description:
      "Aprenda a arrematar imóveis com até 70% de desconto com nosso guia completo. ",
    images: ["/twitter-image.png"], // Crie e coloque uma imagem de 1200x630px na pasta /public
  },
  alternates: {
    canonical: "https://www.leilao.cbbrazil.com.br", // Substitua pela URL final do seu site
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
