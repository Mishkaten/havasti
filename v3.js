// v3: story + photo carousel, doc marquee, partner logos, interactive stamp, translation slider, GSAP motion.
const V3 = {
  hy: {
    sEye: 'Ինչու է կարևոր', sH: 'Հայոց գրերը ավելի քան 1600 տարեկան են։ Մենք դրանցով գրվածը դարձնում ենք ընթեռնելի ամենուր։',
    sP: 'Անունները, ամսաթվերը և կնիքները որոշում են՝ մարմինը կընդունի փաստաթուղթը, թե ոչ։ Թարգմանում ենք յուրաքանչյուր մանրուք, իսկ նոտարը վավերացնում է արդյունքը։',
    cap: ['Արարատ լեռը Երևանի վրա', 'Հայկական ձեռագրեր Մատենադարանում', 'Կասկադը, Երևան'],
    dEye: 'Փորձեք', dH: 'Տեսեք՝ նախքան ուղարկելը',
    stT: 'Վավերացում', stB: 'Դրոշմել փաստաթուղթը', stA: 'Կրկին դրոշմել', stDone: 'Վավերացված է', stHint: 'Սեղմեք փաստաթղթի վրա',
    cmT: 'Բնօրինակ և թարգմանություն', cmHint: 'Քաշեք սահողը', sample: 'Նմուշ, գեղարվեստական տվյալներ',
    pEye: 'Գործընկերներ', pH: 'Մեզ վստահում են', credits: 'Լուսանկարներ՝',
    doc: { title: 'ԾՆՆԴՅԱՆ ՎԿԱՅԱԿԱՆ', rows: [['Անուն', 'Անի Գրիգորյան'], ['Ծննդյան ամսաթիվ', '12.03.1994'], ['Ծննդավայր', 'Երևան'], ['Հայր', 'Արամ Գրիգորյան'], ['Մայր', 'Լուսինե Գրիգորյան'], ['Գրանցման համար', '№ 000000'], ['Տրված է', 'ՔԿԱԳ, Երևան']] }
  },
  en: {
    sEye: 'Why it matters', sH: 'The Armenian alphabet is more than 1,600 years old. We make what is written in it readable everywhere.',
    sP: 'Names, dates and stamps decide whether an authority accepts a paper. We translate every detail, and a notary certifies the result.',
    cap: ['Mount Ararat above Yerevan', 'Armenian manuscripts at the Matenadaran', 'The Cascade, Yerevan'],
    dEye: 'Try it', dH: 'See it before you send it',
    stT: 'Certification', stB: 'Stamp the document', stA: 'Stamp again', stDone: 'Certified', stHint: 'Click the document',
    cmT: 'Original and translation', cmHint: 'Drag the handle', sample: 'Sample document, fictional data',
    pEye: 'Partners', pH: 'Trusted by', credits: 'Photos:',
    doc: { title: 'BIRTH CERTIFICATE', rows: [['Name', 'Ani Grigoryan'], ['Date of birth', '12.03.1994'], ['Place of birth', 'Yerevan'], ['Father', 'Aram Grigoryan'], ['Mother', 'Lusine Grigoryan'], ['Registration no.', 'No. 000000'], ['Issued by', 'Civil Registry, Yerevan']] }
  },
  ru: {
    sEye: 'Почему это важно', sH: 'Армянской письменности более 1600 лет. Мы делаем написанное на ней понятным везде.',
    sP: 'Имена, даты и печати решают, примет ли орган документ. Мы переводим каждую деталь, а нотариус заверяет результат.',
    cap: ['Арарат над Ереваном', 'Армянские рукописи в Матенадаране', 'Каскад, Ереван'],
    dEye: 'Попробуйте', dH: 'Посмотрите до отправки',
    stT: 'Заверение', stB: 'Поставить печать', stA: 'Ещё раз', stDone: 'Заверено', stHint: 'Нажмите на документ',
    cmT: 'Оригинал и перевод', cmHint: 'Потяните ползунок', sample: 'Образец, вымышленные данные',
    pEye: 'Партнёры', pH: 'Нам доверяют', credits: 'Фото:',
    doc: { title: 'СВИДЕТЕЛЬСТВО О РОЖДЕНИИ', rows: [['Имя', 'Ани Григорян'], ['Дата рождения', '12.03.1994'], ['Место рождения', 'Ереван'], ['Отец', 'Арам Григорян'], ['Мать', 'Лусине Григорян'], ['Регистрационный №', '№ 000000'], ['Кем выдано', 'ЗАГС, Ереван']] }
  }
};
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer:fine)').matches;
const sel = (s, r = document) => r.querySelector(s);

function docHTML(d) {
  return `<div class="pt">${esc(d.title)}</div>` + d.rows.map(([k, v]) => `<div class="pr"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
}

function drawV3() {
  const v = V3[lang], en = V3.en;
  sel('#st-eye').textContent = v.sEye; sel('#st-h').textContent = v.sH; sel('#st-p').textContent = v.sP;
  document.querySelectorAll('.ph-cap').forEach((el, i) => el.textContent = v.cap[i]);
  sel('#dm-eye').textContent = v.dEye; sel('#dm-h').textContent = v.dH;
  sel('#stamp-t').textContent = v.stT; sel('#stamp-hint').textContent = v.stHint;
  sel('#stamp-btn').textContent = sel('#stamp-btn').dataset.done ? v.stA : v.stB;
  sel('#stamp-lab').textContent = v.stDone;
  sel('#cmp-t').textContent = v.cmT; sel('#cmp-hint').textContent = v.cmHint;
  document.querySelectorAll('.sample').forEach(el => el.textContent = v.sample);
  sel('#paper-doc').innerHTML = docHTML(V3.hy.doc);
  const tr = lang === 'ru' ? V3.ru.doc : en.doc;
  sel('#cmp-a').innerHTML = docHTML(V3.hy.doc);
  sel('#cmp-b').innerHTML = docHTML(tr);
  sel('#cr-credits-l').textContent = v.credits;
  // marquee of document names
  const names = CONFIG.docs.map(d => d[lang]).concat(C[lang].docs.flatMap(g => g[1]).slice(0, 14));
  const row = names.map(n => `<span>${esc(n)}</span><i>✦</i>`).join('');
  sel('#mq').innerHTML = row + row;
  // partners
  const demo = new URLSearchParams(location.search).has('demo');
  let pt = CONFIG.partners || [];
  if (!pt.length && demo) pt = Array.from({ length: 8 }, (_, i) => ({ name: 'Partner ' + (i + 1), placeholder: true }));
  sel('#partners').hidden = !pt.length;
  if (pt.length) {
    sel('#pt-eye').textContent = v.pEye; sel('#pt-h').textContent = v.pH;
    const items = pt.map(p => p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy">` : `<span class="ph-logo">${esc(p.name)}</span>`).join('');
    sel('#pt-track').innerHTML = items + items;
  }
}

// ---- Swiper: photo carousel, audience slider ----
let photoSw, audSw;
function initSwipers() {
  if (!window.Swiper) return;
  photoSw = new Swiper('#photos', { loop: true, effect: 'fade', fadeEffect: { crossFade: true }, speed: 900, grabCursor: true,
    autoplay: reduceMotion ? false : { delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '#photos .swiper-pagination', clickable: true }, keyboard: true, a11y: true });
  audSw = new Swiper('#aud', { slidesPerView: 'auto', spaceBetween: 14, grabCursor: true, freeMode: { enabled: true, sticky: false },
    pagination: { el: '#aud .swiper-pagination', clickable: true }, keyboard: true, a11y: true });
}

// ---- interactive stamp ----
function initStamp() {
  const paper = sel('#paper'), stamp = sel('#stamp'), btn = sel('#stamp-btn'), lab = sel('#stamp-lab');
  const go = () => {
    btn.dataset.done = '1'; btn.textContent = V3[lang].stA;
    if (window.gsap && !reduceMotion) {
      gsap.killTweensOf([stamp, paper, lab]);
      gsap.timeline()
        .set(stamp, { opacity: 0, scale: 2.4, rotate: -30 })
        .to(stamp, { opacity: .96, scale: 1, rotate: -9, duration: .32, ease: 'power4.in' })
        .to(paper, { y: 5, duration: .07 }, '<.28').to(paper, { y: 0, duration: .5, ease: 'elastic.out(1,.35)' })
        .fromTo('#ripple', { scale: .4, opacity: .6 }, { scale: 2.2, opacity: 0, duration: .8, ease: 'power2.out' }, '<-.45')
        .fromTo(lab, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .4 }, '<.2');
    } else { stamp.style.opacity = .96; stamp.style.transform = 'rotate(-9deg)'; lab.style.opacity = 1; }
  };
  btn.addEventListener('click', go);
  paper.addEventListener('click', go);
  paper.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
}

// ---- translation compare slider ----
function initCompare() {
  const box = sel('#cmp'), h = sel('#cmp-h');
  let p = 50;
  const set = v => { p = Math.max(4, Math.min(96, v)); box.style.setProperty('--p', p + '%'); h.setAttribute('aria-valuenow', Math.round(p)); };
  const at = e => { const b = box.getBoundingClientRect(); set((e.clientX - b.left) / b.width * 100); };
  let down = false;
  box.addEventListener('pointerdown', e => { down = true; box.setPointerCapture(e.pointerId); at(e); });
  box.addEventListener('pointermove', e => { if (down) at(e); });
  ['pointerup', 'pointercancel'].forEach(ev => box.addEventListener(ev, () => down = false));
  h.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') set(p - 5); if (e.key === 'ArrowRight') set(p + 5); });
  set(50);
  if (window.gsap && !reduceMotion) { // gentle hint on first view
    ScrollTrigger.create({ trigger: box, start: 'top 75%', once: true, onEnter: () => { const o = { v: 50 }; gsap.timeline().to(o, { v: 30, duration: .7, onUpdate: () => set(o.v), ease: 'power2.inOut' }).to(o, { v: 62, duration: .9, onUpdate: () => set(o.v), ease: 'power2.inOut' }).to(o, { v: 50, duration: .6, onUpdate: () => set(o.v) }); } });
  }
}

// ---- GSAP motion, magnetic buttons, cursor glow ----
function initMotion() {
  if (!window.gsap || reduceMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero .badge,.hero h1,.hero .lead,.hero .ticks,.hero .cta,.hero .mock', { y: 34, opacity: 0, duration: .9, stagger: .09, ease: 'power3.out', delay: .1 });
  gsap.utils.toArray('.parallax img').forEach(img => gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: img.parentElement, scrub: true } }));
  gsap.from('#st-h', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#st-h', start: 'top 85%' } });
  // count-up for the first three real stats
  ScrollTrigger.create({ trigger: '#cr-stats', start: 'top 85%', once: true, onEnter: () => {
    document.querySelectorAll('#cr-stats b').forEach(b => { const m = b.textContent.match(/^(\d+)(.*)$/); if (!m) return; const o = { n: 0 };
      gsap.to(o, { n: +m[1], duration: 1.4, ease: 'power2.out', onUpdate: () => b.textContent = Math.round(o.n) + m[2] }); });
  } });
  if (fine) {
    document.querySelectorAll('.btn-p').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .18, y: (e.clientY - r.top - r.height / 2) * .28, duration: .3 }); });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.4)' }));
    });
    const g = sel('#glow'); gsap.set(g, { opacity: 1 });
    const xs = gsap.quickTo(g, 'x', { duration: .5 }), ys = gsap.quickTo(g, 'y', { duration: .5 });
    addEventListener('pointermove', e => { xs(e.clientX); ys(e.clientY); }, { passive: true });
  }
}

const _render3 = render;
render = function () { _render3(); drawV3(); if (photoSw) { photoSw.update(); audSw.update(); } };
drawV3(); initSwipers(); initStamp(); initCompare(); initMotion();
// the audience slides are redrawn by cred.js on every render, so refresh Swiper after the first draw too
if (audSw) audSw.update();
