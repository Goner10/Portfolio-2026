import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactLinks } from '../data/projects.js';

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="section contact" id="contacto" data-testid="contact-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="contact__title">{t('contact.title')}</h2>
          <p className="contact__desc">{t('contact.desc')}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="contact__email-label">{t('contact.emailLabel')}</p>
          <a href={`mailto:${contactLinks.email}`} className="contact__email" data-testid="contact-email-link">
            {contactLinks.email}
          </a>
        </Reveal>

        <Reveal delay={0.2} className="contact__links">
          <p className="contact__links-label">{t('contact.links')}</p>
          <div className="contact__rows">
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__row"
              data-testid="contact-github-link"
            >
              <span className="contact__row-icon"><Github size={18} strokeWidth={1.6} /></span>
              <span className="contact__row-name">GitHub</span>
              <span className="contact__row-handle">@Goner10</span>
              <ArrowUpRight size={16} strokeWidth={1.6} className="contact__row-arrow" />
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__row"
              data-testid="contact-linkedin-link"
            >
              <span className="contact__row-icon"><Linkedin size={18} strokeWidth={1.6} /></span>
              <span className="contact__row-name">LinkedIn</span>
              <span className="contact__row-handle">gonzalo-marti-peirats</span>
              <ArrowUpRight size={16} strokeWidth={1.6} className="contact__row-arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
