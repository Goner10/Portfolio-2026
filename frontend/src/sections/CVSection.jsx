import { FileDown } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { contactLinks } from '../data/projects.js';

export default function CVSection() {
  const { t } = useLang();

  return (
    <section className="section cv" id="cv" data-testid="cv-section">
      <div className="container">
        <Reveal className="cv__card">
          <div className="cv__content">
            <p className="eyebrow">{t('cv.eyebrow')}</p>
            <h2 className="cv__title">{t('cv.title')}</h2>
            <p className="cv__desc">{t('cv.desc')}</p>
          </div>
          <div className="cv__action">
            <a href={contactLinks.cv} download className="btn btn--dark btn--lg" data-testid="cv-download-button">
              <FileDown size={18} strokeWidth={1.6} />
              {t('cv.button')}
            </a>
            <span className="cv__note">{t('cv.note')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
