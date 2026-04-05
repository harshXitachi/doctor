import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-soft-white pt-20"
    >
      {/* Massive Background Typography */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <h1 className="text-[35vw] font-serif italic text-primary whitespace-nowrap select-none">
          Bindra
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">Ambala Cantt</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] font-display font-light text-primary tracking-tighter">
            Elevating <br />
            <span className="font-serif italic text-secondary">Oral Care.</span>
          </h1>
          
          <p className="text-primary/60 font-light max-w-md leading-relaxed text-lg">
            A sanctuary for modern dentistry. We blend architectural precision with human empathy to craft smiles that exude confidence.
          </p>

          <a
            href="#contact"
            className="w-fit mt-4 border-b border-primary text-primary pb-1 uppercase tracking-[0.15em] text-xs font-medium hover:text-secondary hover:border-secondary transition-colors"
          >
            Reserve a Consultation
          </a>
        </motion.div>

        {/* Right: Asymmetrical Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2"
        >
          <div className="w-full h-full overflow-hidden rounded-tl-[8rem] rounded-br-[8rem] shadow-2xl">
            <motion.img 
              style={{ y, opacity }}
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
              alt="Premium Dental Clinic" 
              className="w-full h-[120%] object-cover object-center -mt-[10%]"
            />
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-secondary/30 rounded-full -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
