import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

{/* FAQ Section */}
function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "Quais serviços são oferecidos no projeto?",
      answer:
        "Oferecemos análise de dados, visualização de dados, modelagem preditiva com IA e Machine Learning, além de automação de pipelines de ciência de dados e MLOps.",
    },
    {
      question: "Quem pode se beneficiar desses serviços?",
      answer:
        "Pesquisadores acadêmicos, empresas de diferentes setores e estudantes interessados em soluções de análise de dados e inteligência artificial personalizadas.",
    },
    {
      question: "Como funcionam os dashboards interativos?",
      answer:
        "Os dashboards são criados com ferramentas como Power BI, Tableau e bibliotecas de visualização em Python, permitindo a análise visual e interativa de dados complexos.",
    },
    {
      question: "Quais tecnologias são utilizadas nos serviços?",
      answer:
        "Utilizamos tecnologias como Python, R, TensorFlow, scikit-learn, Power BI, Tableau e práticas de DevOps e MLOps para garantir eficiência e escalabilidade.",
    },
    {
      question: "Como contratar os serviços?",
      answer:
        "Você pode entrar em contato pelo LinkedIn, preencher o formulário de contato no site ou enviar um email diretamente para dougbiomed@gmail.com.",
    },
    {
      question: "Qual é o prazo médio para a entrega de um projeto?",
      answer:
        "O prazo varia de acordo com a complexidade do projeto. Geralmente, projetos simples são entregues em 1 a 2 semanas, enquanto análises mais detalhadas podem levar de 3 a 6 semanas.",
    },
    {
      question: "Os serviços incluem suporte técnico após a entrega?",
      answer:
        "Sim, oferecemos suporte técnico limitado por um período específico após a entrega para garantir a implementação e o uso adequado das soluções.",
    },
    {
      question: "Quais tipos de dados podem ser analisados?",
      answer:
        "Analisamos diversos tipos de dados, incluindo dados tabulares, séries temporais, imagens, textos e dados de sensores ou dispositivos IoT.",
    },
    {
      question: "Os serviços são adaptados para a área acadêmica?",
      answer:
        "Sim, desenvolvemos soluções voltadas para pesquisas acadêmicas, incluindo análises estatísticas, visualizações avançadas e relatórios formatados para publicações científicas.",
    },
    {
      question: "Posso solicitar serviços personalizados fora do catálogo?",
      answer:
        "Sim, analisamos solicitações personalizadas para atender às necessidades específicas de cada cliente, dependendo da viabilidade técnica.",
    },
    {
      question: "Como os dados do cliente são protegidos?",
      answer:
        "Seguimos práticas rigorosas de segurança e confidencialidade, garantindo que os dados do cliente sejam protegidos durante todo o processo de análise e entrega.",
    },
    {
      question: "Há pacotes de serviços disponíveis?",
      answer:
        "Sim, oferecemos pacotes personalizados que combinam diferentes serviços para atender demandas específicas, com condições especiais de preço.",
    },
    {
      question: "Posso acompanhar o progresso do meu projeto em tempo real?",
      answer:
        "Sim, disponibilizamos atualizações regulares através de uma página personalizada onde o cliente pode acompanhar o status do projeto.",
    },
    {
      question: "Quais métodos de pagamento são aceitos?",
      answer:
        "Aceitamos pagamentos via transferência bancária, PIX e plataformas de pagamento digital, como PayPal.",
    },
    {
      question: "Os serviços incluem consultoria para projetos existentes?",
      answer:
        "Sim, oferecemos consultoria para melhorar ou otimizar projetos existentes em ciência de dados, IA e visualização de dados.",
    },
  ];
  

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes (FAQ)</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition inline-flex items-center"
        >
          Clique para ver
        </button>

        {isOpen && (
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;
