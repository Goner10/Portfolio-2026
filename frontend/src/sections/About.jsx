import Reveal from '../components/Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function About() {
  const { t } = useLang();
  const facts = t('about.facts');
  const bring = t('about.bring');

  return (
    <section className="section about" id="sobre-mi" data-testid="about-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section__title">{t('about.title')}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.1} className="about__text">
            <p className="about__lead">{t('about.p1')}</p>
            <p className="about__body">{t('about.p2')}</p>
          </Reveal>

          <Reveal delay={0.2} className="about__facts">
            <dl>
              {facts.map((f) => (
                <div className="about__fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <h3 className="about__bring-title">{t('about.bringTitle')}</h3>
        </Reveal>
        <div className="about__cards">
          {bring.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.08} className="about__card">
              <span className="about__card-index">0{i + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
