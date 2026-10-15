
import { useState } from "react";
import Intro from "./components/Intro.jsx";
import Navbar from "./components/Navbar.jsx";
import OrganicAnalysis from "./components/OrganicAnalysis.jsx";
import Services from "./components/Services.jsx";
import "./styles/hero.css";

const CONTACT_EMAIL = "jaguarformatadorpro@gmail.com";

const WHATSAPP_LINK =
  "https://wa.me/5521973560200?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20digitais%20da%20J-Solutions.";

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
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source
          src="/videos/jaguar-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-video-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-overline">
          ESTRATÉGIA · DESIGN · TECNOLOGIA
        </p>

        <h1 className="hero-title">
          Presença digital com intenção.
          <span>Estratégia que aproxima marcas.</span>
        </h1>

        <div className="hero-rule" />

        <p className="hero-description">
          Unimos visão estratégica, criatividade e tecnologia
          para aproximar marcas, pessoas e oportunidades.
        </p>

        <a href="#servicos" className="text-link">
          Veja como podemos ajudar
          <span aria-hidden="true"> ↓</span>
        </a>
      </div>

      <div className="hero-bottom">
        <span>VISÃO HUMANA. INTELIGÊNCIA AMPLIADA.</span>
        <span>01 — 06</span>
      </div>
    </section>
  );
}

function Marketing() {
  return (
    <section className="section marketing" id="estrategia">
      <div className="marketing-intro">
        <span className="eyebrow">
          POSICIONAMENTO DE MERCADO
        </span>

        <h2>
          Não basta estar online.
          <span>É preciso ter direção.</span>
        </h2>

        <p>
          Uma presença digital forte surge quando identidade,
          conteúdo, experiência e objetivos comerciais trabalham
          em conjunto.
        </p>
      </div>

      <div className="marketing-principles">
        <div>
          <span>01</span>
          <p>Entender o contexto e o público.</p>
        </div>

        <div>
          <span>02</span>
          <p>Encontrar oportunidades de diferenciação.</p>
        </div>

        <div>
          <span>03</span>
          <p>Comunicar valor com consistência.</p>
        </div>
      </div>
    </section>
  );
}

function GrowthDashboard() {
  const [period, setPeriod] = useState("12");
  const values = growthData[period];

  const points = values.map((value, index) => [
    20 + (index / Math.max(values.length - 1, 1)) * 960,
    250 - (value / 100) * 210,
  ]);

  const linePath = points
    .map(
      ([x, y], index) =>
        `${index === 0 ? "M" : "L"} ${x} ${y}`
    )
    .join(" ");

  const areaPath = `${linePath} L 980 270 L 20 270 Z`;
  const lastPoint = points[points.length - 1];

  return (
    <section className="section growth" id="crescimento">
      <video
        className="growth-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/dashboard.mp4" type="video/mp4" />
      </video>

      <div
        className="growth-video-overlay"
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="VISÃO DE CRESCIMENTO"
        title="Evoluir com intenção."
        description="Uma representação ilustrativa de como indicadores podem ser acompanhados ao longo do tempo — não uma previsão nem uma promessa de resultados."
      />

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <span className="eyebrow">SIMULAÇÃO VISUAL</span>
            <h3>Trajetória de crescimento</h3>
          </div>

          <div
            className="period-switch"
            aria-label="Período do gráfico"
          >
            {["6", "12", "24"].map((value) => (
              <button
                key={value}
                type="button"
                className={
                  period === value ? "period-active" : ""
                }
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
          aria-label={`Gráfico ilustrativo de crescimento durante ${period} meses`}
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
                  stopColor="#FFB800"
                  stopOpacity="0.22"
                />
                <stop
                  offset="100%"
                  stopColor="#FFB800"
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
              stroke="#FFB800"
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
              <span key={`${period}-${index}`}>
                {index + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="dashboard-footer">
          <span>
            <span className="legend-dot" />
            Índice ilustrativo
          </span>

          <span>
            Dados simulados · Não representam resultados reais
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-contact">
        <span className="eyebrow">
          O PRÓXIMO PASSO COMEÇA AQUI
        </span>

        <h2 className="footer-contact-title">
          Fale Conosco
        </h2>

        <p>
          Conta-nos o desafio. Pensamos contigo no caminho.
        </p>

        
        <div className="footer-contact-links">
          <span className="footer-email">
            {CONTACT_EMAIL}
          </span>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ↗
          </a>
</div>

      </div>

      <div className="footer-bottom">
        <a
          href="#inicio"
          className="nav-brand"
          aria-label="Jaguar — início"
        >
          JAGUAR
        </a>

        <span>
          Estratégia, design e soluções digitais.
        </span>

        <a href="#inicio">Voltar ao início ↑</a>
      </div>


      <span className="footer-credit">
        Site feito por{" "}
        <a href="https://vhsmnk.github.io/vitor-freitas-dev-portfolio/" target="_blank" rel="noopener noreferrer">
          Vitor Freitas
        </a>
      </span>

    </footer>
  );
}

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Hero />

      <main>
        <Services />
        <OrganicAnalysis />
        <Marketing />
        <GrowthDashboard />
      </main>

      <Footer />
    </>
  );
}
