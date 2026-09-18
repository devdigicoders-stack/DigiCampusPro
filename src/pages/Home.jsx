import HeroSection from '../components/home/HeroSection'
import TrustBanner from '../components/home/TrustBanner'
import FeaturesGrid from '../components/home/FeaturesGrid'
import WhoCanUse from '../components/home/WhoCanUse'
import WhyChooseUs from '../components/home/WhyChooseUs'
import HowItWorks from '../components/home/HowItWorks'
import SystemPreview from '../components/home/SystemPreview'
import Testimonials from '../components/home/Testimonials'
import PricingSection from '../components/home/PricingSection'
import FaqSection from '../components/home/FaqSection'
import CtaBanner from '../components/home/CtaBanner'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBanner />
      <FeaturesGrid />
      <WhoCanUse />
      <WhyChooseUs />
      <HowItWorks />
      <SystemPreview />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
      <ContactSection />
    </div>
  )
}
