"use client";

import * as React from "react";
import {
  Scale,
  Globe,
  Building2,
  AlertTriangle,
  Landmark,
  RefreshCw,
  ShieldCheck,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTrust, CardContent } from "@/components/ui/card";

interface TrustItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Scale,
    title: "Leiloeiro cadastrado no TJ",
    description:
      "Verificamos se o leiloeiro é oficial e está devidamente registrado no Tribunal de Justiça competente.",
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: "Domínio verificado",
    description:
      "Confirmamos a autenticidade do domínio e se pertence realmente à empresa leiloeira oficial.",
    color: "text-blue-600",
  },
  {
    icon: Building2,
    title: "CNPJ/contato conferidos",
    description:
      "Validamos CNPJ ativo, endereço físico e canais de contato oficiais da empresa.",
    color: "text-purple-600",
  },
  {
    icon: AlertTriangle,
    title: "Fora da lista: clones/fakes",
    description:
      "Removemos sites clones, páginas falsas e qualquer tentativa de fraude ou imitação.",
    color: "text-red-600",
  },
  {
    icon: Landmark,
    title: "Links oficiais de bancos",
    description:
      "Incluímos apenas links diretos dos bancos (Caixa, BB, Santander) e instituições financeiras.",
    color: "text-orange-600",
  },
  {
    icon: RefreshCw,
    title: "Revisão mensal",
    description:
      "Atualizamos a lista todo mês, removendo sites inativos e adicionando novos leilões verificados.",
    color: "text-indigo-600",
  },
];

interface TrustCardProps {
  item: TrustItem;
  index: number;
}

function TrustCard({ item, index }: TrustCardProps) {
  const IconComponent = item.icon;

  return (
    <CardTrust
      className="border-0 bg-muted/50 backdrop-blur hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className={`p-3 rounded-full bg-muted ${item.color}`}>
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-3 text-balance">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm text-pretty">
          {item.description}
        </p>
      </CardContent>
    </CardTrust>
  );
}

interface TrustSectionProps {
  onDownloadClick: () => void;
}

export function TrustSection({ onDownloadClick }: TrustSectionProps) {
  return (
    <section id="confianca" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="w-fit mx-auto">
            <ShieldCheck className="mr-2 h-3 w-3" />
            Verificação Rigorosa
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Como garantimos que os sites são confiáveis
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
            Cada site passa por uma verificação completa antes de entrar na
            nossa lista.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <TrustCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA da seção de confiança */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-scale">
          <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-primary mr-3" />
                <h3 className="font-bold text-lg sm:text-xl">
                  Proteção Anti-Golpe Garantida
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Nossa lista elimina 99% dos riscos de cair em sites falsos ou
                golpes. Acesse apenas leilões 100% legítimos e seguros.
              </p>
              <Button onClick={onDownloadClick} size="lg" className="text-base">
                Quero a Lista Verificada Agora
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
