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
  { num: '01', name: 'Creative direction',     yrs: '10 yrs', desc: 'Concept-to-stage on campaigns, films and live events. The kind of direction where the script, the visual, and the room are one decision.' },
  { num: '02', name: 'Video & film',            yrs: '08 yrs', desc: 'Campaign films, recap films, social cutdowns, concert capture. Direction, edit room and final delivery.' },
  { num: '03', name: 'Live event direction',    yrs: '07 yrs', desc: 'Keynotes, festivals, residencies, museum activations. Stage, script, visuals, directed as one piece.' },
  { num: '04', name: 'Generative AI pipelines', yrs: '03 yrs', desc: 'Production tooling that mixes generative imagery with directed work. Human stays in the room. Speed without flattening.' },
  { num: '05', name: 'Copy & script',           yrs: '10 yrs', desc: 'Manifestos, scripts, taglines, deck copy. Sentences that survive the legal review.' },
];

function Nav({ settings }) {
  const s = settings || SETTINGS_DEFAULT;
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
          <span className="aa-logo__dot"></span>
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
        {(ABOUT_DEFAULT).availability}
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
          Your message, in a <span className="aa-hero__hand">new light</span>.
        </h1>
        <p className="aa-hero__sub">
          Creative direction, films and live events for studios, founders and cultural moments. Concept-first. Everything else follows.
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
      <h1 className="aa-hero__title">Your message, in&nbsp;a <span className="aa-hero__hand">new light</span>.</h1>
      <p className="aa-hero__sub">Creative direction, films and live events for studios, founders and cultural moments. A decade turning concepts into work people actually remember.</p>
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

function Marquee({ projects, variant }) {
  const list = (projects && projects.length > 0)
    ? ['Selected work', ...projects.slice(0, 5).map((p, i) => `№ ${String(projects.length - i).padStart(3, '0')} · ${p.title}`)]
    : ['Selected work', '№ 026 · Architecture of Attention', '№ 025 · Signal in the noise', '№ 024 · A film for an opening', '№ 023 · Generative pipeline', '№ 022 · Concert visuals'];
  const doubled = [...list, ...list];
  return (
    <div className={`aa-marquee ${variant === 'ink' ? 'aa-marquee--ink' : ''}`}>
      <div className="aa-marquee__track">
        {doubled.map((label, idx) => (
          <span key={idx} className="aa-marquee__item">
            {label}
            <span className="aa-marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p, idx, onOpen }) {
  const art = p.art || ART_CYCLE[idx % ART_CYCLE.length];
  const hasImage = p.image && p.image.length > 0;
  return (
    <a href="#" className={`aa-pc aa-pc--${p.span || 'w6'} aa-reveal`} onClick={(e) => { e.preventDefault(); onOpen(p); }}>
      <div className="aa-pc__frame">
        <div
          className={`aa-pc__art ${hasImage ? 'aa-pc__art--photo' : `aa-pc__art--${art}`}`}
          style={hasImage ? { backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        >
          {!hasImage && p.big && <span className="aa-pc__numeral">{p.big}</span>}
        </div>
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
      <div className="aa-pc__kind">{p.kind}</div>
    </a>
  );
}

function WorkSection({ projects, onOpen }) {
  const list = (projects && projects.length > 0) ? projects : PROJECTS_DEFAULT;
  return (
    <section className="aa-work" id="work">
      <div className="aa-sec-head">
        <div>
          <div className="aa-sec-head__label">№ 01 · Selected work</div>
          <h2 className="aa-sec-head__title">Things <em>worth</em> remembering.</h2>
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

function ManifestoStrip() {
  return (
    <section className="aa-manifesto">
      <p className="aa-manifesto__pull">
        Built to be <em>remembered</em>, not just seen. Every layout, every shot, every sentence. Earning its place in the room.
      </p>
      <div className="aa-manifesto__by">
        <span>Studio principle № 01</span>
        <span>·</span>
        <span>Read all five ↗</span>
      </div>
    </section>
  );
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
        <h2 className="aa-about__lede">
          {a.lede.split('cut through').length > 1
            ? <React.Fragment>{a.lede.split('cut through')[0]}<em>cut through</em>{a.lede.split('cut through')[1]}</React.Fragment>
            : a.lede}
        </h2>
        <p className="aa-about__body" dangerouslySetInnerHTML={{__html: a.bio1.replace('Creative Director', '<strong>Creative Director</strong>')}} />
        <p className="aa-about__body" dangerouslySetInnerHTML={{__html: a.bio2.replace('generative AI', '<strong>generative AI</strong>')}} />
        <p className="aa-about__body">{a.bio3}</p>
        <p className="aa-about__body">{a.bio4}</p>
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
            Briefs, residencies, one-offs. I reply within two working days. For urgent commissions, write <em style={{fontStyle:'italic'}}>urgent</em> in the subject.
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
              <span>04 · Project type</span>
              <select name="type" required value={form.type} onChange={set('type')} onFocus={() => setFocus('type')} onBlur={() => setFocus('')}>
                <option value="">Select one</option>
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
              <textarea name="message" rows="4" required value={form.message} onChange={set('message')} onFocus={() => setFocus('message')} onBlur={() => setFocus('')} placeholder="One sentence on what you want remembered." />
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
      <Marquee variant="" projects={projects} />
      <div className="aa-footer__row">
        <div className="aa-footer__brand">
          <span className="aa-logo aa-logo--sz-m">
            <span className="aa-logo__dot"></span>
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

function ProjectLightbox({ p, onClose }) {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => { setSlide(0); }, [p]);
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setSlide((s) => Math.max(0, s - 1));
      if (e.key === 'ArrowRight') setSlide((s) => Math.min((p?.slides?.length || 1) - 1, s + 1));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, p]);
  if (!p) return null;

  const slides = p.slides || [p.art || 'a'];
  const total = slides.length;
  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(total - 1, s + 1));

  return (
    <div className="aa-lb" onClick={onClose}>
      <button className="aa-lb__close" onClick={onClose} aria-label="Close">×</button>
      <div className="aa-lb__inner" onClick={(e) => e.stopPropagation()}>
        <div className="aa-lb__carousel">
          <div className="aa-lb__slides">
            {p.image && p.image.length > 0 ? (
              <div className="aa-lb__slide is-active">
                <div className="aa-pc__art" style={{backgroundImage:`url(${p.image})`, backgroundSize:'cover', backgroundPosition:'center', position:'absolute', inset:0}} />
              </div>
            ) : slides.map((art, i) => (
              <div key={i} className={`aa-lb__slide ${i === slide ? 'is-active' : ''}`} aria-hidden={i !== slide}>
                <div className={`aa-pc__art aa-pc__art--${art}`} />
              </div>
            ))}
          </div>
          {!p.image && total > 1 && (
            <React.Fragment>
              <button className="aa-lb__arrow aa-lb__arrow--prev" onClick={prev} disabled={slide === 0} aria-label="Previous">←</button>
              <button className="aa-lb__arrow aa-lb__arrow--next" onClick={next} disabled={slide === total - 1} aria-label="Next">→</button>
              <div className="aa-lb__dots">
                {slides.map((_, i) => (
                  <button key={i} className={`aa-lb__dot ${i === slide ? 'is-active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <div className="aa-lb__counter">{slide + 1} / {total}</div>
            </React.Fragment>
          )}
        </div>
        <div className="aa-lb__body">
          <div className="aa-lb__no">{p.client} · {p.year}</div>
          <h3 className="aa-lb__title">{p.title}</h3>
          <div className="aa-lb__kind">{p.kind}</div>
          {p.tags && p.tags.length > 0 && (
            <div className="aa-lb__tags">
              {p.tags.map((tag) => <span key={tag} className="aa-lb__tag">{tag}</span>)}
            </div>
          )}
          <p className="aa-lb__desc">{p.desc}</p>
          <dl className="aa-lb__meta">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Team</dt><dd>{p.team}</dd></div>
          </dl>
          <a href="#contact" className="aa-btn aa-btn--inv" onClick={onClose} style={{background:'var(--fg-1)', color:'var(--bg-1)', borderColor:'var(--fg-1)'}}>
            Discuss a similar brief <span className="arrow">→</span>
          </a>
        </div>
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

Object.assign(window, { Nav, Hero, ScaleHero, ScrollCue, Marquee, ProjectCard, WorkSection, ManifestoStrip, AboutSection, ContactSection, Footer, ProjectLightbox, CursorFollower });
