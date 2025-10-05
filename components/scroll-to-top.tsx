"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/esconder o botão baseado na posição do scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      // Novas classes para posicionamento, tamanho e formato
      className="fixed bottom-24 right-9 z-50 h-8 w-8 rounded-md bg-primary/45 hover:bg-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      size="icon"
    >
      {/* Ícone menor */}
      <ArrowUp className="h-5 w-5 text-primary-foreground" />
      <span className="sr-only">Voltar ao topo</span>
    </Button>
  );
}
