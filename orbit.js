// Language orbit: round SVG flags circle Armenia. Hover shows the pair, click prices it in the calculator.
const FLAGS = ['gb', 'ru', 'de', 'fr', 'ge', 'ir', 'sa', 'tr', 'ua', 'es', 'it'];
const ORB_HINT = { hy: 'Սեղմեք դրոշի վրա՝ գինը հաշվելու համար', en: 'Click a flag to price that pair', ru: 'Нажмите на флаг, чтобы рассчитать цену' };

function drawOrbit() {
  const L = LANGS[lang], n = FLAGS.length, R = 38; // radius in % of the box
  const pos = i => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; return [50 + R * Math.cos(a), 50 + R * Math.sin(a)]; };
  const lines = FLAGS.map((_, i) => { const [x, y] = pos(i); return `<line x1="50" y1="50" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}"/>`; }).join('');
  const items = FLAGS.map((f, i) => { const [x, y] = pos(i);
    return `<button type="button" class="orb-i" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%" data-i="${i}" aria-label="${esc(L[0] + ' ⇄ ' + L[i + 1])}"><span class="fl fi fis fi-${f}"></span></button>`; }).join('');
  $('#langs').innerHTML = `<div class="orbit">
    <svg class="orb-lines" viewBox="0 0 100 100" aria-hidden="true">${lines}</svg>
    <div class="orb-ring">${items}</div>
    <div class="orb-c"><span class="fl fi fis fi-am"></span></div>
    <div class="orb-cap" id="orb-cap" aria-live="polite">${esc(ORB_HINT[lang])}</div>
  </div>`;
}

document.addEventListener('pointerover', e => { const b = e.target.closest && e.target.closest('.orb-i'); if (b) $('#orb-cap').textContent = LANGS[lang][0] + '  ⇄  ' + LANGS[lang][+b.dataset.i + 1]; });
document.addEventListener('focusin', e => { const b = e.target.closest && e.target.closest('.orb-i'); if (b) $('#orb-cap').textContent = LANGS[lang][0] + '  ⇄  ' + LANGS[lang][+b.dataset.i + 1]; });
document.addEventListener('pointerout', e => { if (e.target.closest && e.target.closest('.orb-i')) $('#orb-cap').textContent = ORB_HINT[lang]; });
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.orb-i'); if (!b) return;
  const lp = $('#lp'); lp.value = String(+b.dataset.i * 2 + 1); lp.dispatchEvent(new Event('change'));
  $('#calc').scrollIntoView({ behavior: 'smooth' });
  if (typeof toast === 'function') toast(LANGS[lang][0] + ' → ' + LANGS[lang][+b.dataset.i + 1]);
});

const _renderO = render;
render = function () { _renderO(); drawOrbit(); };
drawOrbit();
