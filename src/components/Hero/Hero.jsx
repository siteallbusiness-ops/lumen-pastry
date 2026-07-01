import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import Button from '@/components/Common/Button/Button';
import styles from './Hero.module.css';

const HERO_STATS = [
  { value: 'Wed–Sun', label: 'Pickup window' },
  { value: 'Small-batch', label: 'Hand-finished' },
  { value: 'Riverhead', label: 'Atelier counter' },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackdrop} aria-hidden="true">
        <span className={styles.meshPrimary} />
        <span className={styles.meshSecondary} />
        <span className={styles.meshWarm} />
        <span className={styles.noiseField} />
      </div>

      <Container className={styles.heroInner}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.copyTop}>
              <span className={styles.eyebrowBadge}>
                <span className={styles.liveDot} aria-hidden="true" />
                Riverhead atelier · morning bake
              </span>

              <h1 id="hero-title" className={styles.heroTitle}>
                Pastry measured in{' '}
                <span className={styles.titleAccent}>patience</span>, not pixels.
              </h1>

              <p className={styles.heroLead}>
                We fold butter while the city wakes, glaze when the light turns honest, and send the first crullers out before the queue doubles back on itself.
              </p>
            </div>

            <div className={styles.copyBottom}>
              <div className={styles.heroActions}>
                <Button href="/menu" variant="primary">
                  Today&apos;s menu
                </Button>
              </div>

              <ul className={styles.statStrip} aria-label="Atelier highlights">
                {HERO_STATS.map((stat) => (
                  <li key={stat.label} className={styles.statItem}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.visualBackdrop} aria-hidden="true" />
            <div className={styles.visualFrame} aria-hidden="true" />

            <div className={styles.heroShot}>
              <Image
                src="/images/lumen-12.webp"
                width={1024}
                height={682}
                alt="Baked raspberry cheesecake with glossy coulis on a pedestal against a lavender wall"
                priority
                className={styles.heroImage}
                sizes="(max-width: 992px) 100vw, 52vw"
              />
            </div>

            <figcaption className={styles.heroCaption}>
              <span className={styles.captionDot} aria-hidden="true" />
              Morning vitrine
            </figcaption>

            <div className={styles.floatingNote} aria-hidden="true">
              <span className={styles.noteTime}>08:00</span>
              <span className={styles.noteText}>First wave from the pass</span>
            </div>
          </figure>
        </div>
      </Container>

      <div className={styles.heroBridge}>
        <a href="#filmstrip" className={styles.scrollCue} aria-label="Scroll to gallery">
          <span className={styles.scrollMouse} aria-hidden="true">
            <span className={styles.mouseBody}>
              <span className={styles.mouseWheel} />
            </span>
            <span className={styles.mouseChevrons}>
              <span className={styles.mouseChevron} />
              <span className={styles.mouseChevron} />
            </span>
          </span>
          <span className={styles.scrollText}>See the pass</span>
        </a>

        <svg
          className={styles.bridgeWave}
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,58 C280,96 520,18 760,52 C1000,86 1240,28 1440,62 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
