'use client';

import Reveal from '@/components/Common/Reveal/Reveal';
import Button from '@/components/Common/Button/Button';
import HoursSchedule from '@/components/Hours/HoursSchedule';
import {
  SITE_EMAIL,
  SITE_URL,
  STUDIO_ADDRESS,
  STUDIO_ADDRESS_LINE,
  VISIT_QUICK_FACTS,
  VISIT_ETIQUETTE,
} from '@/constants/site';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.visitPage}>
      <Reveal>
        <ul className={styles.quickFacts} aria-label="Visit essentials">
          {VISIT_QUICK_FACTS.map((fact) => (
            <li key={fact.label} className={styles.quickFact}>
              <span className={styles.quickFactLabel}>{fact.label}</span>
              <span className={styles.quickFactValue}>{fact.value}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className={styles.mainGrid}>
        <Reveal className={styles.locationCol}>
          <article className={styles.locationPanel}>
            <figure className={styles.locationVisual} aria-label={`Studio location: ${STUDIO_ADDRESS}`}>
              <span className={styles.locationBackdrop} aria-hidden="true">
                <span className={styles.locationGlow} />
                <span className={styles.locationRing} />
                <span className={styles.locationRing} />
                <span className={styles.locationRing} />
              </span>

              <span className={styles.locationMark} aria-hidden="true">
                <svg
                  className={styles.locationIcon}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 3.5C11.31 3.5 7.5 7.31 7.5 12c0 6.75 8.5 16.5 8.5 16.5s8.5-9.75 8.5-16.5c0-4.69-3.81-8.5-8.5-8.5Z"
                    fill="url(#visit-pin-gradient)"
                  />
                  <circle cx="16" cy="12" r="3.25" fill="var(--surface-elevated)" />
                  <defs>
                    <linearGradient id="visit-pin-gradient" x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--primary)" />
                      <stop offset="1" stopColor="var(--secondary)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>

              <figcaption className={styles.locationChip}>{STUDIO_ADDRESS_LINE}</figcaption>
            </figure>

            <div className={styles.locationBody}>
              <p className={styles.locationKicker}>Find the atelier</p>
              <h2 className={styles.locationTitle}>Counter first, tables second.</h2>
              <p className={styles.locationIntro}>
                The studio sits on a short industrial lane — look for the lilac door and the smell
                of warm butter. Pick up at the pass; a few window tables if you want to stay.
              </p>

              <address className={styles.addressBlock}>
                <span className={styles.addressLine}>{STUDIO_ADDRESS}</span>
              </address>

              <div className={styles.locationActions}>
                <Button href={`mailto:${SITE_EMAIL}`} variant="primary">
                  Large orders
                </Button>
              </div>
            </div>
          </article>
        </Reveal>

        <div className={styles.sidebarCol}>
          <Reveal delay={80}>
            <article className={styles.hoursPanel} id="hours">
              <header className={styles.panelHeader}>
                <p className={styles.panelKicker}>Pickup window</p>
                <h2 className={styles.panelTitle}>When the pass is lit</h2>
                <p className={styles.panelIntro}>
                  Small waves through the day — come early if you are chasing crullers.
                </p>
              </header>
              <HoursSchedule className={styles.hoursSchedule} />
            </article>
          </Reveal>

          <Reveal delay={140}>
            <aside className={styles.contactPanel} aria-label="Contact details">
              <p className={styles.panelKicker}>Reach us</p>
              <h3 className={styles.contactTitle}>Questions before you come?</h3>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={`mailto:${SITE_EMAIL}`} className={styles.contactLink}>
                    {SITE_EMAIL}
                  </a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Site</span>
                  <a href={SITE_URL} className={styles.contactLink}>
                    {SITE_URL.replace('https://', '')}
                  </a>
                </li>
              </ul>
              <Button href="/menu" variant="ghost" className={styles.menuLink}>
                Browse the menu
              </Button>
            </aside>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <section className={styles.etiquetteSection} aria-labelledby="visit-etiquette">
          <div className={styles.etiquetteHeader}>
            <p className={styles.panelKicker}>Counter notes</p>
            <h2 id="visit-etiquette" className={styles.etiquetteTitle}>
              A few things we keep steady at the door.
            </h2>
          </div>

          <ul className={styles.etiquetteGrid}>
            {VISIT_ETIQUETTE.map((item, index) => (
              <li key={item.title} className={styles.etiquetteCard}>
                <span className={styles.etiquetteIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.etiquetteCardTitle}>{item.title}</h3>
                <p className={styles.etiquetteCardBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
