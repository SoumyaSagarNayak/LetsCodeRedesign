import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const slides = [
    {
      id: '01',
      badge: '✓ LANDED AT GOOGLE',
      quote: "Let's Code's mock interview tool and company-wise PYQs were the reason I could clear my technical rounds. The AI score on my resume was brutally honest and highlighted exactly what I was missing.",
      name: 'Jinal Mehta',
      college: 'Nirma University, Ahmedabad',
    },
    {
      id: '02',
      badge: '✓ LANDED AT MICROSOFT',
      quote: "I used the LinkedIn optimizer and GitHub reviewer. My profile visibility increased by 4x, which led to a recruiter reaching out directly for a SWE internship. The Discord community is the best place to discuss interview patterns.",
      name: 'Kuldeep Panwar',
      college: 'IIT Roorkee',
    },
    {
      id: '03',
      badge: '✓ LANDED AT JP MORGAN',
      quote: "As a tier-3 college student, off-campus placements felt like a nightmare. Let's Code provided me with structured DSA roadmaps and ATS-friendly resume templates. The AI Job Finder matched me to open opportunities perfectly.",
      name: 'Megha Chhapre',
      college: 'LNCT, Bhopal',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline font-mono text-left">
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color text-[10px] uppercase tracking-[2px] mb-12">
          🎓 Success Stories
        </div>

        {/* Slide Window */}
        <div className="w-full flex flex-col gap-8 min-h-[320px] justify-between relative group/slide">
          
          {/* Faded Quote decoration */}
          <span className="absolute -top-12 -left-6 font-display text-9xl text-white/5 select-none pointer-events-none">
            “
          </span>

          <div className="relative z-10 flex flex-col items-start gap-6">
            {/* Slide Badge */}
            <div className="inline-block px-3 py-1 border border-hairline bg-surface-card text-white text-[9px] uppercase tracking-widest font-mono">
              {activeSlide.badge}
            </div>

            {/* Slide Quote (Massive Editorial Serif) */}
            <p className="font-serif italic text-xl md:text-3xl lg:text-[2.2rem] text-body-strong leading-relaxed transition-all duration-300">
              "{activeSlide.quote}"
            </p>
          </div>

          {/* User Details & Controls */}
          <div className="border-t border-hairline pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full mt-auto">
            
            {/* Meta */}
            <div>
              <h4 className="font-display font-normal text-lg uppercase text-white tracking-[1.5px] leading-none">
                {activeSlide.name}
              </h4>
              <span className="text-[10px] text-muted-color uppercase tracking-wider mt-2.5 block">
                {activeSlide.college}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 shrink-0 font-mono">
              <span className="text-[10px] text-muted-color uppercase tracking-widest font-bold">
                {activeSlide.id} / 0{slides.length}
              </span>

              {/* Prev */}
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-hairline hover:border-white text-muted-color hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Previous slide"
              >
                <ArrowLeft size={14} />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-hairline hover:border-white text-muted-color hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Next slide"
              >
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
