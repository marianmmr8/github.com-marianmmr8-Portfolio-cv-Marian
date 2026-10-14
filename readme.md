# Portfolio María de los Ángeles Martín Rojas 

Este portfolio lo he creado a partir de varias ideas que he visto, con ayuda de la AI he creado el avatar que se mueve "inspirado en mí", es muy gracioso ya que sigue con la mirada al cursor por donde va.
Mas abajo dejo el codigo del avatar , donde hay varios avatares y puedes elegir el que mas te guste 

En mi portfolio hablo un poco sobre mí,lo que realmente me motiva y para lo que me estoy formando ,hablo de mi expereincia laboral donde ademas de ver mis trabajos te puedes descargar mi cv actualizadoy y también hay un apartado hablando de mis proyectos donde puedes ver un enlace a mi github.

Lo puedes ver en Netlify
https://portfolio-marian.netlify.app


### Creación Código

 
 ![imagen-avatar](Captura%20de%20pantalla%202026-10-13%20173208.png)

 ![imagen-codigo-unsoloavatar](Captura%20de%20pantalla%202026-10-13%20173323.png)

**Este es el codigo que he utilizado para el avatar**
En este codigo están los cuatro avatares que se ven en la captura, puedes elegir el que tu quieras 


<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>
<title>Retrato en capas</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@400;600&display=swap">
<style>
/* Layout: selector de personaje + escenario grande a la izquierda, panel de control a la derecha; abajo, el "cómo funciona". Estética risograph. */
:root {
  --paper: #e3edf0;
  --panel: #f4f9fa;
  --fg: #1d2a44;
  --muted: #56647c;
  --rule: #c3d3d8;
  --accent: #e2604f;
  --accent-ink: #ffffff;
  /* tinta del dibujo: igual en ambos temas */
  --line: #1d2a44;
  --white: #fffdf8;
  --display: "Bricolage Grotesque", "Arial Narrow", system-ui, sans-serif;
  --body: "Atkinson Hyperlegible", system-ui, -apple-system, "Segoe UI", sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --paper: #131b29; --panel: #1a2436; --fg: #e6edf4; --muted: #9aa8bd;
    --rule: #2c3a52; --accent: #f27a69; --accent-ink: #131b29; color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --paper: #131b29; --panel: #1a2436; --fg: #e6edf4; --muted: #9aa8bd;
  --rule: #2c3a52; --accent: #f27a69; --accent-ink: #131b29; color-scheme: dark;
}

* { box-sizing: border-box; }
body {
  background: var(--paper); color: var(--fg);
  font-family: var(--body); font-size: 16px; line-height: 1.55;
  padding: 28px 20px 56px;
}
.wrap { max-width: 1060px; margin: 0 auto; display: grid; gap: 40px; }

header { display: grid; gap: 6px; max-width: 62ch; }
.eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
h1 { font-family: var(--display); font-weight: 800; font-size: clamp(34px, 6vw, 56px); line-height: 1; margin: 0; letter-spacing: -.02em; text-wrap: balance; }
h1 em { font-style: normal; color: var(--accent); }
header p { margin: 6px 0 0; color: var(--muted); }

.demo { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 32px; align-items: start; }
@media (max-width: 760px) { .demo { grid-template-columns: 1fr; } }

/* ---------- selector ---------- */
.picker { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
@media (max-width: 520px) { .picker { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.pick {
  font: inherit; color: var(--fg); text-align: left; cursor: pointer;
  background: var(--panel); border: 2px solid var(--rule); border-radius: 12px;
  padding: 8px 10px; display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 2px 8px; align-items: center;
}
.pick:hover { border-color: var(--muted); }
.pick[aria-pressed="true"] { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); }
.pick .swatch { grid-row: span 2; width: 34px; height: 34px; border-radius: 50%; border: 2px solid var(--line); position: relative; overflow: hidden; }
.pick .swatch i { position: absolute; left: 7px; right: 7px; top: 9px; bottom: -6px; border-radius: 50% 50% 0 0; border: 2px solid var(--line); }
.pick b { font-family: var(--display); font-weight: 800; font-size: 16px; line-height: 1.1; }
.pick small { font-size: 12px; color: var(--muted); line-height: 1.25; }

/* ---------- escenario ---------- */
.stage-box { display: grid; gap: 14px; min-width: 0; }
.stage {
  --x: 0; --y: 0; --amp: 1; --explode: 0;
  position: relative; width: 100%; max-width: 480px; aspect-ratio: 400 / 440;
  margin: 0 auto; perspective: 1400px; touch-action: pan-y;
}
.head, .scene { position: absolute; inset: 0; transform-style: preserve-3d; }
.scene {
  transform: rotateY(calc(var(--explode) * -38deg)) rotateX(calc(var(--explode) * 12deg)) scale(calc(1 - var(--explode) * .12));
  transition: transform .7s cubic-bezier(.3,.7,.2,1);
}
.scene.enter { animation: enter .45s cubic-bezier(.3,.7,.2,1); }
@keyframes enter { from { opacity: 0; translate: 0 18px; } to { opacity: 1; translate: 0 0; } }
.head { transform: rotate(calc(var(--x) * 3deg)); transform-origin: 50% 70%; }
.layer {
  position: absolute; inset: 0;
  transform: translate3d(
    calc(var(--x) * var(--dx) * var(--amp) * 1px),
    calc(var(--y) * var(--dy) * var(--amp) * 1px),
    calc(var(--explode) * var(--z) * 30px));
  transition: opacity .25s, filter .25s;
  will-change: transform;
}
.layer svg { width: 100%; height: 100%; display: block; overflow: visible; }
.stage[data-focus] .layer { opacity: .12; }
.stage[data-focus] .layer.is-focus { opacity: 1; filter: drop-shadow(0 0 6px var(--accent)); }
.stage.exploded .layer svg { filter: drop-shadow(0 6px 10px rgba(20,30,50,.18)); }

.blink svg { transform-origin: 50% 50.5%; animation: blink 5.5s infinite; }
@keyframes blink { 0%, 95%, 100% { transform: scaleY(1); } 97% { transform: scaleY(.08); } }

.caption { text-align: center; margin: 0; display: grid; gap: 2px; }
.caption b { font-family: var(--display); font-size: 20px; font-weight: 800; }
.caption span { font-size: 14px; color: var(--muted); }

/* ---------- panel ---------- */
.panel { background: var(--panel); border: 1px solid var(--rule); border-radius: 14px; padding: 20px; display: grid; gap: 22px; min-width: 0; }
.panel h2 { font-family: var(--display); font-weight: 800; font-size: 15px; letter-spacing: .06em; text-transform: uppercase; margin: 0 0 10px; }

.readout { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.val { border: 1px solid var(--rule); border-radius: 10px; padding: 10px 12px; display: grid; gap: 6px; min-width: 0; }
.val span { font-family: var(--mono); font-size: 12px; color: var(--muted); }
.val output { font-family: var(--mono); font-size: 24px; font-weight: 600; font-variant-numeric: tabular-nums; }
.meter { height: 6px; background: var(--rule); border-radius: 3px; position: relative; overflow: hidden; }
.meter i { position: absolute; top: 0; bottom: 0; left: 50%; width: 0; background: var(--accent); }

.controls { display: grid; gap: 14px; }
.ctrl { display: grid; gap: 4px; }
.ctrl label { display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; }
.ctrl label b { font-family: var(--mono); font-weight: 400; color: var(--muted); font-variant-numeric: tabular-nums; }
input[type=range] { width: 100%; accent-color: var(--accent); }
.toggle {
  font: inherit; font-weight: 700; font-size: 15px; cursor: pointer;
  border: 2px solid var(--fg); background: transparent; color: var(--fg);
  border-radius: 999px; padding: 9px 18px; justify-self: start;
}
.toggle[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
button:focus-visible, input:focus-visible, li:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

.layers { list-style: none; margin: 0; padding: 0; display: grid; gap: 2px; }
.layers li {
  display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center;
  padding: 5px 8px; border-radius: 8px; font-size: 14px; cursor: default;
}
.layers li:hover, .layers li:focus-visible { background: var(--paper); }
.layers li code { font-family: var(--mono); font-size: 12px; color: var(--muted); font-variant-numeric: tabular-nums; }
.layers .note { font-size: 13px; color: var(--muted); margin: 8px 0 0; }

/* ---------- explicación ---------- */
.how { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 32px; border-top: 2px solid var(--fg); padding-top: 28px; }
@media (max-width: 760px) { .how { grid-template-columns: 1fr; } }
.how h2 { font-family: var(--display); font-weight: 800; font-size: 28px; margin: 0 0 14px; letter-spacing: -.01em; }
.steps { margin: 0; padding: 0; list-style: none; counter-reset: s; display: grid; gap: 14px; }
.steps li { counter-increment: s; display: grid; grid-template-columns: 34px 1fr; gap: 8px; max-width: 60ch; }
.steps li::before { content: counter(s); font-family: var(--display); font-weight: 800; font-size: 22px; color: var(--accent); line-height: 1.2; }
.steps code, .how p code { font-family: var(--mono); font-size: 13.5px; }
pre {
  margin: 0; background: var(--panel); border: 1px solid var(--rule); border-radius: 12px;
  padding: 16px; overflow-x: auto; font-family: var(--mono); font-size: 13px; line-height: 1.6;
}
pre .c { color: var(--muted); }
.how .codecol { display: grid; gap: 10px; min-width: 0; align-content: start; }
.how .codecol p { margin: 0; font-size: 14px; color: var(--muted); }
</style>

<div class="wrap">
  <header>
    <span class="eyebrow">Demo · HTML, CSS y JS nativo · 0 dependencias</span>
    <h1>Un retrato que <em>te sigue</em> con la mirada</h1>
    <p>Elige un personaje y mueve el ratón (o el dedo) por la página. Cada parte del dibujo es una capa SVG independiente que se desplaza más o menos según lo "cerca" que esté de ti.</p>
  </header>

  <section class="demo">
    <div class="stage-box">
      <div class="picker" id="picker" aria-label="Elegir personaje"></div>
      <div class="stage" id="stage" role="img" aria-label="Retrato ilustrado que gira la cabeza hacia el puntero">
        <div class="scene" id="scene"></div>
      </div>
      <p class="caption"><b id="capName"></b><span id="capDesc"></span></p>
    </div>

    <aside class="panel">
      <div>
        <h2>Puntero normalizado</h2>
        <div class="readout">
          <div class="val"><span>--x (izq. −1 · dcha. 1)</span><output id="ox">0.00</output><div class="meter"><i id="mx"></i></div></div>
          <div class="val"><span>--y (arriba −1 · abajo 1)</span><output id="oy">0.00</output><div class="meter"><i id="my"></i></div></div>
        </div>
      </div>

      <div class="controls">
        <h2>Ajustes</h2>
        <div class="ctrl">
          <label for="ease">Suavizado <b id="easeV">0.12</b></label>
          <input id="ease" type="range" min="0.03" max="1" step="0.01" value="0.12">
        </div>
        <div class="ctrl">
          <label for="amp">Amplitud del movimiento <b id="ampV">1.00×</b></label>
          <input id="amp" type="range" min="0" max="1.6" step="0.05" value="1">
        </div>
        <button class="toggle" id="explode" type="button" aria-pressed="false">Separar capas en 3D</button>
      </div>

      <div>
        <h2 id="layersTitle">Capas (de atrás a delante)</h2>
        <ul class="layers" id="layerList"></ul>
        <p class="note">Pasa el puntero por una capa de la lista para aislarla. Los números son los píxeles máximos que se desplaza en X y en Y; un valor negativo va en sentido contrario.</p>
      </div>
    </aside>
  </section>

  <section class="how">
    <div>
      <h2>Cómo funciona</h2>
      <ol class="steps">
        <li><span>Cada personaje es una lista de capas SVG del mismo tamaño (<code>viewBox</code> idéntico) apiladas con <code>position: absolute</code>. Cambiar de personaje solo cambia esa lista.</span></li>
        <li><span>Cada capa es un <code>div</code>, no un grupo dentro de un único SVG: así el navegador las mueve con <code>transform</code>, que va por GPU y no obliga a redibujar el SVG.</span></li>
        <li><span>JavaScript convierte la posición del puntero en dos números entre −1 y 1 respecto al centro del retrato y los guarda como variables CSS <code>--x</code> y <code>--y</code>.</span></li>
        <li><span>Cada capa multiplica esos valores por su profundidad (<code>--dx</code>, <code>--dy</code>). Lo cercano (gafas, nariz) se mueve mucho; lo lejano (pelo de atrás, orejas, fondo) poco o al revés. Esa diferencia crea el efecto 3D.</span></li>
        <li><span>Un bucle con <code>requestAnimationFrame</code> acerca poco a poco el valor actual al del puntero (interpolación lineal), lo que da la sensación de inercia.</span></li>
      </ol>
    </div>
    <div class="codecol">
      <pre><code><span class="c">// Un personaje = una lista de capas</span>
const lucia = { nombre: 'Lucía', capas: [
  { n: 'Pelo de atrás',   dx: 4,  dy: 2,  svg: '…' },
  { n: 'Cara',            dx: 13, dy: 8,  svg: '…' },
  { n: 'Gafas',           dx: 30, dy: 17, svg: '…' },
  { n: 'Pelo delantero',  dx: 15, dy: 9,  svg: '…' },
]};

<span class="c">/* CSS: una regla sirve para todas las capas */</span>
.layer {
  transform: translate(
    calc(var(--x) * var(--dx) * 1px),
    calc(var(--y) * var(--dy) * 1px));
}

<span class="c">// Bucle: acercarse un 12 % cada fotograma</span>
(function loop() {
  x += (tx - x) * 0.12;
  y += (ty - y) * 0.12;
  stage.style.setProperty('--x', x);
  stage.style.setProperty('--y', y);
  requestAnimationFrame(loop);
})();</code></pre>
      <p>Si el sistema pide reducir el movimiento, la demo baja la amplitud y quita el parpadeo.</p>
    </div>
  </section>
</div>

<script>
(() => {
  /* ================= piezas comunes ================= */
  const L = 'var(--line)', W = 'var(--white)';
  const svg = inner => `<svg viewBox="0 0 400 440" aria-hidden="true">${inner}</svg>`;

  const fondo = (c, dot) => `
    <defs><pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2" fill="${dot}"/></pattern></defs>
    <circle cx="200" cy="215" r="172" fill="${c}"/>
    <circle cx="200" cy="215" r="172" fill="url(#dots)" opacity=".55"/>`;

  const cuerpo = (skin, c, shade, extra = '') => `
    <rect x="175" y="290" width="50" height="62" fill="${skin}" stroke="${L}" stroke-width="4"/>
    <path d="M74 446 C84 372 140 342 200 342 C260 342 316 372 326 446 Z" fill="${shade}" transform="translate(6 5)"/>
    <path d="M74 446 C84 372 140 342 200 342 C260 342 316 372 326 446 Z" fill="${c}" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>
    ${extra}`;

  const orejas = (skin, extra = '') => `
    <ellipse cx="110" cy="232" rx="20" ry="26" fill="${skin}" stroke="${L}" stroke-width="4"/>
    <ellipse cx="290" cy="232" rx="20" ry="26" fill="${skin}" stroke="${L}" stroke-width="4"/>
    <path d="M112 222 q-8 10 0 20 M288 222 q8 10 0 20" fill="none" stroke="${L}" stroke-width="3" stroke-linecap="round"/>
    ${extra}`;

  const cara = (skin, shade, rx = 92, ry = 106, extra = '') => `
    <ellipse cx="206" cy="232" rx="${rx}" ry="${ry}" fill="${shade}"/>
    <ellipse cx="200" cy="227" rx="${rx}" ry="${ry}" fill="${skin}" stroke="${L}" stroke-width="4"/>
    ${extra}`;

  const ojos = (pestanas = false) => `
    <circle cx="166" cy="222" r="17" fill="${W}" stroke="${L}" stroke-width="3.5"/>
    <circle cx="234" cy="222" r="17" fill="${W}" stroke="${L}" stroke-width="3.5"/>
    ${pestanas ? `<path d="M150 212 l-7 -6 M154 207 l-5 -8 M246 207 l5 -8 M250 212 l7 -6" stroke="${L}" stroke-width="3" stroke-linecap="round"/>` : ''}`;

  const pupilas = (iris) => `
    ${iris ? `<circle cx="166" cy="222" r="9" fill="${iris}"/><circle cx="234" cy="222" r="9" fill="${iris}"/>` : ''}
    <circle cx="166" cy="222" r="${iris ? 5 : 7.5}" fill="${L}"/>
    <circle cx="234" cy="222" r="${iris ? 5 : 7.5}" fill="${L}"/>
    <circle cx="169" cy="219" r="2.2" fill="${W}"/>
    <circle cx="237" cy="219" r="2.2" fill="${W}"/>`;

  const mejillas = (c, o = .45) => `
    <circle cx="148" cy="272" r="15" fill="${c}" opacity="${o}"/>
    <circle cx="252" cy="272" r="15" fill="${c}" opacity="${o}"/>`;

  // Nube de pelo afro: círculos con trazo debajo y círculos sin trazo encima = contorno de la unión
  const afro = (c, shade) => {
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      pts.push([200 + 122 * Math.cos(a), 186 + 104 * Math.sin(a), 40 + (i % 3) * 6]);
    }
    const circ = (dx, dy, fill, stroke) => pts.map(([x, y, r]) =>
      `<circle cx="${(x + dx).toFixed(1)}" cy="${(y + dy).toFixed(1)}" r="${r}" fill="${fill}"${stroke ? ` stroke="${L}" stroke-width="8"` : ''}/>`).join('');
    return `${circ(7, 6, shade)}<ellipse cx="207" cy="192" rx="122" ry="104" fill="${shade}"/>
      ${circ(0, 0, c, true)}<ellipse cx="200" cy="186" rx="122" ry="104" fill="${c}"/>${circ(0, 0, c)}
      <path d="M150 110 q8 -8 16 0 M240 96 q8 -8 16 0 M276 150 q8 -8 16 0 M110 170 q8 -8 16 0 M200 70 q8 -8 16 0 M128 248 q8 -8 16 0 M268 236 q8 -8 16 0" fill="none" stroke="#4a3631" stroke-width="3" stroke-linecap="round"/>`;
  };

  /* ================= personajes ================= */
  // Cada capa: n (nombre), dx/dy (px máximos), z (orden en 3D), head (gira con la cabeza), blink, svg
  const PERSONAJES = {
    teo: {
      nombre: 'Teo', desc: 'Gorro de lana y gafas de pasta', swatch: ['#f2c14e', '#ef6f5e'],
      capas: [
        { n: 'Fondo', dx: -10, dy: -6, svg: fondo('#f2c14e', '#e0a92f') },
        { n: 'Cuerpo', dx: 3, dy: 1, svg: cuerpo('#f6c9a8', '#3c8d93', '#2e7a80', `<path d="M172 344 Q200 372 228 344" fill="none" stroke="${L}" stroke-width="4" stroke-linecap="round"/>`) },
        { n: 'Orejas', head: 1, dx: -9, dy: 3, svg: orejas('#f6c9a8') },
        { n: 'Cara', head: 1, dx: 13, dy: 8, svg: cara('#f6c9a8', '#efb189') },
        { n: 'Boca y mejillas', head: 1, dx: 22, dy: 14, svg: mejillas('#ef6f5e') + `<path d="M177 288 Q200 308 223 288" fill="none" stroke="${L}" stroke-width="4.5" stroke-linecap="round"/>` },
        { n: 'Ojos', head: 1, blink: 1, dx: 22, dy: 14, svg: ojos() },
        { n: 'Pupilas', head: 1, blink: 1, dx: 29, dy: 19, svg: pupilas() },
        { n: 'Cejas', head: 1, dx: 24, dy: 22, svg: `<path d="M148 190 Q166 180 184 189 M216 189 Q234 180 252 190" fill="none" stroke="${L}" stroke-width="6" stroke-linecap="round"/>` },
        { n: 'Nariz', head: 1, dx: 31, dy: 18, svg: `<path d="M205 236 C196 252 192 262 206 266 Z" fill="#ef6f5e" opacity=".5" transform="translate(4 3)"/><path d="M201 232 C193 250 190 262 206 264" fill="none" stroke="${L}" stroke-width="4" stroke-linecap="round"/>` },
        { n: 'Gafas', head: 1, dx: 30, dy: 17, svg: `
          <rect x="134" y="196" width="62" height="52" rx="22" fill="${W}" fill-opacity=".18" stroke="${L}" stroke-width="5"/>
          <rect x="204" y="196" width="62" height="52" rx="22" fill="${W}" fill-opacity=".18" stroke="${L}" stroke-width="5"/>
          <path d="M196 214 Q200 208 204 214" fill="none" stroke="${L}" stroke-width="5" stroke-linecap="round"/>` },
        { n: 'Gorro', head: 1, dx: 16, dy: 10, svg: `
          <path d="M108 168 C104 82 296 82 292 168 Z" fill="#d55545" transform="translate(6 5)"/>
          <path d="M108 168 C104 82 296 82 292 168 Z" fill="#ef6f5e" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>
          <path d="M150 104 C148 128 150 150 152 166 M200 92 V166 M250 104 C252 128 250 150 248 166" fill="none" stroke="${L}" stroke-width="3" stroke-linecap="round" opacity=".55"/>
          <rect x="98" y="150" width="204" height="40" rx="20" fill="${W}" stroke="${L}" stroke-width="4"/>
          <circle cx="200" cy="78" r="20" fill="${W}" stroke="${L}" stroke-width="4"/>` },
      ]
    },

    lucia: {
      nombre: 'Lucía', desc: '28 años · rubia de pelo largo liso, gafas y ojos caramelo', swatch: ['#9fd3cf', '#f1d27a'],
      capas: [
        { n: 'Fondo', dx: -10, dy: -6, svg: fondo('#9fd3cf', '#6fb8b3') },
        { n: 'Pelo de atrás', head: 1, dx: 4, dy: 2, svg: `
          <path d="M84 424 C76 300 82 118 200 102 C318 118 324 300 316 424 Q200 438 84 424 Z" fill="#d9b45a" transform="translate(6 5)"/>
          <path d="M84 424 C76 300 82 118 200 102 C318 118 324 300 316 424 Q200 438 84 424 Z" fill="#f1d27a" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>` },
        { n: 'Cuerpo', dx: 3, dy: 1, svg: cuerpo('#f8d2b4', '#e2604f', '#c84d3d', `<path d="M168 343 L200 384 L232 343" fill="none" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>`) },
        { n: 'Cara', head: 1, dx: 13, dy: 8, svg: cara('#f8d2b4', '#efb796', 88, 104) },
        { n: 'Boca y mejillas', head: 1, dx: 22, dy: 14, svg: mejillas('#ef6f5e', .35) + `
          <path d="M180 289 Q190 282 200 287 Q210 282 220 289 Q200 308 180 289 Z" fill="#d9534f" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>` },
        { n: 'Ojos', head: 1, blink: 1, dx: 22, dy: 14, svg: ojos(true) },
        { n: 'Pupilas', head: 1, blink: 1, dx: 29, dy: 19, svg: pupilas('#b5762e') },
        { n: 'Cejas', head: 1, dx: 24, dy: 22, svg: `<path d="M150 192 Q166 184 182 190 M218 190 Q234 184 250 192" fill="none" stroke="#a87b33" stroke-width="5" stroke-linecap="round"/>` },
        { n: 'Nariz', head: 1, dx: 31, dy: 18, svg: `<path d="M201 236 C196 250 194 258 205 260" fill="none" stroke="${L}" stroke-width="3.5" stroke-linecap="round"/>` },
        { n: 'Gafas', head: 1, dx: 30, dy: 17, svg: `
          <path d="M134 206 Q134 194 150 194 L184 194 Q198 194 197 210 Q195 246 166 246 Q136 246 134 206 Z" fill="${W}" fill-opacity=".15" stroke="#7a2e4a" stroke-width="4.5" stroke-linejoin="round"/>
          <path d="M266 206 Q266 194 250 194 L216 194 Q202 194 203 210 Q205 246 234 246 Q264 246 266 206 Z" fill="${W}" fill-opacity=".15" stroke="#7a2e4a" stroke-width="4.5" stroke-linejoin="round"/>
          <path d="M197 208 Q200 203 203 208" fill="none" stroke="#7a2e4a" stroke-width="4.5" stroke-linecap="round"/>` },
        { n: 'Pelo delantero', head: 1, dx: 15, dy: 9, svg: `
          <path d="M100 428 C90 330 98 116 200 106 C296 114 310 330 300 428 L274 428 C282 360 282 300 278 262 C282 220 276 192 252 160 C226 180 170 174 136 150 C124 196 120 236 124 268 C120 320 120 372 126 428 Z" fill="#f1d27a" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>
          <path d="M162 116 C150 128 142 140 136 150 M224 112 C240 128 250 144 252 160 M114 190 C110 260 108 340 112 418 M288 196 C292 260 292 340 288 418 M196 112 C186 128 176 150 172 166" fill="none" stroke="#c9a14a" stroke-width="3" stroke-linecap="round"/>` },
      ]
    },

    martin: {
      nombre: 'Martín', desc: '62 años · calvo, canoso y con barba', swatch: ['#b9d7a5', '#e3e6ea'],
      capas: [
        { n: 'Fondo', dx: -10, dy: -6, svg: fondo('#b9d7a5', '#8fbf74') },
        { n: 'Cuerpo', dx: 3, dy: 1, svg: cuerpo('#e9b896', '#e0a33a', '#c98b25', `
          <path d="M170 344 L186 372 L200 352 L214 372 L230 344" fill="${W}" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>
          <path d="M200 352 V446" stroke="${L}" stroke-width="4"/><circle cx="210" cy="396" r="4" fill="${L}"/><circle cx="210" cy="422" r="4" fill="${L}"/>`) },
        { n: 'Orejas', head: 1, dx: -9, dy: 3, svg: orejas('#e9b896') },
        { n: 'Cara', head: 1, dx: 13, dy: 8, svg: cara('#e9b896', '#d99e7a', 94, 104, `
          <ellipse cx="168" cy="146" rx="24" ry="9" fill="${W}" opacity=".45" transform="rotate(-18 168 146)"/>
          <path d="M162 160 Q200 152 238 160 M170 172 Q200 166 230 172" fill="none" stroke="${L}" stroke-width="2.5" stroke-linecap="round" opacity=".45"/>`) },
        { n: 'Canas laterales', head: 1, dx: 10, dy: 6, svg: `
          <path d="M104 216 C98 198 102 178 114 166 C118 182 124 194 136 204 C126 208 114 212 104 216 Z" fill="#d7dbe0" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
          <path d="M296 216 C302 198 298 178 286 166 C282 182 276 194 264 204 C274 208 286 212 296 216 Z" fill="#d7dbe0" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>
          <path d="M110 200 q6 -6 10 -2 M290 200 q-6 -6 -10 -2" fill="none" stroke="#a9b0ba" stroke-width="2.5" stroke-linecap="round"/>` },
        { n: 'Barba', head: 1, dx: 18, dy: 11, svg: `
          <path d="M112 236 C110 300 150 346 200 346 C250 346 290 300 288 236 C272 262 250 270 232 266 Q200 256 168 266 C150 270 128 262 112 236 Z" fill="#c4c9d0" transform="translate(5 4)"/>
          <path d="M112 236 C110 300 150 346 200 346 C250 346 290 300 288 236 C272 262 250 270 232 266 Q200 256 168 266 C150 270 128 262 112 236 Z" fill="#e3e6ea" stroke="${L}" stroke-width="4" stroke-linejoin="round"/>
          <path d="M150 300 q6 8 0 16 M176 318 q6 8 0 16 M224 318 q-6 8 0 16 M250 300 q-6 8 0 16" fill="none" stroke="#a9b0ba" stroke-width="3" stroke-linecap="round"/>` },
        { n: 'Ojos', head: 1, blink: 1, dx: 22, dy: 14, svg: ojos() + `<path d="M146 234 q-6 4 -12 2 M254 234 q6 4 12 2" fill="none" stroke="${L}" stroke-width="2.5" stroke-linecap="round"/>` },
        { n: 'Pupilas', head: 1, blink: 1, dx: 29, dy: 19, svg: pupilas('#7a5233') },
        { n: 'Bigote y boca', head: 1, dx: 24, dy: 15, svg: `
          <ellipse cx="200" cy="294" rx="12" ry="5" fill="#7a2e3a"/>
          <path d="M166 284 C176 268 194 270 200 278 C206 270 224 268 234 284 C222 292 210 286 200 288 C190 286 178 292 166 284 Z" fill="#d7dbe0" stroke="${L}" stroke-width="3.5" stroke-linejoin="round"/>` },
        { n: 'Cejas pobladas', head: 1, dx: 26, dy: 23, svg: `<path d="M146 192 Q164 178 186 190 M214 190 Q236 178 254 192" fill="none" stroke="#9aa1ab" stroke-width="10" stroke-linecap="round"/><path d="M146 192 Q164 178 186 190 M214 190 Q236 178 254 192" fill="none" stroke="${L}" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 6"/>` },
        { n: 'Nariz', head: 1, dx: 32, dy: 18, svg: `
          <path d="M200 236 C192 250 184 262 198 268 C214 270 216 256 208 252 Z" fill="#d38f6a" transform="translate(4 3)"/>
          <path d="M198 230 C192 248 182 262 198 268 C212 270 216 258 208 252" fill="none" stroke="${L}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>` },
      ]
    },

    amara: {
      nombre: 'Amara', desc: '35 años · pelo afro rizado y aros dorados', swatch: ['#c9b8e8', '#2a1c19'],
      capas: [
        { n: 'Fondo', dx: -10, dy: -6, svg: fondo('#c9b8e8', '#a993d6') },
        { n: 'Pelo afro', head: 1, dx: -4, dy: -3, svg: afro('#2a1c19', '#4a3631') },
        { n: 'Cuerpo', dx: 3, dy: 1, svg: cuerpo('#8d5a3b', '#f2c14e', '#dba73a', `<path d="M168 344 Q200 380 232 344" fill="none" stroke="${L}" stroke-width="4" stroke-linecap="round"/>`) },
        { n: 'Orejas y aros', head: 1, dx: -9, dy: 3, svg: orejas('#8d5a3b', `
          <circle cx="108" cy="276" r="16" fill="none" stroke="#e8b83a" stroke-width="5"/>
          <circle cx="292" cy="276" r="16" fill="none" stroke="#e8b83a" stroke-width="5"/>`) },
        { n: 'Cara', head: 1, dx: 13, dy: 8, svg: cara('#8d5a3b', '#74472d', 90, 106) },
        { n: 'Línea del pelo', head: 1, dx: 13, dy: 8, svg: `
          <path d="M108 206 C100 118 300 118 292 206 C272 172 240 158 200 158 C160 158 128 172 108 206 Z" fill="#2a1c19"/>
          <path d="M132 168 q6 -6 12 0 M176 150 q6 -6 12 0 M222 150 q6 -6 12 0 M260 166 q6 -6 12 0" fill="none" stroke="#4a3631" stroke-width="3" stroke-linecap="round"/>` },
        { n: 'Boca y mejillas', head: 1, dx: 22, dy: 14, svg: mejillas('#c2475a', .3) + `
          <path d="M178 288 Q190 280 200 285 Q210 280 222 288 Q200 312 178 288 Z" fill="#b8455c" stroke="${L}" stroke-width="3" stroke-linejoin="round"/>
          <path d="M182 289 Q200 294 218 289" fill="none" stroke="${L}" stroke-width="2.5" stroke-linecap="round"/>` },
        { n: 'Ojos', head: 1, blink: 1, dx: 22, dy: 14, svg: ojos(true) },
        { n: 'Pupilas', head: 1, blink: 1, dx: 29, dy: 19, svg: pupilas('#4a2c1c') },
        { n: 'Cejas', head: 1, dx: 24, dy: 22, svg: `<path d="M148 192 Q166 182 184 190 M216 190 Q234 182 252 192" fill="none" stroke="#1d130f" stroke-width="6" stroke-linecap="round"/>` },
        { n: 'Nariz', head: 1, dx: 31, dy: 18, svg: `
          <path d="M186 258 C186 266 214 266 214 258 Z" fill="#6b3f27" transform="translate(3 3)"/>
          <path d="M196 236 C194 248 186 254 188 260 C192 266 208 266 212 260 C214 254 206 248 204 236" fill="none" stroke="${L}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>` },
      ]
    },
  };

  /* ================= montaje ================= */
  const stage = document.getElementById('stage');
  const scene = document.getElementById('scene');
  const $ = id => document.getElementById(id);
  const clamp = v => Math.max(-1, Math.min(1, v));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = null;

  // Botones del selector
  Object.entries(PERSONAJES).forEach(([id, p]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pick'; b.dataset.id = id;
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = `<span class="swatch" style="background:${p.swatch[0]}"><i style="background:${p.swatch[1]}"></i></span><b>${p.nombre}</b><small>${p.desc.split(' · ').pop()}</small>`;
    b.addEventListener('click', () => render(id));
    $('picker').appendChild(b);
  });

  function render(id) {
    const p = PERSONAJES[id];
    if (!p || id === current) return;
    current = id;
    try { history.replaceState(null, '', '#' + id); } catch (e) {}

    const layerHTML = (c, i) =>
      `<div class="layer${c.blink && !reduce ? ' blink' : ''}" data-layer="${c.n}" style="--dx:${c.dx};--dy:${c.dy};--z:${i}">${svg(c.svg)}</div>`;
    // Las capas que no giran con la cabeza (fondo, cuerpo) van fuera del grupo .head.
    // Se respeta el orden de la lista: el cuerpo de Amara queda delante del pelo y detrás de la cara.
    scene.innerHTML = '';
    let headDiv = null;
    p.capas.forEach((c, i) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = layerHTML(c, i);
      const el = tmp.firstElementChild;
      if (c.head) {
        if (!headDiv || headDiv.dataset.closed) { headDiv = document.createElement('div'); headDiv.className = 'head'; scene.appendChild(headDiv); }
        headDiv.appendChild(el);
      } else {
        if (headDiv) headDiv.dataset.closed = '1';
        scene.appendChild(el);
      }
    });
    scene.classList.remove('enter'); void scene.offsetWidth; scene.classList.add('enter');

    document.querySelectorAll('.pick').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === id));
    $('capName').textContent = p.nombre;
    $('capDesc').textContent = p.desc;
    stage.setAttribute('aria-label', `Retrato ilustrado de ${p.nombre} (${p.desc}) que gira la cabeza hacia el puntero`);
    $('layersTitle').textContent = `Capas de ${p.nombre} (de atrás a delante)`;

    // Lista de capas
    const list = $('layerList');
    list.innerHTML = '';
    delete stage.dataset.focus;
    scene.querySelectorAll('.layer').forEach(l => {
      const li = document.createElement('li');
      li.tabIndex = 0;
      li.innerHTML = `<span>${l.dataset.layer}</span><code>x ${l.style.getPropertyValue('--dx').trim()} · y ${l.style.getPropertyValue('--dy').trim()}</code>`;
      const on = () => { stage.dataset.focus = l.dataset.layer; l.classList.add('is-focus'); };
      const off = () => { delete stage.dataset.focus; l.classList.remove('is-focus'); };
      li.addEventListener('pointerenter', on); li.addEventListener('pointerleave', off);
      li.addEventListener('focus', on); li.addEventListener('blur', off);
      list.appendChild(li);
    });
  }

  const start = (location.hash || '').slice(1);
  render(PERSONAJES[start] ? start : 'lucia');

  /* ================= puntero ================= */
  let tx = 0, ty = 0, x = 0, y = 0, ease = 0.12;
  if (reduce) $('amp').value = 0.4;

  const aim = (cx, cy) => {
    const r = stage.getBoundingClientRect();
    tx = clamp((cx - (r.left + r.width / 2)) / (innerWidth / 2));
    ty = clamp((cy - (r.top + r.height / 2)) / (innerHeight / 2));
  };
  const home = () => { tx = 0; ty = 0; };
  addEventListener('pointermove', e => aim(e.clientX, e.clientY), { passive: true });
  addEventListener('pointerdown', e => aim(e.clientX, e.clientY), { passive: true });
  document.documentElement.addEventListener('mouseleave', home);
  addEventListener('blur', home);

  /* ================= controles ================= */
  const setEase = () => { ease = +$('ease').value; $('easeV').textContent = ease.toFixed(2); };
  const setAmp = () => { stage.style.setProperty('--amp', $('amp').value); $('ampV').textContent = (+$('amp').value).toFixed(2) + '×'; };
  $('ease').addEventListener('input', setEase);
  $('amp').addEventListener('input', setAmp);
  setEase(); setAmp();

  $('explode').addEventListener('click', e => {
    const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
    e.currentTarget.setAttribute('aria-pressed', on);
    e.currentTarget.textContent = on ? 'Volver a juntar capas' : 'Separar capas en 3D';
    stage.style.setProperty('--explode', on ? 1 : 0);
    stage.classList.toggle('exploded', on);
  });

  /* ================= bucle ================= */
  const ox = $('ox'), oy = $('oy'), mx = $('mx'), my = $('my');
  const bar = (el, v) => { el.style.left = (v < 0 ? 50 + v * 50 : 50) + '%'; el.style.width = Math.abs(v) * 50 + '%'; };
  (function loop() {
    x += (tx - x) * ease;
    y += (ty - y) * ease;
    stage.style.setProperty('--x', x.toFixed(4));
    stage.style.setProperty('--y', y.toFixed(4));
    ox.textContent = (x >= 0 ? ' ' : '') + x.toFixed(2);
    oy.textContent = (y >= 0 ? ' ' : '') + y.toFixed(2);
    bar(mx, x); bar(my, y);
    requestAnimationFrame(loop);
  })();
})();
</script>

</body></html>