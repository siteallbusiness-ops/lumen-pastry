import Container from '@/components/Common/Container/Container';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import Reveal from '@/components/Common/Reveal/Reveal';
import { SOURCING_TAGS } from '@/constants/site';
import styles from './Sourcing.module.css';

export default function Sourcing() {
  return (
    <section className={styles.sourcingSection} aria-labelledby="sourcing-title">
      <Container>
        <div className={styles.sourcingStage}>
          <Reveal className={styles.sourcingIntro}>
            <SectionTitle
              kicker="Sourcing"
              title="What we reach for most often."
              titleId="sourcing-title"
              intro="No logos on the wall — just suppliers who answer the phone when a delivery lands short."
              className={styles.introBlock}
            />
          </Reveal>

          <div className={styles.tagGrid} role="list" aria-label="Sourcing partners">
            {SOURCING_TAGS.map((tag, index) => (
              <Reveal
                key={tag}
                as="article"
                className={styles.tagCard}
                role="listitem"
                delay={index * 60}
              >
                <span className={styles.tagIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.tagLabel}>{tag}</span>
                <span className={styles.tagShine} aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      <SectionWave tone="page" variant="deep" className={styles.sectionBridge} />
    </section>
  );
}
