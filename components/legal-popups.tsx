"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary p-0 h-auto"
        >
          Termos de Uso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Termos de Uso</DialogTitle>
          <DialogDescription>
            Última atualização: Janeiro de 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-base">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e usar este site e adquirir nossos produtos, você
              aceita e concorda em cumprir estes Termos de Uso. Se você não
              concordar com algum destes termos, não utilize nossos serviços.
            </p>

            <h3 className="font-semibold text-base">
              2. Descrição dos Serviços
            </h3>
            <p>
              Oferecemos conteúdo educacional sobre leilões de imóveis,
              incluindo e-books, cursos e mentoria. Todo o conteúdo é protegido
              por direitos autorais e destinado apenas para uso pessoal do
              comprador.
            </p>

            <h3 className="font-semibold text-base">3. Cadastro e Segurança</h3>
            <p>
              Você é responsável por manter a confidencialidade de suas
              informações de acesso e por todas as atividades que ocorram em sua
              conta. Notifique-nos imediatamente sobre qualquer uso não
              autorizado.
            </p>

            <h3 className="font-semibold text-base">
              4. Propriedade Intelectual
            </h3>
            <p>
              Todo o conteúdo disponibilizado é de propriedade exclusiva da
              empresa ou de seus licenciadores. É proibida a reprodução,
              distribuição ou criação de obras derivadas sem autorização prévia
              por escrito.
            </p>

            <h3 className="font-semibold text-base">5. Pagamento e Entrega</h3>
            <p>
              Os pagamentos são processados de forma segura através de
              plataformas terceirizadas. O acesso ao conteúdo digital é liberado
              imediatamente após a confirmação do pagamento.
            </p>

            <h3 className="font-semibold text-base">
              6. Direito de Arrependimento
            </h3>
            <p>
              De acordo com o Código de Defesa do Consumidor (Lei 8.078/90),
              você tem direito ao arrependimento da compra em até 7 dias
              corridos a partir da data de aquisição, com reembolso integral.
            </p>

            <h3 className="font-semibold text-base">
              7. Limitação de Responsabilidade
            </h3>
            <p>
              O conteúdo fornecido tem caráter educacional e informativo. Não
              nos responsabilizamos por decisões de investimento tomadas com
              base nas informações fornecidas. Sempre consulte profissionais
              especializados.
            </p>

            <h3 className="font-semibold text-base">
              8. Modificações dos Termos
            </h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer
              momento. As alterações entram em vigor imediatamente após a
              publicação no site.
            </p>

            <h3 className="font-semibold text-base">9. Lei Aplicável e Foro</h3>
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o
              foro da comarca de Brasília/DF para dirimir quaisquer questões
              relacionadas a estes termos.
            </p>

            <h3 className="font-semibold text-base">10. Contato</h3>
            <p>
              Para dúvidas sobre estes termos, entre em contato através do
              e-mail: juridico@leiloesdeimoveis.com.br
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary p-0 h-auto"
        >
          Política de Privacidade
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Privacidade</DialogTitle>
          <DialogDescription>
            Última atualização: Janeiro de 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-base">
              1. Informações que Coletamos
            </h3>
            <p>
              Coletamos informações que você nos fornece diretamente, como nome,
              e-mail, telefone, CPF/CNPJ e dados de pagamento quando você
              realiza uma compra ou se cadastra em nossa plataforma.
            </p>

            <h3 className="font-semibold text-base">
              2. Como Usamos suas Informações
            </h3>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processar suas compras e pagamentos</li>
              <li>Enviar o conteúdo adquirido</li>
              <li>Comunicar sobre atualizações e novos produtos</li>
              <li>Melhorar nossos serviços</li>
              <li>Cumprir obrigações legais e fiscais</li>
            </ul>

            <h3 className="font-semibold text-base">
              3. Compartilhamento de Dados
            </h3>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Com processadores de pagamento para completar transações</li>
              <li>Quando exigido por lei ou ordem judicial</li>
              <li>Para proteger nossos direitos e propriedade</li>
            </ul>

            <h3 className="font-semibold text-base">4. Segurança dos Dados</h3>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger suas informações contra acesso não autorizado, alteração,
              divulgação ou destruição.
            </p>

            <h3 className="font-semibold text-base">5. Seus Direitos (LGPD)</h3>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018),
              você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimização ou eliminação de dados</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>

            <h3 className="font-semibold text-base">
              6. Cookies e Tecnologias Similares
            </h3>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação,
              analisar o tráfego do site e personalizar conteúdo. Você pode
              configurar seu navegador para recusar cookies.
            </p>

            <h3 className="font-semibold text-base">7. Retenção de Dados</h3>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário
              para cumprir as finalidades para as quais foram coletadas e para
              atender requisitos legais.
            </p>

            <h3 className="font-semibold text-base">8. Menores de Idade</h3>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não
              coletamos intencionalmente informações de menores de idade.
            </p>

            <h3 className="font-semibold text-base">
              9. Alterações nesta Política
            </h3>
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos
              sobre mudanças significativas através do e-mail cadastrado.
            </p>

            <h3 className="font-semibold text-base">10. Contato e DPO</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre
              privacidade, contate nosso Encarregado de Proteção de Dados:
              dpo@leiloesdeimoveis.com.br
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export function RefundDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary p-0 h-auto"
        >
          Política de Reembolso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Política de Reembolso</DialogTitle>
          <DialogDescription>
            Última atualização: Janeiro de 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-base">
              1. Direito de Arrependimento (CDC)
            </h3>
            <p>
              Em conformidade com o artigo 49 do Código de Defesa do Consumidor
              (Lei 8.078/90), você tem o direito de desistir da compra no prazo
              de 7 (sete) dias corridos a contar da data de aquisição do produto
              digital.
            </p>

            <h3 className="font-semibold text-base">
              2. Como Solicitar o Reembolso
            </h3>
            <p>Para solicitar o reembolso dentro do prazo legal:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Envie um e-mail para reembolso@leiloesdeimoveis.com.br</li>
              <li>Informe o número do pedido e CPF/CNPJ</li>
              <li>Indique o motivo da solicitação (opcional)</li>
              <li>Aguarde a confirmação em até 48 horas úteis</li>
            </ol>

            <h3 className="font-semibold text-base">
              3. Condições para Reembolso
            </h3>
            <p>O reembolso integral será concedido quando:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A solicitação for feita dentro do prazo de 7 dias</li>
              <li>O conteúdo não tiver sido baixado integralmente</li>
              <li>Não houver violação dos termos de uso</li>
            </ul>

            <h3 className="font-semibold text-base">4. Prazo para Devolução</h3>
            <p>
              Após a aprovação da solicitação, o valor será devolvido em até 10
              dias úteis através do mesmo método de pagamento utilizado na
              compra:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cartão de crédito: estorno na fatura</li>
              <li>Boleto/PIX: transferência para conta indicada</li>
              <li>Parcelamentos: estorno proporcional das parcelas</li>
            </ul>

            <h3 className="font-semibold text-base">
              5. Garantia de Satisfação Estendida
            </h3>
            <p>
              Além do prazo legal, oferecemos garantia de satisfação de 30 dias
              para nossos cursos e mentorias, com as seguintes condições:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conclusão de pelo menos 30% do conteúdo</li>
              <li>Participação nas atividades propostas</li>
              <li>Demonstração de aplicação das técnicas ensinadas</li>
            </ul>

            <h3 className="font-semibold text-base">
              6. Produtos Não Reembolsáveis
            </h3>
            <p>Não são elegíveis para reembolso:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Serviços já prestados (consultorias realizadas)</li>
              <li>Produtos personalizados ou sob demanda</li>
              <li>Conteúdos promocionais ou gratuitos</li>
            </ul>

            <h3 className="font-semibold text-base">
              7. Cancelamento de Assinaturas
            </h3>
            <p>
              Para produtos por assinatura, o cancelamento pode ser feito a
              qualquer momento, com acesso mantido até o fim do período pago.
              Não há reembolso proporcional de períodos não utilizados.
            </p>

            <h3 className="font-semibold text-base">
              8. Defeitos e Problemas Técnicos
            </h3>
            <p>
              Em caso de problemas técnicos que impeçam o acesso ao conteúdo,
              garantimos:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Suporte técnico em até 24 horas</li>
              <li>Correção do problema ou alternativa de acesso</li>
              <li>Reembolso integral se não houver solução</li>
            </ul>

            <h3 className="font-semibold text-base">9. Documentação Fiscal</h3>
            <p>
              Todos os reembolsos são acompanhados da documentação fiscal
              apropriada, incluindo nota de devolução e comprovante de estorno.
            </p>

            <h3 className="font-semibold text-base">
              10. Atendimento ao Consumidor
            </h3>
            <p>Para dúvidas ou problemas com reembolso:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-mail: sac@leiloesdeimoveis.com.br</li>
              <li>WhatsApp: (61) 99999-9999</li>
              <li>Horário: Segunda a Sexta, 9h às 18h</li>
            </ul>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-xs">
                Esta política está em conformidade com o Código de Defesa do
                Consumidor (Lei 8.078/90), Marco Civil da Internet (Lei
                12.965/14) e demais legislações aplicáveis.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
