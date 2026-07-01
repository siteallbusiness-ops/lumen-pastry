import Container from '@/components/Common/Container/Container';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import Reveal from '@/components/Common/Reveal/Reveal';
import { TIMELINE_ITEMS } from '@/constants/site';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.servicesSection} aria-labelledby="pass-timeline-title">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Pass timeline"
            title="From sponge to counter in four beats."
            titleId="pass-timeline-title"
          />
        </Reveal>

        <div className={styles.timelineShell}>
          <span className={styles.railLine} aria-hidden="true" />

          <ol className={styles.timelineList}>
            {TIMELINE_ITEMS.map((item, index) => (
              <li key={item.time} className={styles.timelineStep}>
                <Reveal className={styles.timelineReveal} delay={index * 90}>
                  <div className={styles.stepNode} aria-hidden="true">
                    <span className={styles.railDot} />
                    <span className={styles.cardStem} />
                  </div>

                  <article className={styles.timelineCard}>
                    <header className={styles.cardHeader}>
                      <time className={styles.timelineTime} dateTime={item.time.replace('.', ':')}>
                        {item.time}
                      </time>
                      <span className={styles.stepIndex}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </header>

                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineText}>{item.description}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <SectionWave tone="page" variant="deep" />
    </section>
  );
}
