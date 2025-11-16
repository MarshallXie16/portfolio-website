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

export default TerminalText;
