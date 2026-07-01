import Container from '@/components/Common/Container/Container';
import InnerPageHero from '@/components/Hero/InnerPageHero';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './visit.module.css';

export const metadata = createPageMetadata({
  title: 'Visit — The Sugar Rush',
  description: 'Visit The Sugar Rush — hours and pickup notes. thesugarrushh.com',
  keywords: ['visit', 'hours', 'pickup', 'Riverhead bakery', 'The Sugar Rush'],
  path: '/visit',
});

export default function VisitPage() {
  return (
    <>
      <InnerPageHero
        titleId="visit-page-title"
        eyebrow="Visit the atelier"
        title="Glassworks Lane · small queue, honest cold chain."
        description="Wednesday through Sunday we run a short counter queue so pastries leave the pass the way we intended. Swap in your map, parking, and accessibility copy when you go live."
      />

      <div className={styles.pageBody}>
        <Container className={styles.pageInner}>
          <Contact />
        </Container>
      </div>

      <Footer
        description="Visit copy is placeholder."
        exploreLinks={[
          { href: '/', label: 'Atelier' },
          { href: '/menu', label: 'Menu' },
        ]}
      />
    </>
  );
}
