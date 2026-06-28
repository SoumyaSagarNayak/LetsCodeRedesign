import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

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
      {/* Dark backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-surface-soft border border-hairline rounded-none shadow-none overflow-hidden p-8 md:p-10 z-10 animate-in fade-in zoom-in-95 duration-200 font-mono">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-color hover:text-white p-1 rounded-none border border-transparent hover:border-hairline transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Logo and Headings */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-10 h-10 mb-4">
            <img
              src="/logo.webp"
              alt="Let's Code"
              className="w-full h-full object-contain bg-black"
            />
          </div>
          <h3 className="font-display font-normal text-xl md:text-2xl text-white uppercase tracking-[2px]">
            Welcome to Let's Code
          </h3>
          <p className="font-serif text-[13px] text-muted-color mt-3 max-w-[260px] normal-case tracking-normal">
            Dummy Portal: Enter any email & password configuration to sign in.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email field */}
          <div className="flex flex-col items-start w-full font-mono">
            <label className="text-[10px] font-normal text-muted-color uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@college.edu"
              className="w-full bg-transparent border-b border-hairline-strong focus:border-white rounded-none py-2.5 text-sm text-white placeholder-muted-soft outline-none transition-all duration-200 font-serif"
            />
          </div>

          {/* Password field */}
          <div className="flex flex-col items-start w-full font-mono">
            <label className="text-[10px] font-normal text-muted-color uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-hairline-strong focus:border-white rounded-none py-2.5 text-sm text-white placeholder-muted-soft outline-none transition-all duration-200 font-serif"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black py-3 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed font-mono"
          >
            {isLoading ? (
              <>
                <Loader2 size={12} className="animate-spin" />
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
