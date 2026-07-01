import Container from '@/components/Common/Container/Container';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import styles from './InnerPageHero.module.css';

export default function InnerPageHero({
  eyebrow,
  title,
  description,
  titleId = 'page-title',
}) {
  return (
    <section className={styles.pageHero} aria-labelledby={titleId}>
      <Container className={styles.heroInner}>
        <span className={styles.eyebrowBadge}>{eyebrow}</span>
        <h1 id={titleId} className={styles.heroTitle}>
          {title}
        </h1>
        {description && <p className={styles.heroDescription}>{description}</p>}
      </Container>

      <SectionWave tone="elevated" variant="deep" className={styles.heroWave} />
    </section>
  );
}
