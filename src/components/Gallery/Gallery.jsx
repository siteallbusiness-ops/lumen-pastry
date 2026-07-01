'use client';

import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import SectionWave from '@/components/Common/SectionWave/SectionWave';
import { GALLERY_ITEMS } from '@/constants/site';
import styles from './Gallery.module.css';

/* Duplicated for seamless infinite loop */
const MARQUEE_ITEMS = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

function GalleryCard({ item, priority = false }) {
  return (
    <figure className={styles.marqueeSlide}>
      <div className={styles.railFigure}>
        <div className={styles.railImageWrap}>
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            loading={priority ? 'eager' : 'lazy'}
            className={styles.railImage}
            sizes="(max-width: 768px) 280px, 300px"
          />
          <span className={styles.imageShine} aria-hidden="true" />
        </div>
        <figcaption className={styles.railCaption}>
          <span className={styles.captionDot} aria-hidden="true" />
          {item.caption}
        </figcaption>
      </div>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section className={styles.gallerySection} id="filmstrip" aria-label="Photo gallery">
      <Container>
        <Reveal className={styles.railHead}>
          <div className={styles.railHeadMain}>
            <p className={styles.sectionLabel}>This week&apos;s pass</p>
            <h2 className={styles.railTitle}>Filmstrip of the week&apos;s bench.</h2>
          </div>
          <p className={styles.railHint}>
            Swipe along the pass — each tile is something we actually ran this week.
          </p>
        </Reveal>
      </Container>

      <div className={styles.marqueeShell}>
        <div className={styles.marqueeViewport}>
          <div className={styles.marqueeTrack}>
            {MARQUEE_ITEMS.map((item, index) => (
              <GalleryCard
                key={`${item.src}-${index}`}
                item={item}
                priority={index < 4}
              />
            ))}
          </div>
        </div>
      </div>

      <SectionWave tone="page" />
    </section>
  );
}
