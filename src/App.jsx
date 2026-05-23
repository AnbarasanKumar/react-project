import { useState, useEffect } from 'react';
import Hero from './components/sections/Hero';
import Trust from './components/sections/Trust';
import Features from './components/sections/Features';
import NeoPopShowcase from './components/sections/NeoPopShowcase';
import Testimonials from './components/sections/Testimonials';
import Security from './components/sections/Security';
import Footer from './components/sections/Footer';
import NeoPopButton from './components/ui/NeoPopButton';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'features', targetId: 'features' },
    { label: 'NeoPOP UI', targetId: 'neopop-showcase' },
    { label: 'security', targetId: 'security' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-cred-bg text-white antialiased font-sans select-none">
      
      {/* Premium Glassmorphic Header */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'py-4 bg-[#0a0a0ab3] border-b border-white/10 backdrop-blur-xl' 
            : 'py-6 bg-transparent border-b border-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-7 h-7 rounded bg-white text-black flex items-center justify-center font-black text-xs">
              C
            </div>
            <span className="text-lg font-black tracking-[0.25em] text-white">CRED</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.targetId)}
                className="text-xs uppercase tracking-widest font-semibold text-cred-secondary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden md:block">
            <NeoPopButton variant="primary" className="px-5 py-2 text-[10px]" onClick={() => alert('Welcome to CRED. Verification started.')}>
              join club
            </NeoPopButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-cred-accentTeal transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#0a0a0a] z-40 flex flex-col p-6 space-y-6 md:hidden animate-fade-in border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.targetId)}
                className="text-left text-sm uppercase tracking-widest font-bold text-cred-secondary hover:text-white py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <NeoPopButton variant="teal" className="w-full py-4 text-xs" onClick={() => alert('Welcome to CRED. Verification started.')}>
            Join Club
          </NeoPopButton>
        </div>
      )}

      {/* Section Wrappers */}
      <main>
        <Hero />
        <Trust />
        <Features />
        <NeoPopShowcase />
        <Testimonials />
        <Security />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
