import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-soft-white relative z-10">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-6">Connect</span>
            <h2 className="text-5xl md:text-7xl font-display font-light text-primary leading-[0.9] mb-16">
              Begin Your <br />
              <span className="font-serif italic text-secondary">Journey.</span>
            </h2>
            
            <div className="flex flex-col gap-12 editorial-border pt-12">
              <div>
                <h4 className="font-serif italic text-2xl text-primary mb-2">The Clinic</h4>
                <p className="text-primary/70 font-light leading-relaxed">
                  123 Premium Avenue, <br />
                  Ambala Cantt, Haryana, India
                </p>
              </div>
              <div>
                <h4 className="font-serif italic text-2xl text-primary mb-2">Direct Line</h4>
                <p className="text-primary/70 font-light leading-relaxed">
                  +91 98765 43210 <br />
                  concierge@drbindra.com
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center gap-16">
            <form className="flex flex-col gap-10">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  className="peer w-full border-b border-primary/20 bg-transparent py-4 text-primary focus:outline-none focus:border-secondary transition-colors placeholder-transparent" 
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-primary/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-secondary">
                  Full Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  className="peer w-full border-b border-primary/20 bg-transparent py-4 text-primary focus:outline-none focus:border-secondary transition-colors placeholder-transparent" 
                  placeholder="Phone"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-primary/50 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-secondary">
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <select 
                  id="service"
                  className="w-full border-b border-primary/20 bg-transparent py-4 text-primary focus:outline-none focus:border-secondary transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-primary/40">Select Interest</option>
                  <option value="aesthetic">Aesthetic Consultation</option>
                  <option value="implants">Implants</option>
                  <option value="general">General Checkup</option>
                </select>
              </div>

              <button 
                type="button" 
                className="mt-4 w-fit border-b border-primary text-primary pb-2 uppercase tracking-[0.2em] text-xs font-medium hover:text-secondary hover:border-secondary transition-colors"
              >
                Request Appointment
              </button>
            </form>

            {/* Google Map Integration */}
            <div className="w-full h-[400px] bg-primary/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.210699061612!2d76.8331!3d30.3398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb6482e606525%3A0x1c3c92a170a1744a!2sAmbala%20Cantt%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) sepia(20%) contrast(1.1) opacity(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-soft-white/50 pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center mb-24">
        {/* Massive Script Font for Dr. Bindra */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <h2 
            className="text-[15vw] md:text-[12vw] leading-none text-secondary whitespace-nowrap"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Dr. Bindra
          </h2>
        </motion.div>
        <span className="text-xs md:text-sm uppercase tracking-[0.5em] text-soft-white/40 mt-4">
          Dental Care Centre
        </span>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-soft-white/10 pt-12">
        <div className="flex gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
        </div>
        <p className="text-xs uppercase tracking-widest">© 2026 Dr. Bindra. All rights reserved.</p>
      </div>
    </footer>
  );
}
