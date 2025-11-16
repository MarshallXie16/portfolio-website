import CustomCursor from './components/CustomCursor';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 text-center">
        <p
          className="text-sm"
          style={{ color: '#475569' }}
        >
          Built with React, Tailwind CSS, and Vite • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
