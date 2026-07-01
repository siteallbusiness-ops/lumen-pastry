import Container from '@/components/Common/Container/Container';
import InnerPageHero from '@/components/Hero/InnerPageHero';
import MenuBoard from '@/components/Services/MenuBoard';
import Footer from '@/components/Footer/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './menu.module.css';

export const metadata = createPageMetadata({
  title: 'Menu — The Sugar Rush',
  description: 'Pastry menu for The Sugar Rush. thesugarrushh.com',
  keywords: ['menu', 'pastry menu', 'desserts', 'bakery counter', 'The Sugar Rush'],
  path: '/menu',
});

export default function MenuPage() {
  return (
    <>
      <InnerPageHero
        titleId="menu-page-title"
        eyebrow="Counter menu · sample pricing"
        title="Everything on the pass is seasonal; prices are placeholders."
        description="Swap items for your real SKUs. Photography on the atelier page shows the full set of fourteen uploads in one flow."
      />

      <div className={styles.pageBody}>
        <Container className={styles.pageInner}>
          <MenuBoard />
        </Container>
      </div>

      <Footer
        description="Menu copy is fictional."
        exploreLinks={[
          { href: '/', label: 'Atelier' },
          { href: '/visit', label: 'Visit' },
        ]}
      />
    </>
  );
}
