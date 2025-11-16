import { Terminal, Database, Zap } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import AnimatedHeroText from '../components/AnimatedHeroText';
import TerminalCard from '../components/TerminalCard';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-8 py-24">
      <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Terminal Prompt */}
        <TerminalText text="INITIALIZING_PORTFOLIO.SH" />

        {/* Name */}
        <AnimatedHeroText>
          MARSHALL
          <br />
          <span style={{ color: '#00d9ff' }}>XIE_</span>
        </AnimatedHeroText>

        {/* Subtitle */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide"
          style={{
            color: '#7dd3fc',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          $ ./build_systems --optimize --scale
        </div>

        {/* Info Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <TerminalCard
            icon={Terminal}
            label="ROLE"
            value="Backend SWE"
          />
          <TerminalCard
            icon={Database}
            label="FOCUS"
            value="Infrastructure"
          />
          <TerminalCard
            icon={Zap}
            label="STATUS"
            value="Open to Roles"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
