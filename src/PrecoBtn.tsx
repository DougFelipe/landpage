import React, { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";


const criterios = {
"Características dos Dados": [
  {
    criterio: "Volume de dados",
    descricao: "Quantos registros ou linhas o cliente pretende analisar (ex: <10 mil / >1 milhão)",
    impacto: "Alto",
    explicacao: "🔴 Quanto maior o volume, maior o tempo de processamento e a complexidade técnica."
  },
  {
    criterio: "Qualidade dos dados",
    descricao: "Dados limpos e estruturados reduzem tempo de pré-processamento",
    impacto: "Alto",
    explicacao: "🔴 Dados sujos ou inconsistentes demandam maior tempo de limpeza e validação."
  },
  {
    criterio: "Formato dos dados",
    descricao: "Planilhas organizadas são mais fáceis de lidar do que PDFs ou imagens",
    impacto: "Médio",
    explicacao: "🟡 Formatos não estruturados exigem etapas adicionais de extração e formatação."
  },
  {
    criterio: "Frequência de atualização",
    descricao: "Dados estáticos exigem menos manutenção, dados dinâmicos aumentam complexidade",
    impacto: "Médio",
    explicacao: "🟡 Dados que mudam frequentemente exigem automação e rotinas de atualização contínuas."
  },
  {
    criterio: "Formato original",
    descricao: "CSV, XLSX, JSON, XML ou banco de dados — afeta leitura e pré-processamento",
    impacto: "Médio",
    explicacao: "🟡 Alguns formatos requerem bibliotecas específicas e lógica de conversão para análise."
  },
  {
    criterio: "Presença de dados sensíveis",
    descricao: "Exige anonimização, criptografia ou tratamento ético conforme LGPD",
    impacto: "Alto",
    explicacao: "🔴 Dados sensíveis aumentam a responsabilidade legal e exigem práticas de segurança."
  },
  {
    criterio: "Complexidade de relacionamento",
    descricao: "Tabelas com chaves compostas, relacionamentos complexos (1:N, N:N)",
    impacto: "Alto",
    explicacao: "🔴 Relacionamentos exigem modelagem relacional ou transformação prévia antes da análise."
  },
  {
    criterio: "Padronização de categorias",
    descricao: "Campos categóricos (como UF, gênero, setor) bem padronizados agilizam o processo",
    impacto: "Baixo",
    explicacao: "🟢 Boa padronização reduz retrabalho com limpeza e facilita agrupamentos e análises."
  },
  {
    criterio: "Necessidade de enriquecimento",
    descricao: "Inclusão de variáveis externas (ex: IBGE, clima, API pública)",
    impacto: "Médio",
    explicacao: "🟡 Integração de dados externos demanda busca, mapeamento e validação adicional."
  },
  {
    criterio: "Volume de colunas (variáveis)",
    descricao: "Bases com muitas colunas (>100) exigem feature selection e engenharia de atributos",
    impacto: "Alto",
    explicacao: "🔴 Mais variáveis aumentam o custo computacional e exigem técnicas para redução dimensional."
  }
],
"Conhecimento e Preparação do Cliente": [
  {
    criterio: "Familiaridade com análise de dados",
    descricao: "O cliente já possui conhecimento básico em análise, estatística ou ferramentas como Excel, Python, R, Google Colab?",
    impacto: "Médio",
    explicacao: "🟡 Quanto menor o conhecimento, maior a necessidade de explicação e suporte técnico contínuo."
  },
  {
    criterio: "Clareza sobre os objetivos do projeto",
    descricao: "O cliente consegue descrever com precisão o que deseja com a análise? Há uma pergunta clara ou hipótese?",
    impacto: "Alto",
    explicacao: "🔴 Falta de clareza gera retrabalho, aumenta o número de interações e pode causar desalinhamentos."
  },
  {
    criterio: "Possui documentação ou briefing inicial",
    descricao: "O cliente possui um documento com informações do projeto, como escopo, contexto e variáveis?",
    impacto: "Médio",
    explicacao: "🟡 Um briefing bem estruturado reduz tempo de coleta de informações e aumenta a assertividade das entregas."
  },
  {
    criterio: "Já realizou trabalho semelhante anteriormente",
    descricao: "Experiência prévia com projetos de dados, ciência de dados ou consultorias semelhantes.",
    impacto: "Baixo",
    explicacao: "🟢 Experiência anterior facilita a comunicação e entendimento dos processos, exigindo menos orientação."
  },
  {
    criterio: "Disponibilidade para reuniões e validações",
    descricao: "Frequência e agilidade com que o cliente consegue participar de reuniões ou validar entregas.",
    impacto: "Médio",
    explicacao: "🟡 Baixa disponibilidade pode atrasar o cronograma e exigir tempo adicional para revalidações."
  },
  {
    criterio: "Expectativas sobre prazos e entregas",
    descricao: "O cliente já possui um cronograma definido ou precisa de uma entrega urgente?",
    impacto: "Alto",
    explicacao: "🔴 Urgência exige reordenamento de prioridades, aumento de carga horária e pode impactar diretamente no custo."
  },
  {
    criterio: "Tipo de suporte esperado",
    descricao: "Apoio pontual, acompanhamento técnico contínuo ou sessões explicativas?",
    impacto: "Médio",
    explicacao: "🟡 Suporte contínuo demanda maior tempo de dedicação e disponibilidade para esclarecimentos recorrentes."
  }
],
"Tipo de Serviço Contratado": [
  {
    criterio: "Serviço sob demanda (pontual)",
    descricao: "Atendimento único para resolver uma necessidade específica, como análise rápida ou consultoria técnica.",
    impacto: "Médio",
    explicacao: "🟡 Requer agilidade e foco, mas envolve escopo limitado."
  },
  {
    criterio: "Avaliação e planejamento estratégico",
    descricao: "Diagnóstico inicial com análise exploratória e planejamento das ações futuras para execução estruturada.",
    impacto: "Médio",
    explicacao: "🟡 Exige esforço analítico, mas não demanda implementação."
  },
  {
    criterio: "Execução completa do projeto",
    descricao: "Engloba todas as etapas: análise, modelagem, entregas visuais e documentação.",
    impacto: "Alto",
    explicacao: "🔴 Alta complexidade, maior dedicação, acompanhamento contínuo e múltiplas entregas."
  },
  {
    criterio: "Serviços recorrentes",
    descricao: "Acompanhamento contínuo (ex: manutenção de dashboards, análise mensal, relatórios periódicos).",
    impacto: "Alto",
    explicacao: "🔴 Envolve compromissos de médio/longo prazo e atualizações constantes."
  },
  {
    criterio: "Capacitação",
    descricao: "Treinamentos, explicações técnicas ou acompanhamento individual do cliente para aprendizado.",
    impacto: "Alto",
    explicacao: "🔴 Envolve tempo ativo em reuniões e didática personalizada."
  },
  {
    criterio: "Construção de dashboards e relatórios visuais",
    descricao: "Desenvolvimento de visualizações, templates, painéis interativos ou relatórios prontos para apresentação.",
    impacto: "Médio",
    explicacao: "🟡 Depende da complexidade da ferramenta e do grau de customização exigido."
  },
  {
    criterio: "Modelagem preditiva ou classificação com IA/ML",
    descricao: "Implementação de algoritmos, tuning, teste de performance e validação de modelos.",
    impacto: "Alto",
    explicacao: "🔴 Alto esforço técnico e risco associado à qualidade dos dados."
  },
  {
    criterio: "Revisão e reestruturação de projetos existentes",
    descricao: "Melhorias em projetos já iniciados, revisão de scripts ou dashboards antigos.",
    impacto: "Médio",
    explicacao: "🟡 Pode exigir leitura de código ou reformulações complexas."
  },
  {
    criterio: "Automação de processos",
    descricao: "Criação de scripts ou pipelines automáticos para ETL, análises ou geração de relatórios.",
    impacto: "Alto",
    explicacao: "🔴 Complexidade de integração e manutenção futura afetam diretamente o valor."
  }
],
"Tipo de Entrega Esperada": [
  {
    criterio: "Relatório textual (PDF, Word, LaTeX)",
    descricao: "Documento descritivo com análise, conclusões e gráficos embutidos.",
    impacto: "Médio",
    explicacao: "🟡 Exige atenção à redação, estruturação e apresentação visual, mas sem interatividade."
  },
  {
    criterio: "Dashboard interativo (Dash, Power BI, Streamlit, Shiny)",
    descricao: "Interface visual dinâmica com filtros, gráficos e painéis personalizáveis.",
    impacto: "Alto",
    explicacao: "🔴 Envolve desenvolvimento visual e lógico, além de testes e ajustes com feedback do cliente."
  },
  {
    criterio: "Gráficos e visualizações estáticas (PNG, SVG, PDF)",
    descricao: "Entregas visuais prontas para apresentações ou relatórios, sem interatividade.",
    impacto: "Baixo",
    explicacao: "🟢 Requer apenas exportação e ajustes pontuais na aparência."
  },
  {
    criterio: "Script ou notebook (Jupyter, RMarkdown)",
    descricao: "Entrega do código com explicações comentadas e reprodutibilidade garantida.",
    impacto: "Médio",
    explicacao: "🟡 Requer organização, documentação e padronização do código."
  },
  {
    criterio: "Modelo treinado (ex: .pkl, .rds, .h5)",
    descricao: "Arquivo final com modelo pronto para uso em previsão ou classificação.",
    impacto: "Alto",
    explicacao: "🔴 Exige treinamento, validação, documentação e explicação técnica."
  },
  {
    criterio: "Documentação técnica",
    descricao: "Descrição formal de pipelines, decisões metodológicas, ferramentas utilizadas e como reutilizar.",
    impacto: "Médio",
    explicacao: "🟡 Necessita linguagem precisa e acessível para diferentes perfis técnicos."
  },
  {
    criterio: "Repositório em GitHub ou estrutura de projeto entregue",
    descricao: "Código versionado com README, pastas organizadas e instruções de execução.",
    impacto: "Médio",
    explicacao: "🟡 Requer estruturação do projeto para facilitar manutenção futura e colaboração."
  }
],
"Prazos e Suporte": [
  {
    criterio: "Urgência da entrega",
    descricao: "O cliente exige entrega em poucas horas ou poucos dias? Existe uma data-limite inadiável?",
    impacto: "Alto",
    explicacao: "🔴 Urgências demandam reorganização da agenda, trabalho fora do horário comercial ou tempo exclusivo."
  },
  {
    criterio: "Flexibilidade no prazo",
    descricao: "O cliente é flexível em relação ao cronograma? Há possibilidade de escalonamento das entregas?",
    impacto: "Baixo",
    explicacao: "🟢 Flexibilidade facilita encaixe no fluxo de trabalho, reduz pressão e evita horas extras."
  },
  {
    criterio: "Frequência de reuniões",
    descricao: "O cliente espera reuniões semanais, quinzenais ou apenas pontuais para alinhamento?",
    impacto: "Médio",
    explicacao: "🟡 Maior frequência exige disponibilidade recorrente e pode aumentar o tempo total investido."
  },
  {
    criterio: "Canal de suporte preferencial",
    descricao: "O atendimento será feito via WhatsApp, e-mail, videochamada ou sistema específico?",
    impacto: "Médio",
    explicacao: "🟡 Suporte síncrono (ex: chamadas) demanda tempo imediato, enquanto assíncrono (e-mail) permite planejamento."
  },
  {
    criterio: "Horário de atendimento esperado",
    descricao: "O cliente espera suporte em horário comercial, noturno ou aos fins de semana?",
    impacto: "Alto",
    explicacao: "🔴 Atendimentos fora do horário padrão geram sobrecarga e exigem ajustes especiais na agenda."
  },
  {
    criterio: "Tempo estimado de suporte pós-entrega",
    descricao: "O cliente terá direito a revisões? Por quanto tempo o suporte será mantido após a entrega final?",
    impacto: "Médio",
    explicacao: "🟡 Suporte estendido exige planejamento e possível reserva de agenda futura."
  },
  {
    criterio: "Política de retrabalho ou revisões",
    descricao: "O cliente poderá solicitar ajustes ilimitados ou terá um número definido de revisões?",
    impacto: "Alto",
    explicacao: "🔴 Revisões ilimitadas ou mal definidas podem gerar esforço extra não previsto."
  }
],
"Setor ou Domínio de Aplicação": [
  {
    criterio: "Setor de Saúde",
    descricao: "Análises envolvendo dados clínicos, laboratoriais ou genômicos que exigem tratamento ético e sigiloso.",
    impacto: "Alto",
    explicacao: "🔴 Dados biomédicos costumam ser sensíveis e exigem cuidados extras com anonimização e interpretação especializada."
  },
  {
    criterio: "Setor Financeiro / Contábil",
    descricao: "Projetos com dados financeiros, contábeis ou bancários exigem precisão, rastreabilidade e alta responsabilidade.",
    impacto: "Alto",
    explicacao: "🔴 Pequenos erros podem comprometer a credibilidade das análises ou gerar problemas legais e fiscais."
  },
  {
    criterio: "Educação / Ensino Superior",
    descricao: "Trabalhos com notas, avaliações, evasão, ENADE ou outras métricas educacionais.",
    impacto: "Médio",
    explicacao: "🟡 Requer interpretação clara e apresentação didática dos resultados para públicos diversos."
  },
  {
    criterio: "Setor Público / Governamental",
    descricao: "Dados de políticas públicas, indicadores sociais, licitações ou gastos governamentais.",
    impacto: "Médio",
    explicacao: "🟡 Pode exigir padronização com bases externas (IBGE, SUS, MEC) e clareza na comunicação com a sociedade."
  },
  {
    criterio: "Startups / Inovação",
    descricao: "Projetos iniciais com bases pequenas, experimentais ou em constante mudança.",
    impacto: "Médio",
    explicacao: "🟡 Maior incerteza sobre escopo e foco nas entregas visuais e resultados rápidos podem afetar o esforço."
  },
  {
    criterio: "Marketing e Pesquisa de Opinião",
    descricao: "Análises de formulários, enquetes, comportamento de clientes e tendências.",
    impacto: "Baixo",
    explicacao: "🟢 Bases mais simples e foco em visualizações facilitam o processo técnico."
  },
  {
    criterio: "Projetos Acadêmicos ou Científicos",
    descricao: "TCCs, dissertações, artigos científicos e publicações técnicas.",
    impacto: "Médio",
    explicacao: "🟡 Exige rigor metodológico, padronização em ABNT ou LaTeX e atenção à comunicação acadêmica."
  },
  {
    criterio: "Recursos Humanos / Gestão de Pessoas",
    descricao: "Análises de clima, engajamento, turnover e desempenho.",
    impacto: "Médio",
    explicacao: "🟡 Envolve tratamento de texto, categorização subjetiva e indicadores internos sensíveis."
  },
  {
    criterio: "Projetos Pessoais ou Portfólio",
    descricao: "Consultorias individuais, mentorias ou pequenos projetos com escopo flexível.",
    impacto: "Baixo",
    explicacao: "🟢 Alta autonomia e menor formalidade facilitam o desenvolvimento com menor esforço técnico."
  }
],
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
                        ({ criterio, descricao, impacto, explicacao }, idx) => (
                          <li
                            key={idx}
                            className="text-sm border-b pb-3 last:border-0"
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
                            {explicacao && (
                              <p className="text-gray-500 text-xs mt-1">
                                {explicacao}
                              </p>
                            )}
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
