import React from 'react';
import {
  BarChart3,
  Brain,
  PieChart as ChartPie,
  Database,
  FileSpreadsheet,
  LineChart,
  MessageSquare,
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
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChartPie className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Data Designer Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre Nós</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Solicite uma Consultoria
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transformando dados em decisões inteligentes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções personalizadas em análise e visualização de dados para impulsionar seu sucesso acadêmico e empresarial.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Comece Agora
            </button>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Serviços</h2>
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

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-center mb-16">
                O <span className="font-semibold">Data Designer Pro</span> oferece soluções especializadas em análise e visualização de dados para otimizar a compreensão e apresentação de informações complexas. Nossos serviços são projetados para fornecer insights valiosos por meio de técnicas avançadas de exploração e modelagem de dados.
              </p>

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
                      <BarChart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Transformação e normalização de variáveis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Network className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Identificação de padrões e tendências</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <PieChart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Cálculo de estatísticas descritivas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <TrendLine className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Análise de correlação entre variáveis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Target className="h-6 w-6 text-blue-600 flex-shrink-0" />
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
                      <Layers className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Design de relatórios visuais para tomada de decisão</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Database className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Criação de dashboards interativos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Robot className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Automação de relatórios visuais</span>
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
                      <Binary className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Testes estatísticos para validação de hipóteses</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Gauge className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Análise de variância (ANOVA e MANOVA)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Modelagem preditiva com regressão</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Network className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">Técnicas de clustering e segmentação de dados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "João Silva",
                role: "Diretor de Operações",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                text: "O Data Designer Pro transformou a forma como apresentamos nossos dados aos stakeholders. O dashboard criado foi essencial para decisões estratégicas."
              },
              {
                name: "Maria Santos",
                role: "Pesquisadora",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                text: "A análise estatística fornecida pela equipe foi fundamental para a publicação do meu artigo em uma revista internacional."
              },
              {
                name: "Pedro Costa",
                role: "CEO",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                text: "Excelente trabalho na automação dos nossos relatórios. Economizamos horas de trabalho manual toda semana."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por Que Escolher a Data Designer Pro?
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
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
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
                <span className="text-lg font-bold">Data Designer Pro</span>
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
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
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
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2025 Data Designer Pro. Todos os direitos reservados.
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