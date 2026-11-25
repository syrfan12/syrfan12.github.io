'use strict';

// English copy lives in index.html. Add or edit Indonesian translations here.
const translations = {
  skip: 'Langsung ke konten',
  'nav.work': 'Proyek', 'nav.research': 'Riset', 'nav.about': 'Tentang', 'nav.contact': 'Mari berdiskusi',
  'hero.eyebrow': 'AI ENGINEER & PENELITI',
  'hero.line1': 'Merekayasa AI.', 'hero.line2': 'Memajukan', 'hero.line3': 'pencitraan medis.',
  'hero.intro': 'Saya Syahid Al Irfan, AI engineer dan kandidat doktor yang mengembangkan riset computer vision menjadi solusi praktis untuk pencitraan medis dan berbagai bidang lainnya.',
  'hero.work': 'Jelajahi karya saya', 'hero.cv': 'Unduh CV',
  'hero.location': 'Takizawa, Iwate, Jepang', 'hero.phd': 'Kandidat Doktor · Iwate Prefectural University',
  'visual.label': 'FOKUS RISET', 'visual.title': 'Dari irisan citra menuju pemahaman ruang', 'visual.caption': 'Visualisasi konsep · Bukan data klinis',
  'award.title': 'Best Paper Award', 'award.detail': 'Penghargaan untuk riset rekonstruksi USG 3D freehand.', 'award.link': 'Jelajahi risetnya',
  'work.eyebrow': 'KARYA PILIHAN', 'work.title': 'Dari riset menjadi<br>sistem yang bekerja.',
  'work.intro': 'Pilihan karya saya dalam pencitraan medis, pengembangan perangkat lunak, dan sistem fisik.',
  'filter.all': 'Semua karya', 'filter.medical': 'AI medis', 'filter.vision': 'Computer vision', 'filter.systems': 'IoT & sistem',
  'project.research': 'PROYEK RISET', 'project.application': 'PROYEK PERANGKAT LUNAK', 'project.collaboration': 'KOLABORASI RISET', 'project.team': 'PROYEK TIM', 'project.interface': 'KONSEP ANTARMUKA',
  'project.us.title': 'Menghadirkan ultrasonografi tiga dimensi.',
  'project.us.desc': 'USG payudara 3D freehand portabel dengan sistem pelacakan dual rotary encoder. Riset doktoral saya menghubungkan pelacakan probe dengan rekonstruksi volumetrik.',
  'project.mv.title': 'MedView. Perspektif baru data medis.',
  'project.mv.desc': 'Aplikasi penampil volume medis untuk unggah NRRD, metadata volume, serta eksplorasi irisan aksial, koronal, dan sagital dengan scroll, zoom, dan pan.',
  'project.reid.title': 'Mengenali identitas dari berbagai sudut.',
  'project.reid.desc': 'Riset kolaboratif tentang person re-identification, termasuk CORE-ReID V2 dan pembelajaran yang mempertimbangkan orientasi pada ORITRIP.',
  'project.plant.title': 'Menghubungkan tanaman, sensor, dan AI.',
  'project.plant.desc': 'Proyek tim untuk pemantauan tanaman terpadu, menggabungkan sensor lingkungan, deteksi penyakit berbasis kamera, dan penyimpanan data di cloud.',
  'project.paper': 'Baca publikasi', 'project.code': 'Lihat repository',
  'work.more': 'Ingin melihat yang sedang saya bangun?', 'work.github': 'Jelajahi GitHub saya',
  'research.eyebrow': 'RISET & PUBLIKASI', 'research.title': 'Menguji gagasan.<br>Berbagi pengetahuan.',
  'research.intro': 'Riset yang mempertemukan pencitraan medis, machine learning, dan sistem pengindraan dunia nyata.',
  'research.imaging': 'Pencitraan medis', 'research.tracking': 'Estimasi pose', 'research.vision': 'Computer vision', 'research.robotics': 'Robotika', 'research.all': 'Riset lainnya di ResearchGate',
  'about.eyebrow': 'SOSOK DI BALIK KARYA', 'about.title': 'Rasa ingin tahu peneliti.<br>Pola pikir engineer.',
  'about.p1': 'Perjalanan saya dimulai dari teknik elektro, membangun robot dan perangkat terhubung. Kini, saya menekuni AI dan pencitraan medis sebagai kandidat doktor di Iwate Prefectural University, Jepang.',
  'about.p2': 'Pengalaman saya mencakup riset, penerapan computer vision, pengembangan perangkat lunak, dan embedded systems. Saya senang menghubungkan berbagai disiplin tersebut untuk mewujudkan sebuah ide menjadi sistem yang berfungsi.',
  'about.linkedin': 'Terhubung di LinkedIn',
  'skills.ai': 'AI & computer vision', 'skills.software': 'Perangkat lunak & tools', 'skills.embedded': 'Robotika & embedded',
  'journey.eyebrow': 'PENGALAMAN & PENDIDIKAN', 'journey.title': 'Dibangun dari pengalaman langsung.', 'journey.experience': 'Perjalanan profesional', 'journey.education': 'Fondasi akademik', 'journey.parttime': 'Paruh waktu', 'journey.contract': 'Kontrak',
  'journey.cybercore': 'Computer vision berbasis PyTorch, peningkatan kualitas citra, person re-identification, dan benchmarking model di Morioka, Jepang.',
  'journey.rpa': 'Mengotomatiskan penggajian, penyaringan dokumen, dan alur kerja back-office menggunakan UiPath.',
  'journey.software': 'Mengembangkan perangkat keras dan perangkat lunak IoT untuk pemantauan sensor hidroponik dan pengendalian pencampuran nutrisi.',
  'education.phd.date': '2025 — 2028 (TARGET)', 'education.phd.title': 'Doktor · AI & Pencitraan Medis', 'education.current': 'Sedang berjalan',
  'education.master': 'Magister · Software & Information Science', 'education.bachelor': 'Sarjana · Teknik Elektro',
  'journey.achievement': 'Juara Regional Kontes Robot Sepak Bola Indonesia 2019 & Penghargaan Mahasiswa Berprestasi, Fakultas Teknologi Industri, UAD.',
  'contact.eyebrow': 'MARI TERHUBUNG', 'contact.title': 'Ide yang baik dimulai<br>dari sebuah percakapan.',
  'contact.desc': 'Punya pertanyaan riset, tantangan engineering, atau peluang kolaborasi? Saya senang mendengar dari Anda.',
  'contact.copy': 'Salin alamat email', 'footer.top': 'Kembali ke atas',
};

const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(translatedNodes.map(node => [node.dataset.i18n, node.innerHTML]));
let language = 'en';
let selectedFilter = 'all';
let isPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let frameId = 0;
let visualVisible = true;

function updateAnimationButton() {
  const button = document.getElementById('animation-toggle');
  button.setAttribute('aria-label', language === 'id' ? (isPaused ? 'Putar animasi' : 'Jeda animasi') : (isPaused ? 'Play animation' : 'Pause animation'));
  button.setAttribute('aria-pressed', String(isPaused));
  button.querySelector('svg').innerHTML = isPaused ? '<path d="m8 5 11 7-11 7Z"/>' : '<path d="M9 6v12M15 6v12"/>';
}

function updateMenuLabel() {
  const button = document.querySelector('.menu-toggle');
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-label', language === 'id' ? (open ? 'Tutup menu' : 'Buka menu') : (open ? 'Close menu' : 'Open menu'));
}

function updateFilterStatus() {
  const count = [...document.querySelectorAll('.project-card')].filter(card => !card.hidden).length;
  document.getElementById('filter-status').textContent = language === 'id' ? `${count} proyek ditampilkan.` : `${count} projects displayed.`;
}

function setLanguage(next) {
  language = next === 'id' ? 'id' : 'en';
  document.documentElement.lang = language;
  translatedNodes.forEach(node => {
    // Translation strings are local author-controlled content, never user input.
    node.innerHTML = language === 'id' ? (translations[node.dataset.i18n] ?? english.get(node.dataset.i18n)) : english.get(node.dataset.i18n);
  });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.title = language === 'id' ? 'Syahid Al Irfan | AI Medis & Computer Vision' : 'Syahid Al Irfan | Medical AI & Computer Vision';
  document.querySelector('.project-filters').setAttribute('aria-label', language === 'id' ? 'Filter proyek' : 'Filter projects');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'id' ? 'Bahasa' : 'Language');
  document.getElementById('volume-canvas').setAttribute('aria-label', language === 'id' ? 'Visualisasi konsep irisan ultrasonografi yang membentuk volume tiga dimensi' : 'Conceptual visualization of ultrasound slices forming a three-dimensional volume');
  document.getElementById('copy-status').textContent = '';
  updateAnimationButton();
  updateMenuLabel();
  updateFilterStatus();
  try { localStorage.setItem('portfolio-language', language); } catch { /* Optional persistence. */ }
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch { /* English is the default. */ }
setLanguage(savedLanguage || 'en');

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  selectedFilter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('.project-card').forEach(card => { card.hidden = selectedFilter !== 'all' && card.dataset.category !== selectedFilter; });
  updateFilterStatus();
}));

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}
menuButton.addEventListener('click', () => {
  const willOpen = mobileNav.hidden;
  mobileNav.hidden = !willOpen;
  menuButton.setAttribute('aria-expanded', String(willOpen));
  updateMenuLabel();
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('syahid.alirfan91@gmail.com');
    status.textContent = language === 'id' ? 'Alamat email berhasil disalin.' : 'Email address copied.';
  } catch {
    status.textContent = language === 'id' ? 'Silakan salin: syahid.alirfan91@gmail.com' : 'Please copy: syahid.alirfan91@gmail.com';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

// An original schematic, not patient data: fan-shaped slices form a 3D volume.
const canvas = document.getElementById('volume-canvas');
const context = canvas.getContext('2d');
let width = 0;
let height = 0;
let elapsed = 0;
let lastTime = 0;
const slices = 15;
const points = [];
const noise = n => { const value = Math.sin(n * 127.1 + 311.7) * 43758.5453; return value - Math.floor(value); };
for (let s = 0; s < slices; s++) {
  for (let p = 0; p < 145; p++) {
    const angle = (noise(p * 7 + s * 97) - .5) * 1.85;
    const radius = .2 + noise(p * 13 + s * 43) * .8;
    points.push({ s, x: Math.sin(angle) * radius * 1.1, y: Math.cos(angle) * radius - .53, z: (s / (slices - 1) - .5) * 1.4, light: noise(p * 19 + s * 83), r: .55 + noise(p * 31 + s) * 1.15 });
  }
}

function project(x, y, z) {
  const angle = -.62;
  const px = x * Math.cos(angle) + z * Math.sin(angle);
  const depth = -x * Math.sin(angle) + z * Math.cos(angle);
  const py = y * .87 - depth * .43;
  const scale = Math.min(width * .4, height * .65);
  return [width * .51 + px * scale, height * .48 + py * scale];
}

function drawSlice(s, active = false) {
  const z = (s / (slices - 1) - .5) * 1.4;
  context.beginPath();
  for (let i = 0; i <= 45; i++) {
    const angle = -.925 + (i / 45) * 1.85;
    const [x, y] = project(Math.sin(angle) * 1.1, Math.cos(angle) - .53, z);
    if (i === 0) context.moveTo(x, y); else context.lineTo(x, y);
  }
  for (let i = 45; i >= 0; i--) {
    const angle = -.925 + (i / 45) * 1.85;
    const [x, y] = project(Math.sin(angle) * .22, Math.cos(angle) * .2 - .53, z);
    context.lineTo(x, y);
  }
  context.closePath();
  context.fillStyle = active ? '#c5f7de0c' : '#7ec5c502';
  context.fill();
  context.strokeStyle = active ? '#baf6dbaa' : '#5fa2a046';
  context.lineWidth = active ? 1.25 : .65;
  context.stroke();
  if (active) {
    for (let r = .4; r < 1; r += .2) {
      context.beginPath();
      for (let i = 0; i <= 35; i++) {
        const angle = -.925 + i / 35 * 1.85;
        const [x, y] = project(Math.sin(angle) * r * 1.1, Math.cos(angle) * r - .53, z);
        if (!i) context.moveTo(x, y); else context.lineTo(x, y);
      }
      context.strokeStyle = '#baf6db35'; context.lineWidth = .7; context.stroke();
    }
  }
}

function drawVolume() {
  if (!context || !width || !height) return;
  context.clearRect(0, 0, width, height);
  // A subtle spatial grid grounds the volume without suggesting measurements.
  context.strokeStyle = '#79a1a215';
  context.lineWidth = .7;
  for (let grid = -1.2; grid <= 1.21; grid += .3) {
    const a = project(grid, .65, -.95); const b = project(grid, .65, .95);
    const c = project(-1.2, .65, grid); const d = project(1.2, .65, grid);
    context.beginPath(); context.moveTo(...a); context.lineTo(...b); context.moveTo(...c); context.lineTo(...d); context.stroke();
  }
  const activeSlice = Math.round((Math.sin(elapsed / 2200) + 1) / 2 * (slices - 1));
  for (let s = slices - 1; s >= 0; s--) {
    drawSlice(s, s === activeSlice);
    points.filter(point => point.s === s).forEach(point => {
      const [x, y] = project(point.x, point.y, point.z);
      const glow = s === activeSlice;
      context.fillStyle = glow ? `rgba(201,250,219,${.4 + point.light * .55})` : `rgba(123,196,190,${.1 + point.light * .4})`;
      context.beginPath(); context.arc(x, y, point.r * (glow ? 1.1 : .75), 0, Math.PI * 2); context.fill();
    });
  }
  // Corner brackets frame the concept, echoing a scientific imaging viewport.
  context.strokeStyle = '#79a1a24a'; context.lineWidth = 1;
  [[14, 24, 1, 1], [width - 14, 24, -1, 1], [14, height - 20, 1, -1], [width - 14, height - 20, -1, -1]].forEach(([x, y, dx, dy]) => {
    context.beginPath(); context.moveTo(x + dx * 13, y); context.lineTo(x, y); context.lineTo(x, y + dy * 13); context.stroke();
  });
}

function tick(time) {
  frameId = 0;
  if (isPaused || !visualVisible || document.hidden) { lastTime = 0; return; }
  if (!lastTime) lastTime = time;
  if (time - lastTime > 32) { elapsed += Math.min(time - lastTime, 80); lastTime = time; drawVolume(); }
  frameId = requestAnimationFrame(tick);
}
function resumeIfNeeded() {
  if (!frameId && !isPaused && visualVisible && !document.hidden) { lastTime = 0; frameId = requestAnimationFrame(tick); }
}
function resizeCanvas() {
  const bounds = canvas.getBoundingClientRect();
  width = bounds.width; height = bounds.height;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
  if (context) { context.setTransform(ratio, 0, 0, ratio, 0, 0); drawVolume(); }
}
new ResizeObserver(resizeCanvas).observe(canvas);
new IntersectionObserver(entries => { visualVisible = entries[0].isIntersecting; resumeIfNeeded(); }, { threshold: .1 }).observe(canvas);
document.addEventListener('visibilitychange', resumeIfNeeded);
document.getElementById('animation-toggle').addEventListener('click', () => { isPaused = !isPaused; updateAnimationButton(); resumeIfNeeded(); });
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => { isPaused = event.matches; updateAnimationButton(); resumeIfNeeded(); });
resizeCanvas();
resumeIfNeeded();
