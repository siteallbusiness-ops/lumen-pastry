import Link from 'next/link';
import Container from '@/components/Common/Container/Container';
import Footer from '@/components/Footer/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './not-found.module.css';

export const metadata = createPageMetadata({
  title: 'Page not found',
  description: 'The page you requested could not be found.',
  path: '/404',
});

export default function NotFound() {
  return (
    <>
      <section className={styles.notFound} aria-labelledby="not-found-title">
        <Container className={styles.notFoundInner}>
          <p className={styles.eyebrow}>404</p>
          <h1 id="not-found-title" className={styles.title}>
            This page isn&apos;t on the pass.
          </h1>
          <p className={styles.lead}>
            The link may be old or mistyped. Head back to the atelier home or browse the menu.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryLink}>
              Back to home
            </Link>
            <Link href="/menu" className={styles.secondaryLink}>
              View menu
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
