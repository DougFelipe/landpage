import React, { useState } from "react";

const formFields = {
  "Formulário de Atendimento": [
    {
      name: "servicosDesejados",
      label: "Selecione os serviços que deseja contratar",
      type: "checkbox",
      options: [
        "Sob Demanda",
        "Avaliação e Planejamento",
        "Execução Completa",
        "Serviços Recorrentes"
      ]
    },
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "telefone", label: "Telefone para contato (WhatsApp)", type: "text" },
    {
      name: "familiaridadeDados",
      label: "Qual seu nível de familiaridade com análise de dados?",
      type: "select",
      options: [
        "Nenhuma – preciso de ajuda desde o início",
        "Básica – entendo gráficos simples e planilhas",
        "Intermediária – uso ferramentas como Excel ou Power BI",
        "Avançada – programo em Python ou R e trabalho com bases de dados"
      ]
    },
    {
      name: "objetivoClaro",
      label: "Você tem clareza sobre o objetivo do projeto?",
      type: "radio",
      options: ["Sim", "Mais ou menos", "Não"]
    },
    {
      name: "temBriefing",
      label: "Possui documentação ou briefing inicial?",
      type: "radio",
      options: ["Sim", "Ainda não", "Estou preparando"]
    },
    {
      name: "disponibilidadeReunioes",
      label: "Qual sua disponibilidade para reuniões e validações?",
      type: "select",
      options: [
        "Alta – posso participar com frequência",
        "Média – reuniões semanais ou quinzenais",
        "Baixa – apenas quando necessário"
      ]
    },
    {
      name: "tipoEntrega",
      label: "Tipo de entrega desejada",
      type: "checkbox",
      options: [
        "Relatório textual (PDF, Word)",
        "Dashboard interativo",
        "Gráficos estáticos (PNG, SVG)",
        "Script ou notebook (Jupyter, RMarkdown)",
        "Modelo treinado (.pkl, .rds)",
        "Documentação técnica",
        "Repositório organizado (GitHub)"
      ]
    },
    {
      name: "formatoFinalPreferido",
      label: "Formato preferido da entrega final",
      type: "select",
      options: [
        "PDF",
        ".ipynb (Jupyter Notebook)",
        ".csv",
        ".pkl / .rds",
        "Link online",
        "Outro (especificar depois)"
      ]
    },
    {
      name: "urgenciaEntrega",
      label: "Qual a urgência da entrega?",
      type: "select",
      options: [
        "Muito urgente (Entrega em 24h)",
        "Urgente (1-2 dias)",
        "Rápida (3-5 dias)",
        "Normal (1 semana)",
        "Médio Prazo (1-3 semanas)",     
        "Longo Prazo (mais de 3 semanas)",
        "Sem urgência",   
        "Flexível",
        "Ainda não sei"
      ]
    },
    {
      name: "prazoFlexivel",
      label: "Você é flexível quanto a esse prazo?",
      type: "radio",
      options: ["Sim", "Não"]
    },
    {
      name: "horarioPreferidoAtendimento",
      label: "Horário de atendimento preferencial",
      type: "select",
      options: [
        "Horário comercial (09h às 18h)",
        "Manhã (08h às 12h)",
        "Tarde (13h às 17h)",
        "Noite (18h às 21h)",        
        "Indiferente"
      ]
    },
    {
      name: "canalPreferidoSuporte",
      label: "Canal preferencial para contato e suporte",
      type: "select",
      options: ["WhatsApp", "E-mail", "Videochamada", "Outro (especificar depois)"]
    },
    {
      name: "setorProjeto",
      label: "Qual setor está relacionado ao seu projeto?",
      type: "select",
      options: [
        "Saúde",
        "Educação",
        "Financeiro / Contábil",
        "Setor Público",
        "Startups",
        "Marketing e Pesquisa",
        "RH / Gestão de Pessoas",
        "Acadêmico / Científico",
        "Projeto Pessoal",
        "Outro (especificar depois)"
      ]
    },
    {
      name: "descricaoContextoProjeto",
      label: "Descreva o contexto geral do projeto",
      type: "textarea"
    }
  ]
};

const formatMessage = (tipo: string, dados: { [key: string]: any }) => {
  const linhas: string[] = [];

  linhas.push(`Solicitação de Atendimento: ${dados["servicosDesejados"]?.join(", ") || tipo}`);
  linhas.push("");

  const secoes: { [key: string]: string[] } = {
    "IDENTIFICAÇÃO DO CLIENTE": ["nome", "email", "telefone"],
    "CONHECIMENTO E PREPARAÇÃO": [
      "familiaridadeDados",
      "objetivoClaro",
      "temBriefing",
      "disponibilidadeReunioes"
    ],
    "ENTREGAS ESPERADAS": [
      "tipoEntrega",
      "formatoFinalPreferido"
    ],
    "PRAZOS E SUPORTE": [
      "urgenciaEntrega",
      "prazoFlexivel",
      "horarioPreferidoAtendimento",
      "canalPreferidoSuporte"
    ],
    "SETOR OU DOMÍNIO DE APLICAÇÃO": [
      "setorProjeto",
      "descricaoContextoProjeto"
    ]
  };

  Object.entries(secoes).forEach(([titulo, campos]) => {
    linhas.push("────────────────────────────");
    linhas.push(titulo);
    campos.forEach((campo) => {
      const valor = dados[campo];
      if (valor) {
        if (Array.isArray(valor)) {
          valor.forEach((v) => {
            linhas.push(`- ${v}`);
          });
        } else {
          linhas.push(`${formatarLabel(campo)}: ${valor}`);
        }
      }
    });
    linhas.push("");
  });

  return encodeURIComponent(linhas.join("\n"));
};

const formatarLabel = (campo: string) => {
  return campo
    .replace(/([A-Z])/g, " $1")
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace("Cpf", "CPF")
    .replace("Id", "ID");
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

        <div className="flex flex-wrap justify-center gap-4 mb-10">
  {Object.keys(formFields).map((tipo) => (
    <button
      key={tipo}
      onClick={() => toggleFormulario(tipo)}
      className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-md ${
        servicoSelecionado === tipo
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-4 h-4"
      />
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
