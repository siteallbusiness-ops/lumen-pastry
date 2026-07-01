import Link from 'next/link';
import Container from '@/components/Common/Container/Container';
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_EMAIL,
  SITE_URL,
  FOOTER_EXPLORE_LINKS,
  FOOTER_SERVICE_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_COPYRIGHT,
} from '@/constants/site';
import SiteLogo from '@/components/Brand/SiteLogo';
import styles from './Footer.module.css';

export default function Footer({
  description = 'Small-batch pastry in Riverhead. Replace contact details with your own.',
  exploreLinks = FOOTER_EXPLORE_LINKS,
}) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        {/* Top grid */}
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brandLink} aria-label={`${SITE_NAME} home`}>
              <SiteLogo className={styles.brandMark} decorative />
              <span className={styles.brandText}>
                <span className={styles.brandName}>{SITE_NAME}</span>
                <span className={styles.brandTagline}>{SITE_TAGLINE}</span>
              </span>
            </Link>
            <p className={styles.brandDescription}>{description}</p>
          </div>

          {/* Quick links */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Explore</h3>
            <ul className={styles.linkList}>
              {exploreLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Email</span>
                <a href={`mailto:${SITE_EMAIL}`} className={styles.footerLink}>
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <span className={styles.contactLabel}>Website</span>
                <a href={SITE_URL} className={styles.footerLink}>
                  {SITE_URL.replace('https://', '')}
                </a>
              </li>
              <li>
                <span className={styles.contactLabel}>Hours</span>
                <Link href="/#hours" className={styles.footerLink}>
                  Wed–Sun · see home
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footerDivider} role="separator" aria-hidden="true" />

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>{FOOTER_COPYRIGHT}</p>
          <nav className={styles.legalNav} aria-label="Legal">
            <ul className={styles.legalList}>
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.legalLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
