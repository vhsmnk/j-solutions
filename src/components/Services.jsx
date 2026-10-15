
import { useState } from "react";
import "/src/styles/services.css";

const services = [
  {
    number: "01",
    title: "Design Estratégico",
    summary:
      "Uma marca com identidade, consistência e valor percebido.",
    video: "/videos/design.mp4",
    portfolioUrl: "https://vitorfreitaspresentate.carrd.co/",
    description:
      "Construímos identidades visuais e experiências de marca que comunicam valor, reforçam o posicionamento e ajudam pequenos negócios a transmitir confiança e se diferenciar da concorrência.",
    details: [
      "Identidade visual alinhada à essência e aos objetivos do negócio.",
      "Direção criativa consistente para tornar a marca reconhecível.",
      "Peças e experiências digitais pensadas para gerar confiança.",
    ],
  },
  {
    number: "02",
    title: "Marketing Digital",
    summary:
      "Mais clareza no posicionamento e melhores oportunidades de conversão.",
    video: "/videos/mkt-digital.mp4",
    description:
      "Planejamos a comunicação digital para aproximar a empresa do público certo, fortalecer seu posicionamento e transformar atenção em oportunidades comerciais.",
    details: [
      "Planejamento de conteúdo orientado ao público e aos objetivos comerciais.",
      "Posicionamento de marca claro, coerente e reconhecível.",
      "Acompanhamento de indicadores para identificar oportunidades de melhoria.",
    ],
  },
  {
    number: "03",
    title: "Desenvolvimento Web",
    summary:
      "Uma plataforma digital pensada para apresentar, captar e converter.",
    video: "/videos/web-dev.mp4",
    portfolioUrl: "https://vhsmnk.github.io/vitor-freitas-dev-portfolio/",
    description:
      "Criamos sites responsivos e bem estruturados para apresentar os serviços da empresa, facilitar o contato com potenciais clientes e construir uma presença digital preparada para crescer.",
    details: [
      "Sites institucionais e landing pages adaptados a diferentes dispositivos.",
      "Navegação intuitiva e conteúdo organizado para facilitar a decisão do cliente.",
      "Estrutura técnica orientada à performance e aos objetivos do negócio.",
    ],
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const selectedService =
    services.find(
      (service) => service.number === expandedService
    ) ?? null;

  function toggleService(number) {
    setExpandedService((current) =>
      current === number ? null : number
    );
  }

  function closeDetails() {
    setExpandedService(null);
  }

  return (
    <section className="services-interactive" id="servicos">
      <div className="services-interactive-container">
        <div className="services-interactive-heading">
          <span className="services-interactive-eyebrow">
            NOSSAS SOLUÇÕES
          </span>

          <h2>O Que Fazemos</h2>
        </div>

        <div className="services-interactive-grid">
          {services.map((service) => {
            const isExpanded =
              expandedService === service.number;

            return (
              <article
                className={`service-card ${
                  isExpanded ? "is-expanded" : ""
                }`}
                key={service.number}
              >
                <button
                  className="service-card-trigger"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls="service-details"
                  onClick={() => toggleService(service.number)}
                >
                  <span className="service-card-media">
                    <video
                      className="service-card-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    >
                      <source
                        src={service.video}
                        type="video/mp4"
                      />
                    </video>

                    <span
                      className="service-card-media-overlay"
                      aria-hidden="true"
                    />

                    <span className="service-card-number">
                      {service.number}
                    </span>

                    <span
                      className="service-card-indicator"
                      aria-hidden="true"
                    >
                      {isExpanded ? "−" : "+"}
                    </span>
                  </span>

                  <span className="service-card-content">
                    <span className="service-card-title">
                      {service.title}
                    </span>

                    <span className="service-card-summary">
                      {service.summary}
                    </span>
                  </span>
                </button>

                <button
                  className="service-card-footer"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls="service-details"
                  onClick={() => toggleService(service.number)}
                >
                  <span>
                    {isExpanded
                      ? "Serviço selecionado"
                      : "Explorar serviço"}
                  </span>

                  <span aria-hidden="true">
                    {isExpanded ? "↓" : "↗"}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        <div
          className={`services-details ${
            selectedService ? "is-visible" : ""
          }`}
          id="service-details"
          aria-hidden={!selectedService}
          inert={!selectedService}
        >
          {selectedService && (
            <div className="services-details-content">
              <div className="services-details-heading">
                <span className="services-details-number">
                  {selectedService.number}
                </span>

                <div>
                  <span className="services-interactive-eyebrow">
                    CONHEÇA A SOLUÇÃO
                  </span>

                  <h3>{selectedService.title}</h3>
                </div>
              </div>

              <p className="services-details-description">
                {selectedService.description}
              </p>

              <ul className="services-details-benefits">
                {selectedService.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              {selectedService.portfolioUrl && (
                <a
                  className="services-portfolio-link"
                  href={selectedService.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver portfólio completo{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              <button
                className="services-details-close"
                type="button"
                onClick={closeDetails}
              >
                <span>Recolher detalhes</span>
                <span aria-hidden="true">↑</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
