'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Scroll-triggered fade-up reveal. Runs once when the element enters the viewport.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classNames = [styles.reveal, isVisible && styles.revealVisible, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classNames}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
