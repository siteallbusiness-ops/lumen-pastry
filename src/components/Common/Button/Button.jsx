import Link from 'next/link';
import styles from './Button.module.css';

const VARIANT_CLASS = {
  primary: styles.btnPrimary,
  ghost: styles.btnGhost,
  nav: styles.btnNav,
  ribbon: styles.btnRibbon,
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
  external = false,
}) {
  const classNames = [styles.btn, VARIANT_CLASS[variant], className].filter(Boolean).join(' ');

  if (href) {
    if (external || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classNames}
          aria-label={ariaLabel}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith('#')) {
      return (
        <a href={href} className={classNames} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
