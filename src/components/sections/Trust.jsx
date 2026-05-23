
import { motion } from 'framer-motion';

const Trust = () => {
  return (
    <section className="relative py-16 md:py-28 bg-[#070707] px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cred-accentPink/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cred-accentTeal/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Illustration / Graphic */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[380px] w-full aspect-[4/5] bg-gradient-to-br from-neutral-900 to-black border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/80"
          >
            {/* Glowing card aura */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cred-accentPink/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cred-accentTeal/20 rounded-full blur-2xl" />

            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <div className="text-[10px] tracking-widest font-black uppercase text-cred-accentPink">status</div>
                <div className="text-lg font-bold text-white tracking-wide">MEMBERS CLUB</div>
              </div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-white/60">
                ACTIVE
              </div>
            </div>

            {/* Middle luxury shield graphic (pure SVG + CSS) */}
            <div className="flex flex-col items-center justify-center my-8 z-10">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Rotating rings */}
                <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-2 border border-white/10 rounded-full" />
                <div className="absolute inset-4 bg-gradient-to-tr from-cred-accentTeal/20 to-cred-accentPink/20 rounded-full blur-sm" />
                
                {/* Main emblem */}
                <div className="w-16 h-16 bg-[#1a1a1a] border-2 border-white/20 rounded-2xl flex items-center justify-center shadow-lg shadow-black">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <span className="text-[11px] tracking-[0.25em] font-semibold text-white/50 uppercase mt-4">trust score verified</span>
            </div>

            {/* Bottom credential detail */}
            <div className="space-y-4 z-10">
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40 uppercase tracking-wider text-[10px]">acceptance rate</span>
                <span className="text-cred-accentGreen font-bold font-mono">TOP 1% ONLY</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40 uppercase tracking-wider text-[10px]">annual membership fee</span>
                <span className="text-white font-bold">NIL (INVITE ONLY)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Trust & Exclusivity text */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-cred-accentPink uppercase tracking-widest text-sm font-bold mb-4"
          >
            members-only club
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-8"
          >
            the exclusive club <br />
            for the trustworthy.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-cred-secondary font-light text-base sm:text-lg leading-relaxed max-w-xl"
          >
            <p>
              CRED is a community of creditworthy individuals who believe in trust, exclusivity, and mutual benefit. Every member is verified through a rigorous check on their financial credibility.
            </p>
            <p>
              Once inside, you unlock an ecosystem that values your integrity. Gain access to premium experiences, high-value rewards, and financial services that respect your status.
            </p>
          </motion.div>

          {/* Key pillars grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-md"
          >
            <div className="p-4 border-l-2 border-cred-accentTeal bg-white/[0.01]">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">01. EXCLUSIVITY</h4>
              <p className="text-xs text-cred-secondary font-light">Available only for high-scoring individuals.</p>
            </div>
            <div className="p-4 border-l-2 border-cred-accentPink bg-white/[0.01]">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1">02. REWARDS</h4>
              <p className="text-xs text-cred-secondary font-light">Earn coins & unlock premium luxury brand access.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
