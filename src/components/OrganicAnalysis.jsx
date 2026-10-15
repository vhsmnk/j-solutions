
import "/src/styles/OrganicAnalysis.css";

export default function OrganicAnalysis() {
  return (
    <section className="organic-analysis" id="metodologia">
      <div className="organic-analysis-container">
        {/* Título da seção */}
        <header className="organic-analysis-heading">
          <h2>Análise Orgânica com IA
            integrada.
          </h2>
        </header>

        {/* Card principal */}
        <div className="organic-analysis-card">
          {/* Vídeo integrado ao fundo do card principal */}
          <video
            className="organic-analysis-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="/public/videos/jaguarai-card.mp4"
              type="video/mp4"
            />
          </video>

          {/* Coluna esquerda: card AI First e contato */}
          <div className="organic-analysis-left">
            {/* Card secundário */}
            <div className="organic-analysis-inner-card">
            

              <div className="organic-analysis-inner-content">
              

                <h3>UMA IA</h3>
                <h3>PRÓPRIA</h3>
                

                <p>
                  Inteligência artificial desenvolvida
                  e usada exclusivamente por nós, para
                  analisar dados orgânicos e gerar
                  insights valiosos para o seu negócio.
                </p>
              </div>
            </div>

            {/* Link para a seção de contato */}
            <a
              className="organic-analysis-cta"
              href="#contacto"
            >
              <span>Vamos conversar</span>

              <span
                className="organic-analysis-cta-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Coluna direita: somente texto */}
          <div className="organic-analysis-right">
            
          </div>
        </div>
      </div>
    </section>
  );
}
