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
      role: 'Backend Software Engineer Co-op',
      duration: 'Jan 2025 - Present',
      location: 'Vancouver, BC',
      isCurrent: true,
      bullets: [
        'Designed and shipped core features (TTL, query explain, metrics/logging) for Datastore ORM used by 450+ engineers, improving developer experience and reliability for projects serving 70,000+ businesses',
        'Authored comprehensive documentation on Datastore and delivered 2 best practices presentations to the entire engineering org. Built an agentic code reviewer that flags anti-patterns and suggests optimizations',
        'Architected and implemented async migration for high-traffic task handlers (~796M req/month), reducing infrastructure costs by $12K/month, and proposed a new handler design to enable future async migration'
      ],
      tech: ['Python', 'Sanic', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Datadog', 'AWS', 'GCP']
    },
    {
      company: 'Synertree CMS',
      role: 'Software Development Intern',
      duration: 'May 2023 - Apr 2024',
      location: 'Vancouver, BC',
      isCurrent: false,
      bullets: [
        'Proposed and developed a collaborative filtering recommendation algorithm using NumPy, Pandas, and Scikit-learn, increasing user engagement by 20% and conversion rates by 15%',
        'Designed and implemented an automated email newsletter system using Celery for scheduling and SendGrid API to deliver personalized business listing recommendations to clients',
        'Collaborated on development of the company website backend, using Django, PostgreSQL, REST APIs. Managed the full deployment process on Heroku, setting up CI/CD pipelines and configuring env variables'
      ],
      tech: ['Django', 'PostgreSQL', 'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Celery', 'Heroku']
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
