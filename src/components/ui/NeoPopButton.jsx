

const NeoPopButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}) => {
  // Styles for different variants in NeoPOP theme
  const variants = {
    primary: {
      bg: 'bg-white text-black border-black',
      shadow: 'shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    },
    teal: {
      bg: 'bg-cred-accentTeal text-black border-black',
      shadow: 'shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    },
    pink: {
      bg: 'bg-cred-accentPink text-white border-black',
      shadow: 'shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    },
    green: {
      bg: 'bg-cred-accentGreen text-black border-black',
      shadow: 'shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    },
    dark: {
      bg: 'bg-[#181818] text-white border-[#333333]',
      shadow: 'shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    },
    flatWhite: {
      bg: 'bg-transparent text-white border-white',
      shadow: 'shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[6px_6px_0px_0px_#ffffff]',
      activeShadow: 'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    }
  };

  const selected = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-8 py-3.5 
        font-sans font-bold text-sm tracking-widest uppercase 
        border-2 rounded-none
        transition-all duration-150 ease-out
        cursor-pointer select-none
        inline-flex items-center justify-center gap-2
        ${selected.bg}
        ${selected.shadow}
        ${selected.activeShadow}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default NeoPopButton;
