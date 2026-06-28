import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      badge: '✓ Landed at Google',
      quote: "Let's Code's mock interview tool and company-wise PYQs were the reason I could clear my technical rounds. The AI score on my resume was brutally honest and highlighted exactly what I was missing. Always grateful!",
      name: 'Jinal Mehta',
      college: 'Nirma University, Ahmedabad',
    },
    {
      id: 2,
      badge: '✓ Landed at Microsoft',
      quote: "I used the LinkedIn optimizer and GitHub reviewer. My profile visibility increased by 4x, which led to a recruiter reaching out directly for a SWE internship. The Discord community is the best place to discuss interview patterns.",
      name: 'Kuldeep Panwar',
      college: 'IIT Roorkee',
    },
    {
      id: 3,
      badge: '✓ Landed at JP Morgan',
      quote: "As a tier-3 college student, off-campus placements felt like a nightmare. Let's Code provided me with structured DSA roadmaps and ATS-friendly resume templates. The AI Job Finder matched me to open opportunities perfectly.",
      name: 'Megha Chhapre',
      college: 'LNCT, Bhopal',
    },
  ];

  return (
    <section className="relative bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          🎓 Success Stories
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Cracked by Indian engineering students
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          See how engineering students from all across India used Let's Code to secure their dream jobs.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full font-serif">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="reveal relative bg-surface-card border border-hairline hover:border-white rounded-none p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-none group"
            >
              {/* Giant Faded Quote Mark */}
              <span className="absolute top-2 right-5 font-display text-8xl text-white/5 select-none pointer-events-none font-normal">
                “
              </span>

              <div className="relative z-10">
                {/* Success Tag */}
                <div className="inline-block px-3 py-1 rounded-none border border-hairline bg-black text-muted-color font-mono text-[9px] uppercase tracking-widest mb-5">
                  {t.badge}
                </div>

                {/* Quote Text */}
                <p className="text-sm md:text-base text-body-color group-hover:text-white leading-relaxed mb-6 italic transition-colors duration-200">
                  "{t.quote}"
                </p>
              </div>

              {/* Student Metadata */}
              <div className="border-t border-hairline pt-4 mt-auto">
                <h4 className="font-display font-normal text-base uppercase text-white tracking-[1.5px]">
                  {t.name}
                </h4>
                <p className="text-[10px] font-mono text-muted-color uppercase tracking-wider mt-1">
                  {t.college}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
