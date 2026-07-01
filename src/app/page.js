import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Services from '@/components/Services/Services';
import BenchJournal from '@/components/About/BenchJournal';
import Sourcing from '@/components/Services/Sourcing';
import HomeVisitBand from '@/components/Contact/HomeVisitBand';
import CtaRibbon from '@/components/Contact/CtaRibbon';
import Footer from '@/components/Footer/Footer';

const Gallery = dynamic(() => import('@/components/Gallery/Gallery'), {
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <Services />
      <BenchJournal />
      <Sourcing />
      <HomeVisitBand />
      <CtaRibbon />
      <Footer />
    </>
  );
}
