"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary p-0 h-auto inline-flex items-center gap-1"
        >
          <AlertTriangle className="h-3 w-3" />
          Reportar site suspeito
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Reportar Site Suspeito</DialogTitle>
          <DialogDescription>
            Ajude-nos a combater fraudes. Se você encontrou um site se passando
            por nós, reporte aqui.
          </DialogDescription>
        </DialogHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium">
                URL do site suspeito
              </label>
              <input
                id="url"
                type="url"
                required
                placeholder="https://exemplo.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Descrição (opcional)
              </label>
              <textarea
                id="description"
                rows={3}
                placeholder="Descreva por que você acra que este site é suspeito..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar Reporte
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-green-600 mb-2">✓</div>
            <p className="font-medium">Obrigado pelo reporte!</p>
            <p className="text-sm text-muted-foreground mt-1">
              Vamos investigar o site reportado.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
