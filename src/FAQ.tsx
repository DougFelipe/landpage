{/* FAQ Section */}
function FAQ() {
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
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes (FAQ)
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default FAQ;
  