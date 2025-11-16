import { Mail, Github, Linkedin } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
            style={{
              color: '#e0f2fe',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Let's Connect
          </h2>

          <p
            className="text-lg sm:text-xl mb-12"
            style={{ color: '#7dd3fc' }}
          >
            Open to Summer 2026 SWE/SRE opportunities
          </p>

          {/* Email Button */}
          <a
            href="mailto:marshallxie16@gmail.com"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold mb-12 hover:scale-105 transition-transform duration-300"
            style={{
              background: 'rgba(0, 217, 255, 0.15)',
              color: '#00d9ff',
              border: '1px solid rgba(0, 217, 255, 0.3)',
            }}
          >
            <Mail size={20} />
            Get in Touch
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, label: 'GitHub', link: 'https://github.com/MarshallXie16' },
              { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/marshallxie' },
            ].map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border backdrop-blur-md transition-all hover:scale-110 duration-300"
                style={{
                  background: 'rgba(0, 217, 255, 0.05)',
                  borderColor: 'rgba(0, 217, 255, 0.2)',
                }}
                aria-label={label}
              >
                <Icon style={{ color: '#00d9ff' }} size={24} />
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
