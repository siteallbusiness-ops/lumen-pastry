import styles from './SectionTitle.module.css';

export default function SectionTitle({
  kicker,
  title,
  intro,
  titleId,
  light = false,
  compact = false,
  center = false,
  className = '',
  titleClassName = '',
}) {
  const kickerClass = [styles.kicker, light && styles.kickerLight, center && styles.kickerCenter]
    .filter(Boolean)
    .join(' ');
  const headingClass = [styles.title, titleClassName].filter(Boolean).join(' ');
  const introClass = [styles.intro, compact && styles.introCompact].filter(Boolean).join(' ');

  return (
    <div className={className}>
      {kicker && <p className={kickerClass}>{kicker}</p>}
      {title && (
        <h2 id={titleId} className={headingClass}>
          {title}
        </h2>
      )}
      {intro && <p className={introClass}>{intro}</p>}
    </div>
  );
}
