/* ===== PROYECTOS =====
   Cada proyecto es una carpeta en /proyectos (p1, p2...). Las fotos van numeradas 1.jpg, 2.jpg...
   La primera es la portada. Para agregar un proyecto: crea la carpeta y añade un bloque aquí. */
const PROJECTS = [
  { dir: 'p1', n: 8,
    en: { t: 'Mountain Custom Home', s: 'Framing', d: 'Full structural framing: walls, floor system, vaulted roof trusses and ZIP System sheathing.' },
    es: { t: 'Casa a medida en la montaña', s: 'Framing', d: 'Estructura completa: paredes, sistema de piso, techos con trusses y sheathing ZIP System.' } },
  { dir: 'p2', n: 5,
    en: { t: 'Modern Two-Story Residence', s: 'Siding & Exteriors', d: 'Wood siding and exterior cladding on a modern two-story home.' },
    es: { t: 'Residencia moderna de dos pisos', s: 'Siding y exteriores', d: 'Siding de madera y revestimiento exterior en una casa moderna de dos pisos.' } },
  { dir: 'p3', n: 7,
    en: { t: 'Valley View Home', s: 'Framing & Siding', d: 'From floor joists with mountain views to a finished modern exterior.' },
    es: { t: 'Casa con vista al valle', s: 'Framing y siding', d: 'Desde las vigas del piso con vista a las montañas hasta el exterior moderno terminado.' } },
  { dir: 'p4', n: 6,
    en: { t: 'Cedar & Timber Residence', s: 'Exterior & Interior Wood', d: 'Wood exterior, timber porch and warm interior wood paneling.' },
    es: { t: 'Residencia de cedro y madera', s: 'Madera exterior e interior', d: 'Exterior de madera, porche de vigas y paneles de madera en el interior.' } },
];

const I18N = {
  es: {
    'nav.services':'Servicios','nav.process':'Proceso','nav.projects':'Proyectos','nav.about':'Nosotros','nav.contact':'Contacto',
    'cta.estimate':'Pide tu presupuesto','cta.work':'Ver proyectos',
    'hero.eyebrow':'Framing · Siding · Casas a medida',
    'hero.t1':'Construimos','hero.t2':'diferente.',
    'hero.lead':'Desde el primer boceto hasta la entrega final, hacemos el framing, siding y acabados de casas a medida con calidad, integridad y oficio que duran generaciones.',
    'tag.1':'En obra','tag.2':'A tiempo','tag.3':'Bien hecho',
    'svc.eyebrow':'Lo que hacemos','svc.title':'Soñar. Diseñar. Construir. Desarrollar.',
    'svc.sub':'Desde la primera pared hasta la última tabla de siding — un solo equipo, un solo estándar.',
    'svc.1.t':'Framing','svc.1.d':'Todo el esqueleto estructural de tu casa: paredes, sistema de piso, segundo piso, techos y trusses, sheathing ZIP System, aberturas y blocking — según planos e ingeniería.',
    'svc.2.t':'Siding y exteriores','svc.2.d':'Siding de madera, revestimientos, soffits y molduras instalados con líneas limpias y detalles precisos que protegen tu casa y la hacen destacar.',
    'svc.3.t':'Madera interior y acabados','svc.3.d':'Paneles de madera, paredes decorativas y carpintería de acabado que le dan calidez y carácter al interior.',
    'svc.4.t':'Casas a medida y desarrollo','svc.4.d':'Trabajamos con dueños y constructores desde la cimentación hasta la casa terminada — un equipo confiable, un estándar alto.',
    'proc.eyebrow':'Cómo trabajamos','proc.title':'Un proceso simple. Sin sorpresas.','proc.sub':'Siempre sabes qué está pasando, qué sigue y cuánto cuesta.',
    'proc.1.t':'Planificar','proc.1.d':'Te escuchamos, visitamos el terreno y convertimos tu idea en un alcance y presupuesto claros.',
    'proc.2.t':'Permisos','proc.2.d':'Trabajamos según los planos aprobados y la ingeniería, y coordinamos con tu constructor e inspectores.',
    'proc.3.t':'Construir','proc.3.d':'Nuestro equipo construye con cuidado, mantiene la obra limpia y te informa en cada paso.',
    'proc.4.t':'Entregar','proc.4.d':'Recorrido final, cada detalle revisado y las llaves en tu mano. Bien hecho.',
    'proj.eyebrow':'Nuestro trabajo','proj.title':'Proyectos que nos enorgullecen',
    'proj.sub':'Casas reales construidas por nuestro equipo. Toca un proyecto para ver las fotos.',
    'about.eyebrow':'Sobre Major','about.t1':'Más que construcción.','about.t2':'Es un legado.',
    'about.p1':'Major Building & Development nació de una idea simple de Ruben: tratar cada proyecto como si fuera para nuestra propia familia. Eso significa presupuestos honestos, comunicación clara y un trabajo que firmamos con orgullo.',
    'about.p2':'Somos constructores, planificadores y solucionadores — y estamos aquí para construir hoy un mañana mejor.',
    'pill.1.t':'Calidad','pill.1.d':'Materiales y métodos que duran.',
    'pill.2.t':'Integridad','pill.2.d':'Respuestas claras, precios justos.',
    'pill.3.t':'Oficio','pill.3.d':'Detalles hechos a mano, bien hechos.',
    'team.eyebrow':'Crece con nosotros','team.title':'Personas. Proyectos. Progreso.',
    'team.1.t':'Empleo','team.1.d':'¿Tienes experiencia, eres responsable y quieres construir? Queremos conocerte.',
    'team.2.t':'Subcontratistas','team.2.d':'Únete a nuestra red de socios de confianza.',
    'team.3.t':'Proveedores','team.3.d':'Materiales, equipos y servicios — hablemos.',
    'ct.eyebrow':'Construyamos','ct.title':'Cuéntanos sobre tu proyecto',
    'ct.sub':'Envíanos algunos detalles y te respondemos con los próximos pasos y un presupuesto gratis.',
    'ct.office':'Oficina principal','ct.estimates':'Presupuestos','ct.projects':'Proyectos nuevos','ct.billing':'Facturación',
    'f.name':'Nombre','f.phone':'Teléfono','f.email':'Correo','f.type':'Tipo de proyecto','f.other':'Otro',
    'f.msg':'Cuéntanos sobre tu proyecto','f.send':'Solicitar presupuesto',
    'f.note':'Abre tu app de correo, dirigido a estimates@majorbuildco.com',
    'foot.tag':'Construyendo hoy un mañana mejor.'
  }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// guardar textos originales en inglés
$$('[data-i18n]').forEach(el => { I18N.en = I18N.en || {}; I18N.en[el.dataset.i18n] ??= el.textContent; });

let lang = 'en';
try { lang = localStorage.getItem('major-lang') || 'en'; } catch (e) {}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $$('[data-i18n]').forEach(el => { const t = I18N[l][el.dataset.i18n]; if (t) el.textContent = t; });
  $$('.lang button').forEach(b => b.classList.toggle('is-on', b.dataset.lang === l));
  renderProjects();
  try { localStorage.setItem('major-lang', l); } catch (e) {}
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// proyectos
const photo = (p, i) => `proyectos/${p.dir}/${i}.jpg`;
function renderProjects() {
  $('#projectsGrid').innerHTML = PROJECTS.map((p, k) => {
    const t = p[lang];
    return `<article class="pj reveal in" data-k="${k}" tabindex="0">
      <div class="pj__img"><img src="${photo(p, 1)}" alt="${t.t}" loading="lazy"><span class="pj__count">${p.n} ${lang === 'es' ? 'fotos' : 'photos'}</span></div>
      <div class="pj__body"><small>${t.s}</small><h3>${t.t}</h3><p>${t.d}</p>
      <div class="pj__thumbs">${[2, 3, 4].map(i => `<img src="${photo(p, i)}" alt="" loading="lazy">`).join('')}</div></div>
    </article>`;
  }).join('');
}
renderProjects();

// lightbox con galería por proyecto
const lb = $('#lightbox');
let cur = { p: null, i: 1 };
function show() {
  const p = PROJECTS[cur.p], t = p[lang];
  $('img', lb).src = photo(p, cur.i);
  $('figcaption b', lb).textContent = t.t;
  $('figcaption span', lb).textContent = `${t.s} · ${cur.i} / ${p.n}`;
}
function openPj(k) { cur = { p: +k, i: 1 }; show(); lb.hidden = false; document.body.style.overflow = 'hidden'; }
function closeLb() { lb.hidden = true; document.body.style.overflow = ''; }
function step(d) { const n = PROJECTS[cur.p].n; cur.i = (cur.i - 1 + d + n) % n + 1; show(); }
$('#projectsGrid').addEventListener('click', e => { const c = e.target.closest('.pj'); if (c) openPj(c.dataset.k); });
$('#projectsGrid').addEventListener('keydown', e => { const c = e.target.closest('.pj'); if (c && e.key === 'Enter') openPj(c.dataset.k); });
$('.prev', lb).addEventListener('click', () => step(-1));
$('.next', lb).addEventListener('click', () => step(1));
lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lightbox__x')) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb(); else if (e.key === 'ArrowRight') step(1); else if (e.key === 'ArrowLeft') step(-1);
});
let tx0 = 0;
lb.addEventListener('touchstart', e => tx0 = e.touches[0].clientX, { passive: true });
lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx0; if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1); });

// nav
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open);
});
$$('a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));

// reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });

// formulario -> mailto
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f));
  let ok = true;
  ['name', 'email'].forEach(n => { const bad = !d[n] || (n === 'email' && !/\S+@\S+\.\S+/.test(d[n])); f[n].classList.toggle('err', bad); if (bad) ok = false; });
  if (!ok) return;
  const subject = `Estimate request — ${d.type} — ${d.name}`;
  const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nProject type: ${d.type}\n\n${d.msg}`;
  location.href = `mailto:estimates@majorbuildco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

$('#yr').textContent = new Date().getFullYear();
if (lang !== 'en') setLang(lang);
