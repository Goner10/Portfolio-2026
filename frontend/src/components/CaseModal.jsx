import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function CaseModal({ project, onClose }) {
  const { lang, t } = useLang();
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll('a[href], button');
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="casemodal__overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-testid="case-modal-overlay"
    >
      <motion.div
        ref={panelRef}
        className="casemodal"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        data-testid={`case-modal-${project.id}`}
      >
        <header className="casemodal__head">
          <div>
            <div className="case__meta">
              <span className="case__year" style={{ color: project.accent }}>{project.year}</span>
              <span className="case__client">{project.clientType[lang]}</span>
            </div>
            <h3 className="casemodal__name">{project.name}</h3>
          </div>
          <button
            ref={closeRef}
            className="casemodal__close"
            onClick={onClose}
            aria-label={t('projects.close')}
            data-testid="case-modal-close"
          >
            <X size={20} strokeWidth={1.6} />
          </button>
        </header>

        <div className="casemodal__body">
          <div className="casemodal__cols">
            <div className="case__block">
              <h4>{t('projects.need')}</h4>
              <p>{project.need[lang]}</p>
            </div>
            <div className="case__block">
              <h4>{t('projects.solution')}</h4>
              <p>{project.solution[lang]}</p>
            </div>
          </div>

          <ul className="case__tech" aria-label={t('projects.stack')}>
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="case__links">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--dark btn--sm" data-testid={`case-modal-visit-${project.id}`}>
              {t('projects.visit')}
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm" data-testid={`case-modal-repo-${project.id}`}>
              <Github size={15} strokeWidth={1.8} />
              {t('projects.repo')}
            </a>
          </div>

          <h4 className="casemodal__gallery-title">{t('projects.gallery')}</h4>
          <div className="casemodal__gallery">
            {project.gallery.map((item) => (
              <figure key={item.src} className={`casemodal__item casemodal__item--${item.type}`}>
                {item.type === 'desktop' ? (
                  <div className="browser">
                    <div className="browser__bar" aria-hidden="true">
                      <span className="browser__dots"><i></i><i></i><i></i></span>
                      <span className="browser__url">{project.domain}</span>
                    </div>
                    <img src={item.src} alt={`${project.name} — ${item.label[lang]}`} loading="lazy" className="browser__shot" />
                  </div>
                ) : (
                  <div className="casemodal__device">
                    <img src={item.src} alt={`${project.name} — ${item.label[lang]}`} loading="lazy" />
                  </div>
                )}
                <figcaption>{item.label[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
