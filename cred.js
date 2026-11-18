// Credibility section. Only true-by-construction facts plus numbers/logos/reviews that CONFIG supplies.
const C = {
  hy: {
    eyebrow: 'Վստահություն', h: 'Ովքեր են օգտվում Հավաստիից',
    stat: { lang: 'լեզու', docs: 'փաստաթղթի տեսակ', exp: 'շտապ PDF', expv: '24 ժ',
      translators: 'գործընկեր թարգմանիչ', companies: 'սպասարկված ընկերություն', documents: 'թարգմանված փաստաթուղթ', years: 'տարվա փորձ' },
    aud: [
      ['Անհատներ և ընտանիքներ', 'Քաղաքացիություն, կացության թույլտվություն, ամուսնություն, ընտանիքի վերամիավորում'],
      ['Ուսանողներ և շրջանավարտներ', 'Ընդունելություն, դիպլոմի ճանաչում, փոխանակման ծրագրեր'],
      ['Ընկերություններ և HR', 'Աշխատակիցների տեղափոխում, աշխատանքային թույլտվություն, ընկերության փաստաթղթեր'],
      ['Փաստաբաններ և նոտարներ', 'Դատական ակտեր, լիազորագրեր, պայմանագրեր'],
      ['Սփյուռք և վերադարձողներ', 'Ժառանգություն, գույք, ռեպատրիացիա'],
      ['Բժշկություն և ապահովագրություն', 'Տեղեկանքներ, բժշկական պատմություն, ապահովագրական պահանջներ']
    ],
    all: 'Բոլորը', price: 'Հաշվել գինը',
    docsH: 'Ինչ փաստաթղթերով ենք աշխատում',
    docs: [
      ['Քաղաքացիական կացության', ['Ծննդյան վկայական', 'Ամուսնության վկայական', 'Ամուսնալուծության վկայական', 'Մահվան վկայական', 'Անվան փոփոխություն', 'Ընտանեկան կազմ']],
      ['Կրթություն', ['Դիպլոմ', 'Դիպլոմի հավելված', 'Ատեստատ', 'Ակադեմիական տեղեկանք', 'Սերտիֆիկատ']],
      ['Անձը հաստատող', ['Անձնագիր', 'ID քարտ', 'Վարորդական իրավունք', 'Զինվորական տոմս']],
      ['Իրավական', ['Լիազորագիր', 'Դատական ակտ', 'Նոտարական ակտ', 'Պայմանագիր', 'Դատվածության բացակայության տեղեկանք']],
      ['Բիզնես', ['Գրանցման վկայական', 'Կանոնադրություն', 'Ռեեստրի քաղվածք', 'Ֆինանսական հաշվետվություն', 'Լիցենզիա']],
      ['Բժշկական', ['Բժշկական տեղեկանք', 'Հիվանդության պատմություն', 'Պատվաստումների քարտ', 'Ապահովագրական պոլիս']]
    ],
    netH: 'Թարգմանիչների ցանց',
    net: ['Թարգմանիչներն ունեն թարգմանչական կամ բանասիրական կրթություն', 'Յուրաքանչյուր թարգմանություն կարդում է երկրորդ լեզվաբանը', 'Թարգմանիչներն ու նոտարները ստորագրում են գաղտնիության համաձայնագիր', 'Թարգմանում է թիրախ լեզվին տիրապետող մասնագետը'],
    accH: 'Ում են սովորաբար հանձնում',
    acc: ['Նախարարություններ', 'Դատարաններ', 'Դեսպանություններ և հյուպատոսություններ', 'Համալսարաններ', 'Նոտարներ', 'Բանկեր', 'Գործատուներ', 'Միգրացիոն ծառայություններ'],
    revH: 'Կարծիքներ', partH: 'Գործընկերներ'
  },
  en: {
    eyebrow: 'Trust', h: 'Who uses Havasti',
    stat: { lang: 'languages', docs: 'document types', exp: 'express PDF', expv: '24 h',
      translators: 'partner translators', companies: 'companies served', documents: 'documents translated', years: 'years in operation' },
    aud: [
      ['Individuals and families', 'Citizenship, residence, marriage, family reunification'],
      ['Students and graduates', 'Admission, diploma recognition, exchange programmes'],
      ['Companies and HR', 'Staff relocation, work permits, company documents'],
      ['Law firms and notaries', 'Court rulings, powers of attorney, contracts'],
      ['Diaspora and returnees', 'Inheritance, property, repatriation'],
      ['Medical and insurance', 'Certificates, medical records, insurance claims']
    ],
    all: 'All', price: 'Get a price',
    docsH: 'Documents we handle',
    docs: [
      ['Civil status', ['Birth certificate', 'Marriage certificate', 'Divorce certificate', 'Death certificate', 'Name change', 'Family composition']],
      ['Education', ['Diploma', 'Transcript', 'School certificate', 'Academic record', 'Course certificate']],
      ['Identity', ['Passport', 'ID card', "Driver's licence", 'Military ID']],
      ['Legal', ['Power of attorney', 'Court ruling', 'Notarial deed', 'Contract', 'Criminal record certificate']],
      ['Business', ['Registration certificate', 'Charter', 'Registry extract', 'Financial statements', 'Licence']],
      ['Medical', ['Medical certificate', 'Medical record', 'Vaccination card', 'Insurance policy']]
    ],
    netH: 'Our translator network',
    net: ['Translators hold a translation or philology degree', 'Every translation is read by a second linguist', 'Translators and notaries sign a confidentiality agreement', 'Translated by a native speaker of the target language'],
    accH: 'Typically submitted to',
    acc: ['Ministries', 'Courts', 'Embassies and consulates', 'Universities', 'Notaries', 'Banks', 'Employers', 'Migration services'],
    revH: 'Reviews', partH: 'Partners'
  },
  ru: {
    eyebrow: 'Доверие', h: 'Кто пользуется Havasti',
    stat: { lang: 'языков', docs: 'типов документов', exp: 'срочный PDF', expv: '24 ч',
      translators: 'переводчиков-партнёров', companies: 'компаний-клиентов', documents: 'переведённых документов', years: 'лет на рынке' },
    aud: [
      ['Частные лица и семьи', 'Гражданство, ВНЖ, брак, воссоединение семьи'],
      ['Студенты и выпускники', 'Поступление, признание диплома, программы обмена'],
      ['Компании и HR', 'Релокация сотрудников, разрешения на работу, документы компании'],
      ['Юристы и нотариусы', 'Решения судов, доверенности, договоры'],
      ['Диаспора и репатрианты', 'Наследство, недвижимость, репатриация'],
      ['Медицина и страхование', 'Справки, медицинские записи, страховые случаи']
    ],
    all: 'Все', price: 'Рассчитать цену',
    docsH: 'Документы, с которыми работаем',
    docs: [
      ['Акты гражданского состояния', ['Свидетельство о рождении', 'Свидетельство о браке', 'Свидетельство о разводе', 'Свидетельство о смерти', 'Смена имени', 'Состав семьи']],
      ['Образование', ['Диплом', 'Приложение к диплому', 'Аттестат', 'Академическая справка', 'Сертификат']],
      ['Удостоверения', ['Паспорт', 'ID-карта', 'Водительские права', 'Военный билет']],
      ['Юридические', ['Доверенность', 'Решение суда', 'Нотариальный акт', 'Договор', 'Справка о несудимости']],
      ['Бизнес', ['Свидетельство о регистрации', 'Устав', 'Выписка из реестра', 'Финансовая отчётность', 'Лицензия']],
      ['Медицинские', ['Медицинская справка', 'История болезни', 'Сертификат о прививках', 'Страховой полис']]
    ],
    netH: 'Наша сеть переводчиков',
    net: ['Переводчики с профильным образованием (перевод или филология)', 'Каждый перевод читает второй лингвист', 'Переводчики и нотариусы подписывают соглашение о конфиденциальности', 'Переводит носитель целевого языка'],
    accH: 'Куда обычно подают',
    acc: ['Министерства', 'Суды', 'Посольства и консульства', 'Университеты', 'Нотариусы', 'Банки', 'Работодатели', 'Миграционные службы'],
    revH: 'Отзывы', partH: 'Партнёры'
  }
};

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---- document wall: filterable tiles, click prices the document ----
const GI = [ // one icon per group
  '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M16 11a3 3 0 1 0 0-6M17 14c2.5.4 4 2.4 4 5"/>',
  '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5"/>',
  '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 10h3M15 13h3"/>',
  '<path d="M12 4v16M6 20h12M4 8h16"/><path d="M6 8l-3 7a3 3 0 0 0 6 0zM18 8l-3 7a3 3 0 0 0 6 0z"/>',
  '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>'
];
const VET = [
  '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c3 2.5 9 2.5 12 0v-4.5"/>',
  '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  '<path d="M4 5h16v11H9l-5 4z"/>'
];
let dwActive = -1;
// which calculator document a tile maps to
function calcId(g, i) {
  if (g === 0) return ['birth', 'marr'][i] || 'other';
  if (g === 1) return i < 2 ? 'dip' : 'other';
  if (g === 2) return ['pass', 'pass', 'lic'][i] || 'other';
  return 'other';
}
function drawWall(c) {
  const f = $('#dw-f');
  f.innerHTML = [`<button type="button" role="tab" aria-selected="${dwActive < 0}" data-g="-1">${esc(c.all)}<em>${c.docs.reduce((s, g) => s + g[1].length, 0)}</em></button>`]
    .concat(c.docs.map(([h, items], g) => `<button type="button" role="tab" aria-selected="${dwActive === g}" data-g="${g}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GI[g]}</svg>${esc(h)}<em>${items.length}</em></button>`)).join('');
  const tiles = [];
  c.docs.forEach(([h, items], g) => { if (dwActive >= 0 && dwActive !== g) return; items.forEach((name, i) => tiles.push({ name, g, i })); });
  $('#cr-docs').innerHTML = tiles.map((t, k) => `<button type="button" class="dt" style="--k:${k}" data-g="${t.g}" data-i="${t.i}" aria-label="${esc(t.name)}">
    <svg class="dti" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GI[t.g]}</svg>
    <span class="dtn">${esc(t.name)}</span><i class="dtl"></i><i class="dtl s"></i><i class="dtl"></i><span class="dtc">${esc(c.price)} →</span></button>`).join('');
}
document.addEventListener('click', e => {
  const fb = e.target.closest && e.target.closest('#dw-f button');
  if (fb) { dwActive = +fb.dataset.g; drawWall(C[lang]); return; }
  const t = e.target.closest && e.target.closest('.dt'); if (!t) return;
  const sel = document.querySelector('#doc'); sel.value = calcId(+t.dataset.g, +t.dataset.i); sel.dispatchEvent(new Event('change'));
  document.querySelector('#calc').scrollIntoView({ behavior: 'smooth' });
  if (typeof toast === 'function') toast(t.getAttribute('aria-label'));
});
// 3D tilt on tiles (fine pointers only)
document.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const t = e.target.closest && e.target.closest('.dt'); if (!t) return;
  const b = t.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
  t.style.setProperty('--rx', (-y * 10).toFixed(1) + 'deg'); t.style.setProperty('--ry', (x * 12).toFixed(1) + 'deg');
  t.style.setProperty('--gx', (x + .5) * 100 + '%'); t.style.setProperty('--gy', (y + .5) * 100 + '%');
}, { passive: true });
document.addEventListener('pointerout', e => { const t = e.target.closest && e.target.closest('.dt'); if (t) { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); } });

function drawCred() {
  const c = C[lang], P = CONFIG.proof || {};
  $('#cr-eyebrow').textContent = c.eyebrow;
  $('#cr-h').textContent = c.h;

  const nDocs = c.docs.reduce((s, g) => s + g[1].length, 0);
  const stats = [[String(LANGS[lang].length), c.stat.lang], [nDocs + '+', c.stat.docs], [c.stat.expv, c.stat.exp]];
  ['translators', 'companies', 'documents', 'years'].forEach(k => { if (P[k]) stats.push([String(P[k]), c.stat[k]]); });
  $('#cr-stats').innerHTML = stats.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('');

  $('#cr-aud').innerHTML = c.aud.map(([h, p], i) => `<div class="swiper-slide"><div class="card"><span class="idx">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div></div>`).join('');
  $('#cr-docs-h').textContent = c.docsH;
  drawWall(c);
  $('#cr-net-h').textContent = c.netH;
  $('#cr-net').innerHTML = c.net.map((x, i) => `<div class="vt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${VET[i]}</svg><span class="vn">0${i + 1}</span><p>${esc(x)}</p></div>`).join('');
  $('#cr-acc-h').textContent = c.accH;
  const accRow = list => { const r = list.map(x => `<span class="chip">${esc(x)}</span>`).join(''); return `<div class="rowm"><div class="rowt">${r}${r}</div></div>`; };
  $('#cr-acc').innerHTML = accRow(c.acc) + accRow(c.acc.slice().reverse()).replace('rowt', 'rowt rev');

  const rv = CONFIG.reviews || [];
  $('#cr-rev-wrap').hidden = !rv.length;
  if (rv.length) {
    $('#cr-rev-h').textContent = c.revH;
    $('#cr-rev').innerHTML = rv.map(r => `<figure class="card"><blockquote>${esc(r.text)}</blockquote><figcaption>${esc(r.name)}${r.role ? ', ' + esc(r.role) : ''}</figcaption></figure>`).join('');
  }
  const pt = CONFIG.partners || [];
  $('#cr-part-wrap').hidden = !pt.length;
  if (pt.length) {
    $('#cr-part-h').textContent = c.partH;
    $('#cr-part').innerHTML = pt.map(p => p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy">` : `<span class="chip">${esc(p.name)}</span>`).join('');
  }
}
const _render = render;
render = function () { _render(); drawCred(); };
drawCred();
