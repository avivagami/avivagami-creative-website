/* AA creative — site components */

// Fallback art styles cycled when a project has no uploaded image
const ART_CYCLE = ['b', 'a', 'd', 'e', 'f', 'c'];

const PROJECTS_DEFAULT = [
  {
    no: '№ 026', year: "'26", title: 'Architecture of Attention',
    client: 'Tier-one tech keynote', kind: 'creative direction · script · stage',
    desc: 'A two-hour keynote rebuilt from the script up. We treated each act as a film: cold open, escalation, payoff. Every transition earned its keep.',
    role: 'Creative Director', team: '4 + collaborators', span: 'w12', art: 'b',
    tags: ['Stage direction', 'Concept development', 'Art direction'],
  },
  {
    no: '№ 025', year: "'26", title: 'Signal in the noise',
    client: 'Cultural festival, three nights', kind: 'concept · campaign · live direction',
    desc: 'A festival identity built around one idea: every performance, one signal. We directed the live show, the visuals, and the morning-after recap film.',
    role: 'Creative Director', team: '6 + collaborators', span: 'w6', art: 'a',
    tags: ['Concept development', 'Art direction', 'Video direction', 'Content creation'],
  },
  {
    no: '№ 024', year: "'25", title: 'A film for an opening',
    client: 'Boutique hotel launch', kind: 'campaign film · 90s',
    desc: 'A campaign film built in nine shots. No voiceover. No music sting at the end. Just a room, a window, and a guest.',
    role: 'Director · Concept', team: '3 + collaborators', span: 'w6', art: 'd',
    tags: ['Video direction', 'Concept development', 'Art direction'],
  },
  {
    no: '№ 023', year: "'25", title: 'Generative pipeline, in production',
    client: 'In-house R&D', kind: 'creative strategy · tooling',
    desc: 'A production pipeline mixing generative imagery with directed photography. Built so the human stays in the room.',
    role: 'Creative Director', team: '2 + collaborators', span: 'w4', art: 'e',
    tags: ['AI video production', 'Concept development', 'Content creation'],
  },
  {
    no: '№ 022', year: "'25", title: 'Concert visuals, residency',
    client: 'Eight-night residency', kind: 'live visuals · motion',
    desc: 'Eight nights, one visual language, no two shows the same. The visuals listened to the room.',
    role: 'Director · Live ops', team: '4 + collaborators', span: 'w8', art: 'f',
    tags: ['Stage direction', 'Art direction', 'Content creation', 'Video direction'],
  },
  {
    no: '№ 021', year: "'25", title: 'Brand activation, museum night',
    client: 'Heritage institution', kind: 'concept · campaign film',
    desc: 'A late-night activation that turned the permanent collection into a stage. Press loved it. So did the security guards.',
    role: 'Creative Director', team: '5 + collaborators', span: 'w6', art: 'a',
    tags: ['Concept development', 'Video direction', 'Art direction'],
  },
  {
    no: '№ 020', year: "'24", title: 'Keynote, in three acts',
    client: 'Series-B launch', kind: 'deck · script · stage',
    desc: 'A founder who hated keynotes, asked to do one. We wrote the script first, then the deck, then the stage. He still hates them. This one worked.',
    role: 'Creative Director', team: '3 + collaborators', span: 'w6', art: 'b',
    tags: ['Stage direction', 'Concept development', 'Art direction'],
  },
  {
    no: '№ 019', year: "'24", title: 'Festival recap, six minutes',
    client: 'Cultural festival', kind: 'recap film · 6m',
    desc: 'Edited from 60+ hours of footage. The cut you remember the next morning, not the one that won the algorithm.',
    role: 'Director · Editor', team: '2 + collaborators', span: 'w5', art: 'c',
    tags: ['Video direction', 'Content creation'],
  },
  {
    no: '№ 018', year: "'24", title: 'Stage design, corporate launch',
    client: 'Fortune 500 product reveal', kind: 'stage · scenography · film',
    desc: 'Hard problem: a product launch in a venue with no theatre rigging and a 90-minute load-in. The stage was the film.',
    role: 'Creative Director', team: '8 + collaborators', span: 'w7', art: 'd',
    tags: ['Stage direction', 'Art direction', 'Video direction', 'Concept development'],
  },
  {
    no: '№ 017', year: "'24", title: 'Manifesto, one page',
    client: 'Independent founder', kind: 'copy · creative strategy',
    desc: 'One page. 240 words. The founder reads it before every all-hands. That was the brief.',
    role: 'Strategy · Copy', team: 'Solo + 1 collaborator', span: 'w12', art: 'e',
    tags: ['Concept development', 'Content creation'],
  },
];

const ABOUT_DEFAULT = {
  portrait: 'images/portrait.png',
  lede: 'Concepts that cut through. Built with discipline, not decoration.',
  bio1: "I'm a Creative Director with a decade of turning high-level concepts into immersive, high-fidelity visual work. The sweet spot: where bold art direction meets technical evolution.",
  bio2: "I don't follow trends. I'm an early adopter of generative AI, building production pipelines that move faster without losing the human soul of the work. The tools change every month. The discipline doesn't.",
  bio3: 'From scripting the architecture of attention for keynotes, to designing tech-forward stage environments for global launches, the work is about cutting through the digital static. Transforming complex noise into impact people actually remember.',
  bio4: "If it isn't innovative, immersive, and a step ahead, it isn't on the radar.",
  availability: "Available · Spring '26",
};

const SETTINGS_DEFAULT = {
  email: 'avivagami@gmail.com',
  phone_display: '+972 · on request',
  linkedin: 'https://linkedin.com/in/aviv-agami',
  vimeo: '#',
  instagram: '#',
};

const CAPS = [
  { num: '01', name: 'Creative direction',           yrs: '10 yrs', desc: 'Concept-to-stage for live events and digital experiences. The kind of direction where the script, the visual, and the physical space are a single, unified vibe.' },
  { num: '02', name: 'Copy & script',                yrs: '10 yrs', desc: 'Manifestos, modular video scripts, taglines, and pitch decks. Words engineered to capture attention, and sentences that actually survive the legal review.' },
  { num: '03', name: 'Video & visual content',       yrs: '09 yrs', desc: 'Campaign videos, social content, recap videos, and graphic design. From crafting high-velocity videos to the static graphics that pop.' },
  { num: '04', name: 'Experiential & live events',   yrs: '08 yrs', desc: 'Keynotes, interactive brand takeovers, and phygital activations. Stage, script, and visual design, orchestrated as one immersive experience.' },
  { num: '05', name: 'Generative AI creations',      yrs: '04 yrs', desc: 'Custom production workflows blending advanced generative tools with directed art. Accelerated output without losing the human touch. The tech scales, but the human stays in control.' },
];

function Nav({ settings, about }) {
  const s = settings || SETTINGS_DEFAULT;
  const a = about || ABOUT_DEFAULT;
  const items = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  const [active, setActive] = React.useState('work');
  React.useEffect(() => {
    const ids = ['work', 'about', 'contact'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };
  return (
    <header className="aa-nav">
      <a href="#" className="aa-nav__brand" onClick={go('top')} aria-label="AA creative">
        <span className="aa-logo aa-logo--sz-s">
          <span className="aa-logo__name">Aviv Agami</span>
          <span className="aa-logo__sep"></span>
          <span className="aa-logo__creative">creative</span>
        </span>
      </a>
      <nav className="aa-nav__items">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} className={`aa-nav__link ${active === it.id ? 'is-active' : ''}`} onClick={go(it.id)}>
            {it.label}
          </a>
        ))}
      </nav>
      <div className="aa-nav__meta">
        <span className="aa-nav__pulse"></span>
        {a.availability}
      </div>
    </header>
  );
}

function Hero({ variant }) {
  if (variant === 'split') {
    return (
      <section className="aa-hero aa-hero--split" id="top">
        <div className="aa-hero__index">
          <span>№ 026 · Selected work '24 to '26</span>
          <span><strong>Aviv Agami</strong></span>
          <span>Creative Director</span>
          <span>Independent studio · Tel Aviv</span>
          <span style={{marginTop: 'auto'}}>Scroll ↓</span>
        </div>
        <h1 className="aa-hero__title">
          Your message,<br/>
          in a <span className="aa-hero__hand">new light</span>.
        </h1>
        <ScrollCue />
      </section>
    );
  }
  if (variant === 'stack') {
    return (
      <section className="aa-hero aa-hero--stack" id="top">
        <div className="aa-hero__rule"></div>
        <div className="aa-hero__meta" style={{justifyContent: 'center'}}>
          <span>№ 026</span><span className="dot"></span><span>Independent · Spring '26</span>
        </div>
        <h1 className="aa-hero__title">
          Your message,<br/> in a <span className="aa-hero__hand">new light</span>.
        </h1>
        <p className="aa-hero__sub">
          Creative direction, interactive live events, AI video creation for global players. A decade turning digital static into impact people actually remember.
        </p>
      </section>
    );
  }
  return <ScaleHero />;
}

function ScaleHero() {
  const ref = React.useRef(null);
  const flashRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const sec = ref.current;
    const flash = flashRef.current;
    if (!sec || !flash) return;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;
    const apply = () => { flash.style.clipPath = `circle(220px at ${x}px ${y}px)`; };
    const onMove  = (e) => { const r = sec.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; };
    const onEnter = (e) => { const r = sec.getBoundingClientRect(); x = tx = e.clientX - r.left; y = ty = e.clientY - r.top; apply(); setActive(true); };
    const onLeave = () => setActive(false);
    const tick = () => { x += (tx - x) * 0.22; y += (ty - y) * 0.22; apply(); raf = requestAnimationFrame(tick); };
    sec.addEventListener('mousemove', onMove);
    sec.addEventListener('mouseenter', onEnter);
    sec.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => { sec.removeEventListener('mousemove', onMove); sec.removeEventListener('mouseenter', onEnter); sec.removeEventListener('mouseleave', onLeave); cancelAnimationFrame(raf); };
  }, []);
  const titleNode = (
    <React.Fragment>
      <h1 className="aa-hero__title">Your message,<br/> in a <span className="aa-hero__hand">new light</span>.</h1>
      <p className="aa-hero__sub">Creative direction, interactive live events, AI video creation for global players. A decade turning digital static into impact people actually remember.</p>
    </React.Fragment>
  );
  return (
    <section className={`aa-hero aa-hero--scale aa-hero--flashlight ${active ? 'is-active' : ''}`} id="top" ref={ref}>
      <div className="aa-hero__layer aa-hero__layer--base">{titleNode}</div>
      <div className="aa-hero__layer aa-hero__layer--inverse" ref={flashRef} aria-hidden="true">{titleNode}</div>
      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="aa-scroll-cue">
      <span>Scroll</span>
      <div className="aa-scroll-cue__line"></div>
    </div>
  );
}

const MARQUEE_LOGOS = [
  { src: '/images/logos/tiktok.svg',    alt: 'TikTok',    height: 42 },
  { src: '/images/logos/lusha.png',     alt: 'Lusha'     },
  { src: '/images/logos/microsoft.png', alt: 'Microsoft' },
  { src: '/images/logos/melio.svg',     alt: 'Melio'     },
  { src: '/images/logos/variety.svg',   alt: 'Variety'   },
  { src: '/images/logos/gorilla.svg',   alt: 'Gorilla',   height: 22 },
  { src: '/images/logos/autodesk.png',  alt: 'Autodesk',  raw: true  },
];

function Marquee({ variant }) {
  const doubled = [...MARQUEE_LOGOS, ...MARQUEE_LOGOS];
  return (
    <div className={`aa-marquee ${variant === 'ink' ? 'aa-marquee--ink' : ''}`}>
      <div className="aa-marquee__track">
        {doubled.map((logo, idx) => (
          <span key={idx} className="aa-marquee__item">
            <img src={logo.src} alt={logo.alt} className={`aa-marquee__logo${logo.raw ? ' aa-marquee__logo--raw' : ''}`} style={logo.height ? {height: logo.height + 'px'} : undefined} />
            <span className="aa-marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectImageGrid({ p, idx }) {
  const hasGallery = p.gallery && p.gallery.length > 0;
  const mainArt = ART_CYCLE[idx % ART_CYCLE.length];

  if (!hasGallery) {
    return (
      <div className="aa-pc__grid">
        <div className="aa-pc__grid-main">
          <div className={`aa-pc__art aa-pc__art--${mainArt}`} />
        </div>
      </div>
    );
  }

  const [mainImg, ...thumbImgs] = p.gallery;
  return (
    <div className="aa-pc__grid">
      <div className="aa-pc__grid-main">
        <div className="aa-pc__art aa-pc__art--photo"
          style={{ backgroundImage: `url(${mainImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
      {thumbImgs.length > 0 && (
        <div className="aa-pc__grid-thumbs">
          {thumbImgs.map((imgUrl, i) => (
            <div key={i} className="aa-pc__grid-thumb">
              <div className="aa-pc__art aa-pc__art--photo"
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, idx, onOpen }) {
  const art = p.art || ART_CYCLE[idx % ART_CYCLE.length];
  const hasImage = p.image && p.image.length > 0;
  return (
    <a href="#" className={`aa-pc aa-pc--${p.span || 'w6'} aa-reveal`} onClick={(e) => { e.preventDefault(); onOpen(p); }}>
      <div className="aa-pc__frame">
        <ProjectImageGrid p={p} idx={idx} />
        {(p.kind && (p.kind.includes('film') || p.kind.includes('motion') || p.kind.includes('visuals'))) && (
          <span className={`aa-pc__playicon ${art === 'b' || art === 'd' ? 'aa-pc__corner--inv' : ''}`}
            style={{ color: (art === 'b' || art === 'd') ? 'rgba(236,238,234,.85)' : undefined }}>
            ▶
          </span>
        )}
      </div>
      <div className="aa-pc__head">
        <span>{p.client}</span>
        <span className="yr">{p.year}</span>
      </div>
      <div className="aa-pc__title">{p.title}</div>
      {(p.tags && p.tags.length > 0 || p.kind) && (
        <div className="aa-pc__tags">
          {(p.tags && p.tags.length > 0 ? p.tags : p.kind.split(' · ')).map((tag) => (
            <span key={tag} className="aa-pc__tag">{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}

function WorkSection({ projects, onOpen }) {
  const list = (projects && projects.length > 0) ? projects : PROJECTS_DEFAULT;
  return (
    <section className="aa-work" id="work">
      <div className="aa-sec-head">
        <div>
          <h2 className="aa-sec-head__title">Moments <em>worth</em> remembering.</h2>
          <div className="aa-sec-head__label">Selected work</div>
        </div>
        <div className="aa-sec-head__meta">{list.length} projects · '24 to '26</div>
      </div>
      <div className="aa-work__grid">
        {list.map((p, i) => (
          <ProjectCard key={p.title + i} p={p} idx={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

const PRINCIPLES = [
  <>Built to be <em>remembered</em>, not just seen. Every layout, every shot, every sentence. Earning its place in the room.</>,
  <>Discipline over <em>decoration</em>. In a world of endless digital static, the goal is to cut right through it. Every detail must serve a clear, strategic purpose.</>,
  <>Tech accelerates. <em>Humans connect.</em> Advanced tools and generative AI move at the speed of tech, they don't replace the human touch. They are the engine, not the driver.</>,
  <><em>Experiences</em>, not just spectacles. Whether designing a 10-meter physical running track or scripting a fast-paced video, the physical and the digital must fuse into one cohesive, immersive narrative.</>,
  <><em>Safe</em> is invisible. True engagement requires a willingness to challenge the expected. It takes bold choices, unexpected creative leaps, and sometimes, a healthy dose of curated chaos.</>,
];

function ManifestoStrip() {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((i) => (i - 1 + PRINCIPLES.length) % PRINCIPLES.length);
  const next = () => setIdx((i) => (i + 1) % PRINCIPLES.length);
  return (
    <section className="aa-manifesto">
      <p className="aa-manifesto__pull" key={idx}>
        {PRINCIPLES[idx]}
      </p>
      <div className="aa-manifesto__by">
        <span>Creative principle № 0{idx + 1} / 05</span>
        <span>·</span>
        <button className="aa-manifesto__btn" onClick={prev} aria-label="Previous principle">←</button>
        <button className="aa-manifesto__btn" onClick={next} aria-label="Next principle">→</button>
      </div>
    </section>
  );
}

/* Converts *word* → <em>word</em> (handwritten font + yellow) in CMS text fields */
function parseEmphasis(text) {
  if (!text) return '';
  return text.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
}

function AboutSection({ about }) {
  const a = about || ABOUT_DEFAULT;
  return (
    <section className="aa-about" id="about">
      <div className="aa-about__left">
        <div className="aa-about__label">№ 02 · About</div>
        <div className="aa-about__portrait" aria-label="Aviv Agami">
          <img src={a.portrait} alt="Aviv Agami" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
        </div>
        <h2 className="aa-about__lede" dangerouslySetInnerHTML={{__html: parseEmphasis(a.lede)}} />
        {a.bio1 && <p className="aa-about__body" dangerouslySetInnerHTML={{__html: parseEmphasis(a.bio1)}} />}
        {a.bio2 && <p className="aa-about__body" dangerouslySetInnerHTML={{__html: parseEmphasis(a.bio2)}} />}
        {a.bio3 && <p className="aa-about__body" dangerouslySetInnerHTML={{__html: parseEmphasis(a.bio3)}} />}
        {a.bio4 && <p className="aa-about__body" dangerouslySetInnerHTML={{__html: parseEmphasis(a.bio4)}} />}
        <span className="aa-about__signature">Aviv</span>
      </div>
      <div className="aa-caps">
        {CAPS.map((c) => (
          <div className="aa-caps__row" key={c.num}>
            <span className="aa-caps__num">{c.num}</span>
            <span className="aa-caps__name">{c.name}</span>
            <span className="aa-caps__yrs">{c.yrs}</span>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ settings }) {
  const s = settings || SETTINGS_DEFAULT;
  const [form, setForm] = React.useState({ name: '', email: '', company: '', type: '', message: '' });
  const [focus, setFocus] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const fld = (k) => focus === k ? 'aa-field aa-field--focus' : 'aa-field';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
    })
      .then(() => { setSent(true); setSubmitting(false); })
      .catch(() => { setSubmitError(true); setSubmitting(false); });
  };

  return (
    <div className="aa-contact-wrap" id="contact">
      <div className="aa-contact">
        <div>
          <div className="aa-sec-head__label" style={{color: 'rgba(236,238,234,.55)', marginBottom: 24}}>№ 03 · Contact</div>
          <h2 className="aa-contact__title">Tell me your <em>message</em>.</h2>
          <p className="aa-contact__sub">
            Briefs, residencies, one-offs.<br/>
            I reply within two working days.<br/>
            For urgent commissions, write <em style={{fontStyle:'italic'}}>urgent</em> in the subject.
          </p>
          <div className="aa-contact__direct">
            <div className="aa-contact__d">
              <span>Email</span>
              <a href={`mailto:${s.email}`}>{s.email}</a>
            </div>
            <div className="aa-contact__d">
              <span>Phone</span>
              <span style={{color:'var(--fg-inverse)', fontFamily:'var(--font-sans)', fontSize:17}}>{s.phone_display}</span>
            </div>
            <div className="aa-contact__d">
              <span>LinkedIn</span>
              <a href={s.linkedin} target="_blank" rel="noreferrer">/in/aviv-agami ↗</a>
            </div>
            <div className="aa-contact__d">
              <span>Based</span>
              <span style={{color:'var(--fg-inverse)', fontFamily:'var(--font-sans)', fontSize:17}}>Tel Aviv · Available worldwide</span>
            </div>
          </div>
        </div>

        {sent ? (
          <div className="aa-sent">
            <h3 className="aa-sent__title">Brief <em>received</em>.</h3>
            <p className="aa-sent__body">I'll come back to you within two working days. In the meantime, your message is in good hands, and the kettle is on.</p>
            <button className="aa-btn aa-btn--inv" onClick={() => { setSent(false); setForm({ name:'', email:'', company:'', type:'', message:'' }); }}>
              Send another <span className="arrow">→</span>
            </button>
          </div>
        ) : (
          <form className="aa-contact__form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="aa-field__row">
              <label className={fld('name')}>
                <span>01 · Name</span>
                <input name="name" required value={form.name} onChange={set('name')} onFocus={() => setFocus('name')} onBlur={() => setFocus('')} placeholder="Your name" />
              </label>
              <label className={fld('email')}>
                <span>02 · Email</span>
                <input name="email" type="email" required value={form.email} onChange={set('email')} onFocus={() => setFocus('email')} onBlur={() => setFocus('')} placeholder="you@where.com" />
              </label>
            </div>
            <label className={fld('company')}>
              <span>03 · Company / studio</span>
              <input name="company" value={form.company} onChange={set('company')} onFocus={() => setFocus('company')} onBlur={() => setFocus('')} placeholder="Optional" />
            </label>
            <label className={fld('type')}>
              <span>04 · What experience will we create?</span>
              <select name="type" required value={form.type} onChange={set('type')} onFocus={() => setFocus('type')} onBlur={() => setFocus('')} style={{fontFamily:'var(--font-sans)'}}>
                <option value="" style={{fontFamily:'var(--font-sans)'}}>Select one</option>
                <option>Campaign film</option>
                <option>Live event direction</option>
                <option>Keynote / stage</option>
                <option>Creative strategy / concept</option>
                <option>Generative pipeline / R&amp;D</option>
                <option>Something else</option>
              </select>
            </label>
            <label className={fld('message')}>
              <span>05 · Message</span>
              <textarea name="message" rows="4" required value={form.message} onChange={set('message')} onFocus={() => setFocus('message')} onBlur={() => setFocus('')} placeholder="what your audience will remember?" />
            </label>
            {submitError && (
              <p style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--aa-signal)', margin:0}}>
                Something went wrong. Try emailing directly at <a href={`mailto:${s.email}`} style={{color:'inherit'}}>{s.email}</a>.
              </p>
            )}
            <button type="submit" className="aa-btn aa-btn--inv" disabled={submitting}>
              {submitting ? 'Sending…' : <React.Fragment>Send brief <span className="arrow">→</span></React.Fragment>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer({ settings, projects }) {
  const s = settings || SETTINGS_DEFAULT;
  return (
    <footer className="aa-footer">
      <Marquee variant="" />
      <div className="aa-footer__row">
        <div className="aa-footer__brand">
          <span className="aa-logo aa-logo--sz-m">
            <span className="aa-logo__name">Aviv Agami</span>
            <span className="aa-logo__sep"></span>
            <span className="aa-logo__creative">creative</span>
          </span>
        </div>
        <div className="aa-footer__cols">
          <div>
            <div className="aa-footer__h">Site</div>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <div className="aa-footer__h">Elsewhere</div>
            <a href={s.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={s.vimeo} target="_blank" rel="noreferrer">Vimeo ↗</a>
            <a href={s.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
          <div>
            <div className="aa-footer__h">Direct</div>
            <a href={`mailto:${s.email}`}>{s.email}</a>
            <span style={{fontFamily:'var(--font-sans)', fontSize:14, color:'var(--fg-1)'}}>{s.phone_display}</span>
          </div>
        </div>
      </div>
      <div className="aa-footer__colophon">
        <span>© AA creative '22 to '26</span>
        <span>Set in Inter Tight &amp; Caveat. Built with care.</span>
      </div>
    </footer>
  );
}

function ytEmbedUrl(url) {
  if (!url) return null;
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? 'https://www.youtube.com/embed/' + m[1] + '?rel=0' : null;
}

function ProjectLightbox({ p, onClose }) {
  const [slide, setSlide] = React.useState(0);
  const [mediaSlot, setMediaSlot] = React.useState('video');
  React.useEffect(() => { setSlide(0); setMediaSlot('video'); }, [p]);

  const embedUrl = p ? ytEmbedUrl(p.youtube) : null;
  const photoSlides = (p?.gallery && p.gallery.length > 0)
    ? p.gallery
    : (p?.image && p.image.length > 0 ? [p.image] : null);
  const artSlides = p?.slides || [p?.art || 'a'];
  const total = photoSlides ? photoSlides.length : artSlides.length;

  React.useEffect(() => {
    if (!p) return;
    const ytSlots = embedUrl ? ['video', ...Array.from({length: photoSlides ? photoSlides.length : 0}, (_, i) => i)] : null;
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (embedUrl && ytSlots) {
        const curr = ytSlots.indexOf(mediaSlot);
        if (e.key === 'ArrowLeft' && curr > 0) setMediaSlot(ytSlots[curr - 1]);
        if (e.key === 'ArrowRight' && curr < ytSlots.length - 1) setMediaSlot(ytSlots[curr + 1]);
      } else {
        if (e.key === 'ArrowLeft') setSlide((s) => Math.max(0, s - 1));
        if (e.key === 'ArrowRight') setSlide((s) => Math.min(total - 1, s + 1));
      }
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, p, total, embedUrl, mediaSlot, photoSlides]);
  if (!p) return null;

  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(total - 1, s + 1));

  const infoPanel = (
    <div className="aa-lb__body">
      <div className="aa-lb__no">{p.client} · {p.year}</div>
      <h3 className="aa-lb__title">{p.title}</h3>
      {p.tags && p.tags.length > 0 && (
        <div className="aa-lb__tags">
          {p.tags.map((tag) => <span key={tag} className="aa-lb__tag">{tag}</span>)}
        </div>
      )}
      {(p.brief || p.experience || p.desc) && (
        <div className="aa-lb__sections">
          {(p.brief || p.desc) && (
            <div className="aa-lb__section">
              <div className="aa-lb__section-label">The Brief</div>
              <p className="aa-lb__section-text">{p.brief || p.desc}</p>
            </div>
          )}
          {p.experience && (
            <div className="aa-lb__section">
              <div className="aa-lb__section-label">The Experience</div>
              <p className="aa-lb__section-text">{p.experience}</p>
            </div>
          )}
        </div>
      )}
      <dl className="aa-lb__meta">
        <div><dt>Role</dt><dd>{p.role}</dd></div>
        <div><dt>Team</dt><dd>{p.team}</dd></div>
      </dl>
      <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
        {p.link && p.link.length > 0 && (
          <a href={p.link} target="_blank" rel="noreferrer" className="aa-btn aa-btn--inv">
            View project <span className="arrow">↗</span>
          </a>
        )}
        <a href="#contact" className="aa-btn aa-btn--inv" onClick={onClose} style={{background:'var(--fg-1)', color:'var(--bg-1)', borderColor:'var(--fg-1)'}}>
          Discuss a similar brief <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="aa-lb" onClick={onClose}>
      <button className="aa-lb__close" onClick={onClose} aria-label="Close">×</button>
      <div className="aa-lb__inner" onClick={(e) => e.stopPropagation()}>

        {embedUrl ? (
          /* ── YouTube mode: video hero + thumbnail strip ── */
          <div className="aa-lb__carousel aa-lb__carousel--yt">
            <div className="aa-lb__media-slot">
              {mediaSlot === 'video' ? (
                <iframe
                  className="aa-lb__yt"
                  src={embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="aa-pc__art"
                  style={{backgroundImage:`url(${photoSlides[mediaSlot]})`, backgroundSize:'cover', backgroundPosition:'center', position:'absolute', inset:0}}
                />
              )}
            </div>
            {photoSlides && photoSlides.length > 0 && (
              <div className="aa-lb__thumbs">
                <button
                  className={`aa-lb__thumb aa-lb__thumb--yt ${mediaSlot === 'video' ? 'is-active' : ''}`}
                  onClick={() => setMediaSlot('video')}
                  aria-label="Play video"
                >
                  <span className="aa-lb__thumb-play">▶</span>
                </button>
                {photoSlides.map((imgUrl, i) => (
                  <button
                    key={i}
                    className={`aa-lb__thumb ${mediaSlot === i ? 'is-active' : ''}`}
                    style={{backgroundImage:`url(${imgUrl})`}}
                    onClick={() => setMediaSlot(i)}
                    aria-label={`Photo ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ── Gallery-only mode: existing carousel ── */
          <div className="aa-lb__carousel">
            <div className="aa-lb__slides">
              {photoSlides ? (
                photoSlides.map((imgUrl, i) => (
                  <div key={i} className={`aa-lb__slide ${i === slide ? 'is-active' : ''}`} aria-hidden={i !== slide}>
                    <div className="aa-pc__art" style={{backgroundImage:`url(${imgUrl})`, backgroundSize:'cover', backgroundPosition:'center', position:'absolute', inset:0}} />
                  </div>
                ))
              ) : (
                artSlides.map((art, i) => (
                  <div key={i} className={`aa-lb__slide ${i === slide ? 'is-active' : ''}`} aria-hidden={i !== slide}>
                    <div className={`aa-pc__art aa-pc__art--${art}`} />
                  </div>
                ))
              )}
            </div>
            {total > 1 && (
              <React.Fragment>
                <button className="aa-lb__arrow aa-lb__arrow--prev" onClick={prev} disabled={slide === 0} aria-label="Previous">←</button>
                <button className="aa-lb__arrow aa-lb__arrow--next" onClick={next} disabled={slide === total - 1} aria-label="Next">→</button>
                <div className="aa-lb__dots">
                  {Array.from({length: total}).map((_, i) => (
                    <button key={i} className={`aa-lb__dot ${i === slide ? 'is-active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
                  ))}
                </div>
                <div className="aa-lb__counter">{slide + 1} / {total}</div>
              </React.Fragment>
            )}
          </div>
        )}

        {infoPanel}
      </div>
    </div>
  );
}

function CursorFollower({ enabled }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;
    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      el.classList.add('is-show');
      if (e.target && e.target.closest('a, button, .aa-pc, [data-cursor]')) el.classList.add('is-link');
      else el.classList.remove('is-link');
    };
    const leave = () => el.classList.remove('is-show');
    const tick = () => { x += (tx - x) * 0.22; y += (ty - y) * 0.22; el.style.left = x + 'px'; el.style.top = y + 'px'; raf = requestAnimationFrame(tick); };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave); cancelAnimationFrame(raf); };
  }, [enabled]);
  if (!enabled) return null;
  return <div ref={ref} className="aa-cursor"></div>;
}

// ===== iPod Cover Flow =====

function getCoverStyle(offset, isMobile) {
  const abs = Math.abs(offset);
  const dir = Math.sign(offset) || 1;
  const s = isMobile
    ? { x1: 170, x2: 280, x3: 370, z0: 60, z1: 0, z2: -60, z3: -110 }
    : { x1: 240, x2: 395, x3: 500, z0: 100, z1: 0, z2: -80, z3: -140 };
  if (abs === 0) return { transform: `translate(-50%,-50%) translateZ(${s.z0}px) rotateY(0deg)`, opacity: 1, zIndex: 10 };
  if (abs === 1) return { transform: `translate(calc(-50% + ${dir * s.x1}px),-50%) translateZ(${s.z1}px) rotateY(${-dir * 58}deg)`, opacity: 0.84, zIndex: 8 };
  if (abs === 2) return { transform: `translate(calc(-50% + ${dir * s.x2}px),-50%) translateZ(${s.z2}px) rotateY(${-dir * 67}deg)`, opacity: 0.52, zIndex: 5 };
  if (abs === 3) return { transform: `translate(calc(-50% + ${dir * s.x3}px),-50%) translateZ(${s.z3}px) rotateY(${-dir * 73}deg)`, opacity: 0.22, zIndex: 2 };
  return { transform: `translate(calc(-50% + ${dir * 680}px),-50%) translateZ(-200px)`, opacity: 0, zIndex: 0, pointerEvents: 'none' };
}

function ClickWheel({ onNavigate, onSelect }) {
  const wheelRef = React.useRef();
  const drag = React.useRef({ active: false, lastAngle: 0, acc: 0 });

  React.useEffect(() => {
    const wheel = wheelRef.current;
    const TICK = 28;

    const getAngle = (e) => {
      const r = wheel.getBoundingClientRect();
      const pt = e.touches ? e.touches[0] : e;
      return Math.atan2(pt.clientY - (r.top + r.height / 2), pt.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
    };

    const onStart = (e) => {
      if (e.target.closest('.aa-ipod__wheel-center')) return;
      e.preventDefault();
      drag.current = { active: true, lastAngle: getAngle(e), acc: 0 };
    };

    const onMove = (e) => {
      if (!drag.current.active) return;
      e.preventDefault();
      const angle = getAngle(e);
      let delta = angle - drag.current.lastAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      drag.current.acc += delta;
      drag.current.lastAngle = angle;
      while (drag.current.acc >= TICK) { onNavigate(1); drag.current.acc -= TICK; if (navigator.vibrate) navigator.vibrate(1); }
      while (drag.current.acc <= -TICK) { onNavigate(-1); drag.current.acc += TICK; if (navigator.vibrate) navigator.vibrate(1); }
    };

    const onEnd = () => { drag.current.active = false; };

    wheel.addEventListener('touchstart', onStart, { passive: false });
    wheel.addEventListener('touchmove', onMove, { passive: false });
    wheel.addEventListener('touchend', onEnd);
    wheel.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    return () => {
      wheel.removeEventListener('touchstart', onStart);
      wheel.removeEventListener('touchmove', onMove);
      wheel.removeEventListener('touchend', onEnd);
      wheel.removeEventListener('mousedown', onStart);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
    };
  }, [onNavigate]);

  return (
    <div className="aa-ipod__wheel" ref={wheelRef}>
      <span className="aa-ipod__wlabel aa-ipod__wlabel--top">MENU</span>
      <span className="aa-ipod__wlabel aa-ipod__wlabel--left">◁</span>
      <span className="aa-ipod__wlabel aa-ipod__wlabel--right">▷</span>
      <span className="aa-ipod__wlabel aa-ipod__wlabel--bottom">▶‖</span>
      <button className="aa-ipod__wheel-center" onClick={onSelect} title="Open project" />
    </div>
  );
}

function CoverFlowSection({ projects, onOpen }) {
  const [active, setActive] = React.useState(0);
  const list = (projects && projects.length > 0) ? projects : PROJECTS_DEFAULT;
  const n = list.length;
  const isMobile = React.useMemo(() => typeof window !== 'undefined' && window.innerWidth <= 600, []);
  const [galleryOpen, setGalleryOpen] = React.useState(false);

  const navigate = React.useCallback((dir) => {
    setActive(i => ((i + dir) % n + n) % n);
  }, [n]);

  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowLeft') navigate(-1);
      else if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [navigate]);

  const swipe = React.useRef({ x0: null });
  const onTS = (e) => { swipe.current.x0 = e.touches[0].clientX; };
  const onTE = (e) => {
    if (swipe.current.x0 === null) return;
    const dx = e.changedTouches[0].clientX - swipe.current.x0;
    if (Math.abs(dx) > 44) navigate(dx < 0 ? 1 : -1);
    swipe.current.x0 = null;
  };

  const p = list[active];
  const tags = p.tags || (p.kind ? p.kind.split(' · ') : []);

  return (
  <React.Fragment>
    <section className="aa-ipod" id="work">
      <div className="aa-ipod__head">
        <h2 className="aa-ipod__title">Moments <em>worth</em> remembering.</h2>
        <span className="aa-ipod__count">{active + 1}<span style={{opacity:.35, margin: '0 2px'}}>/</span>{n}</span>
      </div>

      <div className="aa-ipod__stage" onTouchStart={onTS} onTouchEnd={onTE}>
        {list.map((proj, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const img = proj.gallery && proj.gallery[0];
          const art = proj.art || ART_CYCLE[i % ART_CYCLE.length];
          return (
            <div
              key={i}
              className="aa-ipod__cover"
              style={getCoverStyle(offset, isMobile)}
              onClick={() => offset === 0 ? onOpen(proj) : navigate(Math.sign(offset))}
            >
              {img
                ? <div className="aa-ipod__art" style={{ backgroundImage: `url(${img})` }} />
                : <div className={`aa-ipod__art aa-pc__art--${art}`} />
              }
              {offset === 0 && <div className="aa-ipod__cover-shine" />}
            </div>
          );
        })}
      </div>

      <div className="aa-ipod__info">
        <div className="aa-ipod__info-title">{p.title}</div>
        <div className="aa-ipod__info-meta">{p.client || p.year}</div>
        <div className="aa-ipod__info-tags">
          {tags.slice(0, 3).map((t, ti) => <span key={ti} className="aa-ipod__tag">{t}</span>)}
        </div>
      </div>

      <ClickWheel onNavigate={navigate} onSelect={() => onOpen(p)} />

      {/* Gallery view toggle */}
      <div className="aa-ipod__gallery-cta">
        <button className="aa-ipod__gallery-btn" onClick={() => setGalleryOpen(o => !o)}>
          {galleryOpen ? '↑ Back to cover flow' : 'Projects in gallery view ↓'}
        </button>
      </div>
    </section>

    {/* Gallery peek — light bg, shows grid partially until expanded */}
    <div className={`aa-gallery-peek${galleryOpen ? ' aa-gallery-peek--open' : ''}`}>
      <div className="aa-page">
        <div className="aa-work">
          <div className="aa-work__grid">
            {list.map((p2, i) => (
              <ProjectCard key={p2.title + i} p={p2} idx={i} onOpen={onOpen} />
            ))}
          </div>
        </div>
      </div>
      {!galleryOpen && <div className="aa-gallery-peek__fade" />}
    </div>
  </React.Fragment>
  );
}

Object.assign(window, { Nav, Hero, ScaleHero, ScrollCue, Marquee, ProjectCard, WorkSection, CoverFlowSection, ManifestoStrip, AboutSection, ContactSection, Footer, ProjectLightbox, CursorFollower });
