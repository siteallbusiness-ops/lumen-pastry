function normalizeUrl(url) {
  return url.replace(/\/$/, '');
}

/** Canonical site URL — supports Vercel previews and custom domain via env. */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }

  return 'https://thesugarrushh.com';
}

export const SITE_URL = getSiteUrl();
