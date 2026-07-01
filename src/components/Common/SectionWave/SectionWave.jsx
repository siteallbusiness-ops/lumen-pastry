import styles from './SectionWave.module.css';

const WAVE_PATHS = {
  gentle: 'M0,32 C320,72 640,8 960,44 C1200,72 1320,24 1440,48 L1440,80 L0,80 Z',
  deep: 'M0,58 C280,96 520,18 760,52 C1000,86 1240,28 1440,62 L1440,100 L0,100 Z',
};

/**
 * Wave divider between sections.
 * - edge="end" (default): sits at section bottom; `tone` = next section background.
 * - edge="start": sits at section top; `tone` = previous section background.
 */
export default function SectionWave({
  tone = 'page',
  variant = 'gentle',
  edge = 'end',
  className = '',
}) {
  const toneClass =
    tone === 'elevated'
      ? styles.toneElevated
      : tone === 'dark'
        ? styles.toneDark
        : tone === 'twilight'
          ? styles.toneTwilight
          : tone === 'footer'
            ? styles.toneFooter
            : styles.tonePage;

  const edgeClass = edge === 'start' ? styles.waveStart : styles.waveEnd;
  const rootClass = [styles.waveBridge, edgeClass, toneClass, className].filter(Boolean).join(' ');

  return (
    <div className={rootClass} aria-hidden="true">
      <svg
        className={styles.waveSvg}
        viewBox={variant === 'deep' ? '0 0 1440 100' : '0 0 1440 80'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={WAVE_PATHS[variant]} fill="currentColor" />
      </svg>
    </div>
  );
}
