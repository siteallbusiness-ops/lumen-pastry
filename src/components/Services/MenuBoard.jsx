'use client';

import Image from 'next/image';
import Reveal from '@/components/Common/Reveal/Reveal';
import { MENU_SECTIONS, ON_PASS_MENU_ITEMS } from '@/constants/site';
import styles from './MenuBoard.module.css';

const SECTION_ACCENTS = ['01', '02', '03'];
const onPassSet = new Set(ON_PASS_MENU_ITEMS);

export default function MenuBoard() {
  return (
    <div className={styles.menuPage}>
      {MENU_SECTIONS.map((section, sectionIndex) => (
        <Reveal key={section.title} delay={sectionIndex * 70}>
          <section className={styles.menuCategory} aria-labelledby={`menu-section-${sectionIndex}`}>
            <header className={styles.categoryHeader}>
              <div className={styles.categoryTitleWrap}>
                <span className={styles.sectionIndex} aria-hidden="true">
                  {SECTION_ACCENTS[sectionIndex]}
                </span>
                <div>
                  <h2 id={`menu-section-${sectionIndex}`} className={styles.categoryTitle}>
                    {section.title}
                  </h2>
                  <p className={styles.categoryMeta}>
                    {section.items.length} items · sample pricing
                  </p>
                </div>
              </div>
            </header>

            <ul className={styles.itemGrid}>
              {section.items.map((item) => {
                const isOnPass = onPassSet.has(item.name);

                return (
                  <li key={item.name} className={styles.gridItem}>
                    <article className={styles.menuCard}>
                      <div className={styles.imageFrame}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={1536}
                          height={1024}
                          className={styles.cardImage}
                          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        />
                        <span className={styles.imageVeil} aria-hidden="true" />
                        {isOnPass && (
                          <span className={styles.passRibbon}>On the pass</span>
                        )}
                      </div>

                      <div className={styles.cardBody}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <div className={styles.priceRow}>
                          <span className={styles.priceLabel}>Sample price</span>
                          <span className={styles.priceValue}>{item.price}</span>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
