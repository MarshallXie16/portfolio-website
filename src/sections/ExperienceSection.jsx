import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import FadeInSection from '../components/FadeInSection';

const ExperienceCard = ({ company, role, duration, location, bullets, tech, isCurrent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard hover className="cursor-pointer">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h3
              className="text-xl sm:text-2xl font-semibold mb-1"
              style={{
                color: '#e0f2fe',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              {role}
            </h3>
            <div
              className="text-lg sm:text-xl mb-2"
              style={{ color: '#7dd3fc' }}
            >
              {company}
            </div>
            <div
              className="text-sm"
              style={{ color: '#475569' }}
            >
              {duration} • {location}
            </div>
          </div>

          {isCurrent && (
            <span
              className="px-3 py-1 rounded-full text-sm self-start"
              style={{
                background: 'rgba(0, 217, 255, 0.15)',
                color: '#00d9ff',
              }}
            >
              Current
            </span>
          )}
        </div>

        {/* Bullets */}
        <ul className="space-y-2 list-disc list-inside">
          {bullets.slice(0, expanded ? bullets.length : 2).map((bullet, i) => (
            <li
              key={i}
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: '#7dd3fc' }}
            >
              {bullet}
            </li>
          ))}
        </ul>

        {bullets.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm hover:underline"
            style={{ color: '#00d9ff' }}
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map(item => (
            <span
              key={item}
              className="px-3 py-1 rounded-lg text-xs border"
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
      </div>
    </GlassCard>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Dialpad',
      role: 'Backend Software Engineer',
      duration: 'May 2024 - Present',
      location: 'Vancouver, BC',
      isCurrent: true,
      bullets: [
        'Optimized AI transcription pipeline reducing costs by $12K/month while handling 796M requests/month',
        'Built async Sanic microservice with PostgreSQL and Redis, improving response time by 40%',
        'Developed Chrome extension and Django API enabling 450+ engineers to efficiently query and visualize infrastructure data',
        'Implemented comprehensive logging, monitoring, and alerting systems for production services'
      ],
      tech: ['Python', 'Sanic', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
    },
    {
      company: 'Synertree',
      role: 'Software Engineer Intern',
      duration: 'Jan 2024 - Apr 2024',
      location: 'Victoria, BC',
      isCurrent: false,
      bullets: [
        'Developed full-stack SaaS platform using React and Django for healthcare data management',
        'Implemented CI/CD pipelines and automated testing infrastructure',
        'Collaborated with cross-functional teams to deliver features impacting 70K+ businesses'
      ],
      tech: ['React', 'Django', 'PostgreSQL', 'Docker', 'GCP']
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
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <ExperienceCard {...exp} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
