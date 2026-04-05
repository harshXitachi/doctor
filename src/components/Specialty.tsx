import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export default function Specialty() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <section id="specialty" className="section-padding bg-dental-blue relative">
      <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col gap-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">Signature Treatment</span>
          <h2 className="text-5xl md:text-6xl font-display font-medium text-primary leading-tight">
            Reversing <br />
            <span className="font-serif italic text-secondary">Tooth Wear.</span>
          </h2>
          <p className="text-lg text-primary-light/80 leading-relaxed max-w-lg">
            Erosion and grinding can silently destroy your teeth. Our specialized rehabilitation protocols restore lost enamel, correct your bite, and bring back the youthful vitality of your smile without invasive surgery.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            {["Biomimetic Restorations", "Bite Alignment Therapy", "Non-invasive Enamel Repair"].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-primary font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Before/After Slider */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {/* After Image (Bottom) */}
          <img 
            src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1000&auto=format&fit=crop" 
            alt="After Treatment" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          
          {/* Before Image (Top, Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=1000&auto=format&fit=crop" 
              alt="Before Treatment" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "sepia(0.3) brightness(0.9)" }}
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
              <MoveHorizontal size={24} />
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Before</div>
          <div className="absolute top-6 right-6 bg-secondary/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">After</div>
        </div>

      </div>
    </section>
  );
}
