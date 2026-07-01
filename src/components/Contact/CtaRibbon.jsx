import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import Button from '@/components/Common/Button/Button';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import Reveal from '@/components/Common/Reveal/Reveal';
import styles from './CtaRibbon.module.css';

export default function CtaRibbon() {
  return (
    <section className={styles.ctaRibbon} aria-labelledby="ribbon-title">
      <SectionWave
        tone="page"
        variant="deep"
        edge="start"
        className={styles.waveCapTop}
      />

      <Container className={styles.ctaOuter}>
        <Reveal>
          <div className={styles.ctaStage}>
            <div className={styles.visualCol}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/lumen-07.png"
                  width={1536}
                  height={1024}
                  alt="Purple and maple-glazed cruller duo on parchment"
                  loading="lazy"
                  className={styles.ctaImage}
                  sizes="(max-width: 992px) 100vw, 55vw"
                />
                <span className={styles.imageVeil} aria-hidden="true" />
              </div>
              <span className={styles.imageBadge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                Sunday cruller run
              </span>
            </div>

            <div className={styles.contentCol}>
              <span className={styles.eyebrow}>Pickup list</span>
              <h2 id="ribbon-title" className={styles.ctaTitle}>
                Save a seat for the Sunday cruller run.
              </h2>
              <p className={styles.ctaText}>
                We text a short list when the maple pot is almost empty — add your number at pickup if you want in.
              </p>

              <div className={styles.ctaActions}>
                <Button href="/visit" variant="primary" className={styles.ctaBtnPrimary}>
                  Plan a visit
                </Button>
                <Button href="/menu" variant="ribbon" className={styles.ctaBtnSecondary}>
                  Browse sweets
                </Button>
              </div>
            </div>
          </div>
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
