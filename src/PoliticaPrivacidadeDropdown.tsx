import React, { useState } from "react";

const secaoPolitica = [
  {
    titulo: "1. Introdução",
    resumo: "Esta política regula o uso de dados pessoais conforme a LGPD.",
    conteudo: `A presente Política de Privacidade regula, em conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de Dados Pessoais (LGPD), o tratamento de dados pessoais realizados pela Data Designer, sob responsabilidade do profissional Douglas Felipe, doravante denominada “Controlador”.\n\nAo utilizar nossos formulários e serviços, o titular declara ter lido e compreendido os termos aqui estabelecidos, conferindo seu consentimento livre, informado e inequívoco.`
  },
  {
    titulo: "2. Base Legal para o Tratamento de Dados",
    resumo: "Baseado nos incisos I e V do Art. 7º da LGPD.",
    conteudo: `O tratamento dos dados pessoais pela Data Designer é realizado com observância às bases legais previstas no Art. 7º da LGPD, especialmente:\n- Inciso I – Mediante o fornecimento de consentimento pelo titular;\n- Inciso V – Quando necessário para execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular.`
  },
  {
    titulo: "3. Finalidade da Coleta de Dados",
    resumo: "Para identificação, contato, atendimento, e execução dos serviços.",
    conteudo: `Nos termos do Art. 6º, I e II, da LGPD, os dados pessoais serão tratados para finalidades específicas, legítimas e explícitas, tais como:\n- Identificação do titular e contato direto com o solicitante;\n- Compreensão da demanda para avaliação técnica e planejamento do atendimento;\n- Execução dos serviços contratados, como análise de dados, desenvolvimento de relatórios ou dashboards;\n- Geração de comunicação automatizada via WhatsApp;\n- Cumprimento de obrigações legais e regulatórias, quando aplicável.`
  },
  {
    titulo: "4. Tipos de Dados Coletados",
    resumo: "Nome, email, dados do projeto, arquivos e informações fornecidas.",
    conteudo: `A depender da natureza do serviço contratado, poderão ser coletados os seguintes dados:\n- Dados de identificação: nome completo, e-mail, telefone;\n- Dados profissionais ou acadêmicos relacionados ao projeto;\n- Informações fornecidas pelo próprio usuário nos campos descritivos do formulário;\n- Dados de projeto, banco de dados ou arquivos fornecidos voluntariamente (planilhas, imagens, scripts, modelos).`
  },
  {
    titulo: "5. Tempo de Retenção dos Dados",
    resumo: "Os dados serão mantidos apenas durante a execução e garantia dos serviços.",
    conteudo: `Nos termos do Art. 15 da LGPD, os dados pessoais serão conservados pelo tempo necessário à realização das finalidades para os quais foram coletados, respeitando-se:\n- A execução do serviço contratado;\n- O período de garantia para ajustes ou revisões (até 30 dias após entrega final);\n- Solicitações de retenção pelo próprio titular.\n\nApós esse prazo, os dados serão permanentemente eliminados, salvo disposição legal em contrário (Art. 16).`
  },
  {
    titulo: "6. Compartilhamento de Dados",
    resumo: "Não compartilhamos dados, salvo por exigência legal ou consentimento.",
    conteudo: `A Data Designer não compartilha dados com terceiros sob nenhuma hipótese, salvo:\n- Quando exigido por ordem judicial ou autoridade competente;\n- Mediante consentimento específico do titular para eventual parceria técnica.\n(Art. 7º, §5º e Art. 26 da LGPD)`
  },
  {
    titulo: "7. Direitos do Titular",
    resumo: "Você tem o direito de acessar, corrigir, revogar e eliminar seus dados.",
    conteudo: `Em conformidade com o Art. 18 da LGPD, o titular dos dados poderá, a qualquer momento:\n- Confirmar a existência do tratamento;\n- Acessar seus dados;\n- Corrigir dados incompletos, inexatos ou desatualizados;\n- Solicitar a anonimização, bloqueio ou eliminação;\n- Revogar consentimento;\n- Solicitar a portabilidade dos dados.\n\nAs solicitações podem ser feitas diretamente para o e-mail: datadesigner.pro@gmail.com`
  },
  {
    titulo: "8. Medidas de Segurança",
    resumo: "Adotamos medidas técnicas e administrativas de proteção.",
    conteudo: `O Controlador adota medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados, perda, destruição ou vazamento, em conformidade com o Art. 46 da LGPD, como:\n- Criptografia de dados sensíveis durante o envio via WhatsApp;\n- Armazenamento temporário e seguro em ambiente local;\n- Acesso restrito aos dados apenas pelo responsável técnico.`
  },
  {
    titulo: "9. Consentimento",
    resumo: "O consentimento é obtido de forma clara e pode ser revogado a qualquer momento.",
    conteudo: `Nos termos do Art. 8º da LGPD, o consentimento do titular é colhido de forma específica, destacada e para finalidades determinadas, podendo ser revogado a qualquer tempo.\n\nAo preencher o formulário, o usuário expressa sua concordância com os termos aqui dispostos.`
  },
  {
    titulo: "10. Responsabilidade",
    resumo: "Nos comprometemos com a boa-fé e segurança no tratamento dos dados.",
    conteudo: `O Controlador se compromete a observar os princípios da boa-fé, necessidade, adequação e segurança no tratamento de dados pessoais (Art. 6º, LGPD), sendo responsável pelo correto tratamento dos dados nos termos do Art. 42.`
  },
  {
    titulo: "11. Atualizações da Política de Privacidade",
    resumo: "Podemos atualizar esta política para atender a mudanças legais ou técnicas.",
    conteudo: `Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir adequações legais, tecnológicas ou operacionais. A versão atualizada estará sempre disponível no site.\n\nData da última atualização: Abril de 2025\nResponsável pelo tratamento: Douglas Felipe – Data Designer`
  }
];

const PoliticaPrivacidadeDropdown = () => {
  const [mostrar, setMostrar] = useState(false);
  const [visiveis, setVisiveis] = useState(Array(secaoPolitica.length).fill(false));

  const toggleSecao = (index: number) => {
    const novoEstado = [...visiveis];
    novoEstado[index] = !novoEstado[index];
    setVisiveis(novoEstado);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h2>
        <p className="text-gray-600 mb-6">
          Seus dados são protegidos conforme a LGPD (Lei Geral de Proteção de Dados – nº 13.709/2018).
        </p>

        <button
          onClick={() => setMostrar(!mostrar)}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          {mostrar ? "Ocultar política" : "Clique para ver"}
        </button>

        {mostrar && (
          <div className="mt-10 text-left space-y-6">
            {secaoPolitica.map((secao, index) => (
              <div key={index} className="border border-gray-200 rounded-md shadow-sm p-4">
                <button
                  onClick={() => toggleSecao(index)}
                  className="w-full text-left text-lg font-semibold text-blue-700 hover:underline"
                >
                  {secao.titulo} –{" "}
                  <span className="text-sm text-gray-600">{secao.resumo}</span>
                </button>
                {visiveis[index] && (
                  <div className="mt-3 text-gray-700 whitespace-pre-line text-sm">
                    {secao.conteudo}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PoliticaPrivacidadeDropdown;
