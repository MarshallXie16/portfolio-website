import GlassCard from '../components/GlassCard';
import FadeInSection from '../components/FadeInSection';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const EducationSection = () => {
  const coursework = [
    { name: 'Software Construction', grade: '90%' },
    { name: 'Computer Systems', grade: '88%' },
    { name: 'Relational Databases', grade: '91%' },
    { name: 'Quantitative Decision Making', grade: '95%' },
    { name: 'Financial Accounting', grade: '91%' },
    { name: 'Introduction to Finance', grade: '92%' }
  ];

  const awards = [
    'UBC Presidential Scholars Award',
    'Trek Scholarship (Top 5%)',
    'SAP Sponsor Award (ProduHacks x EY 2023)',
    'Most Creative Award (BUCS Hackathon 2023)',
    'Best Product Award (HelloHacks 2023)',
    'McGill Major Entrance Scholarship',
    'BC Achievement Scholarship',
    'Fiat Lux Scholarship'
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
          Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Degree Info */}
          <FadeInSection>
            <GlassCard hover>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(0, 217, 255, 0.15)' }}
                >
                  <GraduationCap style={{ color: '#00d9ff' }} size={32} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#e0f2fe',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  >
                    University of British Columbia
                  </h3>
                  <p
                    className="text-lg mb-1"
                    style={{ color: '#7dd3fc' }}
                  >
                    Bachelor of Commerce (BCOM)
                  </p>
                  <p
                    className="text-base mb-2"
                    style={{ color: '#7dd3fc' }}
                  >
                    Specialization: Business & Computer Science
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: '#475569' }}
                  >
                    Expected April 2027 • Vancouver, BC
                  </p>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-4">
                <div
                  className="text-sm tracking-[0.3em] uppercase mb-3"
                  style={{ color: '#00d9ff' }}
                >
                  Relevant Coursework
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {coursework.map((course, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center px-3 py-2 rounded-lg border"
                      style={{
                        background: 'rgba(0, 217, 255, 0.05)',
                        borderColor: 'rgba(0, 217, 255, 0.2)',
                      }}
                    >
                      <span
                        className="text-sm"
                        style={{ color: '#e0f2fe' }}
                      >
                        {course.name}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: '#00ff88' }}
                      >
                        {course.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeInSection>

          {/* Awards & Certifications */}
          <FadeInSection delay={100}>
            <GlassCard hover>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(0, 255, 136, 0.15)' }}
                >
                  <Trophy style={{ color: '#00ff88' }} size={32} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#e0f2fe',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  >
                    Awards & Recognition
                  </h3>
                  <p
                    className="text-base"
                    style={{ color: '#7dd3fc' }}
                  >
                    Academic & Hackathon Achievements
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg border hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      background: 'rgba(0, 255, 136, 0.05)',
                      borderColor: 'rgba(0, 255, 136, 0.2)',
                    }}
                  >
                    <Award style={{ color: '#00ff88' }} size={16} />
                    <span
                      className="text-sm"
                      style={{ color: '#e0f2fe' }}
                    >
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
