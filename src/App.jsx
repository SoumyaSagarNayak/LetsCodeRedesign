import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneySteps from './components/JourneySteps';
import AIToolsGrid from './components/AIToolsGrid';
import CompanyPrep from './components/CompanyPrep';
import JobFinderPreview from './components/JobFinderPreview';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Communities from './components/Communities';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  // Sync state with localStorage on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail') || '';
    if (loggedIn) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  // IntersectionObserver for Scroll Reveal
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      {
        threshold: 0.08, // When 8% visible
      }
    );

    elements.forEach((el) => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    showToast('Signed in successfully! Welcome back.');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    showToast('Signed out successfully.');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 4000);
  };

  return (
    <div className="bg-[#0A0F1E] text-[#F0F4FF] font-body min-h-screen flex flex-col w-full overflow-x-hidden antialiased">
      {/* 1. Glassmorphism Fixed Navbar */}
      <Navbar 
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Placement Journey Steps */}
      <JourneySteps />

      {/* 4. AI Placement Tools Grid */}
      <AIToolsGrid />

      {/* 5. Company-Specific Prep */}
      <CompanyPrep />

      {/* 6. AI Job Finder Preview */}
      <JobFinderPreview />

      {/* 7. Preparation Resources */}
      <Resources />

      {/* 8. Success Testimonials */}
      <Testimonials />

      {/* 9. Tech Communities */}
      <Communities />

      {/* 10. Call To Action Banner */}
      <CTABanner />

      {/* 11. Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#131C30]/90 backdrop-blur-md border border-green/30 text-[#F0F4FF] px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 font-semibold text-sm max-w-sm">
          <CheckCircle2 size={18} className="text-green shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
