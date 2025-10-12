"use client";

import {
  FileSpreadsheet,
  Shield,
  PlayCircle,
  Bell,
  Clock,
  ShieldCheck,
  MapPin,
  Zap,
  GraduationCap,
  Home,
  TrendingUp,
  CheckCircle,
  BookOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentBenefitsSectionProps {
  onDownloadClick: () => void;
}

export default function ContentBenefitsSection({
  onDownloadClick,
}: ContentBenefitsSectionProps) {
  const contentItems = [
    {
      icon: FileSpreadsheet,
      title: "Planilha Mestre",
      description:
        "Lista completa com nome, URL, tipo, UF, status no TJ e última checagem de todos os sites de leilão.",
      highlight: "Organizada por banco/UF",
    },
    {
      icon: Shield,
      title: "PDF Checklist Anti-Golpe",
      description:
        "Guia essencial para identificar e evitar sites fraudulentos e golpes em leilões de imóveis.",
      highlight: "Reduz risco de golpe",
    },
    {
      icon: PlayCircle,
      title: "Mini-guia TJ (Vídeo)",
      description:
        "Tutorial passo a passo em vídeo mostrando como navegar nos sites dos Tribunais de Justiça.",
      highlight: "Roteiro simples",
    },
    {
      icon: Bell,
      title: "Bônus: Alertas de Novos Sites",
      description:
        "Receba notificações sempre que novos sites de leilão forem descobertos e validados.",
      highlight: "Sempre atualizado",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Corta semanas de pesquisa",
      description: "Economize tempo com nossa lista pronta",
    },
    {
      icon: ShieldCheck,
      title: "Reduz risco de golpe",
      description: "Sites verificados e checklist de segurança",
    },
    {
      icon: MapPin,
      title: "Organiza por banco/UF",
      description: "Encontre rapidamente por região",
    },
    {
      icon: Zap,
      title: "Comece hoje mesmo",
      description: "Acesso imediato após o download",
    },
  ];

  const audiences = [
    {
      icon: GraduationCap,
      title: "Investidor Iniciante",
      description: "Segurança e atalhos para começar certo.",
      features: ["Checklist anti-golpe", "Vídeo tutorial", "Sites verificados"],
    },
    {
      icon: Home,
      title: "Comprador para Moradia",
      description: "Roteiro simples e fontes confiáveis.",
      features: [
        "Guia passo a passo",
        "Sites por região",
        "Dicas de segurança",
      ],
    },
    {
      icon: TrendingUp,
      title: "Flipper Experiente",
      description: "Velocidade e precisão nos links certos.",
      features: [
        "Lista completa",
        "Alertas de novos sites",
        "Organização por UF",
      ],
    },
  ];

  return (
    <section id="conteudo" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="w-fit mx-auto">
            <BookOpen className="mr-2 h-3 w-3" />O que você vai receber
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Quais são os benefícios?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
            Tudo que você precisa para começar nos leilões de imóveis com
            segurança e eficiência.
          </p>
        </div>

        {/* O que você vai receber */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {contentItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.highlight}
                    </Badge>
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

        {/* Benefícios Principais */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 mb-12 animate-slide-in-up">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Principais Benefícios
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-3 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm sm:text-base">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conectar com ambos os públicos */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <audience.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">
                      {audience.description}
                    </p>
                    <ul className="space-y-2">
                      {audience.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={onDownloadClick}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <Download className="mr-2 h-5 w-5" />
            Baixar Agora - Grátis
          </Button>
        </div>
      </div>
    </section>
  );
}
