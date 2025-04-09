import React, { useState } from "react";

const formFields = {
  "Sob Demanda": [
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "descricao", label: "Descreva brevemente a sua demanda", type: "textarea" },
    { name: "preferencia", label: "Tem preferência de data ou horário?", type: "text" },
    {
      name: "tipoAtendimento",
      label: "Tipo de atendimento desejado:",
      type: "checkbox",
      options: ["Diagnóstico rápido", "Orientação por videochamada", "Entrega de relatório"]
    }
  ],
  "Avaliação e Planejamento": [
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "objetivo", label: "Qual o objetivo do seu projeto?", type: "textarea" },
    { name: "estadoProjeto", label: "Em que estágio está o seu projeto?", type: "text" },
    {
      name: "interesses",
      label: "Quais destas etapas deseja incluir:",
      type: "checkbox",
      options: ["Diagnóstico inicial", "Análise exploratória", "Plano de execução"]
    }
  ],
  "Execução Completa": [
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "descricaoCompleta", label: "Descreva seu projeto e as entregas esperadas", type: "textarea" },
    { name: "prazo", label: "Qual o prazo estimado?", type: "text" },
    {
      name: "componentes",
      label: "Inclua no pacote:",
      type: "checkbox",
      options: ["Dashboard", "Relatório PDF", "Modelo preditivo"]
    }
  ],
  "Serviços Recorrentes": [
    { name: "nome", label: "Nome completo", type: "text" },
    { name: "email", label: "Email para contato", type: "email" },
    { name: "frequencia", label: "Qual a frequência de suporte desejada? (ex: semanal, mensal)", type: "text" },
    { name: "tipoServico", label: "Quais serviços gostaria de incluir?", type: "textarea" },
    {
      name: "itensAdicionais",
      label: "Deseja incluir:",
      type: "checkbox",
      options: ["Suporte por email", "Análise quinzenal", "Atualizações em dashboard"]
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

        {/* Botões de seleção */}
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

        {/* Formulário dinâmico */}
        {servicoSelecionado && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-xl shadow-md space-y-6"
          >
            {campos.map((campo) => (
              <div key={campo.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {campo.label}
                </label>
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
                      <label htmlFor={`${campo.name}-${opcao}`} className="text-sm text-gray-700">
                        {opcao}
                      </label>
                    </div>
                  ))
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

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormularioServicos;
