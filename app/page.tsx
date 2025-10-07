"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  Gavel,
  Shield,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  FileText,
  Banknote,
  Landmark,
  Search,
  Download,
  Menu,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EbookLeilaoPage() {
  const handleDownloadClick = () => {
    // Lógica para download do E-book ou redirecionamento para a página de vendas
    const ebookUrl = "/Ebook - Leilão.pdf"; // Substituir pela URL real de download ou página de vendas
    window.open(ebookUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Gavel className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg">Leilões de Imóveis</span>
          </div>
          {/* Navegação para Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#vantagens"
              className="transition-colors hover:text-primary"
            >
              Vantagens
            </a>
            <a
              href="#conteudo"
              className="transition-colors hover:text-primary"
            >
              Conteúdo
            </a>
            <a href="#autores" className="transition-colors hover:text-primary">
              Autores
            </a>
            <a href="#contato" className="transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              onClick={handleDownloadClick}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Baixar E-book
              <Download className="ml-2 h-4 w-4" />
            </Button>
            {/* Menu Mobile */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");
                }}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
              {/* Menu dropdown */}
              <div
                id="mobile-menu"
                className="hidden absolute right-4 top-16 w-48 bg-background border rounded-lg shadow-lg p-2 z-50"
              >
                <a
                  href="#vantagens"
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent"
                >
                  <Star className="mr-2 h-4 w-4" /> Vantagens
                </a>
                <a
                  href="#conteudo"
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Conteúdo
                </a>
                <a
                  href="#autores"
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent"
                >
                  <Users className="mr-2 h-4 w-4" /> Autores
                </a>
                <a
                  href="#contato"
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent"
                >
                  <Mail className="mr-2 h-4 w-4" /> Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Coluna de Texto: agora order-1 (primeiro no celular) */}
            <div className="space-y-6 lg:space-y-8 animate-slide-in-up text-center lg:text-left order-1 lg:order-1">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                  <BookOpen className="mr-2 h-3 w-3" />
                  Do Básico ao Avançado
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
                  Domine os{" "}
                  <span className="text-primary">Leilões de Imóveis</span> e
                  Alcance sua Independência Financeira
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[600px] mx-auto lg:mx-0">
                  Tudo que você precisa para arrematar imóveis de leilões com
                  segurança e lucratividade, mesmo começando do zero.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleDownloadClick}
                  size="lg"
                  className="text-base"
                >
                  Quero o meu E-book agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="#conteudo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base bg-transparent"
                  >
                    Ver Conteúdo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    70% OFF
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Potencial de Desconto
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Lucratividade
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    Passo a Passo
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Método Validado
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-scale order-2 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
              <Image
                src="images/ebook-cover.png"
                alt="Capa do E-book Leilões Imobiliários do Básico ao Avançado"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full max-w-sm mx-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Conteúdo do E-book */}
      <section id="conteudo" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <BookOpen className="mr-2 h-3 w-3" />O que você vai aprender
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              Conteúdo Exclusivo do E-book
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
              Um guia completo que aborda desde os conceitos fundamentais até as
              estratégias avançadas de arrematação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Landmark,
                title: "Leilões Judiciais vs. Extrajudiciais",
                description:
                  "Entenda a diferença crucial entre os tipos de leilão e saiba onde encontrar as melhores oportunidades.",
              },
              {
                icon: Search,
                title: "Como Encontrar os Melhores Leilões",
                description:
                  "Aprenda as técnicas e ferramentas para localizar imóveis na sua região com alto potencial de lucro.",
              },
              {
                icon: FileText,
                title: "Análise de Edital e Documentação",
                description:
                  "Domine a leitura de editais e a análise de matrículas para evitar riscos e fazer arrematações seguras.",
              },
              {
                icon: Banknote,
                title: "Cálculo de Lucratividade",
                description:
                  "Saiba como calcular todas as despesas e definir seu lance máximo para garantir um lucro de 30% a 40%.",
              },
              {
                icon: Gavel,
                title: "Segredos da Arrematação",
                description:
                  "Descubra as estratégias para dar lances de forma inteligente e aumentar suas chances de sucesso.",
              },
              {
                icon: Users,
                title: "Desocupação do Imóvel",
                description:
                  "Conheça os procedimentos para a desocupação amigável ou judicial do imóvel arrematado.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Vantagens Section */}
      <section id="vantagens" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-slide-in-up text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                  <Star className="mr-2 h-3 w-3" />
                  Por que investir em leilões?
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                  Um Mercado de Oportunidades Únicas
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-[600px] mx-auto lg:mx-0">
                  O mercado de leilões imobiliários é uma das formas mais
                  seguras e lucrativas de investimento, acessível a todos que
                  possuem o conhecimento correto.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "Imóveis com até 70% de desconto sobre o valor de mercado.",
                  "Potencial de lucro de até 100% sobre o valor investido.",
                  "Segurança de um investimento em um ativo sólido.",
                  "Diversas formas de pagamento, incluindo parcelamento.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-scale">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
              <Card className="relative border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-6 sm:p-8">
                  <Image
                    src="/images/graph.png"
                    alt="Gráfico de valorização de imóveis"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Autores Section */}
      <section id="autores" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Users className="mr-2 h-3 w-3" />
              Os Autores
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              Criado por Especialistas do Mercado
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
              Este e-book foi desenvolvido por Junior Rocha e Wagner Mendes,
              especialistas com vasta experiência prática em arrematação de
              imóveis.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto animate-fade-in-scale">
            <Image
              src="/images/autores.png" // **SUBSTITUIR** pela foto dos autores
              alt="Autores do E-book: Junior Rocha e Wagner Mendes"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur animate-fade-in-scale">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                  Pronto para fazer seu primeiro arremate de sucesso?
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground text-pretty">
                  Adquira o conhecimento necessário para investir com segurança
                  e transformar sua vida financeira através dos leilões de
                  imóveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    onClick={handleDownloadClick}
                    size="lg"
                    className="text-base"
                  >
                    Sim, quero começar agora!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer id="contato" className="border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
              <div className="flex items-center space-x-2">
                <Gavel className="h-7 w-7 text-primary" />
                <span className="font-bold text-lg">Leilões de Imóveis</span>
              </div>
              <p className="text-sm text-muted-foreground text-pretty">
                O guia definitivo para investir no mercado de leilões
                imobiliários.
              </p>
            </div>
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold">Conteúdo</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#vantagens" className="hover:text-primary">
                    Vantagens
                  </a>
                </li>
                <li>
                  <a href="#conteudo" className="hover:text-primary">
                    O que você vai aprender
                  </a>
                </li>
                <li>
                  <a href="#autores" className="hover:text-primary">
                    Sobre os Autores
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mentoria</li>
                <li>Assessoria de Arrematação</li>
                <li>Grupo de Oportunidades</li>
              </ul>
            </div>
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@exemplo.com.br</li>
                <li>+55 (XX) XXXX-XXXX</li>
                <li>Brasília, DF</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Leilões de Imóveis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      {/* Botões Flutuantes */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
