import React, { useState } from "react";

const formFields = {
  "Formulário de Atendimento": [
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "telefone", label: "Telefone para contato (WhatsApp)", type: "text" },
    {
      name: "tipoAtendimento",
      label: "Tipo de atendimento desejado",
      type: "checkbox",
      options: [
        "Diagnóstico rápido (análise pontual com feedback em até 48h)",
        "Orientação por videochamada (consulta em tempo real)",
        "Entrega de relatório (documento completo com insights e recomendações)",
        "Dashboards interativos",
        "Consultoria personalizada contínua",
        "Resolução de dúvidas específicas com suporte técnico"
      ]
    },
    {
      name: "preferenciaHorario",
      label: "Qual o melhor horário para contato ou atendimento?",
      type: "select",
      options: [
        "Manhã (08h às 12h)",
        "Tarde (13h às 17h)",
        "Noite (18h às 21h)",
        "Horário comercial (09h às 18h)",
        "Fins de semana ou feriados",
        "Indiferente"
      ]
    },
    {
      name: "conhecimentoDados",
      label: "Qual o seu nível de familiaridade com análise e manipulação de dados?",
      type: "select",
      options: [
        "Nenhum – preciso de ajuda desde o início",
        "Básico – compreendo planilhas e gráficos simples",
        "Intermediário – uso ferramentas como Excel, Power BI ou Python",
        "Avançado – tenho experiência com bancos de dados e estatísticas"
      ]
    },
    {
      name: "prazoDesejado",
      label: "Prazo desejado para entrega do serviço",
      type: "select",
      options: [
        "1 a 2 dias",
        "3 a 5 dias úteis",
        "1 semana",
        "2 semanas",
        "Até o fim do mês",
        "Sem urgência definida"
      ]
    },
    {
      name: "dadosSensiveis",
      label: "Os dados fornecidos contêm informações sensíveis?",
      type: "radio",
      options: ["Sim", "Não"]
    },
    {
      name: "sensibilidadeDados",
      label: "Qual o grau de confidencialidade dos dados?",
      type: "radio",
      options: [
        "Alta – dados restritos, exigem sigilo",
        "Média – dados internos, sem exposição pública",
        "Baixa – dados abertos ou públicos"
      ]
    },
    {
      name: "volumeDados",
      label: "Volume estimado dos dados a serem analisados",
      type: "select",
      options: [
        "Menos de 1MB (pequeno – poucos registros)",
        "Entre 1MB e 100MB (médio – planilhas comuns)",
        "Entre 100MB e 1GB (grande – conjuntos com múltiplas fontes)",
        "Mais de 1GB (muito grande – datasets extensos ou brutos)"
      ]
    },
    {
      name: "anexoDisponivel",
      label: "Você já possui arquivos prontos para envio?",
      type: "radio",
      options: [
        "Sim – posso enviar agora",
        "Não – ainda estou organizando",
        "Posso providenciar após alinhamento"
      ]
    },
    {
      name: "contextoProblema",
      label: "Descreva brevemente o problema ou objetivo a ser resolvido",
      type: "textarea"
    }
  ]
};

const formatMessage = (tipo, dados) => {
  const linhas = [`Solicitação de Atendimento: *${tipo}*`];
  for (const campo in dados) {
    const valor = dados[campo];
    if (Array.isArray(valor)) {
      linhas.push(`*${campo.replace(/([A-Z])/g, ' $1')}:* ${valor.join(", ")}`);
    } else {
      linhas.push(`*${campo.replace(/([A-Z])/g, ' $1')}:* ${valor}`);
    }
  }
  return encodeURIComponent(linhas.join("\n"));
};

const FormularioServicos = () => {
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [formData, setFormData] = useState({});

  const toggleFormulario = (tipo) => {
    if (servicoSelecionado === tipo) {
      setServicoSelecionado("");
      setFormData({});
    } else {
      setServicoSelecionado(tipo);
      setFormData({});
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const atual = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...atual, value] });
      } else {
        setFormData({ ...formData, [name]: atual.filter((v) => v !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensagem = formatMessage(servicoSelecionado, formData);
    window.open(`https://wa.me/5584998017577?text=${mensagem}`, "_blank");
  };

  const campos = formFields[servicoSelecionado];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Solicite um Atendimento Rápido
        </h2>

        <p className="text-md text-gray-600 text-center max-w-xl mx-auto mb-6">
          Preencha o formulário com as informações principais para que possamos entender rapidamente sua necessidade
          e entrar em contato com agilidade.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(formFields).map((tipo) => (
            <button
              key={tipo}
              onClick={() => toggleFormulario(tipo)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                servicoSelecionado === tipo
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>

        {servicoSelecionado && (
          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow-md space-y-6">
            {campos.map((campo) => (
              <div key={campo.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{campo.label}</label>
                {campo.type === "textarea" ? (
                  <textarea
                    name={campo.name}
                    rows={4}
                    onChange={handleChange}
                    value={formData[campo.name] || ""}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : campo.type === "checkbox" ? (
                  campo.options.map((opcao) => (
                    <div key={opcao} className="flex items-center space-x-2 mb-2">
                      <input
                        type="checkbox"
                        id={`${campo.name}-${opcao}`}
                        name={campo.name}
                        value={opcao}
                        checked={(formData[campo.name] || []).includes(opcao)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor={`${campo.name}-${opcao}`} className="text-sm text-gray-700">{opcao}</label>
                    </div>
                  ))
                ) : campo.type === "radio" ? (
                  campo.options.map((opcao) => (
                    <div key={opcao} className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        id={`${campo.name}-${opcao}`}
                        name={campo.name}
                        value={opcao}
                        checked={formData[campo.name] === opcao}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label htmlFor={`${campo.name}-${opcao}`} className="text-sm text-gray-700">{opcao}</label>
                    </div>
                  ))
                ) : campo.type === "select" ? (
                  <select
                    name={campo.name}
                    onChange={handleChange}
                    value={formData[campo.name] || ""}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {campo.options.map((opcao) => (
                      <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={campo.type}
                    name={campo.name}
                    onChange={handleChange}
                    value={formData[campo.name] || ""}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </div>
            ))}

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors">
              Enviar pelo WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormularioServicos;
