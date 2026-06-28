import React, { useEffect } from 'react';
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

export default function App() {
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

  return (
    <div className="bg-[#0A0F1E] text-[#F0F4FF] font-body min-h-screen flex flex-col w-full overflow-x-hidden antialiased">
      {/* 1. Glassmorphism Fixed Navbar */}
      <Navbar />

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
    </div>
  );
}
