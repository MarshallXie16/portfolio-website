const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        glass-card backdrop-blur-xl rounded-2xl p-6 border
        ${hover ? 'hover:scale-[1.02] hover:shadow-2xl transition-all duration-500' : ''}
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

export default GlassCard;
