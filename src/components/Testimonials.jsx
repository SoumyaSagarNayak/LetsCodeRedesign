import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      badge: '✅ Landed at Google',
      quote: "Let's Code's mock interview tool and company-wise PYQs were the reason I could clear my technical rounds. The AI score on my resume was brutally honest and highlighted exactly what I was missing. Always grateful!",
      name: 'Jinal Mehta',
      college: 'Nirma University, Ahmedabad',
    },
    {
      id: 2,
      badge: '✅ Landed at Microsoft',
      quote: "I used the LinkedIn optimizer and GitHub reviewer. My profile visibility increased by 4x, which led to a recruiter reaching out directly for a SWE internship. The Discord community is the best place to discuss interview patterns.",
      name: 'Kuldeep Panwar',
      college: 'IIT Roorkee',
    },
    {
      id: 3,
      badge: '✅ Landed at JP Morgan',
      quote: "As a tier-3 college student, off-campus placements felt like a nightmare. Let's Code provided me with structured DSA roadmaps and ATS-friendly resume templates. The AI Job Finder matched me to open opportunities perfectly.",
      name: 'Megha Chhapre',
      college: 'LNCT, Bhopal',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0F1E] via-[#0E0B1F]/60 to-[#0A0F1E] py-24 px-6 md:px-12 w-full overflow-hidden border-t border-border/20">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-violet/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-green/20 bg-green/5 text-green text-xs font-semibold uppercase tracking-wider mb-3">
          🎓 Success Stories
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          Cracked by Indian engineering students
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          See how engineering students from all across India used Let's Code to secure their dream jobs.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full font-body">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="reveal relative bg-card/90 backdrop-blur-sm border border-border/80 hover:border-violet2 rounded-2xl p-6.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:box-shadow-violet-hover group"
            >
              {/* Giant Faded Quote Mark */}
              <span className="absolute top-2 right-5 font-display text-8xl text-violet2/15 select-none pointer-events-none font-bold">
                “
              </span>

              <div className="relative z-10">
                {/* Green Success Badge */}
                <div className="inline-block px-3 py-1 rounded-lg bg-green/10 border border-green/25 text-green font-semibold text-xs mb-5">
                  {t.badge}
                </div>

                {/* Quote Text */}
                <p className="text-sm md:text-base text-muted group-hover:text-white/90 leading-relaxed mb-6 italic transition-colors duration-200">
                  "{t.quote}"
                </p>
              </div>

              {/* Student Metadata */}
              <div className="border-t border-border/30 pt-4 mt-auto">
                <h4 className="font-bold text-sm md:text-base text-white">
                  {t.name}
                </h4>
                <p className="text-xs text-muted mt-0.5">
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
