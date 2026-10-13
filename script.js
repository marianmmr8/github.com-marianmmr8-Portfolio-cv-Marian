(() => {
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

  const cara = (skin, shade, rx = 92, ry = 106, extra = '') => `
    <ellipse cx="206" cy="232" rx="${rx}" ry="${ry}" fill="${shade}"/>
    <ellipse cx="200" cy="227" rx="${rx}" ry="${ry}" fill="${skin}" stroke="${L}" stroke-width="4"/>
    ${extra}`;

  const ojos = (pestanas = false) => `
    <circle cx="166" cy="222" r="17" fill="${W}" stroke="${L}" stroke-width="3.5"/>
    <circle cx="234" cy="222" r="17" fill="${W}" stroke="${L}" stroke-width="3.5"/>
    ${pestanas ? `<path d="M150 212 l-7 -6 M154 207 l-5 -8 M246 207 l5 -8 M250 212 l7 -6" stroke="${L}" stroke-width="3" stroke-linecap="round"/>` : ''}`;

  const pupilas = iris => `
    ${iris ? `<circle cx="166" cy="222" r="9" fill="${iris}"/><circle cx="234" cy="222" r="9" fill="${iris}"/>` : ''}
    <circle cx="166" cy="222" r="${iris ? 5 : 7.5}" fill="${L}"/>
    <circle cx="234" cy="222" r="${iris ? 5 : 7.5}" fill="${L}"/>
    <circle cx="169" cy="219" r="2.2" fill="${W}"/>
    <circle cx="237" cy="219" r="2.2" fill="${W}"/>`;

  const mejillas = (c, o = .45) => `
    <circle cx="148" cy="272" r="15" fill="${c}" opacity="${o}"/>
    <circle cx="252" cy="272" r="15" fill="${c}" opacity="${o}"/>`;

  const personajes = {
    lucia: {
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
    }
  };

  const stage = document.getElementById('stage');
  const scene = document.getElementById('scene');
  const clamp = value => Math.max(-1, Math.min(1, value));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(id) {
    const person = personajes[id];
    const layerHTML = layer =>
      `<div class="layer${layer.blink && !reduce ? ' blink' : ''}" data-layer="${layer.n}" style="--dx:${layer.dx};--dy:${layer.dy}">${svg(layer.svg)}</div>`;

    scene.innerHTML = '';
    let headDiv = null;
    person.capas.forEach(layer => {
      const temp = document.createElement('div');
      temp.innerHTML = layerHTML(layer);
      const element = temp.firstElementChild;
      if (layer.head) {
        if (!headDiv || headDiv.dataset.closed) {
          headDiv = document.createElement('div');
          headDiv.className = 'head';
          scene.appendChild(headDiv);
        }
        headDiv.appendChild(element);
      } else {
        if (headDiv) headDiv.dataset.closed = '1';
        scene.appendChild(element);
      }
    });

    scene.classList.remove('enter');
    void scene.offsetWidth;
    scene.classList.add('enter');
    stage.setAttribute('aria-label', 'Avatar ilustrado de María de los Angeles Martín Rojas');
  }

  render('lucia');

  let targetX = 0, targetY = 0, x = 0, y = 0;
  const ease = reduce ? 0.08 : 0.12;
  stage.style.setProperty('--amp', reduce ? '.4' : '.8');

  const aim = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    targetX = clamp((clientX - (rect.left + rect.width / 2)) / (innerWidth / 2));
    targetY = clamp((clientY - (rect.top + rect.height / 2)) / (innerHeight / 2));
  };
  const home = () => { targetX = 0; targetY = 0; };

  addEventListener('pointermove', event => aim(event.clientX, event.clientY), { passive: true });
  addEventListener('pointerdown', event => aim(event.clientX, event.clientY), { passive: true });
  document.documentElement.addEventListener('mouseleave', home);
  addEventListener('blur', home);

  (function loop() {
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    stage.style.setProperty('--x', x.toFixed(4));
    stage.style.setProperty('--y', y.toFixed(4));
    requestAnimationFrame(loop);
  })();
})();
