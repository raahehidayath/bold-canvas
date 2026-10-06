import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import projectChrome from "../assets/project-chrome.jpg";
import projectGlass from "../assets/project-glass.jpg";
import projectStatic from "../assets/project-static.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wahab Farhan — Creative Director & Designer" },
      {
        name: "description",
        content:
          "Wahab Farhan is an independent creative director crafting bold identities, digital experiences, and motion systems.",
      },
      { property: "og:title", content: "Wahab Farhan — Creative Director & Designer" },
      {
        property: "og:description",
        content: "Bold identities, digital experiences, and motion systems built to be impossible to ignore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    title: "Chrome / Skin",
    category: "Campaign Identity · 2026",
    description: "A fashion world where reflective surfaces become a second skin.",
    image: projectChrome,
    className: "project-wide",
  },
  {
    number: "02",
    title: "Static / Riot",
    category: "Motion Direction · 2026",
    description: "An industrial visual language engineered to hit before the first note.",
    image: projectStatic,
    className: "project-offset",
  },
  {
    number: "03",
    title: "Glass House",
    category: "Editorial System · 2025",
    description: "Monumental typography, transparent architecture, zero restraint.",
    image: projectGlass,
    className: "project-wide project-last",
  },
];

function Portfolio() {
  return (
    <main className="portfolio-shell">
      <section className="opening-film" aria-label="Wahab Farhan portfolio introduction">
        <div className="film-stage" aria-hidden="true">
          <img src={projectGlass} alt="" className="film-image" width={1440} height={1088} />
          <div className="film-shutter film-shutter-one" />
          <div className="film-shutter film-shutter-two" />
          <div className="film-beam" />
          <div className="film-grain" />
        </div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Wahab Farhan, home">
            WF<span>®</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>
          <a className="contact-link" href="mailto:hello@wahabfarhan.com">
            Let’s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="hero-copy" id="top">
          <p className="hero-kicker">Independent creative director / 2026</p>
          <h1>
            <span>Make</span>
            <span className="hero-hot">It Hot.</span>
            <span>Make It</span>
            <span className="hero-outline">Unmissable.</span>
          </h1>
        </div>

        <div className="hero-footer">
          <p>Identity · Digital · Motion</p>
          <a href="#work" aria-label="Scroll to selected work">
            Scroll to ignite <ArrowDown aria-hidden="true" />
          </a>
          <p>India / Worldwide</p>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Creative Direction</span><b>✦</b><span>Identity</span><b>✦</b><span>Motion</span><b>✦</b><span>Digital</span><b>✦</b>
          <span>Creative Direction</span><b>✦</b><span>Identity</span><b>✦</b><span>Motion</span><b>✦</b><span>Digital</span><b>✦</b>
        </div>
      </div>

      <section className="work-section" id="work">
        <header className="section-heading">
          <p>(01) Selected work</p>
          <h2>Built to<br /><em>break through.</em></h2>
          <span>2025—2026</span>
        </header>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.number}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} creative campaign`}
                  loading="lazy"
                  width={1440}
                  height={1088}
                />
                <span className="project-stamp">View case / {project.number}</span>
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="about-label">(02) Who I am</p>
        <div className="about-statement">
          <h2>I turn brave ideas into visual <em>heat.</em></h2>
          <p>
            I’m Wahab Farhan, an independent creative director and designer. I build identity,
            digital, and motion systems for people who would rather lead culture than follow it.
          </p>
        </div>
        <div className="capabilities">
          {[
            ["01", "Creative direction"],
            ["02", "Brand identity"],
            ["03", "Digital experiences"],
            ["04", "Motion systems"],
          ].map(([number, label]) => (
            <div key={number}><span>{number}</span><strong>{label}</strong><span>↗</span></div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p>Have a dangerous idea?</p>
        <h2>Let’s make<br /><span>noise.</span></h2>
        <a href="mailto:hello@wahabfarhan.com">
          hello@wahabfarhan.com <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <span>© 2026 Wahab Farhan</span>
        <span>Designed to provoke</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}