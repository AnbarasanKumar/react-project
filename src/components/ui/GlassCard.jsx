

const GlassCard = ({
  children,
  className = '',
  glowColor = '', // 'teal', 'pink', 'green', 'gold', 'white' or hex
  hoverEffect = true,
  onClick
}) => {
  // Glow background style mappings
  const glowStyles = {
    teal: 'before:absolute before:-inset-[1px] before:rounded-xl before:bg-gradient-to-r before:from-cred-accentTeal/20 before:to-transparent before:blur-md before:-z-10',
    pink: 'before:absolute before:-inset-[1px] before:rounded-xl before:bg-gradient-to-r before:from-cred-accentPink/20 before:to-transparent before:blur-md before:-z-10',
    green: 'before:absolute before:-inset-[1px] before:rounded-xl before:bg-gradient-to-r before:from-cred-accentGreen/20 before:to-transparent before:blur-md before:-z-10',
    gold: 'before:absolute before:-inset-[1px] before:rounded-xl before:bg-gradient-to-r before:from-cred-accentYellow/20 before:to-transparent before:blur-md before:-z-10',
  };

  const selectedGlow = glowStyles[glowColor] || '';

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-xl p-6
        glass-panel
        transition-all duration-300 ease-out
        ${hoverEffect ? 'hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50' : ''}
        ${selectedGlow}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Background radial gradient mask for cards */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none -z-10" />
      {children}
    </div>
  );
};

export default GlassCard;
