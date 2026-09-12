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
              Explore interconnected environments, unlock new abilities, and uncover the dark lore
              hidden within the depths. The world of Vracken rewards curiosity and punishes the careless.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Built entirely with pixel art created in Aseprite and programmed intensively in the
              Defold engine, Vracken represents a return to the roots of game development —
              where every asset is intentional and every line of code serves the experience.
            </p>
          </div>

          {/* Right - Info cards */}
          <div className="space-y-4">
            <InfoCard icon="🎮" label="Genre" value="Metroidvania" />
            <InfoCard icon="" label="Art Style" value="Pixel Art" />
            <InfoCard icon="⚙️" label="Engine" value="Defold" />
            <InfoCard icon="🖌️" label="Art Tool" value="Aseprite" />
            <InfoCard icon="👤" label="Developer" value="svudsurf-tech" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#13131f] border border-purple-900/30 rounded-lg hover:border-purple-600/50 transition-all hover:translate-x-1">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-slate-200 font-medium">{value}</p>
      </div>
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: '🗺️',
      title: 'Interconnected World',
      description: 'Explore a vast, non-linear world with secrets hidden in every corner. Backtrack with new abilities to unlock previously inaccessible areas.',
    },
    {
      icon: '⚔️',
      title: 'Tight Combat',
      description: 'Responsive and satisfying combat mechanics that reward precision and timing. Master your abilities to overcome increasingly challenging foes.',
    },
    {
      icon: '🎨',
      title: 'Handcrafted Pixel Art',
      description: 'Every sprite, tile, and animation is meticulously crafted pixel by pixel in Aseprite, creating a cohesive and atmospheric visual experience.',
    },
    {
      icon: '🔮',
      title: 'Deep Lore',
      description: 'Uncover the mysteries of Vracken through environmental storytelling, hidden journals, and the remnants of a forgotten civilization.',
    },
    {
      icon: '🏃',
      title: 'Fluid Movement',
      description: 'Dash, wall-jump, and swing through environments with buttery-smooth movement. Platforming precision meets exploration freedom.',
    },
    {
      icon: '🎵',
      title: 'Atmospheric Audio',
      description: 'An immersive soundscape that responds to your journey, from the quiet drip of cavern waters to the thunder of boss encounters.',
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl gradient-text mb-4">FEATURES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            A Metroidvania built with love, precision, and an uncompromising vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: string; title: string; description: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`p-6 bg-[#13131f] border border-purple-900/30 rounded-xl hover:border-purple-600/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Development Section
function DevSection() {
  return (
    <section id="dev" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl gradient-text mb-4">DEVELOPMENT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Status Card */}
          <div className="p-8 bg-[#13131f] border border-purple-900/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium text-sm uppercase tracking-wider">Active Development</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Current Status</h3>

            <div className="space-y-4">
              <StatusItem label="Project" value="Vracken" />
              <StatusItem label="Engine" value="Defold" />
              <StatusItem label="Art Pipeline" value="Aseprite → Defold" />
              <StatusItem label="Phase" value="Core Systems & Assets" />
              <StatusItem label="Sprint" value="12-Day Deadline" />
            </div>

            <div className="mt-6 p-4 bg-purple-950/30 border border-purple-800/30 rounded-lg">
              <p className="text-sm text-purple-300">
                <span className="font-pixel text-xs">⚡</span>{' '}
                Currently in intensive development — building core mechanics, crafting pixel art assets, and establishing the game's foundation.
              </p>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="p-8 bg-[#13131f] border border-purple-900/30 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-6">Development Philosophy</h3>

            <div className="space-y-6">
              <PhilosophyItem
                icon=""
                title="Lightweight Tools"
                description="Using tools that match the system — fast, efficient, and without unnecessary bloat. Defold delivers performance without compromise."
              />
              <PhilosophyItem
                icon="⌨️"
                title="Command-Line Efficiency"
                description="Hands-on development with terminal-first workflows. No GUI overhead — just pure productivity."
              />
              <PhilosophyItem
                icon="✨"
                title="Visual Minimalism"
                description="Every pixel serves a purpose. Clean, intentional art direction that communicates through simplicity."
              />
              <PhilosophyItem
                icon="💎"
                title="Premium Experience"
                description="Vracken is a paid product — a complete, polished experience worthy of your time and investment."
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 p-8 bg-[#13131f] border border-purple-900/30 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge name="Defold" color="purple" />
            <TechBadge name="Lua" color="blue" />
            <TechBadge name="Aseprite" color="orange" />
            <TechBadge name="Pixel Art" color="cyan" />
            <TechBadge name="Metroidvania" color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-purple-900/20 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm text-slate-200 font-medium">{value}</span>
    </div>
  );
}

function PhilosophyItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <h4 className="text-sm font-semibold text-slate-200 mb-1">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TechBadge({ name, color }: { name: string; color: string }) {
  const colors: Record<string, string> = {
    purple: 'bg-purple-950/50 border-purple-700/50 text-purple-300',
    blue: 'bg-blue-950/50 border-blue-700/50 text-blue-300',
    orange: 'bg-orange-950/50 border-orange-700/50 text-orange-300',
    cyan: 'bg-cyan-950/50 border-cyan-700/50 text-cyan-300',
    green: 'bg-green-950/50 border-green-700/50 text-green-300',
  };

  return (
    <span className={`px-4 py-2 rounded-lg border text-sm font-medium ${colors[color] || colors.purple}`}>
      {name}
    </span>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="font-pixel text-lg text-purple-400 glow-text mb-4">VRACKEN</h3>
          <p className="text-sm text-slate-500 mb-6">
            A Metroidvania by svudsurf-tech
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <PixelDecoration className="justify-center" />
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#hero" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">About</a>
            <a href="#features" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Features</a>
            <a href="#dev" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Development</a>
          </div>

          <p className="text-xs text-slate-600">
            © 2026 svudsurf-tech. All rights reserved. Built with passion and pixels.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DevSection />
      <Footer />
    </div>
  );
}
