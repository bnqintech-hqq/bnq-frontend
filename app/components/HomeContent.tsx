import HeroSection from './home/HeroSection';
import TrustedBrands from './home/TrustedBrands';
import StatsSection from './home/StatsSection';
import ServicesSection from './home/ServicesSection';
import TechStack from './home/TechStack';
import AMCSection from './home/AMCSection';
import Testimonials from './home/Testimonials';
import PricingSection from './home/PricingSection';
import FAQSection from './home/FAQSection';
import NewsletterCTA from './home/NewsletterCTA';
export default function HomeContent() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32">

      <HeroSection />
      
      {/* 2. Trust (Logos se jaldi bharosa banta hai) */}
      <TrustedBrands />
      
      {/* 3. Authority (Bade numbers dekh kar client impress hota hai) */}
      {/* <StatsSection /> */}
      
      {/* 4. Value (Hum aapke liye kya kar sakte hain) */}
      <ServicesSection />
      
      {/* 5. Expertise (Hum kaunsi technology use karte hain) */}
      <TechStack />
      
      {/* 6. Long-Term Vision (Hum project ke baad bhi sath rahenge) */}
      <AMCSection />
      
      {/* 7. Social Proof (Hamari tareef doosre clients ki zubani, paise mangne se theek pehle) */}
      <Testimonials />
      
      {/* 8. The Pitch (Ab jab trust ban gaya, tab plan aur paise dikhao) */}
      <PricingSection />
      
      {/* 9. Doubt Clearing (Khareedne se pehle ke aakhiri sawal-jawab) */}
      <FAQSection />
      
      {/* 10. The Net (Jo nahi khareed raha, uska email le lo) */}
      <NewsletterCTA />
    </div>
  );
}