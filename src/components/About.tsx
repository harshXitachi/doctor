import { motion } from "motion/react";

export function About() {
  return (
    <section id="philosophy" className="py-32 md:py-48 bg-soft-white relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Typography & Story */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-display font-light text-primary leading-tight">
                Redefining the <br />
                <span className="font-serif italic text-secondary">Dental Experience.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-primary/70 font-light leading-relaxed text-lg">
              <p>
                <span className="float-left text-6xl font-serif text-primary leading-[0.8] pr-3 pt-2">F</span>
                ounded by Dr. Bindra, our clinic in Ambala Cantt was built on a singular vision: to strip away the clinical anxiety traditionally associated with dentistry and replace it with comfort, luxury, and absolute precision.
              </p>
              <p>
                We believe that every patient deserves a bespoke approach. Whether it's a routine examination or a complex full-mouth rehabilitation, our focus remains on preserving natural aesthetics while ensuring robust, long-lasting functionality.
              </p>
            </div>

            <div className="editorial-border pt-8 mt-4 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-serif italic text-primary mb-2">15+</span>
                <span className="text-xs text-primary/50 uppercase tracking-widest">Years of Mastery</span>
              </div>
              <div>
                <span className="block text-4xl font-serif italic text-primary mb-2">10k</span>
                <span className="text-xs text-primary/50 uppercase tracking-widest">Smiles Restored</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Image Composition */}
          <div className="lg:col-span-6 lg:col-start-7 relative h-[600px] md:h-[800px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-[80%] h-[80%] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop"
                alt="Clinic Interior"
                className="w-full h-full object-cover"
                style={{ filter: "sepia(0.1) contrast(1.1)" }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 w-[55%] h-[50%] overflow-hidden border-8 border-soft-white"
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"
                alt="Dental Details"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
