import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustIndicators from './components/TrustIndicators.jsx';
import AboutSection from './components/AboutSection.jsx';
import PracticeAreas from './components/PracticeAreas.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustIndicators />
        <AboutSection />
        <PracticeAreas />
        <WhyChooseUs />
        <ProcessSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
