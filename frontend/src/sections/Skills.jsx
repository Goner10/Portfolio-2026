import Reveal from '../components/Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { technologies } from '../data/projects.js';

export default function Skills() {
  const { t } = useLang();
  const groups = t('skills.groups');
  const soft = t('skills.soft');

  return (
    <section className="section skills" id="capacidades" data-testid="skills-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--light">{t('skills.eyebrow')}</p>
          <h2 className="section__title section__title--light">{t('skills.title')}</h2>
        </Reveal>

        <div className="skills__groups">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={0.08 * i} className="skills__group">
              <span className="skills__num" aria-hidden="true">0{i + 1}</span>
              <h3>{g.name}</h3>
              <p>{g.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="skills__meta">
          <div className="skills__tech">
            <h4>{t('skills.techTitle')}</h4>
            <ul>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="skills__soft">
            <h4>{t('skills.softTitle')}</h4>
            <ul>
              {soft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
