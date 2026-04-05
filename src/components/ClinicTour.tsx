import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1000&auto=format&fit=crop"
];

export default function ClinicTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="clinic" ref={containerRef} className="h-[300vh] bg-dental-blue relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">The Environment</span>
          <h2 className="text-4xl md:text-6xl font-display font-light text-primary">
            A Space Designed for <br className="hidden md:block" />
            <span className="font-serif italic text-secondary">Tranquility.</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 lg:px-24 w-[400vw] md:w-[300vw] lg:w-[200vw]">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              className="relative w-[80vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] shrink-0 overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img 
                src={src} 
                alt={`Clinic View ${i + 1}`} 
                className="w-full h-full object-cover"
                style={{ filter: "sepia(0.05) contrast(1.05)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
