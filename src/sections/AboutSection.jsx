import GlassCard from '../components/GlassCard';
import FadeInSection from '../components/FadeInSection';

const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <GlassCard>
            <pre
              className="text-xs sm:text-sm leading-relaxed overflow-x-auto"
              style={{
                color: '#7dd3fc',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span style={{ color: '#00d9ff' }}>const</span> marshall = {'{'}{'\n'}
              {'  '}education: <span style={{ color: '#00ff88' }}>"UBC Business & CS '27"</span>,{'\n'}
              {'  '}currentRole: <span style={{ color: '#00ff88' }}>"Backend SWE @ Dialpad"</span>,{'\n'}
              {'  '}experience: <span style={{ color: '#00ff88' }}>"12+ months"</span>,{'\n'}
              {'  '}interests: [<span style={{ color: '#00ff88' }}>"Infrastructure"</span>, <span style={{ color: '#00ff88' }}>"AI/ML"</span>, <span style={{ color: '#00ff88' }}>"Startups"</span>],{'\n'}
              {'  '}achievements: {'{'}{'\n'}
              {'    '}costReduction: <span style={{ color: '#00ff88' }}>"$12K/month"</span>,{'\n'}
              {'    '}scale: <span style={{ color: '#00ff88' }}>"796M requests/month"</span>,{'\n'}
              {'    '}impact: <span style={{ color: '#00ff88' }}>"450+ engineers, 70K+ businesses"</span>{'\n'}
              {'  '}{'}'},{'\n'}
              {'  '}lookingFor: <span style={{ color: '#00ff88' }}>"Summer 2026 SWE/SRE roles"</span>{'\n'}
              {'}'};
            </pre>
          </GlassCard>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;
