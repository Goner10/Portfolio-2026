import Reveal from '../components/Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Process() {
  const { t } = useLang();
  const steps = t('process.steps');

  return (
    <section className="section process" id="proceso" data-testid="process-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t('process.eyebrow')}</p>
          <h2 className="section__title">{t('process.title')}</h2>
        </Reveal>

        <ol className="process__steps">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={0.08 * i} className="process__step" as="li">
              <span className="process__num">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
