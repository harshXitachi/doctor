import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const questions = [
  {
    title: "What is your primary goal?",
    options: ["Whiter Teeth", "Straighten Smile", "Fix Pain/Sensitivity", "Replace Missing Teeth"]
  },
  {
    title: "How long have you had this concern?",
    options: ["Just started", "A few months", "Years", "Since childhood"]
  },
  {
    title: "When would you like to start treatment?",
    options: ["ASAP", "Within a month", "Just exploring options"]
  }
];

export default function SmileAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setTimeout(() => setIsComplete(true), 400);
    }
  };

  return (
    <section className="py-32 md:py-48 bg-primary relative overflow-hidden text-soft-white">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="relative z-10 flex flex-col items-center text-center">
          
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em] mb-12 block">
                  Assessment {step + 1} / {questions.length}
                </span>
                <h3 className="text-4xl md:text-6xl font-serif italic text-soft-white mb-20 leading-tight">
                  {questions[step].title}
                </h3>
                
                <div className="flex flex-col gap-4 max-w-xl mx-auto">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className={`py-6 px-8 text-center transition-all duration-500 border-b ${
                        answers[step] === opt 
                          ? "border-secondary text-secondary" 
                          : "border-soft-white/10 hover:border-soft-white/50 text-soft-white/60 hover:text-soft-white"
                      }`}
                    >
                      <span className="font-display font-light text-2xl tracking-wide">{opt}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em] mb-8 block">
                  Complete
                </span>
                <h3 className="text-5xl md:text-7xl font-serif italic text-soft-white mb-8">
                  Your Profile is Ready.
                </h3>
                <p className="text-soft-white/60 max-w-md mb-16 font-light leading-relaxed text-lg">
                  Based on your answers, we have a personalized treatment plan ready for you. Let's schedule a detailed consultation.
                </p>
                <a 
                  href="#contact"
                  className="w-fit border-b border-secondary text-secondary pb-2 uppercase tracking-[0.2em] text-sm font-medium hover:text-soft-white hover:border-soft-white transition-colors"
                >
                  Book Priority Consultation
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
