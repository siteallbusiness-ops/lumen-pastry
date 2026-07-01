'use client';

import { useId } from 'react';

/**
 * The Sugar Rush brand mark — cruller swirl with sugar sparkle.
 * Icon-only; wordmark sits beside it in the header/footer.
 */
export default function SiteLogo({
  className = '',
  title = 'The Sugar Rush',
  decorative = false,
  variant = 'default',
}) {
  const uid = useId().replace(/:/g, '');
  const gradId = `sr-grad-${uid}`;
  const shineId = `sr-shine-${uid}`;
  const isHeader = variant === 'header';
  const strokeMain = isHeader ? 2.85 : 2.65;
  const strokeMid = isHeader ? 2.15 : 2;
  const strokeSmall = isHeader ? 2 : 1.85;

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
    >
      {!decorative && <title>{title}</title>}
      <defs>
        <linearGradient id={gradId} x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B4235C" />
          <stop offset="1" stopColor="#6E4B8E" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity={isHeader ? 0.34 : 0.28} />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="44" height="44" rx="13" fill={`url(#${gradId})`} />
      <rect x="2" y="2" width="44" height="22" rx="13" fill={`url(#${shineId})`} />

      <path
        d="M17.2 14.8c-3.6 1.8-5.8 5.2-5.8 9.2 0 5.8 4.8 10.6 10.6 10.6 3.4 0 6.4-1.6 8.4-4.1"
        stroke="#FFFFFF"
        strokeWidth={strokeMain}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.8 33.2c3.6-1.8 5.8-5.2 5.8-9.2 0-5.8-4.8-10.6-10.6-10.6-3.4 0-6.4 1.6-8.4 4.1"
        stroke="#FFFFFF"
        strokeWidth={strokeMain}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 20.2c0-1.6 1.3-2.9 2.9-2.9 2.4 0 4.3 1.9 4.3 4.3 0 2.8-2.3 5.1-5.1 5.1-3.4 0-6.1-2.7-6.1-6.1 0-4 3.2-7.2 7.2-7.2 4.8 0 8.7 3.9 8.7 8.7"
        stroke="#FFFFFF"
        strokeWidth={strokeMid}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      <circle cx="13.5" cy="16.5" r="1.55" fill="#FFFFFF" opacity="0.62" />
      <circle cx="16.8" cy="13.2" r="1" fill="#FFFFFF" opacity="0.48" />

      <path
        d="M35.2 12.8l0.9 1.85 2.05 0.3-1.48 1.44 0.35 2.04-1.82-0.96-1.82 0.96 0.35-2.04-1.48-1.44 2.05-0.3z"
        fill="#FFFFFF"
      />
      <path
        d="M38.8 17.6v1.1M38.25 18.15h1.1"
        stroke="#FFFFFF"
        strokeWidth={strokeSmall}
        strokeLinecap="round"
        opacity="0.82"
      />
    </svg>
  );
}
