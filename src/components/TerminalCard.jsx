const TerminalCard = ({ label, value, icon: Icon }) => {
  return (
    <div
      className="glass-card group cursor-pointer backdrop-blur-xl rounded-2xl p-6 border hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
      style={{
        background: 'rgba(0, 217, 255, 0.05)',
        borderColor: 'rgba(0, 217, 255, 0.2)',
      }}
    >
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

export default TerminalCard;
