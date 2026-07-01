import Container from '@/components/Common/Container/Container';
import InnerPageHero from '@/components/Hero/InnerPageHero';
import LegalDocument from '@/components/Legal/LegalDocument';
import legalPageStyles from '@/components/Legal/legalPage.module.css';
import Footer from '@/components/Footer/Footer';
import { LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO, PRIVACY_SECTIONS } from '@/constants/legal';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Privacy Policy — The Sugar Rush',
  description: 'Privacy policy for The Sugar Rush dessert atelier. thesugarrushh.com',
  keywords: ['privacy policy', 'data protection', 'The Sugar Rush'],
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <InnerPageHero
        titleId="privacy-page-title"
        eyebrow="Your data"
        title="Privacy policy"
        description="How we handle information when you browse, enquire, or pick up from the atelier. Sample copy for the demo site."
      />

      <div className={legalPageStyles.pageBody}>
        <Container className={legalPageStyles.pageInner}>
          <LegalDocument
            sections={PRIVACY_SECTIONS}
            lastUpdated={LEGAL_LAST_UPDATED}
            lastUpdatedIso={LEGAL_LAST_UPDATED_ISO}
            relatedLink={{ href: '/terms', label: 'Terms of Service' }}
          />
        </Container>
      </div>

      <Footer
        description="Legal pages use placeholder copy until you publish final policies."
        exploreLinks={[
          { href: '/', label: 'Atelier' },
          { href: '/visit', label: 'Visit' },
        ]}
      />
    </>
  );
}
