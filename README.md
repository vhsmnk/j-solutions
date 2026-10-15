# Jaguar Solutions — Soluções Digitais

Landing page comercial da **J-Solutions**, criada em React para apresentar serviços digitais durante reuniões presenciais com clientes, usando computadores, tablets e telemóveis.

## Objetivo

Apresentar a marca e o seu ecossistema de soluções digitais de forma visual, direta e profissional, apoiando conversas comerciais sobre desenvolvimento web, design, marketing e crescimento digital.

## Identidade visual

A direção visual segue o conceito **Jaguar**:

- **Fundo:** preto carvão e grafite (`#181818`, `#121212`).
- **Cor de destaque:** amarelo/dourado (`#FFB800`).
- **Texto:** branco e tons de cinza.
- **Estilo:** minimalista, sofisticado, com espaço visual e sem excesso de elementos decorativos.
- **Marca:** cabeça de onça desenhada por animação SVG, acompanhada pelo lettering “JAGUAR”.

## Estrutura da experiência

1. **Hero e marca** — apresentação visual da marca, logo animada e mensagem inicial.
2. **Serviços e metodologia** — visão geral do que a J-Solutions oferece e como trabalha.
3. **Portfólio** — áreas de design e desenvolvimento web, com peças/casos de referência.
4. **Marketing e posicionamento** — comunicação digital, presença online e estratégia.
5. **Dashboard de crescimento** — representação visual de evolução e indicadores.
6. **Contacto/CTA final** — encerramento discreto para apoiar a conversa com o cliente.

## Tecnologias

- React
- JavaScript / JSX
- CSS
- SVG para elementos de identidade visual e animações

> A lista de dependências e os comandos de execução devem ser confirmados no `package.json` da versão local do projeto.

## Organização conhecida dos ficheiros

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── components/
│   └── JaguarLogo.jsx
├── styles/
│   └── global.css
├── assets/
│   └── (imagens e recursos visuais)
└── svg/
    ├── jaguar.svg
    ├── logo_jaguar_solutions.svg
    └── solutios.svg
```

A estrutura acima representa os caminhos identificados durante o desenvolvimento; confirme a estrutura no projeto local antes de mover ou renomear ficheiros. O SVG `solutios.svg` existe com essa grafia no projeto, mas a tagline associada foi removida da composição visual mais recente do hero.

## Personalização visual

Os principais pontos de personalização estão concentrados nestes ficheiros:

- **`src/styles/global.css`** — tema global, cores, tipografia, espaçamentos, secções, layout responsivo, hero, portfólio, dashboard e animações CSS.
- **`src/App.css`** — estilos específicos da aplicação, caso existam regras adicionais.
- **`src/index.css`** — estilos de entrada/base, conforme a configuração atual.
- **`src/components/JaguarLogo.jsx`** — composição da marca e renderização da logo.
- **`src/svg/`** — desenhos vetoriais utilizados na identidade visual.
- **`src/assets/`** — imagens e outros recursos visuais, incluindo recursos que possam ser usados em secções como o portfólio.

### Ajustes da logo no CSS global

No bloco `.brand-lockup`, a propriedade `width` controla a largura máxima da composição da cabeça da onça.

No bloco `.brand-name`:

- `width` controla o tamanho do lettering “JAGUAR”.
- `top` controla a posição vertical do lettering sobre a cabeça.
- `left: 50%` e `transform: translateX(-50%)` (ou a transformação equivalente usada pela animação) centralizam o lettering horizontalmente.

Existe uma regra responsiva para ecrãs até 600 px; se alterar a escala ou posição da logo no CSS principal, reveja também essa regra.

## Desenvolvimento e estado atual

A base visual da landing page já foi montada e está em fase de refinamento. O CSS global foi reorganizado para reunir o tema escuro, reduzir regras duplicadas e separar as secções por responsabilidade. A composição da marca foi ajustada para manter a cabeça da onça como elemento desenhado e o lettering sobreposto, sem exibir a tagline no hero.

Antes de publicar ou alterar a aplicação, valide o resultado em ecrãs grandes, tablets e telemóveis, especialmente a posição da logo e o comportamento das secções responsivas.

