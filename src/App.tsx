import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ClinicTour from "./components/ClinicTour";
import SmileAssessment from "./components/SmileAssessment";
import AIAssistant from "./components/AIAssistant";
import CustomCursor from "./components/CustomCursor";
import { About } from "./components/About";
import { DoctorProfile } from "./components/DoctorProfile";
import { Testimonials } from "./components/Testimonials";
import { Contact, Footer } from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-secondary selection:text-primary bg-soft-white cursor-none">
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <ClinicTour />
        <DoctorProfile />
        <SmileAssessment />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      <AIAssistant />
    </div>
  );
}
