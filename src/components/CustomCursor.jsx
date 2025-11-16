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

export default CustomCursor;
