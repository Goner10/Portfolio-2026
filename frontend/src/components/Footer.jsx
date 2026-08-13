import { ArrowUp } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactLinks } from '../data/projects.js';

export default function Footer() {
  const { lang, setLang, t } = useLang();

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" data-testid="footer">
      <span className="footer__giant" aria-hidden="true">GONZALO</span>
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <p className="footer__name">Gonzalo Martí Peirats</p>
            <p className="footer__role">{t('footer.role')} — {t('footer.location')}</p>
          </div>
          <button className="footer__totop" onClick={toTop} aria-label={t('footer.top')} data-testid="back-to-top-button">
            <ArrowUp size={18} strokeWidth={1.6} />
          </button>
        </div>

        <div className="footer__bottom">
          <div className="footer__links">
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" data-testid="footer-github-link">GitHub</a>
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin-link">LinkedIn</a>
            <a href={`mailto:${contactLinks.email}`} data-testid="footer-email-link">Email</a>
          </div>
          <div className="footer__lang">
            <button className={lang === 'es' ? 'is-active' : ''} onClick={() => setLang('es')} data-testid="footer-lang-es">Español</button>
            <span aria-hidden="true">·</span>
            <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')} data-testid="footer-lang-en">English</button>
          </div>
          <p className="footer__copy">
            © 2026 Gonzalo Martí Peirats. {t('footer.rights')} <span className="footer__care">{t('footer.builtWith')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
