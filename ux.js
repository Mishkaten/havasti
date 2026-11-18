// UX additions. Loaded after app.js; uses its globals ($, T, CONFIG, lang).
function toast(msg, bad) {
  const el = document.createElement('div');
  el.className = 'toast' + (bad ? ' bad' : '');
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(() => el.remove(), 4200);
}

// Phone input with country picker (intl-tel-input)
let iti = null;
if (window.intlTelInput) {
  iti = window.intlTelInput($('#p'), {
    initialCountry: 'am', countryOrder: ['am', 'ru', 'ge', 'de', 'fr', 'us'], separateDialCode: true,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js'
  });
}

// File dropzone
const files = [], MAX = 15 * 1024 * 1024, OK = /^(image\/|application\/pdf)/;
function addFiles(list) {
  const t = T[lang];
  for (const f of list) {
    if (files.length >= 10) { toast(t.dz_max, true); break; }
    if (!OK.test(f.type)) { toast(t.dz_type + f.name, true); continue; }
    if (f.size > MAX) { toast(t.dz_big + f.name, true); continue; }
    files.push(f);
  }
  drawFiles();
}
function drawFiles() {
  const ul = $('#flist');
  ul.innerHTML = '';
  files.forEach((f, i) => {
    const li = document.createElement('li');
    const th = f.type.startsWith('image/')
      ? Object.assign(document.createElement('img'), { src: URL.createObjectURL(f), alt: '' })
      : Object.assign(document.createElement('span'), { className: 'pdf', textContent: 'PDF' });
    const nm = Object.assign(document.createElement('span'), { className: 'nm', textContent: f.name });
    const b = Object.assign(document.createElement('button'), { type: 'button', textContent: T[lang].dz_remove });
    b.onclick = () => { files.splice(i, 1); drawFiles(); };
    li.append(th, nm, b);
    ul.appendChild(li);
  });
}
const dz = $('#dz');
$('#files').addEventListener('change', e => { addFiles(e.target.files); e.target.value = ''; });
['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('over'); }));
['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('over'); }));
dz.addEventListener('drop', e => addFiles(e.dataTransfer.files));

// Submit: phone share sheet with files when supported, otherwise open WhatsApp
function setErr(id, input, msg) { $(id).textContent = msg || ''; input.classList.toggle('bad', !!msg); }
$('#form').addEventListener('submit', async e => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const t = T[lang], name = $('#n').value.trim();
  const phoneOk = $('#p').value.trim() && iti ? iti.isValidNumber() !== false : true;
  setErr('#e-n', $('#n'), name ? '' : t.e_name);
  setErr('#e-p', $('#p'), phoneOk ? '' : t.e_phone);
  if (!name || !phoneOk) { (name ? $('#p') : $('#n')).focus(); return; }
  const phone = iti && $('#p').value.trim() ? iti.getNumber() : $('#p').value;
  const text = name + (phone ? ' (' + phone + ')' : '') + '\n' + $('#m').value + '\n[' + (window.__summary || '') + ']';
  if (files.length && navigator.canShare && navigator.canShare({ files })) {
    try { await navigator.share({ files, text }); toast(t.t_shared); return; } catch (err) { if (err.name === 'AbortError') return; }
  }
  window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  toast(t.t_opened);
}, true);

// Mobile menu
const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

// Scroll reveal and sticky CTA
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));
const sticky = $('#sticky'), vis = { hero: true, contact: false };
const upd = () => sticky.classList.toggle('show', !vis.hero && !vis.contact);
new IntersectionObserver(([e]) => { vis.hero = e.isIntersecting; upd(); }).observe($('.hero'));
new IntersectionObserver(([e]) => { vis.contact = e.isIntersecting; upd(); }).observe($('#contact'));
