import { useEffect, useRef } from "react";
import logoJaguar from "../svg/logo_jaguar_solutions.svg?raw";
import nomeJaguar from "../svg/jaguar.svg";

export default function JaguarLogo() {
  const symbolRef = useRef(null);

  useEffect(() => {
    const container = symbolRef.current;
    const svg = container?.querySelector("svg");

    if (!container || !svg) return;

    const paths = [...svg.querySelectorAll("path")];

    const duration = 1.8;
    const stagger = 0.035;
    const fadeDuration = 500;

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      // Configura o traçado animado.
      path.style.stroke = "#FFB800";
      path.style.strokeWidth = "0.7";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.fillOpacity = "0";
      path.style.strokeOpacity = "1";

      path.style.animation = `jaguar-path-draw ${duration}s ease ${index * stagger}s forwards`;
    });

    // Calcula quando o último caminho termina de ser desenhado.
    const lastDelay = Math.max(0, paths.length - 1) * stagger;
    const drawingTime = (duration + lastDelay) * 1000;

    // Após o desenho, apaga apenas o traçado.
    const fadeTimer = window.setTimeout(() => {
      paths.forEach((path) => {
        path.style.transition = `stroke-opacity ${fadeDuration}ms ease`;
        path.style.strokeOpacity = "0";
      });
    }, drawingTime);

    return () => {
      window.clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="brand-lockup">
      <div className="brand-symbol-layer">
        <div
          className="jaguar-draw"
          ref={symbolRef}
          aria-label="Símbolo da cabeça de jaguar"
          role="img"
          dangerouslySetInnerHTML={{ __html: logoJaguar }}
        />
      </div>

      <img
        className="brand-name"
        src={nomeJaguar}
        alt="JAGUAR"
      />
    </div>
  );
}