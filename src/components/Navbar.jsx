
export default function Navbar() {
  return (
    <header className="navigation">
      <a
        href="#inicio"
        className="nav-brand"
        aria-label="Jaguar — página inicial"
      >
        JAGUAR
      </a>

      <nav aria-label="Navegação principal">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#estrategia">Estratégia</a>
        <a href="#crescimento">Dashboard</a>
      </nav>

      <a className="nav-contact" href="#contacto">
        Vamos conversar <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
