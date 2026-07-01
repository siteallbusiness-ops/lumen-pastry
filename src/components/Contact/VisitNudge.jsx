import Button from '@/components/Common/Button/Button';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import Reveal from '@/components/Common/Reveal/Reveal';
import { SITE_EMAIL } from '@/constants/site';
import styles from './VisitNudge.module.css';

export default function VisitNudge({
  rowClassName = '',
  panelClassName = '',
  embedded = false,
}) {
  const rowClass = [rowClassName || styles.visitNudge].filter(Boolean).join(' ');
  const panelClass = [panelClassName, styles.visitCard].filter(Boolean).join(' ');

  const content = (
    <>
      <Reveal className={styles.visitCopy}>
        <SectionTitle
          kicker="Visit"
          title="Glassworks Lane · counter first, tables second."
          intro="Wednesday through Sunday we keep a short queue at the door so the cold chain stays honest. Dogs get water outside; humans get napkins inside."
          compact
          center
        />
        <div className={styles.visitActions}>
          <Button href="/visit" variant="primary">
            Plan your visit
          </Button>
          <Button href={`mailto:${SITE_EMAIL}`} variant="ghost">
            Large orders
          </Button>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <aside className={panelClass} aria-label="Counter etiquette">
          <h3 className={styles.visitCardTitle}>At the door</h3>
          <p className={styles.visitBig}>Short queue, honest cold chain</p>
          <p className={styles.visitSmall}>
            Dogs get water outside; humans get napkins inside. See pickup hours above for the full weekly schedule.
          </p>
        </aside>
      </Reveal>
    </>
  );

  if (embedded) {
    return <div className={`${styles.visitBlock} ${rowClass}`}>{content}</div>;
  }

  return (
    <section className={styles.visitSection}>
      <div className={rowClass}>{content}</div>
    </section>
  );
}
