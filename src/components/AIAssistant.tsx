import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2, Sparkles } from "lucide-react";
import { getChatResponse } from "@/src/lib/gemini";
import ReactMarkdown from "react-markdown";
import { cn } from "@/src/lib/utils";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; parts: { text: string }[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", parts: [{ text: userMessage }] }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(userMessage, messages);
      setMessages(prev => [...prev, { role: "model", parts: [{ text: response }] }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", parts: [{ text: "Sorry, I'm having trouble connecting right now." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <MessageSquare size={28} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[60] w-[90vw] sm:w-[400px] h-[600px] max-h-[70vh] glass-card rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-primary/10"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Dr. Bindra's AI</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Always Here to Help</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-white/50">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-gray-400">
                  <Sparkles size={40} className="opacity-20" />
                  <p className="text-sm">Hello! I'm your dental assistant. <br /> How can I help you today?</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-primary text-white self-end rounded-tr-none"
                      : "bg-white border border-gray-100 text-accent self-start rounded-tl-none shadow-sm"
                  )}
                >
                  <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                </div>
              ))}
              {isLoading && (
                <div className="bg-white border border-gray-100 p-4 rounded-2xl self-start rounded-tl-none shadow-sm">
                  <Loader2 size={18} className="animate-spin text-primary" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about services, location..."
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-light transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
