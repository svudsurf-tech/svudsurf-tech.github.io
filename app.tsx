import { useState, useEffect, useRef } from 'react';

// Pixel art decorative component
function PixelDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-purple-500 opacity-60"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

// Navigation
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg shadow-purple-900/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-pixel text-sm text-purple-400 hover:text-purple-300 transition-colors">
          VRACKEN
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">About</a>
          <a href="#features" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">Features</a>
          <a href="#dev" className="text-sm text-slate-300 hover:text-purple-400 transition-colors">Development</a>
          <a href="#about" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm rounded transition-colors pixel-border" style={{ boxShadow: 'none' }}>
            Learn More
          </a>
        </div>
        <button
          className="md:hidden text-purple-400"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-purple-900/30 px-6 py-4 flex flex-col gap-4">
          <a href="#about" className="text-sm text-slate-300 hover:text-purple-400 transition-colors" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#features" className="text-sm text-slate-300 hover:text-purple-400 transition-colors" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#dev" className="text-sm text-slate-300 hover:text-purple-400 transition-colors" onClick={() => setMobileOpen(false)}>Development</a>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/d9f86223-2d9a-418e-a4f4-d033c0358b80/_result.png"
          alt="Vracken game world"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
      </div>

      {/* Particle overlay */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <PixelDecoration className="justify-center mb-8" />
        </div>

        <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-white glow-text fade-in-up fade-in-up-delay-1 mb-6">
          VRACKEN
        </h1>

        <p className="text-lg md:text-xl text-slate-300 fade-in-up fade-in-up-delay-2 mb-4 max-w-2xl mx-auto">
          A pixel art Metroidvania forged in the depths of mystery
        </p>

        <p className="text-sm text-slate-500 fade-in-up fade-in-up-delay-3 mb-10">
          Built with Defold • Crafted in Aseprite • Powered by passion
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up fade-in-up-delay-4">
          <a
            href="#about"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/20"
          >
            Discover the World
          </a>
          <a
            href="#dev"
            className="px-8 py-4 border border-purple-600/50 hover:border-purple-400 text-purple-300 hover:text-white font-medium rounded-lg transition-all hover:scale-105"
          >
            Dev Status
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl gradient-text mb-4">ABOUT THE GAME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              <span className="text-purple-400 font-semibold">Vracken</span> is a handcrafted Metroidvania
              experience that plunges you into a mysterious world of ancient ruins, glowing crystals,
              and forgotten secrets. Every pixel tells a story.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Explore interconnected environments,
