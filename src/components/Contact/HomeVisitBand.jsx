import Container from '@/components/Common/Container/Container';
import HomeHours from '@/components/Hours/HomeHours';
import VisitNudge from '@/components/Contact/VisitNudge';
import styles from './HomeVisitBand.module.css';

export default function HomeVisitBand() {
  return (
    <section className={styles.band} id="hours" aria-label="Hours and visit">
      <Container className={styles.bandInner}>
        <HomeHours rowClassName={styles.row} panelClassName={styles.panelCard} embedded />
        <div className={styles.partition} role="separator" aria-hidden="true" />
        <VisitNudge rowClassName={styles.row} panelClassName={styles.panelCard} embedded />
      </Container>
    </section>
  );
}
