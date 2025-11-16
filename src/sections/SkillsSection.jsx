import FadeInSection from '../components/FadeInSection';

const SkillsSection = () => {
  const skills = {
    Languages: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    Frameworks: ['Sanic', 'Django', 'Flask', 'React', 'Node.js', 'Express', 'Langchain'],
    Tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Terraform', 'AWS', 'GCP'],
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{
            color: '#e0f2fe',
            fontFamily: 'JetBrains Mono, monospace'
          }}
        >
          Technical Stack
        </h2>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <FadeInSection key={category}>
              <div>
                <div
                  className="text-sm tracking-[0.3em] uppercase mb-4"
                  style={{ color: '#00d9ff' }}
                >
                  {category}
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg text-sm border backdrop-blur-md hover:scale-105 transition-transform duration-300"
                      style={{
                        background: 'rgba(0, 217, 255, 0.05)',
                        borderColor: 'rgba(0, 217, 255, 0.2)',
                        color: '#e0f2fe',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
