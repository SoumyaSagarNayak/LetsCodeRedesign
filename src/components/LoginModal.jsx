import React, { useState } from 'react';
import { X, Lock, Mail, Loader2 } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    
    // Simulate API delay for a realistic feel
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#0A0F1E]/80 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-card border border-border/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-8 z-10 animate-in fade-in zoom-in-95 duration-200 font-body">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white p-1 rounded-md hover:bg-white/5 transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Logo and Headings */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <path d="M72,20 C62,11 48,8 35,13 C18,20 8,38 10,56 C12,74 27,89 45,91 C58,93 72,87 78,76 C64,83 48,82 38,72 C25,59 25,38 38,25 C47,16 61,14 72,20 Z" fill="url(#modalOuterGrad)" />
              <path d="M50,22 C34,22 22,34 22,50 C22,66 34,78 50,78 C38,74 32,64 32,50 C32,36 38,26 50,22 Z" fill="url(#modalInnerGrad)" />
              <defs>
                <linearGradient id="modalOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10B981" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
                <linearGradient id="modalInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#047857" />
                  <stop offset="100%" stop-color="#064e3b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 className="font-display font-bold text-2xl text-white tracking-tight">
            Welcome to Let's Code
          </h3>
          <p className="text-xs text-muted mt-2 max-w-[260px]">
            Dummy Portal: Enter any email & password configuration to sign in.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email field */}
          <div className="flex flex-col items-start w-full">
            <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative w-full">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@college.edu"
                className="w-full bg-[#0A0F1E] border border-border/80 focus:border-violet focus:ring-1 focus:ring-violet/30 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-muted/65 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="flex flex-col items-start w-full">
            <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative w-full">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0A0F1E] border border-border/80 focus:border-violet focus:ring-1 focus:ring-violet/30 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-muted/65 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 bg-gradient-to-r from-violet to-violet2 hover:from-violet2 hover:to-violet text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(157,92,255,0.5)] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
