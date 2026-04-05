import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = ["Home", "Philosophy", "Expertise", "Clinic", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 mix-blend-difference text-soft-white pointer-events-none"
      >
        <div className="flex flex-col pointer-events-auto">
          <span className="font-serif italic text-2xl leading-none">Dr. Bindra</span>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 group pointer-events-auto"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] group-hover:opacity-70 transition-opacity">Menu</span>
          <div className="w-8 h-8 rounded-full border border-soft-white/30 flex items-center justify-center group-hover:bg-soft-white group-hover:text-primary transition-all duration-500">
            <Menu size={14} />
          </div>
        </button>
      </motion.nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-primary text-soft-white flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center shrink-0">
              <span className="font-serif italic text-2xl leading-none text-secondary">Dr. Bindra</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 group"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary group-hover:opacity-70 transition-opacity">Close</span>
                <div className="w-8 h-8 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                  <X size={14} />
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 mt-20 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-8xl font-display font-light hover:text-secondary hover:italic transition-all duration-500 w-fit"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-20 shrink-0">
              <div className="flex flex-col gap-2 text-sm text-soft-white/50 font-light">
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-medium mb-2">Location</span>
                <p>123 Premium Avenue,</p>
                <p>Ambala Cantt, Haryana</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-soft-white/50 font-light">
                <span className="text-secondary uppercase tracking-[0.2em] text-xs font-medium mb-2">Contact</span>
                <p>+91 98765 43210</p>
                <p>concierge@drbindra.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
