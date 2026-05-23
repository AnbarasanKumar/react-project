import { useState } from 'react';
import { motion } from 'framer-motion';
import NeoPopButton from '../ui/NeoPopButton';

const NeoPopShowcase = () => {
  const [btnVariant, setBtnVariant] = useState('teal');
  const [btnText, setBtnText] = useState('PAY BILL NOW');
  const [cardOffset, setCardOffset] = useState(8);
  const [cardColor, setCardColor] = useState('teal');

  const colorClasses = {
    teal: 'bg-cred-accentTeal text-black border-black',
    pink: 'bg-cred-accentPink text-white border-black',
    green: 'bg-cred-accentGreen text-black border-black',
    gold: 'bg-cred-accentYellow text-black border-black',
  };

  const shadowColor = {
    teal: '#00e5ff',
    pink: '#ff007f',
    green: '#00ff66',
    gold: '#ffd600',
  };

  return (
    <section id="neopop-showcase" className="py-28 bg-[#0b0b0b] border-y border-white/[0.05] px-6 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-cred-accentPink/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cred-accentTeal/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.3em] font-black text-cred-accentPink mb-4">design architecture</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              meet the NeoPOP UI system.
            </h3>
            <p className="text-cred-secondary text-sm font-light mt-3 leading-relaxed">
              CRED uses a retro-futuristic, flat 3D design language called NeoPOP. It utilizes thick black borders, stark shadows, and pure geometric shifts. Play with the controls to see it in action.
            </p>
          </div>
          
          {/* Debug Console tag */}
          <div className="px-4 py-2 border border-white/10 bg-white/[0.02] font-mono text-xs text-cred-accentTeal rounded-md self-start md:self-auto">
            SYSTEM STATUS: READY
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Customization Panel */}
          <div className="lg:col-span-5 p-8 bg-[#121212] border border-white/10 rounded-2xl flex flex-col justify-between">
            <div className="space-y-8">
              <h4 className="text-lg font-bold text-white tracking-wide border-b border-white/10 pb-4">
                NeoPOP Controller
              </h4>
              
              {/* Button Variant Control */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-cred-secondary">
                  button color theme:
                </label>
                <div className="flex flex-wrap gap-2">
                  {['teal', 'pink', 'green', 'primary', 'dark', 'flatWhite'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setBtnVariant(variant)}
                      className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider border transition-all ${
                        btnVariant === variant 
                          ? 'bg-white text-black border-white' 
                          : 'bg-transparent text-white/60 border-white/20 hover:border-white/40'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Button Text Input */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-cred-secondary">
                  button call to action:
                </label>
                <input
                  type="text"
                  value={btnText}
                  onChange={(e) => setBtnText(e.target.value.toUpperCase())}
                  className="w-full bg-[#1c1c1c] border border-white/10 px-4 py-2.5 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-cred-accentTeal"
                  maxLength={20}
                />
              </div>

              {/* Card Color Control */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-cred-secondary">
                  3D Card Shadow Color:
                </label>
                <div className="flex gap-3">
                  {['teal', 'pink', 'green', 'gold'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setCardColor(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform ${
                        cardColor === color ? 'scale-125 border-white' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color === 'gold' ? '#ffd600' : color === 'teal' ? '#00e5ff' : color === 'pink' ? '#ff007f' : '#00ff66' }}
                    />
                  ))}
                </div>
              </div>

              {/* 3D Offset Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-cred-secondary">
                    Card 3D Shadow Depth:
                  </label>
                  <span className="text-xs font-mono font-bold text-white">{cardOffset}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  step="2"
                  value={cardOffset}
                  onChange={(e) => setCardOffset(Number(e.target.value))}
                  className="w-full accent-cred-accentTeal cursor-pointer"
                />
              </div>
            </div>

            {/* Generated Code Codeblock */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase font-bold tracking-wider text-cred-secondary mb-2">CSS output snippet:</div>
              <pre className="p-4 bg-[#181818] border border-white/5 font-mono text-[10px] text-cred-accentTeal overflow-x-auto rounded">
                <code>
{`border: 2px solid #000000;
box-shadow: ${cardOffset}px ${cardOffset}px 0px 0px ${shadowColor[cardColor]};
transition: transform 0.15s ease;
&:active {
  transform: translate(${cardOffset}px, ${cardOffset}px);
  box-shadow: none;
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Live Interactive Sandbox */}
          <div className="lg:col-span-7 bg-[#161616]/30 border border-white/5 rounded-2xl grid-pattern p-8 sm:p-12 flex flex-col justify-center items-center gap-12 min-h-[400px]">
            
            {/* Live Card Showcase */}
            <motion.div
              style={{
                boxShadow: `${cardOffset}px ${cardOffset}px 0px 0px ${shadowColor[cardColor]}`,
                border: '2px solid #000000',
              }}
              className={`
                w-full max-w-sm p-6 
                transition-all duration-300 ease-out
                flex flex-col justify-between aspect-[1.7/1]
                ${colorClasses[cardColor]}
              `}
              whileHover={{ 
                x: -cardOffset/2, 
                y: -cardOffset/2,
                boxShadow: `${cardOffset * 1.5}px ${cardOffset * 1.5}px 0px 0px #000000`
              }}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest font-black uppercase">neopop preview</span>
                <span className="font-mono text-xs font-bold">1.0.0</span>
              </div>
              
              <div>
                <h5 className="text-xl sm:text-2xl font-black tracking-tight leading-none uppercase mb-2">
                  tactile dynamics
                </h5>
                <p className="text-xs font-light leading-snug max-w-xs opacity-80">
                  Hover on me to see card float physics. NeoPOP blends strict shadows with geometric active states.
                </p>
              </div>
            </motion.div>

            {/* Live Button Showcase */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] tracking-widest font-black text-cred-secondary uppercase">live button rendering</span>
              <NeoPopButton variant={btnVariant} onClick={() => alert('NeoPOP Interaction Registered!')}>
                {btnText}
              </NeoPopButton>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default NeoPopShowcase;
