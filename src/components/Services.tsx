import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    id: "01",
    title: "Aesthetic Dentistry",
    desc: "Veneers, whitening, and complete smile makeovers crafted to perfection. We design smiles that complement your facial structure.",
    img: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Implantology",
    desc: "Permanent, natural-looking tooth replacements using state-of-the-art titanium implants. Regain full functionality and confidence.",
    img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Endodontics",
    desc: "Microscope-assisted root canal treatments ensuring zero pain and maximum precision. Saving your natural teeth is our priority.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Invisible Aligners",
    desc: "Discreet orthodontic solutions to perfectly align your teeth without traditional braces. Clear, comfortable, and effective.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1500&auto=format&fit=crop"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="expertise" className="py-32 md:py-48 bg-primary text-soft-white relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Sticky Image */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="sticky top-32 w-full aspect-[3/4] overflow-hidden rounded-t-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={activeService.img}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(0.2) contrast(1.1)" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Scrolling List */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-20">
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Clinical Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
                Specialized <br />
                <span className="font-serif italic text-secondary">Treatments.</span>
              </h2>
            </div>

            <div className="flex flex-col w-full editorial-border border-soft-white/10">
              {services.map((srv) => {
                const isActive = activeService.id === srv.id;
                return (
                  <div 
                    key={srv.id}
                    onMouseEnter={() => setActiveService(srv)}
                    className="group border-b border-soft-white/10 py-12 cursor-pointer"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-8 md:gap-12">
                        <span className={cn(
                          "font-serif italic text-xl transition-colors duration-500 mt-2",
                          isActive ? "text-secondary" : "text-soft-white/30"
                        )}>
                          {srv.id}
                        </span>
                        <div>
                          <h3 className={cn(
                            "text-3xl md:text-5xl font-display font-light transition-all duration-500 mb-6",
                            isActive ? "text-soft-white" : "text-soft-white/50 group-hover:text-soft-white/80"
                          )}>
                            {srv.title}
                          </h3>
                          
                          {/* Mobile Image (Visible only on small screens) */}
                          <div className="lg:hidden w-full aspect-video overflow-hidden mb-6">
                            <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
                          </div>

                          <p className={cn(
                            "text-soft-white/60 font-light text-lg leading-relaxed max-w-md transition-all duration-500",
                            isActive ? "opacity-100 h-auto" : "opacity-50 lg:opacity-0 lg:h-0 overflow-hidden"
                          )}>
                            {srv.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
