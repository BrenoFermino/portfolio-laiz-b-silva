import { FormEvent, useEffect, useRef, useState } from "react";
import type { Category, Project } from "./types";

const SITE_NAME = "Portfolio Laiz B. Silva";
const PHOTO = "/images/profilePicLaiz.jpeg";
/** Imagem de fundo do hero — coloque o arquivo em client/public/images/ e atualize o caminho */
const HERO_BG = "/images/laizPhotos/backgroundHeroPic.png";
const EMAIL = "laizbocasilva@gmail.com"; // TODO: e-mail da Laiz
const LINKEDIN = "https://www.linkedin.com/in/laiz-boca-silva-b35b48248/"; // TODO
const INSTAGRAM = "https://www.instagram.com/laizcomzz/"; // TODO

/** Marcas com que já trabalhou — edite aqui (logo opcional em /images/brands/) */
const BRANDS: { name: string; logo?: string }[] = [
  { name: "JCDecaux" },
  { name: "iFood", logo: "/images/brands/ifood-logo.svg" },
  { name: "FIFA" , logo: "/images/brands/2027-FIFA-Women's-World-Cup-logo.svg" },
  { name: "Koni" },
  { name: "Gurumê" },
  { name: "LET" },
  { name: "2V" },
  { name: "Nação" },
];

/** Experiências profissionais — edite aqui */
const EXPERIENCES: {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  skills?: string[];
}[] = [
  {
    role: "Analista de Marketing Júnior",
    company: "JCDecaux Brasil",
    type: "Tempo integral",
    period: "Fev/2025 – Atual",
    location: "São Paulo, SP",
    description:
      "Planejamento estratégico, estratégia de mídia OOH e inteligência de mercado, com apresentações comerciais de alto impacto para marcas e campanhas.",
    skills: ["Planejamento Estratégico", "Estratégia de Mídia", "Storytelling & PowerPoint"],
  },
  {
    role: "Estágio em Marketing & Produtos",
    company: "The Media Trade",
    type: "Estágio",
    period: "Out/2023 – Dez/2024",
    location: "São Paulo, SP",
    description:
      "Marketing e suporte a produtos de mídia com interface em televisão, além da construção de apresentações estratégicas em PowerPoint.",
    skills: ["Marketing & Produtos", "Mídia OOH & TV", "Storytelling & PowerPoint"],
  },
  {
    role: "Estágio em Social Mídia",
    company: "Medellín Comunicação",
    type: "Estágio",
    period: "Set/2022 – Out/2023",
    location: "São Paulo, SP",
    description:
      "Estratégia digital, planejamento de conteúdo e gestão de redes, com apresentações orientadas a clientes e resultados.",
    skills: ["Estratégia Digital / Social Media", "Storytelling & PowerPoint"],
  },
  {
    role: "Aprendiz em Planejamento de Operações",
    company: "Loga - Logística Ambiental de São Paulo",
    type: "Aprendiz",
    period: "Set/2021 – Ago/2022",
    location: "São Paulo, SP",
    description:
      "Apoio ao planejamento operacional, organização de processos, resolução de problemas e relatórios gerenciais.",
    skills: ["Resolução de Problemas", "Storytelling & PowerPoint"],
  },
];

function Cover({ p, className = "" }: { p: Project; className?: string }) {
  const style = p.image
    ? { backgroundImage: `url(${p.image})` }
    : { backgroundImage: `linear-gradient(145deg, ${p.colors[0]}, ${p.colors[1]})` };
  return (
    <div className={`cover ${p.ratio} ${className}`} style={style} role={p.image ? "img" : undefined} aria-label={p.image ? p.title : undefined}>
      {!p.image && <span className="cover-title" aria-hidden="true">{p.title}</span>}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#top" className="brand">{SITE_NAME}</a>
      <nav aria-label="Principal">
        <a href="#sobre">Sobre mim</a>
        <a href="#experiencias">Experiências</a>
        <a href="#trabalhos">Trabalhos</a>
        <a href="#marcas">Marcas</a>
        <a href="#contato" className="pill">Contato</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <div className="hero-text">
        <p className="eyebrow">{SITE_NAME}</p>
        <h1>Laiz B. Silva</h1>
        <p className="lead">
          Formada em Publicidade e Propaganda. Atuo com estratégia de mídia, marketing e comunicação — unindo visão analítica e repertório criativo.
        </p>
      </div>
    </section>
  );
}

const FILTERS: ("Todos" | Category)[] = [
  "Todos",
  "Acadêmicos",
  "Defesas/Clientes",
  "Projetos/Oportunidades",
  "Criação",
];

function Work({ projects, onOpen }: { projects: Project[]; onOpen: (p: Project) => void }) {
  const [active, setActive] = useState<"Todos" | Category>("Todos");
  const list = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section" id="trabalhos">
      <div className="section-head">
        <h2>Trabalhos</h2>
        <div className="filters" role="group" aria-label="Filtrar por categoria">
          {FILTERS.map((c) => (
            <button key={c} className={c === active ? "chip on" : "chip"} aria-pressed={c === active} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <ul className="grid">
        {list.map((p) => (
          <li key={p.id} className={`card ${p.ratio}`}>
            <button onClick={() => onOpen(p)} aria-label={`Abrir projeto ${p.title}`}>
              <Cover p={p} />
              <div className="meta">
                <h3>{p.title}</h3>
                <span>{p.category}, {p.year}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  return (
    <dialog ref={ref} className="dialog" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {project && (
        <article>
          <button className="close" onClick={onClose} aria-label="Fechar">Fechar</button>
          <Cover p={{ ...project, ratio: "wide" }} />
          <div className="dialog-body">
            <h2>{project.title}</h2>
            {(project.pdf || project.image) && (
              <a
                className="btn"
                href={project.pdf ?? project.image}
                target="_blank"
                rel="noreferrer"
              >
                Visualizar projeto
              </a>
            )}
          </div>
        </article>
      )}
    </dialog>
  );
}

function Brands() {
  const track = [...BRANDS, ...BRANDS];
  return (
    <section className="brands" id="marcas" aria-label="Marcas com que trabalhei">
      <p className="brands-label">Marcas com que trabalhei</p>
      <div className="brands-marquee" aria-hidden="true">
        <ul className="brands-track">
          {track.map((b, i) => (
            <li key={`${b.name}-${i}`} className="brand-item">
              {b.logo ? <img src={b.logo} alt="" /> : <span>{b.name}</span>}
            </li>
          ))}
        </ul>
      </div>
      <ul className="brands-sr">
        {BRANDS.map((b) => (
          <li key={b.name}>{b.name}</li>
        ))}
      </ul>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="sobre">
      <h2>Sobre mim</h2>
      <div className="about-grid">
        <figure className="portrait">
          <img src={PHOTO} alt="Laiz B. Silva" width={480} height={600} />
        </figure>
        <div className="about-body">
          <p className="lead">
            Sou Laiz B. Silva, publicitária e analista de marketing na JCDecaux Brasil, com foco em estratégia de mídia OOH e storytelling comercial.
          </p>
          <p>
            Passei por operações, social media, mídia/TV e produtos antes de chegar ao out-of-home. Essa trajetória me deu uma visão 360º de comunicação e negócios — e a clareza de transformar dados e estratégia em narrativas visuais que convencem.
          </p>
          <ul className="skills">
            <li>Planejamento Estratégico</li>
            <li>Estratégia de Mídia</li>
            <li>Mídia OOH &amp; TV</li>
            <li>Estratégia Digital / Social Media</li>
            <li>Marketing &amp; Produtos</li>
            <li>Storytelling &amp; PowerPoint</li>
            <li>Resolução de Problemas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="section experiences" id="experiencias">
      <div className="section-head">
        <h2>Experiências</h2>
      </div>
      <ol className="experience-list">
        {EXPERIENCES.map((e) => (
          <li key={`${e.company}-${e.role}`} className="experience-item">
            <div className="experience-meta">
              <h3>{e.role}</h3>
              <span>{e.period}</span>
            </div>
            <p className="experience-company">{e.company} · {e.type}</p>
            <p className="experience-location">{e.location}</p>
            <p>{e.description}</p>
            {e.skills && e.skills.length > 0 && (
              <ul className="skills experience-skills">
                {e.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

type Status = "idle" | "sending" | "ok" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Não foi possível enviar.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar. Tente de novo.");
      setStatus("error");
    }
  }

  return (
    <section className="section contact" id="contato">
      <div>
        <h2>Vamos conversar</h2>
        <p className="lead">Quer falar sobre mídia, marketing ou uma parceria? Conte um pouco e eu respondo em até dois dias úteis.</p>
        <p className="links">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        </p>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Nome<input name="name" autoComplete="name" required /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
        <label>Mensagem<textarea name="message" rows={5} required /></label>
        <button className="btn" disabled={status === "sending"}>{status === "sending" ? "Enviando" : "Enviar mensagem"}</button>
        <p className="form-msg" role="status" aria-live="polite">
          {status === "ok" && "Mensagem enviada. Obrigada pelo contato!"}
          {status === "error" && <span className="err">{error}</span>}
        </p>
      </form>
    </section>
  );
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/api/projects").then((r) => r.json()).then(setProjects).catch(() => setFailed(true));
  }, []);

  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experiences />
        {failed ? (
          <section className="section"><p>Não foi possível carregar os trabalhos. Recarregue a página.</p></section>
        ) : (
          <Work projects={projects} onOpen={setOpen} />
        )}
        <Brands />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {SITE_NAME}. Publicidade, marketing e estratégia de mídia.</footer>
      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </>
  );
}
