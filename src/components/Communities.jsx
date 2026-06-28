import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

export default function Communities() {
  const tribes = [
    { name: 'DSA Masters', emoji: '⚡', members: '24k+ members' },
    { name: 'Full Stack Hub', emoji: '🌐', members: '32k+ members' },
    { name: 'Cloud Computing', emoji: '☁️', members: '12k+ members' },
    { name: 'Open Source', emoji: '🐱', members: '18k+ members' },
    { name: 'AI/ML Engineers', emoji: '🧠', members: '15k+ members' },
    { name: 'Data Science', emoji: '🗄️', members: '14k+ members' },
    { name: 'Cyber Security', emoji: '🛡️', members: '9k+ members' },
    { name: 'QA Community', emoji: '🧪', members: '8k+ members' },
  ];

  return (
    <section id="community" className="bg-[#0A0F1E] py-24 px-6 md:px-12 w-full overflow-hidden border-t border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-violet/20 bg-violet/5 text-violet2 text-xs font-semibold uppercase tracking-wider mb-3">
          💬 Tech Communities
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          Join your tribe
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          Learn, share resources, practice together, and get job referrals inside our active Discord channels.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full font-body">
          {tribes.map((tribe) => (
            <div
              key={tribe.name}
              className="reveal bg-card hover:bg-card2 border border-border/80 hover:border-violet2 rounded-2xl p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:box-shadow-violet-hover group cursor-pointer"
            >
              <div className="flex flex-col items-center">
                {/* Emoji / Circle */}
                <div className="w-12 h-12 rounded-xl bg-card2 group-hover:bg-[#1A2540] border border-border/40 flex items-center justify-center text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)] mb-5 transition-transform duration-300 group-hover:scale-105">
                  {tribe.emoji}
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-sm md:text-base text-white group-hover:text-cyan transition-colors duration-200 line-clamp-1 mb-1">
                  {tribe.name}
                </h3>

                {/* Members */}
                <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted font-medium mb-4">
                  <Users size={12} className="text-violet2" />
                  {tribe.members}
                </span>
              </div>

              {/* Mock Join Link */}
              <span className="inline-flex items-center gap-1 text-[10px] md:text-xs text-violet2 group-hover:text-cyan font-bold transition-colors duration-200 uppercase tracking-widest mt-auto">
                <span>Join Channel</span>
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
