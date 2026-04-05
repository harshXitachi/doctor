import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { text: "The level of care and precision here is unmatched. My veneers look incredibly natural.", author: "Aisha M." },
  { text: "A truly painless experience in a luxurious environment. I no longer fear the dentist.", author: "Rahul V." },
  { text: "Dr. Bindra's attention to detail transformed my smile and my confidence.", author: "Simran K." }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-primary text-soft-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-16">Patient Stories</span>
        
        <div className="relative w-full max-w-4xl min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
                "{testimonials[index].text}"
              </p>
              <span className="text-sm uppercase tracking-widest text-secondary">— {testimonials[index].author}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-6 mt-24">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
            <ArrowLeft size={20} />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
