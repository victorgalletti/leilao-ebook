"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardFaq, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Os leilões de imóveis são realmente confiáveis e seguros?",
    answer:
      "Sim, os leilões judiciais e extrajudiciais são regulamentados por lei e oferecem total segurança jurídica. Os leilões judiciais são conduzidos pelo Poder Judiciário, enquanto os extrajudiciais seguem rigorosas normas do Código Civil. É fundamental verificar a credibilidade do leiloeiro oficial e analisar toda a documentação do imóvel antes de participar.",
  },
  {
    question:
      "Como posso participar dos leilões de imóveis da Caixa Econômica Federal?",
    answer:
      "Para participar dos leilões da Caixa, você deve: 1) Acessar o site oficial de leilões da Caixa, 2) Fazer seu cadastro completo, 3) Analisar os imóveis disponíveis e seus ais, 4) Realizar o depósito caução (geralmente 5% do valor de avaliação), 5) Participar do leilão online ou presencialmente conforme especificado no al.",
  },
  {
    question:
      "Qual é o desconto real que posso conseguir em leilões de imóveis?",
    answer:
      "Os descontos variam significativamente, podendo ir de 20% a 70% do valor de mercado. Em primeira praça, os lances começam pelo valor de avaliação. Em segunda praça, podem começar com até 50% de desconto. O desconto final depende da demanda, localização, estado do imóvel e estratégia de lance dos participantes.",
  },
  {
    question: "Quais são os custos extras além do valor do lance vencedor?",
    answer:
      "Além do valor arrematado, você deve considerar: comissão do leiloeiro (5% a 10%), ITBI (2% a 4% do valor), custas cartoriais, taxas de registro, possíveis débitos do imóvel (IPTU, condomínio), custos de desocupação se necessário, e eventuais reformas. É essencial calcular todos esses custos antes de dar seu lance.",
  },
  {
    question: "E se o imóvel estiver ocupado? Como funciona a desocupação?",
    answer:
      "A desocupação varia conforme o tipo de leilão. Em leilões judiciais, o imóvel é entregue livre e desocupado, sendo responsabilidade do Judiciário. Em leilões extrajudiciais, pode haver ocupantes, e a desocupação fica por conta do arrematante. Nosso e-book ensina estratégias específicas para cada situação e como negociar a saída amigável.",
  },
  {
    question: "Posso financiar um imóvel comprado em leilão?",
    answer:
      "Sim, é possível financiar imóveis de leilão, mas com algumas particularidades. Você pode usar FGTS, fazer financiamento bancário (se o banco aprovar o imóvel), ou usar consórcio contemplado. O pagamento geralmente deve ser feito em até 30 dias, então é importante ter o financiamento pré-aprovado antes de participar do leilão.",
  },
  {
    question: "Como identificar se um leilão é legítimo e não uma fraude?",
    answer:
      "Verifique sempre: 1) Se o leiloeiro é oficial e credenciado (consulte no site da JUCERJA ou órgão competente), 2) Se o edital está publicado em jornais oficiais, 3) Se há processo judicial válido (para leilões judiciais), 4) Se o local do leilão é oficial, 5) Desconfie de 'oportunidades' enviadas por WhatsApp ou e-mail não solicitados.",
  },
  {
    question: "Qual é a diferença entre leilão judicial e extrajudicial?",
    answer:
      "Leilão judicial é determinado por decisão judicial em processos de execução, oferecendo maior segurança jurídica e imóveis livres de ocupação. Leilão extrajudicial é realizado por credores (bancos, financeiras) com base em contratos, sendo mais rápido mas podendo ter imóveis ocupados. Ambos são legais, mas exigem estratégias diferentes.",
  },
  {
    question:
      "Preciso ser um investidor experiente para participar de leilões?",
    answer:
      "Não necessariamente, mas conhecimento é fundamental. Nosso e-book foi criado justamente para iniciantes, ensinando desde conceitos básicos até estratégias avançadas. Com o conhecimento correto sobre análise de ais, cálculo de viabilidade e estratégias de lance, qualquer pessoa pode participar com segurança e sucesso.",
  },
  {
    question: "O que acontece se eu arrematar e não conseguir pagar?",
    answer:
      "Se você não pagar no prazo estipulado (geralmente 30 dias), perderá a caução depositada, o imóvel voltará a leilão, e você ainda poderá ser responsabilizado pela diferença se o imóvel for vendido por valor menor. Por isso é crucial ter certeza da capacidade de pagamento antes de dar qualquer lance.",
  },
];

interface FAQItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, index, isOpen, onToggle }: FAQItemProps) {
  const contentId = `faq-content-${index}`;

  return (
    <CardFaq
      className="border transition-all duration-300 hover:shadow-md animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-muted/50 hover:rounded-lg transition-colors"
        >
          <h3 className="font-semibold text-base sm:text-lg pr-4 text-balance">
            {item.question}
          </h3>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <div
          id={contentId}
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </CardFaq>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === faqData.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(faqData.map((_, index) => index)));
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="w-fit mx-auto">
            <HelpCircle className="mr-2 h-3 w-3" />
            Perguntas Frequentes
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Tire suas dúvidas sobre leilões de imóveis
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-[800px] mx-auto">
            Respondemos as principais questões sobre segurança, processos e
            estratégias para você investir com confiança em leilões
            imobiliários.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleAll}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {openItems.size === faqData.length
                ? "Fechar todas"
                : "Abrir todas"}
            </button>
          </div>

          {faqData.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              index={index}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-fade-in-scale">
          <CardFaq className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-bold text-lg sm:text-xl mb-3">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Nosso e-book responde essas e muitas outras perguntas com
                exemplos práticos e estratégias detalhadas para seu sucesso em
                leilões.
              </p>
              <a
                href="https://wa.me/5561999999999?text=Olá! Tenho dúvidas sobre leilões de imóveis e gostaria de mais informações sobre o e-book."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Fale conosco no WhatsApp
                <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
              </a>
            </CardContent>
          </CardFaq>
        </div>
      </div>
    </section>
  );
}
