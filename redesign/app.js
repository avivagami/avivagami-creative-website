/* AVIV AGAMI — "RUN OF SHOW" redesign
   Vanilla JS. No build step. Content comes from /content/*.json (same files the CMS edits). */

(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var CAPS = [
    { num: 'CUE 01', name: 'Creative direction', yrs: '10 YRS', desc: 'Concept-to-stage for live events and digital experiences. The kind of direction where the script, the visual, and the physical space are a single, unified vibe.' },
    { num: 'CUE 02', name: 'Copy & script', yrs: '10 YRS', desc: 'Manifestos, modular video scripts, taglines, and pitch decks. Words engineered to capture attention, and sentences that actually survive the legal review.' },
    { num: 'CUE 03', name: 'Video & visual content', yrs: '09 YRS', desc: 'Campaign videos, social content, recap videos, and graphic design. From high-velocity videos to the static graphics that pop.' },
    { num: 'CUE 04', name: 'Experiential & live events', yrs: '08 YRS', desc: 'Keynotes, interactive brand takeovers, and phygital activations. Stage, script, and visual design orchestrated as one immersive experience.' },
    { num: 'CUE 05', name: 'Generative AI creations', yrs: '04 YRS', desc: 'Custom production workflows blending advanced generative tools with directed art. The tech scales, but the human stays in control.' },
  ];

  var projects = [];
  var currentShow = -1;
  // ?touch=1 forces the touch experience for desktop testing
  var isTouch = matchMedia('(hover: none)').matches || /[?&]touch=1/.test(location.search);

  /* ---------- helpers ---------- */

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  // turn "*word*" markers from the CMS content into accent <em>s
  function richify(text) {
    return String(text || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function tlvClock() {
    try {
      return new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jerusalem', hour12: false });
    } catch (e) {
      return new Date().toLocaleTimeString('en-GB', { hour12: false });
    }
  }

  /* ---------- loader ---------- */

  function runLoader() {
    var loader = $('#loader');
    var pctEl = $('#loaderPct');
    var p = 0;
    var t = setInterval(function () {
      p = Math.min(100, p + Math.random() * 16 + 5);
      pctEl.textContent = pad2(Math.floor(p));
      loader.style.setProperty('--p', p / 100);
      if (p >= 100) {
        clearInterval(t);
        setTimeout(function () {
          loader.classList.add('is-done');
          document.body.classList.add('is-live');
          // hero children are clipped by overflow:hidden, so the observer never
          // fires for them — reveal them explicitly with a stagger
          $$('.hero [data-reveal]').forEach(function (el, i) {
            el.style.setProperty('--d', 0.15 + i * 0.1 + 's');
            el.classList.add('is-in');
          });
          revealInView();
        }, 250);
      }
    }, 110);
  }

  /* ---------- cursor + spotlight ---------- */

  function initCursor() {
    var cursor = $('#cursor');
    var label = $('#cursorLabel');
    var spot = $('#spot');
    var cx = innerWidth / 2, cy = innerHeight / 3, tx = cx, ty = cy;

    addEventListener('mousemove', function (e) {
      tx = e.clientX; ty = e.clientY;
      spot.style.setProperty('--mx', e.clientX + 'px');
      spot.style.setProperty('--my', e.clientY + 'px');
    });

    (function loop() {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest('[data-cursor], .cue, .ros__item');
      if (t) {
        cursor.classList.add('is-big');
        label.textContent = t.getAttribute('data-cursor') || (t.classList.contains('cue') ? 'OPEN' : 'INFO');
      } else {
        cursor.classList.remove('is-big');
      }
    });
  }

  /* ---------- touch FX: drifting spotlight + tap flash ---------- */

  function initTouchFX() {
    var spot = $('#spot');
    var t = Math.random() * 10;
    (function drift() {
      t += 0.006;
      spot.style.setProperty('--mx', (50 + Math.sin(t) * 32) + '%');
      spot.style.setProperty('--my', (38 + Math.cos(t * 0.7) * 24) + '%');
      requestAnimationFrame(drift);
    })();
    addEventListener('touchstart', function (e) {
      var tp = e.touches[0];
      if (!tp) return;
      var f = document.createElement('span');
      f.className = 'flash';
      f.style.left = tp.clientX + 'px';
      f.style.top = tp.clientY + 'px';
      document.body.appendChild(f);
      setTimeout(function () { f.remove(); }, 750);
    }, { passive: true });
  }

  /* ---------- hero parallax: name splits apart on scroll ---------- */

  function initHeroParallax() {
    var lines = $$('.hero__line');
    var lede = $('.hero__lede');
    var ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var sy = scrollY;
        if (sy > innerHeight * 1.3) return;
        if (lines[0]) lines[0].style.transform = 'translateX(' + (-sy * 0.18) + 'px)';
        if (lines[1]) lines[1].style.transform = 'translateX(' + (sy * 0.12) + 'px)';
        if (lede) lede.style.opacity = Math.max(0, 1 - sy / (innerHeight * 0.6));
      });
    }, { passive: true });
  }

  /* ---------- scroll: progress bar + timecode + reveals ---------- */

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-in'); revealObs.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  function revealInView() {
    $$('[data-reveal]').forEach(function (el, i) {
      el.style.setProperty('--d', (i % 4) * 0.08 + 's');
      revealObs.observe(el);
    });
  }

  function initScroll() {
    var bar = $('#progressBar');
    var tc = $('#tcReadout');
    addEventListener('scroll', function () {
      var max = document.documentElement.scrollHeight - innerHeight;
      var p = max > 0 ? scrollY / max : 0;
      bar.style.width = (p * 100) + '%';
      // scroll position as SMPTE-ish timecode: full page = 90 "seconds" of show
      var totalFrames = Math.floor(p * 90 * 24);
      var f = totalFrames % 24;
      var s = Math.floor(totalFrames / 24) % 60;
      var m = Math.floor(totalFrames / (24 * 60));
      tc.textContent = '00:' + pad2(m) + ':' + pad2(s) + ':' + pad2(f);
    }, { passive: true });
  }

  /* ---------- clocks ---------- */

  function initClocks() {
    var navT = $('#tlvTime'), footT = $('#footTime');
    function tick() {
      var t = tlvClock();
      if (navT) navT.textContent = t;
      if (footT) footT.textContent = t;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- creative principles — "Cue to Cue" lighting desk ---------- */

  var PRINCIPLES = [
    { kw: 'REMEMBERED',  html: 'Built to be <em>remembered</em>, not just seen. Every layout, every shot, every sentence — earning its place in the room.' },
    { kw: 'DISCIPLINE',  html: '<em>Discipline</em> over decoration. In a world of endless digital static, the goal is to cut right through it — every detail serving a clear, strategic purpose.' },
    { kw: 'HUMANS',      html: 'Tech accelerates. <em>Humans</em> connect. Generative tools move at the speed of tech — they don’t replace the human touch. They are the engine, not the driver.' },
    { kw: 'EXPERIENCES', html: '<em>Experiences</em>, not just spectacles. A 10-meter running track or a fast-paced film — the physical and the digital fuse into one immersive narrative.' },
    { kw: 'SAFE',        html: '<em>Safe</em> is invisible. True engagement takes a willingness to challenge the expected — bold choices, unexpected leaps, a healthy dose of curated chaos.' },
  ];

  function pad3(n) { n = Math.round(n); return (n < 10 ? '00' : n < 100 ? '0' : '') + n; }

  function initManifesto() {
    var section = $('#principles');
    var stageEl = $('#stageEl');
    var principle = $('#principle');
    var pool = $('#pool');
    var cueNo = $('#cueNo');
    var cueKw = $('#cueKw');
    var go = $('#go');
    var fill = $('#faderFill');
    var faderPct = $('#faderPct');
    var stack = $('#stack');
    if (!stageEl || !principle) return;

    var cur = 0, busy = false, timer = null;

    stack.innerHTML = PRINCIPLES.map(function (d, i) {
      return '<li class="cue-stack-item" data-i="' + i + '"><span class="cue-stack-item__n">CUE ' + pad2(i + 1) +
        '</span><span class="cue-stack-item__k">' + d.kw + '</span></li>';
    }).join('');
    var cues = $$('.cue-stack-item', stack);

    function paint() {
      principle.innerHTML = PRINCIPLES[cur].html;
      cueNo.textContent = 'CUE ' + pad2(cur + 1) + ' / ' + pad2(PRINCIPLES.length);
      cueKw.textContent = PRINCIPLES[cur].kw;
      cues.forEach(function (c, i) { c.classList.toggle('on', i === cur); });
      var active = cues[cur];
      if (active && active.scrollIntoView) active.scrollIntoView({ inline: 'nearest', block: 'nearest' });
    }

    // animate the crossfade fader 0 → 100 → 0
    function runFader() {
      var t0 = performance.now(), dur = 620;
      (function step(now) {
        var p = Math.min(1, (now - t0) / dur);
        var v = p < 0.5 ? p * 2 : (1 - p) * 2;
        fill.style.width = (v * 100) + '%';
        faderPct.textContent = pad3(v * 100);
        if (p < 1) requestAnimationFrame(step);
        else { fill.style.width = '0%'; faderPct.textContent = '000'; }
      })(t0);
    }

    function take(i, instant) {
      i = (i + PRINCIPLES.length) % PRINCIPLES.length;
      if (i === cur && !instant) return;
      if (instant) { cur = i; paint(); return; }
      if (busy) return;
      busy = true;
      go.classList.add('fire');
      runFader();
      stageEl.classList.add('dark');               // blackout
      pool.style.left = (40 + Math.random() * 20) + '%';  // relight from a new angle
      setTimeout(function () {
        cur = i; paint();
        stageEl.classList.remove('dark');          // bump up
      }, 420);
      setTimeout(function () { go.classList.remove('fire'); busy = false; }, 640);
    }

    function next() { take(cur + 1); }
    function prev() { take(cur - 1); }
    function restart() { stop(); timer = setInterval(next, 7000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    paint();

    go.addEventListener('click', function () { next(); restart(); });
    cues.forEach(function (c) {
      c.addEventListener('click', function () { take(+c.dataset.i); restart(); });
    });

    // spacebar = GO, arrows = take / back, when the desk is on screen & no overlay open
    addEventListener('keydown', function (e) {
      if ($('#show').classList.contains('is-open')) return;
      var r = section.getBoundingClientRect();
      if (!(r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.4)) return;
      if (e.code === 'Space') { e.preventDefault(); next(); restart(); }
      else if (e.key === 'ArrowRight') { next(); restart(); }
      else if (e.key === 'ArrowLeft') { prev(); restart(); }
    });

    // autoplay only while the desk is visible; pause on hover
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { en.isIntersecting ? restart() : stop(); });
    }, { threshold: 0.4 });
    io.observe(section);
    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', restart);
  }

  /* ---------- work: cue sheet + hover peek ---------- */

  function coverOf(p) {
    if (p.image) return p.image;
    if (p.gallery && p.gallery.length) return p.gallery[0];
    return '';
  }

  function renderCues() {
    var ul = $('#cueList');
    ul.innerHTML = projects.map(function (p, i) {
        var tagHtml = (p.tags || []).map(function (t) {
        return '<span class="cue__tag mono">' + t + '</span>';
      }).join('');
      return (
        '<li class="cue" data-i="' + i + '" data-reveal>' +
          '<div class="cue__inner">' +
            '<span class="cue__no mono">CUE ' + pad2(i + 1) + '</span>' +
            '<div class="cue__body">' +
              '<h3 class="cue__title">' + richify(p.title) + '</h3>' +
              (tagHtml ? '<div class="cue__tags">' + tagHtml + '</div>' : '') +
            '</div>' +
            '<div class="cue__meta mono"><span>' + richify(p.client) + '</span><span class="cue__year">' + richify(p.year) + '</span></div>' +
          '</div>' +
        '</li>'
      );
    }).join('');

    if (!isTouch) {
      var peek = $('#peek'), peekImg = $('#peekImg'), peekTag = $('#peekTag');
      var px = 0, py = 0, ptx = 0, pty = 0;

      addEventListener('mousemove', function (e) { ptx = e.clientX; pty = e.clientY; });
      (function loop() {
        px += (ptx - px) * 0.12;
        py += (pty - py) * 0.12;
        peek.style.transform = (peek.classList.contains('is-on') ? '' : 'scale(0.85) rotate(-3deg) ') +
          'translate(' + (px + 30) + 'px,' + (py - peek.offsetHeight / 2) + 'px)';
        peek.style.left = '0'; peek.style.top = '0';
        requestAnimationFrame(loop);
      })();

      $$('.cue', ul).forEach(function (li) {
        li.addEventListener('mouseenter', function () {
          var p = projects[+li.dataset.i];
          var src = coverOf(p);
          if (!src) return;
          peekImg.src = src;
          peekTag.textContent = p.kind || p.client || '';
          peek.classList.add('is-on');
        });
        li.addEventListener('mouseleave', function () { peek.classList.remove('is-on'); });
      });
    }

    $$('.cue', ul).forEach(function (li) {
      li.addEventListener('click', function () { openShow(+li.dataset.i); });
    });

    if (isTouch) initCueSpotlight();
  }

  /* ---------- mobile: the cue nearest screen-center lights up,
                its photo fades in as a full-bleed backdrop ---------- */

  function initCueSpotlight() {
    var bg = document.createElement('div');
    bg.className = 'cuebg';
    bg.innerHTML = '<img alt=""><img alt="">';
    document.body.appendChild(bg);
    document.body.classList.add('has-spotlight');
    var imgs = $$('img', bg);
    var front = 0, lastSrc = '';
    var cues = $$('.cue');
    var work = $('#work');
    var ticking = false;

    function update() {
      var wr = work.getBoundingClientRect();
      var on = wr.top < innerHeight * 0.55 && wr.bottom > innerHeight * 0.45;
      bg.classList.toggle('is-on', on);
      if (!on) {
        cues.forEach(function (c) { c.classList.remove('is-live'); });
        return;
      }
      var mid = innerHeight / 2, best = null, bd = Infinity;
      cues.forEach(function (c) {
        var r = c.getBoundingClientRect();
        var d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) { bd = d; best = c; }
      });
      cues.forEach(function (c) { c.classList.toggle('is-live', c === best); });
      if (best) {
        var src = coverOf(projects[+best.dataset.i]);
        if (src && src !== lastSrc) {
          lastSrc = src;
          front = 1 - front;
          imgs[front].src = src;
          imgs[front].classList.add('is-show');
          imgs[1 - front].classList.remove('is-show');
        }
      }
    }

    addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    update();
  }

  /* ---------- show file overlay ---------- */

  function ytId(url) {
    var m = String(url || '').match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    return m ? m[1] : '';
  }

  function openShow(i) {
    currentShow = i;
    var peekEl = $('#peek');
    if (peekEl) peekEl.classList.remove('is-on');
    var p = projects[i];
    $('#showCue').textContent = 'CUE ' + pad2(i + 1) + ' / ' + pad2(projects.length);
    $('#showKind').textContent = (p.kind || '').toUpperCase();
    $('#showTitle').innerHTML = richify(p.title);
    $('#showClient').textContent = 'CLIENT — ' + (p.client || '');
    $('#showYear').textContent = 'YEAR — ' + (p.year || '');
    $('#showRole').textContent = 'ROLE — ' + (p.role || '');
    $('#showBrief').innerHTML = richify(p.brief);
    $('#showExp').innerHTML = richify(p.experience || p.desc);
    $('#showTeam').textContent = p.team || '';

    var strip = $('#showStrip');
    var parts = [];
    var vid = ytId(p.youtube);
    if (vid) parts.push('<iframe class="show__video" src="https://www.youtube.com/embed/' + vid + '" title="' + (p.title || 'video') + '" allowfullscreen loading="lazy"></iframe>');
    (p.gallery || []).forEach(function (src) {
      parts.push('<img src="' + src + '" alt="" loading="lazy">');
    });
    strip.innerHTML = parts.join('');
    strip.scrollLeft = 0;
    updateGalleryUI();
    // recompute once images load and the strip's true width is known
    $$('img', strip).forEach(function (img) { img.addEventListener('load', updateGalleryUI); });

    var show = $('#show');
    show.classList.add('is-open');
    show.setAttribute('aria-hidden', 'false');
    $('.show__body').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeShow() {
    var show = $('#show');
    show.classList.remove('is-open');
    show.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    $('#showStrip').innerHTML = ''; // stop any playing video
  }

  function galleryStep() {
    var strip = $('#showStrip');
    var first = strip.querySelector('img, iframe');
    var w = first ? first.getBoundingClientRect().width : 0;
    // image may not be laid out / loaded yet — fall back to ~one viewport
    if (w < 40) return strip.clientWidth * 0.9;
    return w + 14;
  }

  function updateGalleryUI() {
    var strip = $('#showStrip');
    var slides = strip.children.length;
    var idx = Math.round(strip.scrollLeft / galleryStep()) + 1;
    var label = slides <= 1 ? '' : pad2(Math.min(idx, slides)) + ' / ' + pad2(slides);
    $$('.js-galcount').forEach(function (c) { c.textContent = label; });

    // edge arrows + scrims: hide where there's nothing more to reveal
    var gallery = $('#showGallery');
    if (!gallery) return;
    var scrollable = strip.scrollWidth > strip.clientWidth + 4;
    var atStart = !scrollable || strip.scrollLeft <= 2;
    var atEnd = !scrollable || strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 2;
    gallery.classList.toggle('at-start', atStart);
    gallery.classList.toggle('at-end', atEnd);
    var pa = $('#galArrowPrev'), na = $('#galArrowNext');
    if (pa) pa.classList.toggle('is-hidden', atStart);
    if (na) na.classList.toggle('is-hidden', atEnd);
  }

  function initShow() {
    $('#showClose').addEventListener('click', closeShow);
    $('#showPrev').addEventListener('click', function () { openShow((currentShow - 1 + projects.length) % projects.length); });
    $('#showNext').addEventListener('click', function () { openShow((currentShow + 1) % projects.length); });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeShow();
      if (!$('#show').classList.contains('is-open')) return;
      if (e.key === 'ArrowRight') $('#showNext').click();
      if (e.key === 'ArrowLeft') $('#showPrev').click();
    });

    var strip = $('#showStrip');

    // gallery prev/next — mobile pills + desktop edge arrows share one step
    function scrollPrev() { strip.scrollBy({ left: -galleryStep(), behavior: 'smooth' }); }
    function scrollNext() { strip.scrollBy({ left: galleryStep(), behavior: 'smooth' }); }
    $('#galPrev').addEventListener('click', scrollPrev);
    $('#galNext').addEventListener('click', scrollNext);
    $('#galArrowPrev').addEventListener('click', scrollPrev);
    $('#galArrowNext').addEventListener('click', scrollNext);
    strip.addEventListener('scroll', function () {
      if (strip._tk) return;
      strip._tk = true;
      requestAnimationFrame(function () { strip._tk = false; updateGalleryUI(); });
    }, { passive: true });

    // drag-to-scroll the gallery strip (desktop pointer)
    var down = false, sx = 0, sl = 0;
    strip.addEventListener('mousedown', function (e) { down = true; sx = e.pageX; sl = strip.scrollLeft; });
    addEventListener('mouseup', function () { down = false; });
    addEventListener('mousemove', function (e) { if (down) strip.scrollLeft = sl - (e.pageX - sx); });
  }

  /* ---------- about + capabilities ---------- */

  function renderAbout(a) {
    var bio = $('#aboutBio');
    var parts = [a.lede, a.bio1, a.bio2, a.bio3, a.bio4].filter(Boolean);
    bio.innerHTML = parts.map(function (t) { return '<p>' + richify(t).replace(/\n/g, '<br>') + '</p>'; }).join('');
    if (a.portrait) $('#portraitImg').src = (a.portrait.charAt(0) === '/' ? '..' : '') + a.portrait;
    if (a.availability) $('#heroAvail').textContent = a.availability.toUpperCase();
  }

  function renderRos() {
    $('#rosList').innerHTML = CAPS.map(function (c) {
      return (
        '<li class="ros__item" data-reveal>' +
          '<span class="ros__num">' + c.num + '</span>' +
          '<span class="ros__name">' + c.name + '</span>' +
          '<span class="ros__yrs">' + c.yrs + ' <i class="ros__plus">+</i></span>' +
          '<span class="ros__desc">' + c.desc + '</span>' +
        '</li>'
      );
    }).join('');
    $$('.ros__item').forEach(function (li) {
      li.addEventListener('click', function () { li.classList.toggle('is-open'); });
    });
  }

  /* ---------- settings / footer ---------- */

  function renderSettings(s) {
    if (s.email) {
      $('#emailBtn').href = 'mailto:' + s.email;
      $('.btn-mag__label').textContent = s.email;
    }
    if (s.linkedin && s.linkedin !== '#') $('#linkLinkedin').href = s.linkedin;
    if (s.instagram && s.instagram !== '#') $('#linkInstagram').href = s.instagram;
  }

  function initApplause() {
    var btn = $('#applause'), count = $('#applauseCount');
    var n = +(localStorage.getItem('aa-applause') || 0);
    count.textContent = '👏 ' + n;
    btn.addEventListener('click', function () {
      n++;
      localStorage.setItem('aa-applause', n);
      count.textContent = '👏 ' + n;
      if (navigator.vibrate) navigator.vibrate(12);
      var burst = document.createElement('span');
      burst.textContent = '👏';
      burst.style.cssText = 'position:fixed;left:' + (innerWidth / 2) + 'px;bottom:90px;font-size:28px;pointer-events:none;z-index:300;transition:all 1s cubic-bezier(.2,.6,.3,1);';
      document.body.appendChild(burst);
      requestAnimationFrame(function () {
        burst.style.transform = 'translate(' + (Math.random() * 160 - 80) + 'px,-180px) rotate(' + (Math.random() * 60 - 30) + 'deg)';
        burst.style.opacity = '0';
      });
      setTimeout(function () { burst.remove(); }, 1100);
    });
  }

  /* ---------- magnetic button ---------- */

  function initMagnet() {
    var btn = $('#emailBtn');
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = 'translate(' + dx * 0.18 + 'px,' + dy * 0.3 + 'px)';
    });
    btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
  }

  /* ---------- boot ---------- */

  function boot() {
    runLoader();
    if (isTouch) initTouchFX(); else initCursor();
    initHeroParallax();
    initScroll();
    initClocks();
    initManifesto();
    initShow();
    initApplause();
    initMagnet();
    renderRos();

    Promise.all([
      fetch('../content/projects.json').then(function (r) { return r.json(); }),
      fetch('../content/about.json').then(function (r) { return r.json(); }),
      fetch('../content/settings.json').then(function (r) { return r.json(); }),
    ]).then(function (res) {
      projects = (res[0].items || []).map(function (p) {
        if (p.gallery) p.gallery = p.gallery.map(function (g) { return g.charAt(0) === '/' ? '..' + g : g; });
        if (p.image && p.image.charAt(0) === '/') p.image = '..' + p.image;
        return p;
      });
      renderCues();
      renderAbout(res[1] || {});
      renderSettings(res[2] || {});
      revealInView();
    }).catch(function (err) {
      console.error('content load failed', err);
      $('#cueList').innerHTML = '<li class="cue"><div class="cue__inner"><span class="cue__no mono">ERR</span><h3 class="cue__title">Content failed to load</h3></div></li>';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
