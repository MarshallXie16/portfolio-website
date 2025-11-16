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
              {'  '}education: <span style={{ color: '#00ff88' }}>"UBC Commerce - Business & CS '27"</span>,{'\n'}
              {'  '}currentRole: <span style={{ color: '#00ff88' }}>"Backend SWE Co-op @ Dialpad"</span>,{'\n'}
              {'  '}experience: <span style={{ color: '#00ff88' }}>"2+ years (May 2023 - Present)"</span>,{'\n'}
              {'  '}awards: [<span style={{ color: '#00ff88' }}>"Presidential Scholars"</span>, <span style={{ color: '#00ff88' }}>"Trek Scholarship"</span>, <span style={{ color: '#00ff88' }}>"Top 5%"</span>],{'\n'}
              {'  '}achievements: {'{'}{'\n'}
              {'    '}costReduction: <span style={{ color: '#00ff88' }}>"$12K/month infrastructure savings"</span>,{'\n'}
              {'    '}scale: <span style={{ color: '#00ff88' }}>"796M requests/month"</span>,{'\n'}
              {'    '}impact: <span style={{ color: '#00ff88' }}>"450+ engineers, 70K+ businesses"</span>,{'\n'}
              {'    '}engagement: <span style={{ color: '#00ff88' }}>"20% increase via ML recommendations"</span>{'\n'}
              {'  '}{'}'},{'\n'}
              {'  '}status: <span style={{ color: '#00ff88' }}>"Open to New Grad SWE/SRE roles"</span>{'\n'}
              {'}'};
            </pre>
          </GlassCard>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;
