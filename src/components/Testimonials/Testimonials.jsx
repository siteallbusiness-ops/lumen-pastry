import Container from '@/components/Common/Container/Container';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import Reveal from '@/components/Common/Reveal/Reveal';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection} aria-labelledby="guest-note">
      <SectionWave
        tone="page"
        variant="deep"
        edge="start"
        className={styles.waveCapTop}
      />

      <Container className={styles.twilightGrid}>
        <Reveal>
          <div className={styles.copyBlock}>
            <p className={styles.kickerLight}>Guest note</p>
            <h2 id="guest-note" className={styles.twilightTitle}>
              People leave the room quieter than they arrived.
            </h2>
            <p className={styles.twilightLead}>
              Someone scribbled <em>&ldquo;We missed our train on purpose&rdquo;</em> on the back of a receipt — raspberry glaze still tacky on their thumb.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className={styles.pullQuote}>
            <span className={styles.glassBlur} aria-hidden="true" />
            <span className={styles.glassSheen} aria-hidden="true" />
            <span className={styles.glassEdge} aria-hidden="true" />
            <span className={styles.glassOrb} aria-hidden="true" />
            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
            <p className={styles.quoteText}>
              You can hear the kitchen exhale between waves. We ordered one of everything for two people and nobody rushed us.
            </p>
          </blockquote>
        </Reveal>
      </Container>

      <SectionWave
        tone="elevated"
        variant="deep"
        edge="end"
        className={styles.waveCapBottom}
      />
    </section>
  );
}
