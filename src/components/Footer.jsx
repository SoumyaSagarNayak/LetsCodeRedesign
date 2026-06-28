import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: 'https://www.linkedin.com/company/lets-code-forever/',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      href: 'https://www.youtube.com/@letscodewithavinash',
      label: 'YouTube'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: 'https://www.instagram.com/lets__code/',
      label: 'Instagram'
    },
    { icon: <MessageSquare size={16} />, href: 'https://discord.gg/XRBheB9QF9', label: 'Discord' },
    { icon: <Send size={16} />, href: 'https://t.me/offcampusjobsupdatess', label: 'Telegram' },
  ];

  const columns = [
    {
      title: 'Learning',
      links: [
        { label: 'DSA Roadmap', href: 'https://www.lets-code.co.in/articles/roadmap/' },
        { label: 'System Design', href: 'https://www.lets-code.co.in/articles/roadmap/' },
        { label: 'DBMS Prep', href: 'https://www.lets-code.co.in/explore/' },
        { label: 'OOPs Concepts', href: 'https://www.lets-code.co.in/explore/' },
        { label: 'DevOps Guide', href: 'https://www.lets-code.co.in/articles/roadmap/' },
      ],
    },
    {
      title: 'AI Tools',
      links: [
        { label: 'Job Ready Score', href: 'https://www.lets-code.co.in/dashboard/job-ready-score/' },
        { label: 'Mock Interview', href: 'https://www.lets-code.co.in/dashboard/mocktest/' },
        { label: 'Resume Studio', href: 'https://www.lets-code.co.in/dashboard/optimizeresume/' },
        { label: 'LinkedIn Opt', href: 'https://www.lets-code.co.in/dashboard/optimiselinkedin/' },
        { label: 'AI Job Finder', href: 'https://www.lets-code.co.in/dashboard/job-finder/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord Server', href: 'https://discord.gg/XRBheB9QF9' },
        { label: 'Telegram Group', href: 'https://t.me/offcampusjobsupdatess' },
        { label: 'DSA Study Groups', href: 'https://discord.gg/XRBheB9QF9' },
        { label: 'Referral Portal', href: 'https://discord.gg/XRBheB9QF9' },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-hairline pt-24 pb-12 px-6 md:px-12 w-full text-left font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
        
        {/* Brand Column (spans 2 columns on large screens) */}
        <div className="lg:col-span-2 flex flex-col items-start font-mono">
          <a href="#" className="flex items-center gap-2.5 mb-5 group no-underline">
            <img
              src="/logo.webp"
              alt="Let's Code"
              className="w-7 h-7 object-contain bg-black"
            />
            <span className="font-display text-sm uppercase text-white tracking-[6px] font-normal">
              LET'S CODE
            </span>
          </a>
          <p className="font-serif text-sm text-body-color leading-relaxed max-w-sm mb-6 normal-case tracking-normal">
            A free, open-access career preparation platform for Indian engineering students. Build job-ready resumes, optimize profiles, and crack technical interviews with AI.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-hairline bg-transparent hover:border-white text-muted-color hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col items-start font-mono">
            <h4 className="font-display font-normal text-xs text-white uppercase tracking-[1.5px] mb-5">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-wider text-muted-color hover:text-white transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
        <p className="font-serif text-xs text-muted-color/60 normal-case tracking-normal text-center md:text-left">
          &copy; {new Date().getFullYear()} Let's Code Prep Platform. All rights reserved. Always free.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-wider">
          <a href="#privacy" className="text-muted-color hover:text-white transition-colors no-underline">Privacy</a>
          <a href="#terms" className="text-muted-color hover:text-white transition-colors no-underline">Terms</a>
          <a href="#cookies" className="text-muted-color hover:text-white transition-colors no-underline">Cookies</a>
          <a href="#contact" className="text-muted-color hover:text-white transition-colors no-underline">Contact</a>
        </div>
      </div>

      {/* Center Wordmark at bottom */}
      <span className="font-display uppercase text-white/5 tracking-[14px] text-5xl select-none mt-16 text-center w-full block font-normal">
        LET'S CODE
      </span>
    </footer>
  );
}
