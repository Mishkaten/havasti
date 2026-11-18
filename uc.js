// Use-case explorer: pick a situation, see the documents usually needed.
const ICONS = [
  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  '<circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><path d="M9 6l1.5-2h3L15 6"/>',
  '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5"/>',
  '<path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"/>',
  '<path d="M12 4v16M6 20h12M4 8h16"/><path d="M6 8l-3 7a3 3 0 0 0 6 0zM18 8l-3 7a3 3 0 0 0 6 0z"/>',
  '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>'
];
const UC = {
  hy: {
    docs: 'Սովորաբար պետք եկող փաստաթղթեր', to: 'Սովորաբար հանձնվում է', tip: 'Ճշտեք ընդունող մարմնի մոտ՝ արդյոք անհրաժեշտ է նաև ապոստիլ։',
    d: [['Ծննդյան վկայական', 'Ամուսնության վկայական', 'Անձնագիր', 'Դատվածության բացակայության տեղեկանք'], ['Ծննդյան վկայական', 'Անձնագիր', 'Ամուսնալուծության վկայական (առկայության դեպքում)', 'Ամուսնական կարգավիճակի տեղեկանք'], ['Դիպլոմ', 'Դիպլոմի հավելված', 'Ակադեմիական տեղեկանք'], ['Ատեստատ', 'Դիպլոմ', 'Դիպլոմի հավելված', 'Անձնագիր'], ['Լիազորագիր', 'Դատական ակտ', 'Նոտարական ակտ', 'Պայմանագիր'], ['Գրանցման վկայական', 'Կանոնադրություն', 'Ռեեստրի քաղվածք', 'Լիցենզիա']],
    t: ['Միգրացիոն ծառայություն, նախարարություն', 'Քաղաքացիական կացության բաժին, դեսպանություն', 'Ճանաչման կենտրոն, գործատու', 'Համալսարանի ընդունելության գրասենյակ', 'Դատարան, նոտար', 'Բանկ, գործընկեր, հարկային կամ լիցենզավորող մարմին']
  },
  en: {
    docs: 'Documents you usually need', to: 'Usually submitted to', tip: 'Check with the receiving body whether an apostille is also needed.',
    d: [['Birth certificate', 'Marriage certificate', 'Passport', 'Criminal record certificate'], ['Birth certificate', 'Passport', 'Divorce certificate (if any)', 'Certificate of marital status'], ['Diploma', 'Transcript', 'Academic record'], ['School certificate', 'Diploma', 'Transcript', 'Passport'], ['Power of attorney', 'Court ruling', 'Notarial deed', 'Contract'], ['Registration certificate', 'Charter', 'Registry extract', 'Licence']],
    t: ['Migration service, ministry', 'Registry office, embassy', 'Recognition centre, employer', 'University admissions office', 'Court, notary', 'Bank, partner, tax or licensing body']
  },
  ru: {
    docs: 'Обычно нужны документы', to: 'Обычно подают в', tip: 'Уточните в принимающем органе, нужен ли также апостиль.',
    d: [['Свидетельство о рождении', 'Свидетельство о браке', 'Паспорт', 'Справка о несудимости'], ['Свидетельство о рождении', 'Паспорт', 'Свидетельство о разводе (если есть)', 'Справка о семейном положении'], ['Диплом', 'Приложение к диплому', 'Академическая справка'], ['Аттестат', 'Диплом', 'Приложение к диплому', 'Паспорт'], ['Доверенность', 'Решение суда', 'Нотариальный акт', 'Договор'], ['Свидетельство о регистрации', 'Устав', 'Выписка из реестра', 'Лицензия']],
    t: ['Миграционная служба, министерство', 'ЗАГС, посольство', 'Центр признания, работодатель', 'Приёмная комиссия университета', 'Суд, нотариус', 'Банк, партнёр, налоговый или лицензирующий орган']
  }
};
let ucActive = 0;
function drawUC(animate) {
  const u = UC[lang], tabs = T[lang].uses, root = document.getElementById('uc');
  root.innerHTML = `<div class="uc-tabs" role="tablist" aria-orientation="vertical">${tabs.map((t, i) =>
    `<button role="tab" id="uct${i}" aria-selected="${i === ucActive}" aria-controls="ucp" tabindex="${i === ucActive ? 0 : -1}" data-i="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[i]}</svg><span>${esc(t)}</span></button>`).join('')}</div>
    <div class="uc-panel" id="ucp" role="tabpanel" aria-labelledby="uct${ucActive}">
      <div class="uc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[ucActive]}</svg></div>
      <h3>${esc(tabs[ucActive])}</h3>
      <div class="uc-l">${esc(u.docs)}</div>
      <ul class="uc-d">${u.d[ucActive].map((d, k) => `<li style="--k:${k}">${esc(d)}</li>`).join('')}</ul>
      <div class="uc-l">${esc(u.to)}</div>
      <p class="uc-to">${esc(u.t[ucActive])}</p>
      <p class="uc-tip">${esc(u.tip)}</p>
      <a class="btn btn-p" href="#contact">${esc(T[lang].cta_send)}</a>
    </div>`;
  if (animate) { const p = document.getElementById('ucp'); p.classList.remove('swap'); void p.offsetWidth; p.classList.add('swap'); }
}
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.uc-tabs button'); if (!b) return;
  ucActive = +b.dataset.i; drawUC(true);
  // keep the chosen tab visible in the horizontal strip on phones
  const nb = document.getElementById('uct' + ucActive); nb.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
});
document.addEventListener('keydown', e => {
  const b = e.target.closest && e.target.closest('.uc-tabs button'); if (!b) return;
  const n = T[lang].uses.length, k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
  if (!k) return; e.preventDefault(); ucActive = (ucActive + k + n) % n; drawUC(true); document.getElementById('uct' + ucActive).focus();
});
const _renderU = render;
render = function () { _renderU(); drawUC(false); };
drawUC(false);
