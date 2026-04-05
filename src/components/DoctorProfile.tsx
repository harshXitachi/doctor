import { motion } from "motion/react";

export function DoctorProfile() {
  return (
    <section className="py-32 md:py-48 bg-soft-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem]">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1500&auto=format&fit=crop" 
                alt="Dr. Bindra" 
                className="w-full h-full object-cover"
                style={{ filter: "sepia(0.1) contrast(1.05) grayscale(0.2)" }}
              />
            </div>
            {/* Signature overlay */}
            <div className="absolute -bottom-8 -right-8 md:-right-16 z-10">
              <span className="font-script text-6xl md:text-8xl text-secondary opacity-80">Dr. Bindra</span>
            </div>
          </motion.div>

          {/* Right: Bio & Credentials */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">Lead Clinician</span>
              <h2 className="text-4xl md:text-5xl font-display font-light text-primary leading-tight">
                Dr. Harpreet <br />
                <span className="font-serif italic text-secondary">Bindra.</span>
              </h2>
            </div>
            
            <div className="text-primary/70 font-light leading-relaxed text-lg flex flex-col gap-6">
              <p>
                With over 15 years of dedicated practice, Dr. Bindra has established a reputation for uncompromising clinical excellence and a deeply empathetic approach to patient care.
              </p>
              <p>
                His philosophy centers on minimally invasive techniques and aesthetic harmony, ensuring that every treatment not only restores function but enhances the natural beauty of the smile. He is a pioneer in integrating digital dentistry into everyday practice in Ambala.
              </p>
            </div>

            <div className="editorial-border pt-8 mt-4">
              <h4 className="font-serif italic text-2xl text-primary mb-6">Credentials & Affiliations</h4>
              <ul className="flex flex-col gap-4 text-sm uppercase tracking-widest text-primary/60">
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  BDS, MDS (Prosthodontics)
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Fellow, International Congress of Oral Implantologists
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Member, Indian Dental Association
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
