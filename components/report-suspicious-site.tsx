"use client";

import * as React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ReportSuspiciousSite() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // A função de resetar o estado é memoizada com useCallback para otimização
  const resetForm = React.useCallback(() => {
    setIsSubmitted(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
    setIsSubmitted(true);
    // O formulário irá resetar quando o diálogo for fechado
  };

  return (
    // Adicionamos o onOpenChange para resetar o formulário quando o modal for fechado
    <Dialog onOpenChange={(open) => !open && resetForm()}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary p-0 h-auto inline-flex items-center gap-1"
        >
          <AlertTriangle className="h-3 w-3" />
          Reportar site suspeito
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md mx-auto flex flex-col min-h-[480px]">
        <DialogHeader className="text-center">
          <DialogTitle>Reportar Site Suspeito</DialogTitle>
          <DialogDescription>
            Ajude-nos a combater fraudes. Se você encontrou um site se passando
            por nós, reporte aqui.
          </DialogDescription>
        </DialogHeader>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 pt-2 flex flex-col flex-grow"
          >
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium">
                URL do site suspeito
              </label>
              <input
                id="url"
                type="url"
                required
                placeholder="https://exemplo.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Descrição (opcional)
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="Descreva por que você acha que este site é suspeito..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Seu e-mail (opcional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
              />
            </div>
            {/* `mt-auto` empurra o botão para o final do formulário */}
            <Button type="submit" className="w-full mt-auto">
              Enviar Reporte
            </Button>
          </form>
        ) : (
          /*
            - `flex-grow` faz esta div ocupar o espaço disponível.
            - `flex flex-col justify-center items-center`: Centraliza a mensagem de sucesso.
          */
          <div className="flex-grow flex flex-col justify-center items-center text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <p className="font-medium text-lg">Obrigado pelo reporte!</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Nossa equipe vai analisar a denúncia. Agradecemos sua colaboração
              para manter a comunidade segura.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
