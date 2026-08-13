import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CaseModal from '../components/CaseModal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { projects } from '../data/projects.js';

function ProjectCase({ project, index, onOpen }) {
  const { lang, t } = useLang();
  const reversed = index % 2 === 1;

  return (
    <article
      className={`case ${reversed ? 'case--reversed' : ''}`}
      data-testid={`project-case-${project.id}`}
      style={{ '--case-accent': project.accent }}
    >
      <Reveal className="case__visual" y={40}>
        <button
          className="case__visual-btn"
          onClick={() => onOpen(project)}
          aria-label={`${t('projects.viewCase')} — ${project.name}`}
          data-testid={`project-open-${project.id}`}
        >
          <div className="browser">
            <div className="browser__bar" aria-hidden="true">
              <span className="browser__dots">
                <i></i><i></i><i></i>
              </span>
              <span className="browser__url">{project.domain}</span>
            </div>
            <img
              src={project.desktop}
              alt={`${project.name} — desktop`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="browser__shot"
            />
          </div>
          <img
            src={project.phone}
            alt={`${project.name} — mobile`}
            loading="lazy"
            className="case__phone"
          />
        </button>
        <span className="case__index" aria-hidden="true">0{index + 1}</span>
      </Reveal>

      <div className="case__info">
        <Reveal delay={0.05}>
          <div className="case__meta">
            <span className="case__year">{project.year}</span>
            <span className="case__client">{project.clientType[lang]}</span>
          </div>
          <h3 className="case__name">{project.name}</h3>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="case__block">
            <h4>{t('projects.need')}</h4>
            <p>{project.need[lang]}</p>
          </div>
          <div className="case__block">
            <h4>{t('projects.solution')}</h4>
            <p>{project.solution[lang]}</p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="case__tech" aria-label={t('projects.stack')}>
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="case__links">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--dark btn--sm"
              data-testid={`project-visit-${project.id}`}
            >
              {t('projects.visit')}
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
              data-testid={`project-repo-${project.id}`}
            >
              <Github size={15} strokeWidth={1.8} />
              {t('projects.repo')}
            </a>
            <button
              className="case__more"
              onClick={() => onOpen(project)}
              data-testid={`project-viewcase-${project.id}`}
            >
              <Plus size={14} strokeWidth={1.8} />
              {t('projects.viewCase')}
            </button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState(null);

  return (
    <section className="section projects" id="proyectos" data-testid="projects-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t('projects.eyebrow')}</p>
          <h2 className="section__title">{t('projects.title')}</h2>
          <p className="section__intro">{t('projects.intro')}</p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCase key={project.id} project={project} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
