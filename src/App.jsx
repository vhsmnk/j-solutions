
import { useState } from "react";
import Navbar from "./components/Navbar";
import JaguarLogo from "./components/JaguarLogo";

const services = [
  {
    number: "01",
    title: "Design estratégico",
    description:
      "Identidades visuais e experiências digitais que comunicam valor e reforçam a diferenciação da marca.",
    mark: "✳",
  },
  {
    number: "02",
    title: "Desenvolvimento web",
    description:
      "Websites responsivos e interfaces intuitivas, concebidos para os objetivos reais de cada negócio.",
    mark: "↗",
  },
  {
    number: "03",
    title: "Marketing digital",
    description:
      "Planeamento de conteúdo e posicionamento para construir uma presença digital consistente.",
    mark: "◎",
  },
];

const portfolio = [
  {
    number: "01",
    category: "Design",
    title: "Identidade visual",
    description: "Conceito de marca e comunicação visual.",
    type: "portfolio-01",
    art: "identity",
  },
  {
    number: "02",
    category: "Desenvolvimento web",
    title: "Experiência digital",
    description: "Interfaces responsivas orientadas aos objetivos do negócio.",
    type: "portfolio-02",
    art: "web",
  },
  {
    number: "03",
    category: "Marketing",
    title: "Posicionamento de marca",
    description: "Estratégia de comunicação e presença digital.",
    type: "portfolio-03",
    art: "marketing",
  },
];

const pillars = [
  {
    number: "01",
    title: "Estratégia antes da execução",
    description:
      "Compreendemos o negócio, o público e os objetivos antes de definir as soluções.",
  },
  {
    number: "02",
    title: "Uma presença digital coerente",
    description:
      "Alinhamos identidade visual, conteúdo e experiência para comunicar com clareza.",
  },
  {
    number: "03",
    title: "Melhoria contínua",
    description:
      "Acompanhamos indicadores e identificamos oportunidades para evoluir a presença digital.",
  },
];

const growthData = {
  6: [12, 18, 16, 29, 35, 42],
  12: [8, 12, 18, 16, 25, 31, 38, 35, 48, 57, 65, 78],
  24: [
    5, 8, 12, 10, 16, 21, 18, 28, 32, 39, 35, 47,
    53, 61, 58, 69, 75, 72, 84, 89, 86, 94, 97, 100,
  ],
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <Navbar />

      <div className="hero-content">
        <p className="hero-overline">
          ESTRATÉGIA · DESIGN · TECNOLOGIA
        </p>

        <div className="brand-symbol">
          <JaguarLogo />
        </div>

        <h1 className="sr-only">
          Jaguar — Estratégia, Design e Soluções Digitais
        </h1>

        <div className="hero-rule" />

        <p className="hero-description">
          Construímos experiências digitais que aproximam
          <br className="desktop-break" /> marcas, pessoas e oportunidades.
        </p>

        <a href="#servicos" className="text-link">
          Descobre o que podemos construir
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>INDEPENDÊNCIA CRIATIVA. VISÃO ESTRATÉGICA.</span>
        <span>01 — 06</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="servicos">
      <SectionHeading
        eyebrow="O QUE FAZEMOS"
        title="Ideias com direção. Soluções com propósito."
        description="Unimos estratégia, criatividade e tecnologia para ajudar marcas a comunicar melhor e crescer no digital."
      />

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <span className="item-number">{service.number}</span>
            <span className="service-mark" aria-hidden="true">
              {service.mark}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="method-strip">
        <span className="eyebrow">COMO TRABALHAMOS</span>
        <p>
          Uma parceria construída com <strong>visão e método.</strong>
        </p>
        <span className="method-note">
          Descoberta, planeamento, execução e evolução contínua.
        </span>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <SectionHeading
        eyebrow="PORTFÓLIO E ÁREAS DE ATUAÇÃO"
        title="Cada detalhe comunica."
        description="Do conceito visual à experiência digital, cada elemento deve servir um propósito e fortalecer a marca."
      />

      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <article
            className={`portfolio-item ${item.type}`}
            key={item.number}
          >
            <div
              className="portfolio-art"
              role="img"
              aria-label={`${item.category}: representação visual conceptual de ${item.title}`}
            >
              <span className="portfolio-art-index">{item.number}</span>

              <div className="art-geometry" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span className="portfolio-art-label">
                {item.category}
              </span>
            </div>

            <div className="portfolio-caption">
              <div>
                <span className="eyebrow">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>

      <p className="portfolio-note">
        As composições apresentadas são elementos conceptuais de demonstração.
      </p>
    </section>
  );
}

function Marketing() {
  return (
    <section className="section marketing" id="estrategia">
      <div className="marketing-intro">
        <span className="eyebrow">POSICIONAMENTO DE MERCADO</span>
        <h2>
          Não basta estar online.
          <span>É preciso ter direção.</span>
        </h2>
        <p>
          A presença digital ganha força quando identidade, conteúdo,
          experiência e objetivos comerciais trabalham em conjunto.
        </p>
      </div>

      <div className="marketing-pillars">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.number}>
            <span className="item-number">{pillar.number}</span>
            <div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GrowthDashboard() {
  const [period, setPeriod] = useState("12");
  const values = growthData[period];

  const points = values.map((value, index) => {
    const x = 20 + (index / Math.max(values.length - 1, 1)) * 960;
    const y = 250 - (value / 100) * 210;
    return [x, y];
  });

  const linePath = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  const areaPath = `${linePath} L 980 270 L 20 270 Z`;
  const lastPoint = points[points.length - 1];

  return (
    <section className="section growth" id="crescimento">
      <SectionHeading
        eyebrow="VISÃO DE CRESCIMENTO"
        title="Evoluir com intenção."
        description="Uma demonstração visual de como os indicadores podem ser acompanhados ao longo do tempo."
      />

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <span className="eyebrow">SIMULAÇÃO DE DESEMPENHO</span>
            <h3>Trajetória de crescimento</h3>
          </div>

          <div className="period-switch" aria-label="Período do gráfico">
            {["6", "12", "24"].map((value) => (
              <button
                key={value}
                type="button"
                className={period === value ? "period-active" : ""}
                onClick={() => setPeriod(value)}
                aria-pressed={period === value}
              >
                {value}M
              </button>
            ))}
          </div>
        </div>

        <div
          className="chart"
          role="img"
          aria-label={`Gráfico de linha ilustrativo de crescimento durante ${period} meses`}
        >
          <div className="chart-grid" aria-hidden="true">
            {[100, 75, 50, 25, 0].map((tick) => (
              <div className="chart-line" key={tick}>
                <span>{tick}</span>
              </div>
            ))}
          </div>

          <svg
            className="growth-chart"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="growth-area"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#B58B00"
                  stopOpacity="0.24"
                />
                <stop
                  offset="100%"
                  stopColor="#B58B00"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              key={`area-${period}`}
              className="growth-area"
              d={areaPath}
              fill="url(#growth-area)"
            />

            <path
              key={`line-${period}`}
              className="growth-line"
              d={linePath}
              pathLength="1000"
              fill="none"
              stroke="#B58B00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle
              key={`point-${period}`}
              className="growth-point"
              cx={lastPoint[0]}
              cy={lastPoint[1]}
              r="6"
            />
          </svg>

          <div className="chart-months" aria-hidden="true">
            {values.map((_, index) => (
              <span key={`${period}-${index}`}>{index + 1}</span>
            ))}
          </div>
        </div>

        <div className="dashboard-footer">
          <span>
            <span className="legend-dot" />
            Índice ilustrativo
          </span>
          <span>Dados simulados · Não representam resultados reais</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div>
        <span className="eyebrow">O PRÓXIMO PASSO COMEÇA AQUI</span>
        <h2>Vamos construir algo com propósito?</h2>
      </div>

      <a
        className="footer-link"
        href="mailto:contacto@j-solutions.pt"
      >
        Fala connosco <span aria-hidden="true">↗</span>
      </a>

      <div className="footer-bottom">
        <a href="#inicio" className="nav-brand" aria-label="Jaguar — início">
          JAGUAR
        </a>
        <span>Estratégia, design e soluções digitais.</span>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Portfolio />
        <Marketing />
        <GrowthDashboard />
      </main>
      <Footer />
    </>
  );
}
