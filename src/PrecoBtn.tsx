import React, { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";


const criterios = {
"Características dos Dados": [
  {
    "criterio": "Volume de dados",
    "descricao": "Quantos registros ou linhas o cliente pretende analisar (ex: <10 mil / >1 milhão)",
    "impacto": "Alto"
  },
  {
    "criterio": "Qualidade dos dados",
    "descricao": "Dados limpos e estruturados reduzem tempo de pré-processamento",
    "impacto": "Alto"
  },
  {
    "criterio": "Formato dos dados",
    "descricao": "Planilhas organizadas são mais fáceis de lidar do que PDFs ou imagens",
    "impacto": "Médio"
  },
  {
    "criterio": "Frequência de atualização",
    "descricao": "Dados estáticos exigem menos manutenção, dados dinâmicos aumentam complexidade",
    "impacto": "Médio"
  },
  {
    "criterio": "Formato original",
    "descricao": "CSV, XLSX, JSON, XML ou banco de dados — afeta leitura e pré-processamento",
    "impacto": "Médio"
  },
  {
    "criterio": "Presença de dados sensíveis",
    "descricao": "Exige anonimização, criptografia ou tratamento ético conforme LGPD",
    "impacto": "Alto"
  },
  {
    "criterio": "Complexidade de relacionamento",
    "descricao": "Tabelas com chaves compostas, relacionamentos complexos (1:N, N:N)",
    "impacto": "Alto"
  },
  {
    "criterio": "Padronização de categorias",
    "descricao": "Campos categóricos (como UF, gênero, setor) bem padronizados agilizam o processo",
    "impacto": "Baixo"
  },
  {
    "criterio": "Necessidade de enriquecimento",
    "descricao": "Inclusão de variáveis externas (ex: IBGE, clima, API pública)",
    "impacto": "Médio"
  },
  {
    "criterio": "Volume de colunas (variáveis)",
    "descricao": "Bases com muitas colunas (>100) exigem feature selection e engenharia de atributos",
    "impacto": "Alto"
  }
],
  "Conhecimento e Preparação do Cliente": [
    {
      criterio: "Familiaridade com análise de dados",
      descricao: "Clientes com conhecimento básico facilitam comunicação e entendimento de entregas",
      impacto: "Baixo"
    },
    {
      criterio: "Clareza dos objetivos",
      descricao: "Projetos bem definidos são mais rápidos de executar",
      impacto: "Médio"
    }
  ],
  "Complexidade da Entrega": [
    {
      criterio: "Tipo de visualização",
      descricao: "Dashboards interativos demandam mais tempo que gráficos estáticos",
      impacto: "Médio"
    },
    {
      criterio: "Integração com sistemas externos",
      descricao: "A necessidade de APIs, bancos de dados ou automações eleva a complexidade",
      impacto: "Alto"
    }
  ]
};


const PrecoBtn = () => {
    const [aberto, setAberto] = useState(false);
    const [categoriaAberta, setCategoriaAberta] = useState<string | null>(null);
  
    const toggleCategoria = (cat: string) => {
      setCategoriaAberta(categoriaAberta === cat ? null : cat);
    };
  
    const ordenarPorImpacto = (a: any, b: any) => {
      const ordem = { "Baixo": 0, "Médio": 1, "Alto": 2 };
      return ordem[a.impacto] - ordem[b.impacto];
    };
  
    return (
      <div className="flex justify-center my-10" id="criterios">
        <div className="w-full max-w-3xl text-center">
          <button
            onClick={() => setAberto(!aberto)}
            className="mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-colors"
          >
            <Info className="h-5 w-5" />
            <span>Critério de Precificação</span>
          </button>
  
          {aberto && (
            <div className="mt-6 space-y-4 text-left">
              {Object.entries(criterios).map(([categoria, itens]) => (
                <div
                  key={categoria}
                  className="border border-gray-200 rounded-md shadow-md bg-white transition"
                >
                  <button
                    className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 flex justify-between items-center cursor-pointer rounded-t-md"
                    onClick={() => toggleCategoria(categoria)}
                  >
                    <span>{categoria}</span>
                    {categoriaAberta === categoria ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {categoriaAberta === categoria && (
                    <ul className="p-4 space-y-3">
                      {[...itens].sort(ordenarPorImpacto).map(
                        ({ criterio, descricao, impacto }, idx) => (
                          <li
                            key={idx}
                            className="text-sm border-b pb-2 last:border-0"
                          >
                            <strong>{criterio}</strong> —{" "}
                            <span className="text-gray-700">{descricao}</span>
                            <br />
                            <strong>Impacto:</strong>{" "}
                            <span
                              className={`italic font-semibold ${
                                impacto === "Alto"
                                  ? "text-red-600"
                                  : impacto === "Médio"
                                  ? "text-yellow-600"
                                  : "text-green-600"
                              }`}
                            >
                              {impacto}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default PrecoBtn;
