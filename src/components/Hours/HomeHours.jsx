'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/Common/Container/Container';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import Reveal from '@/components/Common/Reveal/Reveal';
import { HOURS_ROWS } from '@/constants/site';
import styles from './HomeHours.module.css';

function isClosed(hours) {
  return hours.toLowerCase() === 'closed';
}

export default function HomeHours({
  rowClassName = '',
  panelClassName = '',
  embedded = false,
}) {
  const listRef = useRef(null);
  const [listVisible, setListVisible] = useState(false);

  useEffect(() => {
    const element = listRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setListVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const rowClass = [rowClassName || styles.hoursLayout].filter(Boolean).join(' ');
  const panelClass = [panelClassName, styles.schedulePanel].filter(Boolean).join(' ');

  const content = (
    <div className={rowClass}>
      <Reveal className={styles.sectionHeader}>
        <SectionTitle
          kicker="Pickup window"
          title="When the pass is lit"
          titleId={embedded ? undefined : 'home-hours-title'}
          intro="Small waves, honest cold chain — come early for crullers."
          compact
          center
        />
        <span className={styles.openBadge}>Wed–Sun · counter</span>
      </Reveal>

      <Reveal delay={80}>
        <div className={panelClass}>
          <ul
            ref={listRef}
            className={`${styles.scheduleList} ${listVisible ? styles.scheduleListVisible : ''}`}
            aria-label="Weekly opening hours"
          >
            {HOURS_ROWS.map((row, index) => {
              const closed = isClosed(row.hours);

              return (
                <li
                  key={row.day}
                  className={`${styles.scheduleRow} ${closed ? styles.scheduleRowClosed : ''}`}
                  style={{ '--row-delay': `${index * 65}ms` }}
                >
                  <span className={styles.dayLabel}>{row.day}</span>
                  <span className={styles.rowLeader} aria-hidden="true" />
                  <span className={styles.hoursLabel}>{row.hours}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </div>
  );

  if (embedded) {
    return <div className={styles.hoursBlock}>{content}</div>;
  }

  return (
    <section className={styles.hoursSection} id="hours" aria-labelledby="home-hours-title">
      <Container className={styles.sectionInner}>{content}</Container>
    </section>
  );
}
