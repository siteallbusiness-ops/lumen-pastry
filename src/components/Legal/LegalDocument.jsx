'use client';

import Link from 'next/link';
import Reveal from '@/components/Common/Reveal/Reveal';
import { SITE_EMAIL } from '@/constants/site';
import styles from './LegalDocument.module.css';

function renderParagraph(text) {
  if (text.includes(SITE_EMAIL)) {
    const parts = text.split(SITE_EMAIL);
    return (
      <>
        {parts[0]}
        <a href={`mailto:${SITE_EMAIL}`} className={styles.inlineLink}>
          {SITE_EMAIL}
        </a>
        {parts[1]}
      </>
    );
  }

  return text;
}

export default function LegalDocument({ sections, lastUpdated, lastUpdatedIso, relatedLink }) {
  return (
    <div className={styles.legalLayout}>
      <aside className={styles.tocPanel} aria-label="On this page">
        <Reveal>
          <div className={styles.tocCard}>
            <p className={styles.tocLabel}>On this page</p>
            <nav>
              <ol className={styles.tocList}>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={styles.tocLink}>
                      <span className={styles.tocIndex}>{String(index + 1).padStart(2, '0')}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <p className={styles.updatedNote}>
              Last updated
              <time dateTime={lastUpdatedIso}>{lastUpdated}</time>
            </p>
          </div>
        </Reveal>
      </aside>

      <article className={styles.contentPanel}>
        <Reveal>
          <header className={styles.contentIntro}>
            <p className={styles.introBadge}>Legal · sample copy</p>
            <p className={styles.introText}>
              Replace this document with counsel-reviewed language before going live with real
              customers or online ordering.
            </p>
          </header>
        </Reveal>

        <div className={styles.sections}>
          {sections.map((section, index) => (
            <Reveal key={section.id} delay={index * 40}>
              <section id={section.id} className={styles.section} tabIndex={-1}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                </div>
                <div className={styles.sectionBody}>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.id}-${paragraphIndex}`} className={styles.paragraph}>
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {relatedLink && (
          <Reveal delay={120}>
            <footer className={styles.relatedFooter}>
              <span className={styles.relatedLabel}>See also</span>
              <Link href={relatedLink.href} className={styles.relatedLink}>
                {relatedLink.label}
                <span aria-hidden="true">→</span>
              </Link>
            </footer>
          </Reveal>
        )}
      </article>
    </div>
  );
}
