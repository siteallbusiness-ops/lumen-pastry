import Container from '@/components/Common/Container/Container';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import Reveal from '@/components/Common/Reveal/Reveal';
import { ROTATION_ITEMS } from '@/constants/site';
import styles from './BenchJournal.module.css';

export default function BenchJournal() {
  return (
    <section className={styles.benchSection} aria-labelledby="bench-journal-title">
      <Container>
        <div className={styles.benchStage}>
          <Reveal className={styles.journalMain}>
            <div className={styles.journalPaper}>
              <SectionTitle
                kicker="Bench journal"
                title="This week the room smells like maple steam and burnt honey."
                titleId="bench-journal-title"
                titleClassName={styles.benchTitle}
              />

              <div className={styles.journalBody}>
                <p className={styles.dropFirst}>
                  We brought the cruller glaze back one shade darker after Tuesday&apos;s rain — humidity steals shine, so we leaned on maple until the sheen held. The savoury buns stay through Sunday; next week we swap in a lentil pithivier if the market has the small French lentils we like.
                </p>
              </div>

              <blockquote className={styles.benchNote}>
                <span className={styles.noteIcon} aria-hidden="true">✦</span>
                <p>
                  If you need a full sheet for an office, send the note before Thursday noon — we only book two large pulls per weekend.
                </p>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={120} className={styles.rotationWrap}>
            <aside className={styles.rotationCard} aria-label="Rotating counter">
              <div className={styles.cardGlow} aria-hidden="true" />

              <header className={styles.rotationHeader}>
                <span className={styles.rotationIcon} aria-hidden="true">◷</span>
                <h3 className={styles.asideTitle}>On rotation</h3>
              </header>

              <ul className={styles.rotateList}>
                {ROTATION_ITEMS.map((item, index) => (
                  <li key={item} className={styles.rotateItem}>
                    <span className={styles.rotateIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.rotateText}>{item}</span>
                  </li>
                ))}
              </ul>

              <footer className={styles.asideNote}>
                List updates daily. Call ahead if you&apos;re cycling twenty kilometres for one thing.
              </footer>
            </aside>
          </Reveal>
        </div>
      </Container>

      <SectionWave tone="elevated" variant="deep" />
    </section>
  );
}
