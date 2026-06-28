import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialIcons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      href: 'https://youtube.com',
      label: 'YouTube'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    { icon: <MessageSquare size={18} />, href: 'https://discord.gg', label: 'Discord' },
    { icon: <Send size={18} />, href: 'https://telegram.org', label: 'Telegram' },
  ];

  const columns = [
    {
      title: 'Learning',
      links: [
        { label: 'DSA Roadmap', href: '#learn' },
        { label: 'System Design', href: '#learn' },
        { label: 'DBMS Preparation', href: '#learn' },
        { label: 'OOPs Concepts', href: '#learn' },
        { label: 'DevOps Guide', href: '#learn' },
        { label: 'Vite & React Guide', href: '#learn' },
      ],
    },
    {
      title: 'AI Tools',
      links: [
        { label: 'Job Ready Score', href: '#ai-tools' },
        { label: 'Mock Interview', href: '#ai-tools' },
        { label: 'Resume Studio', href: '#ai-tools' },
        { label: 'LinkedIn Optimizer', href: '#ai-tools' },
        { label: 'AI Job Finder', href: '#ai-tools' },
        { label: 'GitHub Optimizer', href: '#ai-tools' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord Server', href: '#community' },
        { label: 'Telegram Group', href: '#community' },
        { label: 'DSA Study Groups', href: '#community' },
        { label: 'Interview Prep Clubs', href: '#community' },
        { label: 'Referral Portal', href: '#community' },
        { label: 'Mentorship Circles', href: '#community' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F172A] border-t border-violet/30 pt-16 pb-8 px-6 md:px-12 w-full text-left font-body">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
        {/* Brand Column (spans 2 columns on large screens) */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <a href="#" className="flex items-center gap-3 mb-5 group">
            <img
              src="/logo.webp"
              alt="Let's Code"
              className="w-8 h-8 rounded-lg object-contain bg-black shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200"
            />
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Let's Code
            </span>
          </a>
          <p className="text-sm text-muted leading-relaxed max-w-sm mb-6">
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
                className="w-9 h-9 rounded-lg bg-card hover:bg-card2 border border-border/80 text-muted hover:text-cyan flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col items-start">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-cyan transition-colors duration-200"
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
      <div className="max-w-6xl mx-auto border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Let's Code Prep Platform. All rights reserved. Always free.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#privacy" className="text-xs text-muted hover:text-cyan transition-colors">Privacy Policy</a>
          <a href="#terms" className="text-xs text-muted hover:text-cyan transition-colors">Terms of Service</a>
          <a href="#cookies" className="text-xs text-muted hover:text-cyan transition-colors">Cookie Policy</a>
          <a href="#contact" className="text-xs text-muted hover:text-cyan transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
