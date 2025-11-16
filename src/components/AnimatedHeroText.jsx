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
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none"
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

export default AnimatedHeroText;
