import GlassCard from '../components/GlassCard';
import FadeInSection from '../components/FadeInSection';

const ProjectCard = ({ title, description, tech, type }) => {
  return (
    <GlassCard hover className="group h-full">
      {/* Type Badge */}
      <div
        className="text-xs tracking-widest mb-4 px-3 py-1 rounded-full inline-block"
        style={{
          background: 'rgba(0, 217, 255, 0.15)',
          color: '#00d9ff',
        }}
      >
        {type}
      </div>

      {/* Title */}
      <h3
        className="text-2xl sm:text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform"
        style={{
          color: '#e0f2fe',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mb-6 leading-relaxed text-sm sm:text-base"
        style={{ color: '#7dd3fc' }}
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map(item => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-lg text-sm border"
            style={{
              background: 'rgba(0, 217, 255, 0.05)',
              borderColor: 'rgba(0, 217, 255, 0.2)',
              color: '#e0f2fe',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Transcription Pipeline',
      description: 'Optimized high-throughput AI transcription system handling 796M requests/month. Implemented intelligent caching and async processing to reduce costs by $12K/month while maintaining 99.9% uptime.',
      tech: ['Python', 'Sanic', 'Redis', 'PostgreSQL', 'Docker'],
      type: 'WORK'
    },
    {
      title: 'Infrastructure Dashboard',
      description: 'Built Chrome extension and Django API enabling 450+ engineers to query and visualize infrastructure data. Features real-time monitoring, custom alerts, and comprehensive logging.',
      tech: ['Django', 'JavaScript', 'PostgreSQL', 'Chrome API'],
      type: 'WORK'
    },
    {
      title: 'PocketAI',
      description: 'AI-powered research assistant using LangChain and RAG architecture. Implements intelligent document processing, semantic search, and context-aware responses for academic research.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI'],
      type: 'PROJECT'
    }
  ];

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
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <ProjectCard {...project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
