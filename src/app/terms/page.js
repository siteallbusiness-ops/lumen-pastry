import Container from '@/components/Common/Container/Container';
import InnerPageHero from '@/components/Hero/InnerPageHero';
import LegalDocument from '@/components/Legal/LegalDocument';
import legalPageStyles from '@/components/Legal/legalPage.module.css';
import Footer from '@/components/Footer/Footer';
import { LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO, TERMS_SECTIONS } from '@/constants/legal';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Terms of Service — The Sugar Rush',
  description: 'Terms of service for The Sugar Rush dessert atelier. thesugarrushh.com',
  keywords: ['terms of service', 'website terms', 'The Sugar Rush'],
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <InnerPageHero
        titleId="terms-page-title"
        eyebrow="Website use"
        title="Terms of service"
        description="The rules for using this site, browsing the menu, and arranging pickup. Sample copy for the demo site."
      />

      <div className={legalPageStyles.pageBody}>
        <Container className={legalPageStyles.pageInner}>
          <LegalDocument
            sections={TERMS_SECTIONS}
            lastUpdated={LEGAL_LAST_UPDATED}
            lastUpdatedIso={LEGAL_LAST_UPDATED_ISO}
            relatedLink={{ href: '/privacy', label: 'Privacy Policy' }}
          />
        </Container>
      </div>

      <Footer
        description="Legal pages use placeholder copy until you publish final policies."
        exploreLinks={[
          { href: '/', label: 'Atelier' },
          { href: '/menu', label: 'Menu' },
        ]}
      />
    </>
  );
}
