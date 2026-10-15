
import logoJaguar from "../svg/logo_jaguar_solutions.svg?raw";
import nomeJaguar from "../svg/jaguar.svg";
import "./Navbar.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "O que fazemos", href: "#servicos" },
  { label: "Clientes", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="navigation">
      <a
        href="#inicio"
        className="nav-brand"
        aria-label="Jaguar — página inicial"
      >
        <span className="nav-logo-symbol" aria-hidden="true">
          <span
            dangerouslySetInnerHTML={{ __html: logoJaguar }}
          />
        </span>

        <img
          className="nav-logo-name"
          src={nomeJaguar}
          alt="JAGUAR"
        />
      </a>

      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-language" aria-label="Idioma">
        <span className="nav-language-active">PT</span>
        <span className="nav-language-divider">/</span>
        <span>EN</span>
      </div>
    </header>
  );
}


