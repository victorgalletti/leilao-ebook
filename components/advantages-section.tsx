"use client";

import { useState } from "react";
import {
  CheckCircle,
  Star,
  Download,
  Eye,
  ExternalLink,
  MapPin,
  Building,
  Calendar,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AdvantagesSectionProps {
  onDownloadClick: () => void;
  onViewSampleClick?: () => void;
}

interface SiteData {
  nome: string;
  url: string;
  tipo: string;
  uf: string;
  status: string;
  ultimaChecagem: string;
}

export default function AdvantagesSection({
  onDownloadClick,
  onViewSampleClick,
}: AdvantagesSectionProps) {
  const [showFullTable, setShowFullTable] = useState(false);

  // Dados de amostra da tabela (10 primeiras linhas)
  const sampleData: SiteData[] = [
    {
      nome: "Leilões Caixa",
      url: "www.leilaocaixa.com.br",
      tipo: "Banco",
      uf: "Nacional",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "TJ-SP Leilões",
      url: "www.tjsp.jus.br/leiloes",
      tipo: "Judicial",
      uf: "SP",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "Santander Leilões",
      url: "www.santanderleiloes.com.br",
      tipo: "Banco",
      uf: "Nacional",
      status: "✅ Verificado",
      ultimaChecagem: "14/12/2024",
    },
    {
      nome: "TJ-RJ Leilões",
      url: "www.tjrj.jus.br/leiloes",
      tipo: "Judicial",
      uf: "RJ",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "Bradesco Leilões",
      url: "www.bradescoleiloes.com.br",
      tipo: "Banco",
      uf: "Nacional",
      status: "✅ Verificado",
      ultimaChecagem: "13/12/2024",
    },
    {
      nome: "TJ-MG Leilões",
      url: "www.tjmg.jus.br/leiloes",
      tipo: "Judicial",
      uf: "MG",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "Itaú Leilões",
      url: "www.itauleiloes.com.br",
      tipo: "Banco",
      uf: "Nacional",
      status: "✅ Verificado",
      ultimaChecagem: "14/12/2024",
    },
    {
      nome: "TJ-RS Leilões",
      url: "www.tjrs.jus.br/leiloes",
      tipo: "Judicial",
      uf: "RS",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "Banco do Brasil Leilões",
      url: "www.bbleiloes.com.br",
      tipo: "Banco",
      uf: "Nacional",
      status: "✅ Verificado",
      ultimaChecagem: "15/12/2024",
    },
    {
      nome: "TJ-PR Leilões",
      url: "www.tjpr.jus.br/leiloes",
      tipo: "Judicial",
      uf: "PR",
      status: "✅ Verificado",
      ultimaChecagem: "14/12/2024",
    },
  ];

  const advantages = [
    "Do zero à lista de portais confiáveis em 15 minutos",
    "Acesso aos leilões da Caixa e bancos sem cair em site falso",
    "Sites organizados por UF para busca rápida",
    "Checklist anti-golpe para máxima segurança",
  ];

  const handleViewSample = () => {
    setShowFullTable(true);
    onViewSampleClick?.();
  };

  return (
    <section id="vantagens" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-up text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                <Star className="mr-2 h-3 w-3" />
                Resultado garantido
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                Do Zero aos Sites Confiáveis em 15 Minutos
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-[600px] mx-auto lg:mx-0">
                Acesse imediatamente todos os portais verificados de leilões
                imobiliários, organizados por estado e tipo, com garantia
                anti-golpe.
              </p>
            </div>

            {/* Mini-métricas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                <Building className="h-4 w-4 text-primary" />
                <span className="font-medium">+150 sites verificados</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="font-medium">27 estados</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  100% seguro
                </span>
              </div>
            </div>

            {/* Advantages List */}
            <div className="space-y-3 sm:space-y-4">
              {advantages.map((item, index) => (
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

            {/* CTA Secundário */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
              <Button
                onClick={onDownloadClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Lista Completa
              </Button>
              <Button onClick={handleViewSample} variant="outline" size="lg">
                <Eye className="mr-2 h-4 w-4" />
                Ver Amostra Grátis
              </Button>
            </div>
          </div>

          {/* Right Column - Sample Table */}
          <div className="relative animate-fade-in-scale">
            <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
            <Card className="relative border-0 bg-card/50 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    Amostra da Planilha Mestre
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    10 de +150 sites
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="text-left p-2 font-medium">Nome</th>
                        <th className="text-left p-2 font-medium">Tipo</th>
                        <th className="text-left p-2 font-medium">UF</th>
                        <th className="text-left p-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData
                        .slice(0, showFullTable ? 10 : 5)
                        .map((site, index) => (
                          <tr
                            key={index}
                            className="border-b hover:bg-muted/20 transition-colors"
                          >
                            <td className="p-2">
                              <div className="flex items-center gap-2">
                                <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                <span className="font-medium">{site.nome}</span>
                              </div>
                            </td>
                            <td className="p-2">
                              <Badge variant="outline" className="text-xs">
                                {site.tipo}
                              </Badge>
                            </td>
                            <td className="p-2 font-mono">{site.uf}</td>
                            <td className="p-2">{site.status}</td>
                          </tr>
                        ))}
                      {!showFullTable && (
                        <tr>
                          <td colSpan={4} className="p-4 text-center">
                            <Button
                              onClick={handleViewSample}
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary/80"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Ver mais 5 sites...
                            </Button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Blur overlay for premium content */}
                {!showFullTable && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent flex items-end justify-center pb-2">
                    <Badge variant="secondary" className="text-xs">
                      +145 sites na versão completa
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
