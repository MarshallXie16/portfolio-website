# Kinetic Terminal Portfolio - Design Document
**Style:** Modern Developer Portfolio with Terminal Aesthetics
**Theme:** Deep Ocean Glassmorphism
**Target:** SWE/SRE Roles at Tech Companies

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--background-gradient: linear-gradient(135deg, #0a1929 0%, #1a2332 50%, #0d1b2a 100%);
--bg-dark: #0a1929;
--bg-medium: #1a2332;
--bg-light: #0d1b2a;

/* Accent Colors */
--accent-cyan: #00d9ff;        /* Primary accent - use for CTAs, links, highlights */
--accent-green: #00ff88;       /* Secondary accent - use for success states, badges */
--accent-cyan-rgb: 0, 217, 255;
--accent-green-rgb: 0, 255, 136;

/* Text Colors */
--text-primary: #e0f2fe;       /* Main headings, important text */
--text-secondary: #7dd3fc;     /* Body text, descriptions */
--text-tertiary: #475569;      /* Muted text, timestamps */

/* Glass Colors */
--glass-bg: rgba(0, 217, 255, 0.05);           /* Card backgrounds */
--glass-border: rgba(0, 217, 255, 0.2);         /* Card borders */
--glass-hover: rgba(0, 217, 255, 0.1);          /* Hover states */
--glass-accent: rgba(0, 217, 255, 0.15);        /* Accent areas */
```

### Typography System

```css
/* Font Families */
--font-header: 'JetBrains Mono', 'Space Mono', 'Courier New', monospace;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Font Sizes - Desktop */
--text-xs: 0.75rem;      /* 12px - labels, captions */
--text-sm: 0.875rem;     /* 14px - small body text */
--text-base: 1rem;       /* 16px - body text */
--text-lg: 1.125rem;     /* 18px - large body */
--text-xl: 1.25rem;      /* 20px - subheadings */
--text-2xl: 1.5rem;      /* 24px - card titles */
--text-3xl: 1.875rem;    /* 30px - section titles */
--text-4xl: 2.25rem;     /* 36px - small hero */
--text-5xl: 3rem;        /* 48px - medium hero */
--text-6xl: 3.75rem;     /* 60px - large hero */
--text-7xl: 4.5rem;      /* 72px - extra large hero */
--text-8xl: 6rem;        /* 96px - giant hero */
--text-9xl: 8rem;        /* 128px - massive hero */

/* Font Weights */
--weight-light: 300;
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;

/* Letter Spacing */
--tracking-tight: -0.05em;    /* Tight for large headings */
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;     /* Wide for labels */
--tracking-terminal: 0.3em;   /* Extra wide for terminal text */
```

### Spacing System

```css
/* Spacing Scale (based on 4px grid) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */

/* Section Spacing */
--section-padding-mobile: 4rem 1.5rem;
--section-padding-desktop: 8rem 2rem;
```

---

## 📐 Layout Structure

### Grid System

```css
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Responsive Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Page Sections (in order)

1. **Hero Section** - Full viewport height
2. **About Section** - Brief bio + terminal-style info cards
3. **Skills Section** - Technical skills display
4. **Experience Section** - Work history with expandable cards
5. **Projects Section** - Featured projects (2-3)
6. **Education Section** - Compact info block
7. **Contact Section** - Links and CTA

---

## 🪟 Glassmorphism Components

### Base Glass Card Component

```css
.glass-card {
  /* Background */
  background: rgba(0, 217, 255, 0.05);

  /* Blur Effect */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  /* Border */
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 1rem;

  /* Padding */
  padding: 1.5rem;

  /* Transition for hover effects */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: rgba(0, 217, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(0, 217, 255, 0.15);
}
```

### React Component Example

```jsx
const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        backdrop-blur-xl rounded-2xl p-6 border
        ${hover ? 'hover:scale-[1.02] hover:shadow-2xl' : ''}
        ${className}
      `}
      style={{
        background: 'rgba(0, 217, 255, 0.05)',
        borderColor: 'rgba(0, 217, 255, 0.2)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};
```

### Terminal-Style Card Variant

```jsx
const TerminalCard = ({ label, value, icon: Icon }) => {
  return (
    <div className="glass-card group cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className="p-3 rounded-lg"
          style={{ background: 'rgba(0, 217, 255, 0.15)' }}
        >
          <Icon style={{ color: '#00d9ff' }} size={24} />
        </div>

        {/* Content */}
        <div>
          <div
            className="text-xs tracking-[0.3em] uppercase mb-1"
            style={{
              color: '#7dd3fc',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            {label}
          </div>
          <div
            className="text-lg font-semibold"
            style={{
              color: '#e0f2fe',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## ✨ Animation Effects

### 1. Custom Cursor

```jsx
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div
        className="w-8 h-8 rounded-full border-2"
        style={{ borderColor: '#00d9ff' }}
      />
    </div>
  );
};
```

**CSS to hide default cursor:**

```css
* {
  cursor: none !important;
}

/* For clickable elements, show a different style */
a, button, [role="button"] {
  cursor: none !important;
}
```

### 2. Scroll-Based Text Animation

```jsx
import { useEffect, useState } from 'react';

const AnimatedHeroText = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <h1
      className="text-8xl font-bold tracking-tight leading-none"
      style={{
        color: '#e0f2fe',
        fontFamily: 'JetBrains Mono, monospace',
        transform: `translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </h1>
  );
};
```

### 3. Terminal Typing Effect

```jsx
import { useState, useEffect } from 'react';

const TerminalText = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <div
      className="text-sm tracking-widest"
      style={{
        color: '#00d9ff',
        fontFamily: 'JetBrains Mono, monospace'
      }}
    >
      {'> '}{displayText}
      <span className="animate-pulse">_</span>
    </div>
  );
};
```

### 4. Fade-In on Scroll

```jsx
import { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};
```

### 5. Card Hover Effects

```css
/* Add to glass cards */
.glass-card {
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 217, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease-in-out;
}

.glass-card:hover::before {
  left: 100%;
}
```

---

## 📱 Responsive Design Guidelines

### Mobile Breakpoints

```css
/* Mobile First Approach */

/* Base (Mobile) - 0-639px */
.hero-title {
  font-size: 3rem; /* 48px */
  line-height: 1;
}

/* Tablet - 640px+ */
@media (min-width: 640px) {
  .hero-title {
    font-size: 4rem; /* 64px */
  }
}

/* Desktop - 1024px+ */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 6rem; /* 96px */
  }
}

/* Large Desktop - 1280px+ */
@media (min-width: 1280px) {
  .hero-title {
    font-size: 8rem; /* 128px */
  }
}
```

### Responsive Container

```jsx
const ResponsiveContainer = ({ children }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {children}
    </div>
  );
};
```

### Mobile Navigation Toggle

```jsx
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button
        className="lg:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: '#00d9ff' }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden backdrop-blur-xl"
          style={{ background: 'rgba(10, 25, 41, 0.95)' }}
        >
          {/* Menu content */}
        </div>
      )}
    </>
  );
};
```

---

## 🎯 Section-by-Section Breakdown

### 1. Hero Section

**Layout:**
- Full viewport height (`min-h-screen`)
- Centered vertically with flexbox
- Terminal prompt at top
- Giant name text
- Subtitle with command-line style
- 3 info cards below

**Code Structure:**

```jsx
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-8 py-24">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Terminal Prompt */}
        <TerminalText text="INITIALIZING_PORTFOLIO.SH" />

        {/* Name */}
        <AnimatedHeroText>
          MARSHALL
          <br />
          <span style={{ color: '#00d9ff' }}>CHEN_</span>
        </AnimatedHeroText>

        {/* Subtitle */}
        <div
          className="text-3xl font-light tracking-wide"
          style={{
            color: '#7dd3fc',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          $ ./build_systems --optimize --scale
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4">
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
```

### 2. About Section

**Layout:**
- Code-formatted bio in a glass card
- Shows your info as a JavaScript object
- Clean, readable, authentic developer style

**Code:**

```jsx
const AboutSection = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <GlassCard>
            <pre
              className="text-sm leading-relaxed overflow-x-auto"
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
```

### 3. Skills Section

**Layout:**
- Grid of glass cards
- Group by category (Languages, Frameworks, Tools)
- Badge-style for each skill

**Code:**

```jsx
const SkillsSection = () => {
  const skills = {
    Languages: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
    Frameworks: ['Sanic', 'Django', 'Flask', 'React', 'Node.js', 'Express', 'Langchain'],
    Tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Terraform', 'AWS', 'GCP'],
  };

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2
          className="text-6xl font-bold"
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
                      className="px-4 py-2 rounded-lg text-sm border backdrop-blur-md"
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
```

### 4. Experience Section

**Layout:**
- Timeline-style cards
- Company logo/icon on left
- Expandable bullet points
- Tech stack badges at bottom

**Code:**

```jsx
const ExperienceCard = ({ company, role, duration, location, bullets, tech }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard hover className="cursor-pointer">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="text-2xl font-semibold mb-1"
              style={{
                color: '#e0f2fe',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              {role}
            </h3>
            <div
              className="text-xl mb-2"
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

          <span
            className="px-3 py-1 rounded-full text-sm"
            style={{
              background: 'rgba(0, 217, 255, 0.15)',
              color: '#00d9ff',
            }}
          >
            Current
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 list-disc list-inside">
          {bullets.slice(0, expanded ? bullets.length : 2).map((bullet, i) => (
            <li
              key={i}
              className="text-base leading-relaxed"
              style={{ color: '#7dd3fc' }}
            >
              {bullet}
            </li>
          ))}
        </ul>

        {bullets.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm"
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
```

### 5. Projects Section

**Layout:**
- 2-column grid on desktop, 1 column on mobile
- Each project in a glass card
- "Work" or "Project" badge
- Tech stack at bottom
- Hover effect to lift card

**Code:**

```jsx
const ProjectCard = ({ title, description, tech, type, link }) => {
  return (
    <GlassCard hover className="group">
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
        className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform"
        style={{
          color: '#e0f2fe',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mb-6 leading-relaxed"
        style={{ color: '#7dd3fc' }}
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
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
```

### 6. Contact Section

**Layout:**
- Simple centered content
- Social links with icons
- Email CTA button
- Glassmorphic background

**Code:**

```jsx
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2
            className="text-6xl font-bold mb-8"
            style={{
              color: '#e0f2fe',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Let's Connect
          </h2>

          <p
            className="text-xl mb-12"
            style={{ color: '#7dd3fc' }}
          >
            Open to Summer 2026 SWE/SRE opportunities
          </p>

          {/* Email Button */}
          <a
            href="mailto:marshallxie16@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold mb-12"
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
                className="p-4 rounded-lg border backdrop-blur-md transition-all hover:scale-110"
                style={{
                  background: 'rgba(0, 217, 255, 0.05)',
                  borderColor: 'rgba(0, 217, 255, 0.2)',
                }}
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
```

---

## 🚀 Implementation Checklist

### Setup
- [ ] Install fonts: JetBrains Mono, Inter
- [ ] Set up Tailwind CSS (or your CSS framework)
- [ ] Install icon library (lucide-react recommended)
- [ ] Set up React (Next.js or Vite)

### Components to Build
- [ ] CustomCursor component
- [ ] GlassCard base component
- [ ] TerminalText typing animation
- [ ] FadeInSection scroll animation
- [ ] Navigation (fixed header)

### Sections to Build
- [ ] Hero section with terminal prompt
- [ ] About section with code-style bio
- [ ] Skills section with categorized badges
- [ ] Experience timeline with Dialpad + Synertree
- [ ] Projects section (PocketAI + others)
- [ ] Education section (compact)
- [ ] Contact section with social links

### Polish
- [ ] Test on mobile devices
- [ ] Optimize animations for performance
- [ ] Add meta tags for SEO
- [ ] Deploy to Vercel/Netlify
- [ ] Test custom cursor on different devices

---

## 💡 Pro Tips

1. **Keep it Simple:** Don't over-animate. Subtle is better.
2. **Performance:** Use `will-change: transform` for animated elements
3. **Accessibility:** Add `prefers-reduced-motion` media query
4. **Testing:** Test on actual devices, not just browser DevTools
5. **Loading:** Add skeleton screens or loading states
6. **Images:** If you add photos, use WebP format and lazy loading

### Accessibility Considerations

```css
/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📦 Recommended Tech Stack

**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS
**Icons:** lucide-react
**Fonts:** Google Fonts (JetBrains Mono, Inter)
**Deployment:** Vercel
**Analytics:** Vercel Analytics (optional)
