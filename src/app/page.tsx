import { ArrowDown, ArrowUpRight, BookOpen, Boxes, Component, Grid2X2, Layers3, LayoutGrid, Network, ShieldCheck, Workflow } from 'lucide-react';
import { footerProjects, fraxsesProjects, projects } from '@/data/projects';

const icons = { design: Component, docs: BookOpen, app: Layers3, finance: ShieldCheck, portal: LayoutGrid, updates: Workflow };

function Brand({ small = false }: { small?: boolean }) {
  return <a href="#top" className={`brand ${small ? 'brand-small' : ''}`} aria-label="Intenda Hub home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span>Intenda<span className="brand-light"> Hub</span></span></a>;
}

function SystemVisual() {
  return <div className="system-visual" aria-hidden="true">
    <div className="visual-caption"><span className="mini-cross">+</span> CONNECTED BY DESIGN <span>01 / 06</span></div>
    <svg className="system-lines" viewBox="0 0 500 380" fill="none">
      <path d="M250 190H123V80H72M250 190V80H422M250 190H415V280H450M250 190H82V290H45M250 190V330H292" stroke="currentColor" />
      <path className="path-highlight" d="M250 190V80H422M250 190H82V290H45" stroke="#62cdbd" />
      <circle cx="250" cy="190" r="102" stroke="currentColor" strokeDasharray="3 8" />
      <circle cx="250" cy="190" r="145" stroke="currentColor" opacity=".35" />
      <circle cx="72" cy="80" r="4" fill="#a895ed" /><circle cx="422" cy="80" r="4" fill="#6edbc9" />
      <circle cx="450" cy="280" r="4" fill="#a895ed" /><circle cx="45" cy="290" r="4" fill="#6edbc9" /><circle cx="292" cy="330" r="4" fill="#a895ed" />
    </svg>
    <div className="system-core"><Network size={33} strokeWidth={1.4} /><span>INTENDA</span><small>PROJECT HUB</small></div>
    <div className="system-node node-design"><Component size={18} /><span>Design</span></div>
    <div className="system-node node-platform"><Layers3 size={18} /><span>Platforms</span></div>
    <div className="system-node node-docs"><BookOpen size={18} /><span>Documentation</span></div>
    <div className="visual-bottom"><span>ONE HOME. CONNECTED PROJECTS.</span><span className="mini-cross">+</span></div>
  </div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner"><Brand /><nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="https://imber.me" target="_blank" rel="noopener noreferrer">Personal <ArrowUpRight size={14} aria-hidden="true" /></a></nav></div></header>
    <main id="main">
      <section className="hero container" id="top" aria-labelledby="hero-heading">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> INTENDA <span className="eyebrow-divider">/</span> WORKSPACE</div><h1 id="hero-heading">Projects, platforms<br className="desktop-break" /> and tools built for<br className="desktop-break" /> <span>real work.</span></h1><p>A central home for the applications, internal platforms and project tools I work on at Intenda.</p><div className="hero-actions"><a className="button-primary" href="#projects">Explore projects <ArrowDown size={17} aria-hidden="true" /></a><a className="button-secondary" href="https://imber.me" target="_blank" rel="noopener noreferrer">Personal site <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        <SystemVisual />
        <div className="hero-bottom"><span>APPLICATIONS <span>/</span> DOCUMENTATION <span>/</span> DESIGN SYSTEMS</span><span className="domain-label">work.imber.me</span></div>
      </section>
      <section className="projects-section container section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading"><div><div className="eyebrow">01 <span className="eyebrow-divider">/</span> PROJECTS</div><h2 id="projects-heading">Intenda projects</h2><p>A collection of applications, documentation, design systems and internal platforms.</p></div><span className="section-symbol" aria-hidden="true"><Grid2X2 size={23} strokeWidth={1.3} /></span></div>
        <div className="project-grid">{projects.map((project, index) => { const Icon = icons[project.icon]; return <article className={`project-card accent-${project.accent}`} key={project.id}><div className="card-top"><span className="project-icon"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span><span className="card-index">0{index + 1}</span></div><div className="card-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer"><span>{project.cta}</span><ArrowUpRight size={19} aria-hidden="true" /></a></article>; })}</div>
      </section>
      <section className="ecosystem-section container" aria-labelledby="ecosystem-heading"><div className="ecosystem-panel"><div className="ecosystem-intro"><div className="eyebrow"><Boxes size={17} aria-hidden="true" /> SHARED ECOSYSTEM</div><h2 id="ecosystem-heading">The Fraxses ecosystem</h2><p>Fraxses includes the main application, design reference site and documentation platform.</p></div><div className="ecosystem-links">{fraxsesProjects.map(project => { const Icon = icons[project.icon]; return <a href={project.url} key={project.id} target="_blank" rel="noopener noreferrer"><Icon size={21} strokeWidth={1.5} aria-hidden="true" /><span><small>{project.category}</small>{project.name}</span><ArrowUpRight size={18} aria-hidden="true" /></a>; })}</div></div></section>
      <section className="about-section container section" id="about" aria-labelledby="about-heading"><div><div className="eyebrow">02 <span className="eyebrow-divider">/</span> ABOUT</div><h2 id="about-heading">A single home for<br />Intenda project work.</h2></div><div className="about-copy"><p>The Intenda Hub keeps work-related applications, internal tools, documentation and project sites organised under a single domain structure.</p><p>Each project remains its own application or site, while this hub provides a simple way to navigate between them.</p><div className="about-domain"><span className="eyebrow-line" />work.imber.me</div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><div><Brand small /><p>work.imber.me</p></div><nav aria-label="Footer navigation">{footerProjects.map(project => <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">{project.id === 'nebula' ? 'Nebula Portal' : project.name}</a>)}<a href="https://imber.me" target="_blank" rel="noopener noreferrer">Personal Site <ArrowUpRight size={13} aria-hidden="true" /></a></nav></div></footer>
  </>;
}
