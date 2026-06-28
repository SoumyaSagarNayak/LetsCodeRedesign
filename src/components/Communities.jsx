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
    <section id="community" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          💬 Tech Communities
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Join your tribe
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          Learn, share resources, practice together, and get job referrals inside our active Discord channels.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full font-mono">
          {tribes.map((tribe) => (
            <a
              key={tribe.name}
              href="https://discord.gg/XRBheB9QF9"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal bg-surface-card hover:bg-surface-soft border border-hairline hover:border-white rounded-none p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 group cursor-pointer no-underline"
            >
              <div className="flex flex-col items-center">
                {/* Emoji / Circle */}
                <div className="w-10 h-10 rounded-none border border-hairline flex items-center justify-center text-sm bg-black mb-5">
                  {tribe.emoji}
                </div>

                {/* Name */}
                <h3 className="font-display font-normal text-sm md:text-base text-white group-hover:text-ice-blue transition-colors duration-200 uppercase tracking-wider line-clamp-1 mb-1.5">
                  {tribe.name}
                </h3>

                {/* Members */}
                <span className="flex items-center gap-1.5 text-[9px] text-muted-color uppercase tracking-wider mb-4">
                  <Users size={10} className="text-muted-color" />
                  {tribe.members}
                </span>
              </div>

              {/* Mock Join Link */}
              <span className="inline-flex items-center gap-1 text-[10px] text-muted-color group-hover:text-white transition-colors duration-200 uppercase tracking-wider mt-auto">
                <span>Join Channel</span>
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
