"use client";

import { Play, Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TestimonialsSectionProps {
  className?: string;
}

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  thumbnail: string;
  videoUrl?: string;
  quote: string;
  rating: number;
  results: string;
}

export default function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Dados dos depoimentos - você pode substituir por dados reais
  const testimonials: VideoTestimonial[] = [
    {
      id: "1",
      name: "Carlos Silva",
      role: "Investidor Iniciante",
      location: "São Paulo, SP",
      thumbnail: "/api/placeholder/400/300", // Substitua pela thumbnail real
      quote:
        "Consegui meu primeiro imóvel em leilão com 35% de desconto seguindo exatamente o que aprendi no material.",
      rating: 5,
      results: "Economia de R$ 180.000",
    },
    {
      id: "2",
      name: "Maria Santos",
      role: "Compradora para Moradia",
      location: "Rio de Janeiro, RJ",
      thumbnail: "/api/placeholder/400/300", // Substitua pela thumbnail real
      quote:
        "O checklist anti-golpe me salvou de cair em um site falso. Hoje moro na minha casa própria!",
      rating: 5,
      results: "Casa própria conquistada",
    },
    {
      id: "3",
      name: "João Oliveira",
      role: "Flipper Experiente",
      location: "Belo Horizonte, MG",
      thumbnail: "/api/placeholder/400/300", // Substitua pela thumbnail real
      quote:
        "A planilha organizada por UF me fez economizar semanas de pesquisa. Já fiz 3 negócios este ano.",
      rating: 5,
      results: "3 imóveis arrematados",
    },
  ];

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
    // Aqui você implementaria a lógica para reproduzir o vídeo
    console.log(`Playing video: ${videoId}`);
  };

  return (
    <section
      className={`py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Quote className="mr-2 h-3 w-3" />
            Depoimentos Reais
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Veja os Resultados de Quem Já Aplicou
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com leilões
            de imóveis
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur animate-fade-in-scale overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                {/* Play Button */}
                <Button
                  onClick={() => handlePlayVideo(testimonial.id)}
                  size="lg"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-white text-primary hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                >
                  <Play className="h-6 w-6 ml-1" fill="currentColor" />
                </Button>

                {/* Video Duration/Status */}
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className="bg-black/50 text-white border-0"
                  >
                    2:30
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Results Badge */}
                  <div className="flex justify-center">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {testimonial.results}
                    </Badge>
                  </div>

                  {/* Author Info */}
                  <div className="text-center pt-2 border-t">
                    <h4 className="font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Você também pode ter esses resultados!
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de pessoas que já transformaram suas vidas com
              nosso material
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>+500 downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>98% de satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
