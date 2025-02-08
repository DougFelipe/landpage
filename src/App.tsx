import React from 'react';
import WhatsAppButton from "./WhatsAppButton";
import FAQ from "./FAQ";
import {
  BarChart3,
  Brain,
  PieChart as ChartPie,
  Database,
  FileSpreadsheet,
  LineChart,
  MessageSquareShare,
  Notebook as Robot,
  ScrollText,
  Settings2,
  Target,
  TrendingUp,
  Microscope,
  Eye,
  Cpu,
  Sparkles,
  ClipboardCheck,
  BarChart,
  Network,
  PieChart,
  LineChart as TrendLine,
  Layers,
  Binary,
  Gauge,
  FileText,
  Linkedin,
  Book,
  Download,
  Loader,
  CheckCheck,
  MessagesSquare,
} from 'lucide-react';



function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
  <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <ChartPie className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-800">Data Designer</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre Nós</a>
        <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
        <a 
          href="https://wa.me/5584998017577?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Data%20Designer." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Logo" 
            className="h-5 w-5"
          />
          <span>Entre em Contato</span>
        </a>
      </div>
    </div>
  </nav>
</header>



      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <img
        src="/LOGO.png"
        alt="Data Designer Logo"
        className="mx-auto mb-6 w-80 max-w-xs md:max-w-sm lg:max-w-md"
      />
      <p className="text-xl text-gray-600 mb-8">
        Soluções personalizadas em Ciência de Dados, Visualização de Dados,
        Machine Learning e AI
      </p>
      {/* Botão de Catálogo */}
      <div className="mb-4">
        <a
          href="/Data%20Designer%20-%20Catálogo%20de%20Serviços.pdf"
          download="Data Designer - Catálogo de Serviços.pdf"
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center gap-2 w-auto mx-auto"
        >
          <Download className="w-5 h-5" />
          Catálogo de Serviços
        </a>
      </div>
      {/* Botão de WhatsApp */}
      <div>
        <WhatsAppButton
          message="Olá, gostaria de saber mais sobre os serviços do Data Designer."
          phoneNumber="5584998017577"
        />
      </div>
    </div>
  </div>
</section>









      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Sobre Nós</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nossa Missão</h3>
                    <p className="text-gray-600">
                      Oferecemos soluções personalizadas em análise e visualização de dados para acadêmicos, pesquisadores e empresas, transformando informações complexas em insights claros e acionáveis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Settings2 className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nosso Diferencial</h3>
                    <p className="text-gray-600">
                      Combinamos expertise técnica com ferramentas de última geração, como Python, R, Power BI e Tableau, para garantir a máxima eficiência e precisão nos resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Serviços Oferecidos</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors">
                <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Ciência de Dados</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors">
                <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Visualização de Dados</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors">
                <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Machine Learning</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors">
                <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">IA</h3>
              </div>
            </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Academic Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Acadêmico</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <LineChart className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Análise Exploratória de Dados (EDA)</h4>
                    <p className="text-gray-600">Análise detalhada e visualização de padrões em seus dados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Dashboards para Dissertações e Teses</h4>
                    <p className="text-gray-600">Visualizações interativas para apresentar seus resultados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ScrollText className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Modelagem Estatística</h4>
                    <p className="text-gray-600">Testes de hipóteses e análises estatísticas avançadas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporativo</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Dashboards Gerenciais</h4>
                    <p className="text-gray-600">Painéis interativos para monitoramento em tempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Robot className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Automação de Relatórios</h4>
                    <p className="text-gray-600">Integração e automatização de processos de dados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Análise de KPIs</h4>
                    <p className="text-gray-600">Monitoramento e análise de indicadores-chave</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            <div className="prose prose-lg max-w-none">
              <div className="space-y-16">
                {/* EDA Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Análise Exploratória de Dados (EDA)</h3>
                  <p className="text-gray-600 mb-6">
                    A Análise Exploratória de Dados (EDA) é uma etapa fundamental no processo de ciência de dados, sendo responsável por entender a estrutura dos dados, identificar padrões e detectar possíveis inconsistências.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Limpeza e estruturação de dados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Transformação e normalização de variáveis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Identificação de padrões e tendências</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Cálculo de estatísticas descritivas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Análise de correlação entre variáveis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ClipboardCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Detecção de outliers e inconsistências</span>
                    </li>
                  </ul>
                </div>

                {/* Visualization Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Visualização de Dados</h3>
                  <p className="text-gray-600 mb-6">
                    A visualização de dados desempenha um papel crucial na interpretação de informações, permitindo que os resultados sejam compreendidos de forma clara e objetiva.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Escolha do tipo de gráfico ideal para cada análise</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Design de relatórios visuais para tomada de decisão</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Criação de dashboards interativos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Automação de relatórios visuais</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Aplicação de design thinking</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Criação de material científico</span>
                    </li>
                  </ul>                 
                </div>

{/* Modeling Section */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Modelagem de Dados</h3>
  <p className="text-gray-600 mb-6">
    A modelagem de dados é essencial para a compreensão de padrões, previsões e validação de hipóteses em diversas áreas da ciência de dados.
  </p>
  <ul className="grid md:grid-cols-2 gap-4">
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Testes estatísticos para validação de hipóteses</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Análise de variância (ANOVA e MANOVA)</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Modelagem preditiva com regressão</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Correlação e análise de dependência entre variáveis</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Técnicas de clustering e segmentação de dados</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Análise de Componentes Principais (PCA)</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Modelos probabilísticos para inferência estatística</span>
    </li>
    <li className="flex items-start space-x-3">
      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Validação cruzada e métricas para avaliar modelos</span>
    </li>
  </ul>
</div>


                {/* AI & Machine Learning Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Inteligência Artificial e Machine Learning</h3>
                  <p className="text-gray-600 mb-6">
                    A Inteligência Artificial (IA) e Machine Learning (ML) são tecnologias essenciais para a análise e previsão de dados, 
                    permitindo soluções inteligentes e escaláveis. Oferecemos desde o pré-processamento até a implementação de modelos preditivos, 
                    garantindo adaptação às necessidades específicas de cada cliente.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Pré-processamento de dados: normalização e balanceamento</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Algoritmos supervisionados e não supervisionados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Construção e treinamento de modelos de aprendizado de máquina</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Automação de análise preditiva baseada em IA</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Criação de pipelines reutilizáveis para pré-processamento</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Análise da importância de variáveis para modelos preditivos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Feature Engineering para otimização de desempenho</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Redução de dimensionalidade com PCA e t-SNE</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Uso de dados sintéticos para expansão de datasets</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Sparkles className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Otimização de hiperparâmetros para máximo desempenho</span>
                    </li>
                  </ul>
                </div>
                
                {/* Dashboards and Visual Reports Section */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Dashboards e Relatórios Visuais</h3>
  <p className="text-gray-600 mb-6">
    Dashboards e relatórios visuais são ferramentas indispensáveis para transformar dados complexos em informações acessíveis e práticas. 
    Este serviço é focado em criar soluções personalizadas e interativas que atendam às demandas de comunicação visual e análise estratégica.
  </p>
  <ul className="grid md:grid-cols-2 gap-4">
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Desenvolvimento de dashboards interativos</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Automação de relatórios gráficos</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Visualização de indicadores-chave de desempenho (KPIs)</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Uso de Storytelling na apresentação de dados</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Criação de gráficos animados</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Melhores práticas de design de dashboards</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Geração de relatórios para defesa de dissertação/tese</span>
    </li>
    <li className="flex items-start space-x-3">
      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Criação de gráficos dinâmicos para publicações científicas</span>
    </li>
  </ul>
</div>

{/* Tools and Technologies Section */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Utilização de Ferramentas e Tecnologias</h3>
  <p className="text-gray-600 mb-6">
    Este serviço oferece capacitação no uso de ferramentas e tecnologias essenciais para análise, visualização e automação de processos, 
    promovendo eficiência e autonomia no trabalho com dados.
  </p>
  <ul className="grid md:grid-cols-2 gap-4">
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Treinamento em Python e R para análise de dados</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Automação de ETL</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Configuração e otimização de notebooks Jupyter e RMarkdown</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Treinamento em versionamento de dados e scripts</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Desenvolvimento de Dashboards</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Processamento de Texto e NLP</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Automação de Tarefas com Scripts Python</span>
    </li>
    <li className="flex items-start space-x-3">
      <Cpu className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Criação de relatórios automáticos com LaTeX e RMarkdown</span>
    </li>
  </ul>
</div>

{/* Interpretation and Communication Section */}
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Interpretação e Comunicação de Resultados</h3>
  <p className="text-gray-600 mb-6">
    Este serviço é focado em auxiliar na interpretação de dados complexos e na comunicação eficaz de resultados, seja em contextos acadêmicos ou corporativos. 
    Nosso objetivo é transformar análises em informações claras, compreensíveis e visualmente impactantes.
  </p>
  <ul className="grid md:grid-cols-2 gap-4">
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Auxílio na escolha de testes estatísticos apropriados</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Interpretação de resultados quantitativos</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Ajuste e refinamento de gráficos acadêmicos</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Sugestões para melhoria da apresentação de dados</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Treinamento em comunicação de dados</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Adaptação de relatórios para diferentes padrões de publicação</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Preparação para defesa de teses ou dissertações</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Criação de relatórios executivos para apresentações</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Preparação de materiais para apresentações corporativas</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Análise de mercado e previsão de tendências</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Construção de narrativas de dados para marketing</span>
    </li>
    <li className="flex items-start space-x-3">
      <MessageSquareShare className="h-6 w-6 text-blue-600 flex-shrink-0" />
      <span className="text-gray-600">Avaliação de desempenho de equipes</span>
    </li>
  </ul>
</div>



              </div>
            </div>
          </div>
        </div>
      </section>

{/* About Me Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center">
      <img 
        src="/Douglas.jpg" 
        alt="Douglas Felipe" 
        className="w-60 h-60 rounded-full mx-auto mb-6 object-cover border-4 border-gray-200 shadow-lg"
      />
      <h3 className="text-3xl font-bold text-gray-900">Douglas Felipe</h3>
      <h4 className="text-lg text-gray-600 font-semibold">Biomedical Scientist | MSc. in Bioinformatics</h4>
    </div>

    {/* Academic Background */}
    <div className="max-w-4xl mx-auto mt-12 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Formação Acadêmica</h3>
      <ul className="space-y-4 text-left mx-auto w-fit">
        <li className="flex items-center space-x-3">
          <Loader className="h-6 w-6 text-blue-500" />
          <span className="text-gray-600 font-semibold">Doutorado em Bioinformática (UFRN | PPg - Bioinfo)</span>
        </li>
        <li className="flex items-center space-x-3">
          <Loader className="h-6 w-6 text-blue-500" />
          <span className="text-gray-600 font-semibold">Eng. de Software (IMD - UFRN)</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCheck className="h-6 w-6 text-green-500" />
          <span className="text-gray-600 font-semibold">Especialização em Ciência de Dados (IMD - UFRN)</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCheck className="h-6 w-6 text-green-500" />
          <span className="text-gray-600 font-semibold">Especialização em Inteligência Artificial (IMD - UFRN)</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCheck className="h-6 w-6 text-green-500" />
          <span className="text-gray-600 font-semibold">Especialização em Inteligência Computacional (IMD - UFRN)</span>
        </li>
      </ul>
    </div>

{/* Links Section */}
<div className="max-w-4xl mx-auto mt-12 flex justify-center space-x-4">
  <a 
    href="https://www.linkedin.com/in/douglas-feliipe/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
  >
    <Linkedin className="h-5 w-5" />
    <span>LinkedIn</span>
  </a>

  <a 
    href="http://lattes.cnpq.br/8053019098525102" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 transition"
  >
    <Book className="h-5 w-5" />
    <span>Lattes</span>
  </a>

  <a 
    href="/curriculum-vitae.pdf" 
    download 
    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition"
  >
    <Book className="h-5 w-5" />
    <span>Vitae</span>
  </a>
</div>

  </div>
</section>

{/* FAQ Section */}
<div>
      {/* Outras seções */}
      <FAQ />
    </div>




      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por Que Escolher a Data Designer?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <FileSpreadsheet className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Soluções Personalizadas</h3>
              <p className="text-gray-600">
                Cada projeto é único e recebe atenção personalizada para atender suas necessidades específicas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <MessageSquareShare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Atendimento Especializado</h3>
              <p className="text-gray-600">
                Suporte técnico dedicado e comunicação clara durante todo o processo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Resultados Impactantes</h3>
              <p className="text-gray-600">
                Visualizações claras e insights acionáveis para tomada de decisão.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <ChartPie className="h-6 w-6 text-blue-400" />
          <span className="text-lg font-bold">Data Designer</span>
        </div>
        <p className="text-gray-400">
          Transformando dados em decisões inteligentes
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Contato Direto</h4>
        <WhatsAppButton
          message="Olá, gostaria de saber mais sobre os serviços do Data Designer."
          phoneNumber="5584998017577"
        />
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          © 2025 Data Designer. Todos os direitos reservados.
        </p>
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          Seus dados são protegidos de acordo com nossa política de privacidade.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
