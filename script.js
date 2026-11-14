// Site Algoo : bascule FR/EN, démonstration de saisie, journal et rapport fictifs.
// Rien n'est enregistré ni envoyé.
(function () {
  'use strict';

  // Le français est dans la page ; l'anglais est ici. Brouillons à relire.
  var EN = {
    'nav.meet': 'Meet Algoo', 'nav.journal': 'The report', 'nav.more': 'Details and Health', 'nav.watch': 'Apple Watch', 'nav.friends': 'The friends',
    'hero.eyebrow': 'Your companion for noting pain, day by day',
    'hero.title': 'Your pain,<br>easier<br>to <em>explain.</em>',
    'hero.intro': 'With Algoo, note your pain when you feel it, in simple words. Find your observations in a <strong>detailed report to share, if you wish, with your practitioner.</strong>',
    'hero.try': 'Try it on the phone', 'demo.hint': 'Tap to try', 'hero.report': 'See the report', 'hero.soon': 'Coming soon to iPhone and Apple Watch.',
    'hero.orbit': 'Shall we check in?', 'hero.note': 'Less to remember.<br>More to share.',
    'demo.caption': 'Interactive demo · nothing is kept or sent',
    'watch.greet': 'Hello', 'watch.summary': 'Lower back · Moderate', 'watch.chip': 'Lower back · Change',
    'app.saved': 'Saved.', 'app.question': 'How are things right now?', 'app.pain': 'I’m in pain', 'app.nopain': 'No pain',
    'benefit.1': 'Note it on the spot, in your own words', 'benefit.2': 'Reread what you noted, day after day', 'benefit.3': 'Share a report with your practitioner',
    'meet.speech': 'Shall we start<br>with a quick check-in?',
    'meet.eyebrow': 'Your experience deserves its words',
    'meet.title': 'Telling it all<br>at an appointment?<br><em>Not that simple.</em>',
    'meet.p1': 'When pain is part of everyday life, describing several weeks of sensations during one appointment can be hard. Where, when, how, how much… Words and memories don’t always come at the right moment.',
    'meet.p2': 'That’s where Algoo comes along. <strong>“Where does it hurt? Pulling, burning? How much?”</strong> Simple questions to note what you feel through the day, without waiting for the appointment.',
    'meet.end': 'A kind little companion to make this moment simpler, more spontaneous, and a little gentler.',
    'steps.eyebrow': '01 — A moment for yourself',
    'steps.title': 'Pulling, squeezing,<br><em>noted.</em>',
    'steps.intro': 'No need to know medical terms. Algoo guides you through describing what you feel, one small step at a time.',
    'steps.tag1': 'Shoulder, left side', 'steps.tag2': 'Burning',
    'steps.s1t': 'Where does it hurt?', 'steps.s1': 'A short list or a body outline to tap. Your recent locations come back to save time.',
    'steps.s2t': 'What does it feel like?', 'steps.s2': 'Pinching, pulling, squeezing… The character shows the sensation; you pick the one that fits.',
    'steps.s3t': 'How intense is it?', 'steps.s3': 'With words, from 0 to 10, or with facial expressions. Nothing is chosen for you, and your note joins the journal.',
    'journal.eyebrow': '02 — From everyday life to the appointment',
    'journal.title': 'Weeks of<br>lived experience.<br><em>One report<br>to talk about it.</em>',
    'journal.pdf': 'See a sample PDF →', 'journal.pdfnote': 'A fictional document, as the app produces it.',
    'journal.title2': 'Weeks of lived experience.<br><em>One report to talk about it.</em>',
    'journal.lead': 'Algoo gathers your observations in a journal and a detailed report, to share with your practitioner if you wish.',
    'journal.p1': 'Dates, painful areas, sensations, their intensity and the details you added: Algoo gathers your observations in a journal and a detailed report.',
    'journal.p2': 'Share this report with your practitioner if you wish, to give them concrete markers of your daily life. Something to support the conversation and complete your explanations.',
    'journal.k1t': 'A summary at a glance', 'journal.k1': 'The period, locations, sensations and intensities, on one clear page.',
    'journal.k2t': 'A carefully made document', 'journal.k2': 'A plain, readable PDF that says how each intensity was noted.',
    'journal.k3t': 'Your observations, as they are', 'journal.k3': 'No average, no interpretation: reading it stays between you and your practitioner.',
    'more.eyebrow': 'Going further',
    'more.title': 'The essentials in a few taps.<br><em>The rest, if you want.</em>',
    'more.intro': 'A note takes three answers. After “Saved”, you can say more, or stop there: nothing is required.',
    'more.c1e': 'Add details', 'more.c1t': 'The context around the pain',
    'more.c1': 'What you tried and how you felt afterwards, your sleep, your mood, what came with the pain… Markers you’ll find again in the journal and the report.',
    'more.t1': 'What I tried', 'more.t2': 'My daily life', 'more.t3': 'My mood', 'more.t4': 'Other signs', 'more.t5': 'A free note', 'more.t6': 'and more…',
    'more.c1n': 'Algoo gathers your observations in one document, as you noted them, without linking them or drawing conclusions.',
    'more.c2e': 'Apple Health · optional', 'more.c2t': 'Apple Health data, in a separate section',
    'more.c2': 'If you allow it, the report can include, in a separate section, data already in Apple Health for the same period.',
    'more.h1': 'Sleep', 'more.h2': 'Steps', 'more.h3': 'Resting heart rate', 'more.h4': 'Blood pressure', 'more.h5': 'Menstrual cycle', 'more.h6': 'Age, weight, height',
    'more.c2n': 'You choose item by item. Algoo only reads what you allow and writes nothing to Apple Health.',
    'trust.title': 'Your journal stays<br><em>in your hands.</em>',
    'trust.4t': 'Apple Health, only if you want.', 'trust.4': 'Access is set item by item and can be withdrawn at any time in iPhone settings.',
    'journal.link': 'See a sample report →', 'journal.head': 'My journal', 'journal.today': 'Today', 'journal.week': 'This week',
    'journal.button': 'Report preview', 'journal.caption': 'Fictional example · for illustration',
    'watch.eyebrow': '03 — A spontaneous gesture, on your wrist',
    'watch.title': 'Note it<br>when you<br><em>feel it.</em>',
    'watch.p1': 'A pain to note, without taking out your phone. One question, the character, one button: the watch suggests your usual location and the crown scrolls through sensations.',
    'watch.p2': 'A few gestures on your wrist to add to the journal you’ll find on your iPhone.',
    'friends.eyebrow': 'A little gang, a lot of gentleness',
    'friends.title': 'Algoo came along<br><em>with friends.</em>',
    'friends.intro': 'A messy tuft, a perfectly round face, fur in every direction… This little gang brings gentleness and good cheer, to help you feel at ease when you describe your pain.',
    'friends.c1': 'Big attentive eyes.<br>The first to say hello.',
    'friends.n2': 'Little Tuft', 'friends.c2': 'A curious look.<br>A touch of good cheer.',
    'friends.n3': 'Roly-Poly', 'friends.c3': 'A calm presence.<br>Everyone takes their time.',
    'friends.n4': 'Fuzzy', 'friends.c4': 'A bit ruffled.<br>Just as endearing.',
    'friends.caption': 'Tap the one who will keep you company.',
    'friends.project': 'Choosing your companion is planned for the app; here, it changes the character on this page.',
    'meet.poke': 'Make Algoo react',
    'film.eyebrow': 'In forty seconds', 'film.title': 'Algoo, <em>in pictures.</em>',
    'story.eyebrow': 'A companion, not a form',
    'story.title': 'By your side,<br><em>from the first word to the appointment.</em>',
    'story.b1t': 'It says hello', 'story.b1': 'One question at a time, when you feel like it. Never a reproach if you noted nothing.',
    'story.b2t': 'It shows what you feel', 'story.b2': 'Squeezing, pulling, burning: it mimes the sensation, you recognise yours. No vocabulary to learn.',
    'story.b3t': 'It remembers for you', 'story.b3': 'Every note joins your journal. You no longer have to keep it all in your head.',
    'story.b4t': 'You say how much', 'story.b4': 'With words, a number or a face: you choose. Nothing is ticked in advance.',
    'story.b5t': 'On the day of the appointment, it’s all there', 'story.b5': 'A clear report, in your words, to show if you wish. You tell your story without forgetting anything.',
    'story.c1': 'How are things?', 'story.c2': 'Squeezing', 'story.c3': 'Noted.', 'story.c4': 'Moderate', 'story.c5': 'Your report is ready',
    'trust.eyebrow': 'Your data',
    'trust.1t': 'No account, no Algoo server.', 'trust.1': 'Nothing to create to get started. Your journal is kept on your devices.',
    'trust.2t': 'No ads, no audience tracking.', 'trust.2': 'The app contains no advertising or analytics tools.',
    'trust.3t': 'You decide what is shared.', 'trust.3': 'A report only leaves the app when you ask for it. Device backups follow your Apple settings.',
    'faq.eyebrow': 'Keeping it simple', 'faq.title': 'A few questions,<br>before you start.',
    'faq.q1': 'What is Algoo for?',
    'faq.a1': 'Algoo helps you note your pain: describe your sensations in simple words, indicate their intensity and keep your observations. A detailed report then helps you talk about it with your practitioner. The app does not diagnose, give recommendations or replace an appointment.',
    'faq.q8': 'Is Algoo a medical device?', 'faq.a8': 'No. Algoo is a personal journal. Its only purpose is to help you note what you feel and find it again, so it is easier to talk about with a health professional. It does not analyse your entries, detects nothing, makes no diagnosis and recommends no treatment. It does not replace medical advice.',
    'faq.q2': 'Do I need an Apple Watch?', 'faq.a2': 'No. The iPhone is the heart of the journal; the watch is one more way to note, on your wrist.',
    'faq.q3': 'Do I need an account?', 'faq.a3': 'No. Algoo works with no account and no sign-up.',
    'faq.q4': 'Do I have to fill something in every day?', 'faq.a4': 'No. You note when you want. A day with no entry is neither a failure nor an absence of pain.',
    'faq.q5': 'When can I download the app?', 'faq.a5': 'Algoo is in the making. The release date and App Store link will be shared at launch.',
    'faq.q6': 'What is free?', 'faq.a6': 'Noting your pain is free and stays free, with the journal for the last 30 days and the essential report. Details, your full history and the in-depth report are part of Algoo Premium: €3.99 a month or €29.99 a year, with a 7-day free trial on the yearly plan.',
    'price.eyebrow': 'Free and Algoo Premium', 'price.title': 'The essentials are free.<br><em>The rest, if you need it.</em>',
    'price.free.t': 'Free', 'price.free.p': 'With no time limit',
    'price.free.1': 'Note your pain as often as you like, on iPhone and Apple Watch', 'price.free.2': 'The journal and overview for the last 30 days', 'price.free.3': 'The essential report for those 30 days', 'price.free.4': 'A full export of your data, and its deletion',
    'price.premium.t': 'Algoo Premium', 'price.premium.p': '<strong>€3.99</strong> a month or <strong>€29.99</strong> a year',
    'price.premium.1': 'Details: context, other signs, daily life, mood, what you tried, notes', 'price.premium.2': 'Your whole journal, beyond 30 days', 'price.premium.3': 'The overview over long periods', 'price.premium.4': 'The in-depth report, with your details and notes', 'price.premium.5': 'Apple Health data added to the report, if you wish',
    'price.free.s1': 'Note your pain, on iPhone and Apple Watch', 'price.free.s4': 'A full export of your data',
    'price.premium.trial': '7 days free with the yearly plan', 'price.premium.p2': '<strong>€29.99</strong> a year <span>or €3.99 a month</span>',
    'price.premium.s1': 'Context, signs, mood, and more', 'price.premium.s3': 'Your overview over 3 months, 6 months, 1 year', 'price.premium.s4': 'A detailed report, ready to share', 'price.premium.s5': 'Apple Health in your report',
    'price.opt.tag': '7 days free · −37%', 'price.opt.y': 'Yearly', 'price.opt.yp': '<strong>€29.99</strong> a year', 'price.opt.ys': 'that’s €2.50 a month',
    'price.opt.m': 'Monthly', 'price.opt.mp': '<strong>€3.99</strong> a month', 'price.opt.ms': 'that’s €47.88 over a year',
    'price.opt.ys2': 'that’s €2.50 a month<br>7 days free to try it', 'price.opt.save': '<strong>−37%</strong><span>saved</span>', 'price.opt.mline': 'Monthly: <strong>€3.99</strong> a month',
    'price.premium.n': 'Price in France; the price is shown in your currency on the App Store. 7-day free trial with the yearly plan, for a first subscription. Auto-renewing subscription you can cancel anytime in your App Store account.',
    'price.keep': 'What you noted stays yours: you can export all of it and delete it, with or without a subscription.',
    'faq.q7': 'Does this demo keep my answers?', 'faq.a7': 'No. The choices on this page only let you try the check-in and disappear when you reload it.',
    'closing.eyebrow': 'Soon, in your pocket',
    'closing.title': 'Tell Algoo.',
    'closing.p': 'Your words day to day, markers for your appointment. Algoo, the little companion that helps you note your pain and talk about it better.',
    'closing.cta': 'Give it a quick try',
    'footer.note': 'Personal pain journal. Does not replace the advice of a health professional.',
    'footer.legal': 'Legal notice', 'footer.privacy': 'Privacy', 'footer.support': 'Support',
    'footer.draft': '© 2026 Algoo',
    'report.eyebrow': 'Fictional example', 'report.title': 'My report',
    'report.intro': 'Everyday observations brought together to talk about them more easily: when, where, which sensation and how intense.',
    'report.note': 'For illustration. The report describes what you noted, with no average or interpretation.',
    'report.close': 'Close preview'
  };

  // Textes de la démonstration, repris du catalogue de l'app.
  var APP = {
    fr: {
      day: 'Bonjour', evening: 'Bonsoir', start: 'Comment ça se passe ?', pain: 'J’ai mal', noPain: 'Pas de douleur',
      where: 'Où ça fait mal ?', how: 'Ça fait quoi ?', intensity: 'Quelle intensité ?',
      continueWith: 'Continuer avec « %@ »', save: 'Enregistrer', saved: 'C’est noté.', again: 'Refaire un petit point', back: 'Retour', details: 'Ajouter des précisions',
      previous: 'Sensation précédente', next: 'Sensation suivante', noted: 'Intensité notée',
      zones: ['Tête', 'Épaule', 'Bas du dos', 'Abdomen', 'Genou'],
      sensations: { squeeze: 'Ça serre', burn: 'Ça brûle', pulse: 'Ça bat', pinch: 'Ça pince', pull: 'Ça tire', tingle: 'Ça fourmille' },
      levels: ['Faible', 'Modérée', 'Intense', 'Insupportable'],
      days: ['Jeu. 12', 'Mer. 11', 'Lun. 9'], date: '12 novembre'
    },
    en: {
      day: 'Hello', evening: 'Good evening', start: 'How are things right now?', pain: 'I’m in pain', noPain: 'No pain',
      where: 'Where does it hurt?', how: 'What does it feel like?', intensity: 'How intense is it?',
      continueWith: 'Continue with “%@”', save: 'Save', saved: 'Saved.', again: 'Check in again', back: 'Back', details: 'Add details',
      previous: 'Previous sensation', next: 'Next sensation', noted: 'Intensity noted',
      zones: ['Head', 'Shoulder', 'Lower back', 'Abdomen', 'Knee'],
      sensations: { squeeze: 'Squeezing', burn: 'Burning', pulse: 'Throbbing', pinch: 'Pinching', pull: 'Pulling', tingle: 'Tingling' },
      levels: ['Mild', 'Moderate', 'Severe', 'Unbearable'],
      days: ['Thu 12', 'Wed 11', 'Mon 9'], date: '12 November'
    }
  };
  var SENSATIONS = ['squeeze', 'burn', 'pulse', 'pinch', 'pull', 'tingle'];
  // Journal fictif : [zone, sensation, niveau] ; null = « Pas de douleur » noté.
  var SAMPLE = { a: [0, 'squeeze', 0], b: [2, 'pull', 1], c: [4, 'pinch', 0] };

  var lang = 'fr';
  var period = 'today';
  var FR = {};
  var textNodes = document.querySelectorAll('[data-i18n]');
  var htmlNodes = document.querySelectorAll('[data-i18n-html]');
  textNodes.forEach(function (n) { FR[n.dataset.i18n] = n.textContent; });
  htmlNodes.forEach(function (n) { FR[n.dataset.i18nHtml] = n.innerHTML; });

  var state = { step: 'start', zone: null, sensation: 0, level: null };
  var el = {
    mascot: document.getElementById('demo-mascot'), greet: document.getElementById('demo-greet'),
    question: document.getElementById('demo-question'), choices: document.getElementById('demo-choices'),
    actions: document.getElementById('demo-actions'), entries: document.getElementById('entries'),
    rows: document.getElementById('report-rows'), report: document.getElementById('report')
  };

  function node(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function button(label, onClick, cls) {
    var b = node('button', cls, label);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
  }
  function pose(name, animation) {
    el.mascot.src = 'assets/poses/' + name + '.svg';
    el.mascot.className = 'mascot';
    void el.mascot.offsetWidth; // relance l'animation
    if (animation) el.mascot.classList.add('a-' + animation);
  }
  function go(step) { state.step = step; document.querySelector('.phone').classList.add('touched'); render(); }

  function render() {
    var t = APP[lang];
    el.choices.replaceChildren(); el.actions.replaceChildren(); el.greet.textContent = '';
    if (state.step === 'start') {
      var h = new Date().getHours();
      el.greet.textContent = (h >= 5 && h < 18) ? t.day : t.evening;
      el.question.textContent = t.start;
      pose('hello');
      el.actions.append(
        button(t.pain, function () { state.zone = null; state.level = null; state.sensation = 0; go('zone'); }, 'primary'),
        button(t.noPain, function () { state.zone = null; go('saved'); }));
    } else if (state.step === 'zone') {
      el.question.textContent = t.where;
      pose('neutral');
      t.zones.forEach(function (z, i) {
        el.choices.append(button(z, function () { state.zone = i; go('sensation'); }));
      });
      el.actions.append(button(t.back, function () { go('start'); }, 'link'));
    } else if (state.step === 'sensation') {
      var id = SENSATIONS[state.sensation];
      el.question.textContent = t.how;
      pose(id, id);
      var move = function (d) { state.sensation = (state.sensation + d + SENSATIONS.length) % SENSATIONS.length; render(); };
      var prev = button('‹', function () { move(-1); }, 'arrow'); prev.setAttribute('aria-label', t.previous);
      var next = button('›', function () { move(1); }, 'arrow'); next.setAttribute('aria-label', t.next);
      el.choices.append(prev, node('span', 'current', t.sensations[id]), next);
      el.actions.append(
        button(t.continueWith.replace('%@', t.sensations[id]), function () { go('intensity'); }, 'primary'),
        button(t.back, function () { go('zone'); }, 'link'));
    } else if (state.step === 'intensity') {
      el.question.textContent = t.intensity;
      pose('neutral');
      t.levels.forEach(function (l, i) {
        var b = button(l, function () { state.level = state.level === i ? null : i; render(); });
        b.setAttribute('aria-pressed', String(state.level === i));
        el.choices.append(b);
      });
      var save = button(t.save, function () { go('saved'); }, 'primary');
      save.disabled = state.level === null; // jamais présélectionnée
      el.actions.append(save, button(t.back, function () { go('sensation'); }, 'link'));
    } else {
      el.question.textContent = t.saved;
      pose('saved', 'saved');
      el.choices.append(node('span', 'summary', state.zone === null ? t.noPain
        : t.zones[state.zone] + ' · ' + t.sensations[SENSATIONS[state.sensation]] + ' · ' + t.levels[state.level]));
      el.actions.append(
        button(t.details, function () { document.getElementById('precisions').scrollIntoView(); }),
        button(t.again, function () { go('start'); }, 'link'));
    }
  }

  function label(sample, withZone) {
    var t = APP[lang];
    var s = t.sensations[sample[1]] + ' · ' + t.levels[sample[2]];
    return withZone ? t.zones[sample[0]] + ' · ' + t.sensations[sample[1]] : s;
  }

  function renderJournal() {
    var t = APP[lang];
    var list = period === 'today'
      ? [['12:30', SAMPLE.a, 'gold'], ['08:15', SAMPLE.b, '']]
      : [[t.days[0], SAMPLE.a, 'gold'], [t.days[1], SAMPLE.b, ''], [t.days[2], SAMPLE.c, 'gold']];
    el.entries.replaceChildren();
    list.forEach(function (e) {
      var row = node('div', 'entry');
      var body = node('div');
      body.append(node('strong', '', t.zones[e[1][0]]), node('small', '', label(e[1], false)));
      row.append(node('time', '', e[0]), body, node('i', e[2]));
      el.entries.append(row);
    });
    el.rows.replaceChildren();
    [['08:15', SAMPLE.b], ['12:30', SAMPLE.a]].forEach(function (e) {
      var r1 = node('div', 'report-row'); r1.append(node('span', '', t.date + ' · ' + e[0]), node('strong', '', label(e[1], true)));
      var r2 = node('div', 'report-row'); r2.append(node('span', '', t.noted), node('strong', '', t.levels[e[1][2]]));
      el.rows.append(r1, r2);
    });
    document.querySelectorAll('[data-period]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.period === period)); });
  }

  function setLang(l) {
    lang = l === 'en' ? 'en' : 'fr';
    var dict = lang === 'en' ? EN : FR;
    document.documentElement.lang = lang;
    var sample = document.getElementById('pdf-sample');
    if (sample) sample.href = 'assets/exemples/rapport-algoo-exemple-' + (lang === 'en' ? 'en' : 'fr') + '.pdf';
    textNodes.forEach(function (n) { n.textContent = dict[n.dataset.i18n] || FR[n.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-label]').forEach(function (n) { n.setAttribute('aria-label', lang === 'en' ? EN[n.dataset.i18nLabel] : 'Faire réagir Algoo'); });
    htmlNodes.forEach(function (n) { n.innerHTML = dict[n.dataset.i18nHtml] || FR[n.dataset.i18nHtml]; }); // textes de ce fichier uniquement
    document.querySelectorAll('[data-href-en]').forEach(function (a) {
      if (!a.dataset.hrefFr) a.dataset.hrefFr = a.getAttribute('href');
      a.setAttribute('href', lang === 'en' ? a.dataset.hrefEn : a.dataset.hrefFr);
    });
    document.title = lang === 'en' ? 'Algoo — Note your pain and talk about it better' : 'Algoo — Noter ses douleurs et mieux en parler';
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    try { localStorage.setItem('algoo-lang', lang); } catch (e) { /* stockage indisponible */ }
    render(); renderJournal();
    if (window.algooStoryRefresh) window.algooStoryRefresh();
    if (window.algooFilmLang) window.algooFilmLang(lang);
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  document.querySelectorAll('[data-period]').forEach(function (b) {
    b.addEventListener('click', function () { period = b.dataset.period; renderJournal(); });
  });
  document.querySelectorAll('[data-report]').forEach(function (b) {
    b.addEventListener('click', function () { el.report.showModal(); });
  });
  document.querySelectorAll('[data-close]').forEach(function (b) {
    b.addEventListener('click', function () { el.report.close(); });
  });
  el.report.addEventListener('click', function (e) { if (e.target === el.report) el.report.close(); });

  // Compagnon de la page : réagit au toucher, et change selon le copain choisi.
  var companion = document.getElementById('companion');
  var companion2 = document.getElementById('companion2');
  var REACTIONS = ['joy', 'motivated', 'calm', 'hello'];
  var poke = 0;
  var friend = 'algoo';
  function replay(img, name) {
    img.classList.remove('idle', 'a-hop', 'a-squeeze', 'a-saved');
    void img.offsetWidth;
    img.classList.add('a-' + name);
  }
  document.getElementById('poke').addEventListener('click', function () {
    if (friend === 'algoo') { companion.src = 'assets/poses/' + REACTIONS[poke++ % REACTIONS.length] + '.svg'; }
    replay(companion, 'hop');
  });
  document.querySelectorAll('[data-friend]').forEach(function (b) {
    b.addEventListener('click', function () {
      friend = b.dataset.friend; poke = 0;
      document.querySelectorAll('[data-friend]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      companion.src = companion2.src = b.dataset.src;
      companion.classList.toggle('raster', friend !== 'algoo');
      replay(b.querySelector('img'), 'hop'); replay(companion, 'hop');
    });
  });

  // Apparition au défilement ; les personnages du récit s'animent en entrant dans l'écran.
  var chips = document.getElementById('chips');
  var revealed = document.querySelectorAll('.more-card, .meet, .story-head, .step, .journal-section .section-intro, .journal-stage, .report-points, .plan, .watch-section, .friends-intro, .friend-card, .three, .faq, .closing');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !still) {
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) {
        if (!it.isIntersecting) return;
        it.target.classList.add('in');
        if (it.target.contains(chips)) { chips.querySelectorAll('span').forEach(function (s, i) { s.style.transitionDelay = 300 + i * 140 + 'ms'; }); chips.classList.add('in'); }
        var m = it.target.querySelector('[data-anim]');
        if (m) setTimeout(function () { replay(m, m.dataset.anim); }, 350);
        io.unobserve(it.target);
      });
    }, { threshold: 0.2 });
    revealed.forEach(function (n, i) {
      if (n.classList.contains('reveal')) return; n.classList.add('reveal'); n.style.transitionDelay = (i % 4) * 60 + 'ms'; io.observe(n); });
  }
  else { chips.classList.add('static'); }
  // Vidéo : change de langue avec la page ; ne démarre seule que visible et sans réduction des animations.
  var film = document.getElementById('film-video');
  if (film) {
    var filmLang = 'fr';
    window.algooFilmLang = function (l) {
      if (l === filmLang) return;
      filmLang = l;
      var wasPlaying = !film.paused;
      film.pause();
      film.querySelector('source').src = film.dataset['src' + (l === 'en' ? 'En' : 'Fr')];
      film.poster = film.dataset['poster' + (l === 'en' ? 'En' : 'Fr')];
      var track = film.querySelector('track');
      track.src = film.dataset['vtt' + (l === 'en' ? 'En' : 'Fr')];
      track.srclang = l; track.label = l === 'en' ? 'English' : 'Français';
      film.load();
      if (wasPlaying) film.play().catch(function () {});
    };
    if ('IntersectionObserver' in window && !still) {
      new IntersectionObserver(function (items) {
        items.forEach(function (it) {
          if (it.isIntersecting) film.play().catch(function () {}); else film.pause();
        });
      }, { threshold: 0.6 }).observe(film);
    }
    if (lang === 'en') window.algooFilmLang('en');
  }

  // Récit au défilement : le temps le plus proche du milieu de l'écran pilote le personnage.
  var storySteps = Array.prototype.slice.call(document.querySelectorAll('.scrolly-step'));
  var storyMascot = document.getElementById('story-mascot');
  var storyDisc = document.getElementById('story-disc');
  var storyChip = document.getElementById('story-chip');
  var storyDots = document.getElementById('story-dots');
  var storyActive = -1;
  function showStory(index, force) {
    if (index === storyActive && !force) return;
    var step = storySteps[index];
    if (!step) return;
    var changed = index !== storyActive;
    storyActive = index;
    storySteps.forEach(function (n, i) { n.classList.toggle('active', i === index); });
    storyDots.querySelectorAll('i').forEach(function (d, i) { d.classList.toggle('on', i === index); });
    storyChip.textContent = step.querySelector('.chip-src').textContent;
    if (!changed) return;
    storyDisc.className = 'stage-disc ' + step.dataset.tone;
    storyMascot.src = 'assets/poses/' + step.dataset.pose + '.svg';
    if (!still) replay(storyMascot, step.dataset.anim);
  }
  window.algooStoryRefresh = function () { if (storyActive >= 0) showStory(storyActive, true); };
  if (storySteps.length && 'IntersectionObserver' in window) {
    document.getElementById('scrolly').classList.add('live');
    storySteps.forEach(function () { storyDots.appendChild(document.createElement('i')); });
    var storyIO = new IntersectionObserver(function (items) {
      items.forEach(function (it) { if (it.isIntersecting) showStory(storySteps.indexOf(it.target)); });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    storySteps.forEach(function (n) { storyIO.observe(n); });
    showStory(0);
  }
  document.querySelectorAll('[data-anim]').forEach(function (m) {
    m.addEventListener('mouseenter', function () { replay(m, m.dataset.anim); });
  });

  var saved = null;
  try { saved = localStorage.getItem('algoo-lang'); } catch (e) { /* idem */ }
  var asked = new URLSearchParams(location.search).get('lang');
  setLang(asked || saved || ((navigator.language || 'fr').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en'));
})();
