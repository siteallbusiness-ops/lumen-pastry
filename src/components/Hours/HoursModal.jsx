'use client';

import { useCallback, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { useScrollLock } from '@/hooks/useScrollLock';
import HoursSchedule from './HoursSchedule';
import styles from './HoursModal.module.css';

export default function HoursModal({ isOpen, onClose }) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useScrollLock(isOpen);

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      aria-hidden={false}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.dialogGlow} aria-hidden="true" />
        <div className={styles.dialogAccent} aria-hidden="true" />

        <button
          ref={closeRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close hours"
        >
          <span aria-hidden="true">×</span>
        </button>

        <header className={styles.dialogHeader}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Pickup window
          </span>
          <h2 id={titleId} className={styles.dialogTitle}>
            Hours (sample)
          </h2>
          <p id={descId} className={styles.dialogLead}>
            We bake in small waves — come early for crullers.
          </p>
        </header>

        <div className={styles.scheduleWrap}>
          <HoursSchedule compact />
        </div>

        <div className={styles.locationStrip}>
          <span className={styles.locationIcon} aria-hidden="true">◎</span>
          <p className={styles.locationText}>
            <strong>Studio address:</strong> 9 Glassworks Lane, Riverhead (demo only).
          </p>
        </div>

        <footer className={styles.dialogFooter}>
          <Link href="/visit" className={styles.visitLink} onClick={onClose}>
            Full visit details
            <span className={styles.visitArrow} aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
