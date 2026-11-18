// ---- Edit these before launch -------------------------------------------
const CONFIG = {
  whatsapp: '37400000000',          // digits only, country code first
  telegram: 'havasti_am',           // username without @
  phone: '+374 00 000 000',
  email: 'hello@havasti.example',
  // Real numbers only. Leave null to hide a stat. Fill in once they are true.
  proof: { translators: null, companies: null, documents: null, years: null },
  // Client or partner logos: [{ name: 'Acme LLC', logo: 'assets/partners/acme.svg' }]. Only with their permission.
  partners: [],
  // Real, permitted reviews: [{ name: 'Anna K.', role: 'Student', text: 'Quick and clear.' }]
  reviews: [],
  express: 5000,                   // AMD surcharge, PDF in 24 h
  courier: 1500,                    // AMD, original delivered in Yerevan
  apostille: 8000,                  // AMD per document
  docs: [                           // base prices in AMD, notary fee included
    { id: 'birth',   price: 6000, hy: 'Ծննդյան վկայական', en: 'Birth certificate', ru: 'Свидетельство о рождении' },
    { id: 'marr',    price: 6000, hy: 'Ամուսնության վկայական', en: 'Marriage certificate', ru: 'Свидетельство о браке' },
    { id: 'dip',     price: 9000, hy: 'Դիպլոմ և հավելված', en: 'Diploma and transcript', ru: 'Диплом и приложение' },
    { id: 'pass',    price: 5000, hy: 'Անձնագիր / ID քարտ', en: 'Passport / ID card', ru: 'Паспорт / ID-карта' },
    { id: 'lic',     price: 5000, hy: 'Վարորդական իրավունք', en: "Driver's licence", ru: 'Водительские права' },
    { id: 'other',   price: 7000, hy: 'Այլ փաստաթուղթ (լիազորագիր, դատական ակտ…)', en: 'Other (power of attorney, court ruling…)', ru: 'Другое (доверенность, решение суда…)' }
  ]
};
// --------------------------------------------------------------------------

const LANGS = {
  hy: ['հայերեն', 'անգլերեն', 'ռուսերեն', 'գերմաներեն', 'ֆրանսերեն', 'վրացերեն', 'պարսկերեն', 'արաբերեն', 'թուրքերեն', 'ուկրաիներեն', 'իսպաներեն', 'իտալերեն'],
  en: ['Armenian', 'English', 'Russian', 'German', 'French', 'Georgian', 'Persian', 'Arabic', 'Turkish', 'Ukrainian', 'Spanish', 'Italian'],
  ru: ['армянский', 'английский', 'русский', 'немецкий', 'французский', 'грузинский', 'персидский', 'арабский', 'турецкий', 'украинский', 'испанский', 'итальянский']
};

const T = {
  hy: {
    nav_prices: 'Գները', nav_process: 'Ընթացքը', nav_faq: 'Հարցեր', nav_contact: 'Կապ', nav_calc: 'Հաշվել գինը',
    hero_eyebrow: 'Վավերացված թարգմանություն',
    hero_h1: 'Փաստաթղթերի վավերացված թարգմանություն՝ առանց հերթերի',
    hero_lead: 'Ուղարկեք սկանը կամ լուսանկարը։ Մենք կհաստատենք գինն ու ժամկետը, նոտարը կվավերացնի թարգմանիչի ստորագրությունը, դուք կստանաք պատրաստի փաստաթուղթը։',
    hero_t1: 'Ֆիքսված գին՝ վճարելուց առաջ', hero_t2: 'PDF՝ նախօրոք, բնօրինակը՝ առաքմամբ', hero_t3: 'Ընդունվում է նախարարություններում, դատարաններում, դեսպանություններում',
    cta_send: 'Ուղարկել փաստաթուղթը', cta_calc: 'Հաշվել գինը', from: 'սկսած', hero_price: 'ծննդյան վկայական, ներառյալ նոտարը',
    pr_eyebrow: 'Գներ', pr_h: 'Ինչ ենք թարգմանում', pr_note: 'Գները նշված են սկսած և ներառում են նոտարական վավերացումը։ Վերջնական գինը հաստատվում է սկանը տեսնելուց հետո, մինչև վճարումը։',
    calc_eyebrow: 'Հաշվիչ', calc_h: 'Մոտավոր գինը՝ 20 վայրկյանում', calc_doc: 'Փաստաթուղթ', calc_lp: 'Լեզվական զույգ', calc_speed: 'Արագություն',
    calc_std: 'Ստանդարտ, 2–3 աշխ. օր', calc_exp: 'Շտապ, PDF 24 ժամում', calc_deliv: 'Բնօրինակի առաքում', calc_pdf: 'Միայն PDF', calc_courier: 'Առաքիչ Երևանում',
    calc_apo: 'Ավելացնել ապոստիլ', calc_note: 'Մոտավոր գին, ներառյալ նոտարը։ Վերջնականը՝ սկանը տեսնելուց հետո։', total: 'Ընդամենը',
    l_base: 'Թարգմանություն և նոտար', l_exp: 'Շտապ', l_courier: 'Առաքիչ', l_apo: 'Ապոստիլ',
    pc_eyebrow: 'Ընթացք', pc_h: 'Չորս քայլ՝ պատրաստ փաստաթղթին',
    s1h: 'Ուղարկեք սկանը', s1p: 'Լուսանկարը կամ սկանը՝ WhatsApp-ով, Telegram-ով կամ էլ. փոստով։',
    s2h: 'Ստացեք գին', s2p: 'Ֆիքսված գին և ժամկետ՝ նույն աշխատանքային օրը։ Վճարում՝ միայն համաձայնելուց հետո։',
    s3h: 'Թարգմանություն և նոտար', s3p: 'Թարգմանիչը թարգմանում է, նոտարը վավերացնում է ստորագրությունը։',
    s4h: 'Ստացեք արդյունքը', s4p: 'PDF՝ էլ. փոստով, բնօրինակը՝ առաքիչով կամ գրասենյակից։',
    uc_eyebrow: 'Ում համար', uc_h: 'Ինչի համար է պետք',
    uses: ['Քաղաքացիություն և կացության թույլտվություն', 'Ամուսնություն արտասահմանում', 'Դիպլոմի ճանաչում', 'Ընդունելություն համալսարան', 'Դատարան և նոտար', 'Բիզնես և պայմանագրեր'],
    lg_eyebrow: 'Լեզուներ', lg_h: 'Հայերենից և հայերեն', lg_note: 'Չկա՞ ձեր լեզուն ցանկում։ Գրեք մեզ, կգտնենք թարգմանիչ։',
    faq_eyebrow: 'FAQ', faq_h: 'Հաճախ տրվող հարցեր',
    faq: [
      ['Ի՞նչ է նշանակում «վավերացված» թարգմանություն', 'Թարգմանիչը ստորագրում է թարգմանությունը, իսկ նոտարը վավերացնում է այդ ստորագրությունը։ Սա Հայաստանում պաշտոնական մարմինների համար ընդունված ձևն է։'],
      ['Արդյո՞ք թարգմանությունն ընդունվելու է իմ մարմնում', 'Մենք նախապես ճշտում ենք, թե ում համար է փաստաթուղթը և ինչ պահանջներ կան։ Կասկածի դեպքում ձեզ կասենք մինչև վճարումը։'],
      ['Ինչ է ապոստիլը և պե՞տք է արդյոք', 'Ապոստիլը փաստաթղթի միջազգային հաստատումն է արտերկրում օգտագործելու համար։ Եթե պետք է, կզբաղվենք դրանով։'],
      ['Որքա՞ն է տևում', 'Սովորաբար 2–3 աշխատանքային օր։ Շտապ դեպքում՝ PDF 24 ժամում։'],
      ['Ինչպե՞ս եք պահում իմ տվյալները', 'Փաստաթուղթն օգտագործվում է միայն պատվերի համար և տրվում է միայն թարգմանչին ու նոտարին։ Առանց պատվերի հարցումները ջնջվում են 6 ամսից։']
    ],
    ct_eyebrow: 'Կապ', ct_h: 'Գրեք մեզ', ct_p: 'Պատասխանում ենք նույն աշխատանքային օրը։ Հարցումը անվճար է և պարտավորեցնող չէ։',
    ct_priv: 'Փաստաթղթերը չեն հրապարակվում և չեն փոխանցվում երրորդ կողմերին։',
    f_name: 'Անուն', f_phone: 'Հեռախոս', f_msg: 'Ինչ փաստաթուղթ և ինչ լեզվով', f_send: 'Բացել WhatsApp-ում',
    f_hint: 'Սկանը կկցեք WhatsApp-ի զրույցում։',
    ft_tag: 'Վավերացված թարգմանություն Հայաստանում', ft_legal: 'Գաղտնիություն · Պայմաններ'
  },
  en: {
    nav_prices: 'Prices', nav_process: 'Process', nav_faq: 'FAQ', nav_contact: 'Contact', nav_calc: 'Get a price',
    hero_eyebrow: 'Certified translation, Armenia',
    hero_h1: 'Certified document translation, without the queues',
    hero_lead: "Send a scan or a photo. We confirm the price and date, a notary certifies the translator's signature, and you get a ready-to-submit document.",
    hero_t1: 'Fixed price before you pay', hero_t2: 'PDF first, original delivered', hero_t3: 'Accepted by ministries, courts and embassies',
    cta_send: 'Send your document', cta_calc: 'Calculate price', from: 'from', hero_price: 'birth certificate, notary included',
    pr_eyebrow: 'Prices', pr_h: 'What we translate', pr_note: 'Prices are "from" and include notary certification. The final price is fixed after we see the scan, before you pay.',
    calc_eyebrow: 'Calculator', calc_h: 'A price estimate in 20 seconds', calc_doc: 'Document', calc_lp: 'Language pair', calc_speed: 'Speed',
    calc_std: 'Standard, 2–3 working days', calc_exp: 'Express, PDF in 24 h', calc_deliv: 'Original delivery', calc_pdf: 'PDF only', calc_courier: 'Courier in Yerevan',
    calc_apo: 'Add apostille', calc_note: 'Estimate, notary included. Final price after we see the scan.', total: 'Total',
    l_base: 'Translation and notary', l_exp: 'Express', l_courier: 'Courier', l_apo: 'Apostille',
    pc_eyebrow: 'Process', pc_h: 'Four steps to a ready document',
    s1h: 'Send the scan', s1p: 'A photo or scan via WhatsApp, Telegram or email.',
    s2h: 'Get a price', s2p: 'Fixed price and date the same working day. You pay only after you agree.',
    s3h: 'Translation and notary', s3p: 'The translator translates, the notary certifies the signature.',
    s4h: 'Receive it', s4p: 'PDF by email, the original by courier or pickup.',
    uc_eyebrow: 'Use cases', uc_h: 'What it is needed for',
    uses: ['Citizenship and residence permits', 'Marriage abroad', 'Diploma recognition', 'University admission', 'Court and notary', 'Business and contracts'],
    lg_eyebrow: 'Languages', lg_h: 'From and into Armenian', lg_note: "Your language isn't listed? Write to us and we will find a translator.",
    faq_eyebrow: 'FAQ', faq_h: 'Frequently asked questions',
    faq: [
      ['What does "certified" translation mean?', "The translator signs the translation and a notary certifies that signature. This is the form official bodies in Armenia accept."],
      ['Will my authority accept it?', 'We check who the document is for and what they require before we start. If there is doubt, we tell you before you pay.'],
      ['What is an apostille, and do I need one?', 'An apostille is an international confirmation of a document for use abroad. If you need it, we handle it.'],
      ['How long does it take?', 'Usually 2–3 working days. Express: PDF within 24 hours.'],
      ['How do you handle my data?', 'Documents are used only for your order and shared only with the translator and the notary. Inquiries without an order are deleted after 6 months.']
    ],
    ct_eyebrow: 'Contact', ct_h: 'Write to us', ct_p: 'We reply the same working day. Inquiries are free and non-binding.',
    ct_priv: 'Documents are never published or passed to third parties.',
    f_name: 'Name', f_phone: 'Phone', f_msg: 'Which document and which languages', f_send: 'Open in WhatsApp',
    f_hint: 'You attach the scan in the WhatsApp chat.',
    ft_tag: 'Certified translation in Armenia', ft_legal: 'Privacy · Terms'
  },
  ru: {
    nav_prices: 'Цены', nav_process: 'Как это работает', nav_faq: 'Вопросы', nav_contact: 'Контакты', nav_calc: 'Узнать цену',
    hero_eyebrow: 'Заверенный перевод, Армения',
    hero_h1: 'Заверенный перевод документов без очередей',
    hero_lead: 'Отправьте скан или фото. Мы подтвердим цену и срок, нотариус заверит подпись переводчика, вы получите готовый документ.',
    hero_t1: 'Фиксированная цена до оплаты', hero_t2: 'Сначала PDF, затем оригинал с доставкой', hero_t3: 'Принимается в министерствах, судах и посольствах',
    cta_send: 'Отправить документ', cta_calc: 'Рассчитать цену', from: 'от', hero_price: 'свидетельство о рождении, нотариус включён',
    pr_eyebrow: 'Цены', pr_h: 'Что мы переводим', pr_note: 'Цены указаны «от» и включают нотариальное заверение. Окончательная цена фиксируется после просмотра скана, до оплаты.',
    calc_eyebrow: 'Калькулятор', calc_h: 'Примерная цена за 20 секунд', calc_doc: 'Документ', calc_lp: 'Языковая пара', calc_speed: 'Срочность',
    calc_std: 'Стандарт, 2–3 раб. дня', calc_exp: 'Срочно, PDF за 24 часа', calc_deliv: 'Доставка оригинала', calc_pdf: 'Только PDF', calc_courier: 'Курьер по Еревану',
    calc_apo: 'Добавить апостиль', calc_note: 'Ориентировочная цена, нотариус включён. Окончательная после просмотра скана.', total: 'Итого',
    l_base: 'Перевод и нотариус', l_exp: 'Срочно', l_courier: 'Курьер', l_apo: 'Апостиль',
    pc_eyebrow: 'Процесс', pc_h: 'Четыре шага до готового документа',
    s1h: 'Отправьте скан', s1p: 'Фото или скан через WhatsApp, Telegram или почту.',
    s2h: 'Получите цену', s2p: 'Фиксированная цена и срок в тот же рабочий день. Платите только после согласия.',
    s3h: 'Перевод и нотариус', s3p: 'Переводчик переводит, нотариус заверяет подпись.',
    s4h: 'Получите результат', s4p: 'PDF на почту, оригинал курьером или самовывозом.',
    uc_eyebrow: 'Для чего', uc_h: 'Когда это нужно',
    uses: ['Гражданство и ВНЖ', 'Брак за границей', 'Признание диплома', 'Поступление в вуз', 'Суд и нотариус', 'Бизнес и договоры'],
    lg_eyebrow: 'Языки', lg_h: 'С армянского и на армянский', lg_note: 'Нет вашего языка? Напишите, мы найдём переводчика.',
    faq_eyebrow: 'FAQ', faq_h: 'Частые вопросы',
    faq: [
      ['Что значит «заверенный» перевод?', 'Переводчик подписывает перевод, а нотариус удостоверяет эту подпись. Такую форму принимают государственные органы Армении.'],
      ['Примут ли перевод в моей инстанции?', 'Перед началом мы уточняем, для кого документ и какие там требования. Если есть сомнения, скажем до оплаты.'],
      ['Что такое апостиль и нужен ли он?', 'Апостиль это международное подтверждение документа для использования за рубежом. Если нужен, мы оформим.'],
      ['Сколько это занимает?', 'Обычно 2–3 рабочих дня. Срочно: PDF за 24 часа.'],
      ['Как вы храните мои данные?', 'Документ используется только для заказа и передаётся только переводчику и нотариусу. Запросы без заказа удаляются через 6 месяцев.']
    ],
    ct_eyebrow: 'Контакты', ct_h: 'Напишите нам', ct_p: 'Отвечаем в тот же рабочий день. Запрос бесплатный и ни к чему не обязывает.',
    ct_priv: 'Документы не публикуются и не передаются третьим лицам.',
    f_name: 'Имя', f_phone: 'Телефон', f_msg: 'Какой документ и с какого на какой язык', f_send: 'Открыть в WhatsApp',
    f_hint: 'Скан вы прикрепите в чате WhatsApp.',
    ft_tag: 'Заверенный перевод в Армении', ft_legal: 'Конфиденциальность · Условия'
  }
};

if (window.X) for (const k in T) Object.assign(T[k], window.X[k]);
const $ = (s, r = document) => r.querySelector(s);
const amd = n => n.toLocaleString('en-US').replace(/,/g, ' ') + ' ֏';
let lang = 'hy';
try { lang = localStorage.getItem('lang') || (navigator.language || '').slice(0, 2); } catch (e) {}
if (!T[lang]) lang = 'hy';

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n] ?? ''; });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  $('#cards').innerHTML = CONFIG.docs.map(d => `<div class="card"><h3>${d[lang]}</h3><span class="from">${t.from}</span><span class="amt">${amd(d.price)}</span></div>`).join('');
  const keep = $('#doc').value;
  $('#doc').innerHTML = CONFIG.docs.map(d => `<option value="${d.id}">${d[lang]}</option>`).join('');
  if (keep) $('#doc').value = keep;
  const L = LANGS[lang], A = L[0], keepLp = $('#lp').selectedIndex;
  $('#lp').innerHTML = L.slice(1).flatMap((x, i) => [[i, true], [i, false]]).map(([i, fwd], k) => `<option value="${k}">${fwd ? L[i + 1] + ' → ' + A : A + ' → ' + L[i + 1]}</option>`).join('');
  if (keepLp > 0) $('#lp').selectedIndex = keepLp;
  $('#uses').innerHTML = t.uses.map(u => `<span class="chip">${u}</span>`).join('');
  $('#langs').innerHTML = L.slice(1).map(x => `<span class="chip">${x}</span>`).join('');
  $('#faqs').innerHTML = t.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('');
  calc();
}

function calc() {
  const t = T[lang], d = CONFIG.docs.find(x => x.id === $('#doc').value) || CONFIG.docs[0];
  const exp = document.querySelector('[name=speed]:checked').value === '1';
  const cou = document.querySelector('[name=deliv]:checked').value === '1';
  const apo = $('#apo').checked;
  const rows = [[t.l_base, d.price]];
  if (exp) rows.push([t.l_exp, CONFIG.express]);
  if (cou) rows.push([t.l_courier, CONFIG.courier]);
  if (apo) rows.push([t.l_apo, CONFIG.apostille]);
  $('#lines').innerHTML = rows.map(r => `<li><span>${r[0]}</span><span>${amd(r[1])}</span></li>`).join('');
  $('#total').textContent = amd(rows.reduce((s, r) => s + r[1], 0));
  window.__summary = `${d[lang]}, ${$('#lp').selectedOptions[0]?.textContent || ''}; ${$('#total').textContent}`;
}

document.querySelectorAll('.lang button').forEach(b => b.onclick = () => { lang = b.dataset.lang; try { localStorage.setItem('lang', lang); } catch (e) {} render(); });
['#doc', '#lp', '#apo'].forEach(s => $(s).addEventListener('change', calc));
document.querySelectorAll('[name=speed],[name=deliv]').forEach(r => r.addEventListener('change', calc));

$('#lnk-wa').href = `https://wa.me/${CONFIG.whatsapp}`;
$('#lnk-tg').href = `https://t.me/${CONFIG.telegram}`;
$('#lnk-ph').href = `tel:${CONFIG.phone.replace(/\s/g, '')}`; $('#lnk-ph').textContent = CONFIG.phone;
$('#lnk-em').href = `mailto:${CONFIG.email}`; $('#lnk-em').textContent = CONFIG.email;
render();
