import Container from '@/components/Common/Container/Container';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import Reveal from '@/components/Common/Reveal/Reveal';
import { PILLAR_ITEMS } from '@/constants/site';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="bench">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="How we work"
            title="Three agreements before anything hits the vitrine."
            intro="Guests taste rhythm as much as sugar. These rules keep the room quiet even when the oven isn't."
          />
        </Reveal>

        <div className={styles.pillarGrid}>
          {PILLAR_ITEMS.map((pillar, index) => (
            <Reveal key={pillar.number} className={styles.pillarReveal} delay={index * 100}>
              <article className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <span className={styles.pillarNum} aria-hidden="true">
                    {pillar.number}
                  </span>
                  <span className={styles.pillarAccent} aria-hidden="true" />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
