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

  const getUsername = (email) => {
    if (!email) return 'Student';
    return email.split('@')[0];
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 w-full bg-black border-b border-hairline flex items-center justify-between px-6 md:px-12">
      {/* Left: Brand Logo & Wordmark */}
      <a href="#" className="flex items-center gap-2.5 group">
        <img
          src="/logo.webp"
          alt="Let's Code"
          className="w-7 h-7 object-contain bg-black"
        />
        <span className="font-display text-sm uppercase text-white tracking-[6px] font-normal transition-opacity duration-200 group-hover:opacity-80">
          LET'S CODE
        </span>
      </a>

      {/* Center: Nav links (Desktop) */}
      <ul className="hidden md:flex items-center gap-2 font-mono">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-muted-color hover:text-white px-3.5 py-1.5 text-[11px] uppercase tracking-[2px] font-normal transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: CTA (Desktop) */}
      <div className="hidden md:flex items-center gap-3.5 font-mono">
        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#5fa657]/20 bg-[#5fa657]/5 text-[#5fa657] text-[10px] uppercase tracking-[1.5px] font-normal">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fa657] inline-block animate-pulse"></span>
              <span>Hi, {getUsername(userEmail)}</span>
            </div>
            <button
              onClick={onLogout}
              className="text-white hover:bg-white hover:text-black border border-white px-5 py-2 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="text-white hover:bg-white/10 border border-hairline hover:border-white px-5 py-2 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
            >
              Log In
            </button>
            <button
              onClick={onLoginClick}
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-5 py-2 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white"
            >
              Get Started Free
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none p-1 rounded-none border border-transparent hover:border-hairline"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 w-full bg-black border-b border-hairline py-6 px-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 font-mono">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-color hover:text-white block text-xs uppercase tracking-[2px] font-normal transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-px bg-hairline my-1"></div>
          <div className="flex flex-col gap-3 font-mono">
            {isLoggedIn ? (
              <>
                <div className="w-full text-center px-3 py-2 border border-[#5fa657]/20 bg-[#5fa657]/5 text-[#5fa657] text-[10px] uppercase tracking-[1.5px] font-normal">
                  Logged in as: {userEmail}
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLogout();
                  }}
                  className="w-full text-center text-white border border-white hover:bg-white hover:text-black py-2.5 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200"
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
                  className="w-full text-center text-white border border-hairline py-2.5 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                  }}
                  className="w-full text-center bg-transparent text-white border border-white hover:bg-white hover:text-black py-2.5 rounded-full text-[11px] uppercase tracking-[2.5px] font-normal transition-all duration-200"
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
