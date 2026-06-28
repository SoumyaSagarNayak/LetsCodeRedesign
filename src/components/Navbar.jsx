import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isLoggedIn, userEmail, onLogout, onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Learn', href: '#learn' },
    { name: 'AI Tools', href: '#ai-tools' },
    { name: 'Companies', href: '#companies' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Community', href: '#community' },
  ];

  // Helper to get email username prefix
  const getUsername = (email) => {
    if (!email) return 'Student';
    return email.split('@')[0];
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 w-full bg-[#0A0F1E]/82 backdrop-blur-md border-b border-violet/18 flex items-center justify-between px-6 md:px-12">
      {/* Left: Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <img
          src="/logo.webp"
          alt="Let's Code"
          className="w-8 h-8 rounded-lg object-contain bg-black shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200"
        />
        <span className="font-display font-bold text-lg text-white tracking-tight">
          Let's Code
        </span>
      </a>

      {/* Center: Nav links (Desktop) */}
      <ul className="hidden md:flex items-center gap-1 font-body">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-muted hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: CTA (Desktop) */}
      <div className="hidden md:flex items-center gap-4 font-body">
        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green/20 bg-green/5 text-green text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green inline-block animate-pulse"></span>
              <span>Hi, {getUsername(userEmail)}</span>
            </div>
            <button
              onClick={onLogout}
              className="text-muted hover:text-white border border-border/60 hover:border-white/50 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="text-white hover:text-white/80 border border-border px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet"
            >
              Log In
            </button>
            <button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-violet to-violet2 hover:from-violet2 hover:to-violet text-white px-5 py-1.5 rounded-lg text-sm font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(157,92,255,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan"
            >
              Get Started Free
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-violet p-1 rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 w-full bg-[#0A0F1E] border-b border-border py-6 px-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-white block text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-px bg-border my-1"></div>
          <div className="flex flex-col gap-3">
            {isLoggedIn ? (
              <>
                <div className="w-full text-center px-3 py-2.5 rounded-lg border border-green/20 bg-green/5 text-green text-sm font-semibold">
                  Logged in as: {userEmail}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="w-full text-center text-muted border border-border/60 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                  }}
                  className="w-full text-center text-white border border-border py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                  }}
                  className="w-full text-center bg-gradient-to-r from-violet to-violet2 text-white py-2.5 rounded-lg text-sm font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-200"
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

