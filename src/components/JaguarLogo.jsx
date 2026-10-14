
import { useEffect, useRef } from "react";
import logoJaguar from "../svg/logo_jaguar_solutions.svg?raw";
import nomeJaguar from "../svg/jaguar.svg";

export default function JaguarLogo() {
  const symbolRef = useRef(null);

  useEffect(() => {
    const container = symbolRef.current;
    const svg = container?.querySelector("svg");

    if (!svg) return;

    const paths = [...svg.querySelectorAll("path")];
    const duration = 1.8;
    const stagger = 0.035;
    const lastDelay = Math.max(0, paths.length - 1) * stagger;
    const wordmarkDelay = duration + lastDelay;

    container.style.setProperty(
      "--wordmark-delay",
      `${wordmarkDelay}s`
    );

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      path.style.setProperty("--path-length", length);
      path.style.stroke = "#FFB800";
      path.style.strokeWidth = "0.7";
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.fillOpacity = "0";
      path.style.animation =
        `jaguar-path-draw ${duration}s ease forwards`;
      path.style.animationDelay = `${index * stagger}s`;
    });
  }, []);

  return (
    <div className="brand-lockup">
      <div className="brand-symbol-layer">
        <div
          className="jaguar-draw"
          ref={symbolRef}
          aria-label="Símbolo da cabeça de jaguar"
          role="img"
        >
          <div dangerouslySetInnerHTML={{ __html: logoJaguar }} />
        </div>
      </div>

      <img
        className="brand-name"
        src={nomeJaguar}
        alt="JAGUAR"
      />
    </div>
  );
}
