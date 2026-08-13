import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactLinks } from '../data/projects.js';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#proyectos', label: t('nav.projects') },
    { href: '#sobre-mi', label: t('nav.about') },
    { href: '#proceso', label: t('nav.process') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a href="#top" className="nav__brand" data-testid="nav-brand">
          <span className="nav__brand-mark">G.</span>
          <span className="nav__brand-name">Gonzalo Martí</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" data-testid={`nav-link-${l.href.slice(1)}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="lang-switch" role="group" aria-label="Language" data-testid="language-switcher">
            <button
              className={`lang-switch__btn ${lang === 'es' ? 'is-active' : ''}`}
              onClick={() => setLang('es')}
              data-testid="lang-es-button"
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <span className="lang-switch__sep" aria-hidden="true">/</span>
            <button
              className={`lang-switch__btn ${lang === 'en' ? 'is-active' : ''}`}
              onClick={() => setLang('en')}
              data-testid="lang-en-button"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <a href={contactLinks.cv} download className="nav__cv" data-testid="nav-cv-button">
            {t('nav.cv')}
          </a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            data-testid="mobile-menu-button"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav__mobile" aria-label="Mobile" data-testid="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={contactLinks.cv} download className="nav__mobile-link" onClick={() => setOpen(false)}>
            {t('hero.ctaCv')}
          </a>
        </nav>
      )}
    </motion.header>
  );
}
