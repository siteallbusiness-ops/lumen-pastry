import { HOURS_ROWS } from '@/constants/site';
import styles from './HoursSchedule.module.css';

function isClosed(hours) {
  return hours.toLowerCase() === 'closed';
}

export default function HoursSchedule({ className = '', compact = false }) {
  const rootClass = [styles.schedule, compact ? styles.scheduleCompact : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={rootClass} aria-label="Opening hours">
      {HOURS_ROWS.map((row) => {
        const closed = isClosed(row.hours);

        return (
          <li
            key={row.day}
            className={`${styles.row} ${closed ? styles.rowClosed : ''}`}
          >
            <span className={styles.dayName}>{row.day}</span>
            <span className={styles.leader} aria-hidden="true" />
            <span className={styles.dayHours}>{row.hours}</span>
          </li>
        );
      })}
    </ul>
  );
}
