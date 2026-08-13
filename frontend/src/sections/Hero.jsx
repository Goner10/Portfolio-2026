import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactLinks } from '../data/projects.js';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);
  const circleY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 100]);

  const fade = (delay) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="hero" id="top" data-testid="hero-section">
      <div className="hero__inner">
        <div className="hero__copy">
          <motion.p className="eyebrow" {...fade(0.1)} data-testid="hero-eyebrow">
            {t('hero.eyebrow')} <span className="eyebrow__dot" aria-hidden="true">·</span> {t('hero.location')}
          </motion.p>

          <h1 className="hero__title" data-testid="hero-title">
            <motion.span className="hero__title-line" {...fade(0.2)}>
              {t('hero.firstName')}
            </motion.span>
            <motion.span className="hero__title-line hero__title-line--italic" {...fade(0.32)}>
              {t('hero.lastName')}
            </motion.span>
          </h1>

          <motion.p className="hero__role" {...fade(0.45)} data-testid="hero-role">
            {t('hero.role')}
          </motion.p>

          <motion.p className="hero__tagline" {...fade(0.55)} data-testid="hero-tagline">
            {t('hero.tagline')}
          </motion.p>

          <motion.div className="hero__ctas" {...fade(0.65)}>
            <a href="#proyectos" className="btn btn--dark" data-testid="hero-cta-projects">
              {t('hero.ctaProjects')}
            </a>
            <a href="#contacto" className="btn btn--outline" data-testid="hero-cta-contact">
              {t('hero.ctaContact')}
            </a>
            <a href={contactLinks.cv} download className="link-underline" data-testid="hero-cta-cv">
              {t('hero.ctaCv')}
            </a>
          </motion.div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <motion.div
            className="hero__circle"
            style={{ y: circleY }}
            initial={reduce ? { opacity: 1 } : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
            aria-hidden="true"
          />
          <motion.img
            src="/assets/portrait/gonzalo-hero.png"
            alt="Retrato ilustrado de Gonzalo Martí Peirats"
            className="hero__portrait"
            style={{ y: portraitY }}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            data-testid="hero-portrait"
          />
          <motion.div className="hero__badge" {...fade(0.9)} data-testid="hero-availability-badge">
            <span className="hero__badge-dot" aria-hidden="true"></span>
            {t('hero.available')}
          </motion.div>
        </div>
      </div>

      <motion.div className="hero__foot" {...fade(1)}>
        <div className="hero__socials">
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="hero-github-link">
            <Github size={18} strokeWidth={1.6} />
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="hero-linkedin-link">
            <Linkedin size={18} strokeWidth={1.6} />
          </a>
          <a href={`mailto:${contactLinks.email}`} aria-label="Email" data-testid="hero-email-link">
            <Mail size={18} strokeWidth={1.6} />
          </a>
        </div>
        <a href="#sobre-mi" className="hero__scroll" data-testid="hero-scroll-hint">
          {t('hero.scroll')}
          <ArrowDown size={14} strokeWidth={1.6} />
        </a>
        <span className="hero__location">39.4699° N, 0.3763° W</span>
      </motion.div>
    </section>
  );
}
