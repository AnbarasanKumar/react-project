
import { motion } from 'framer-motion';
import NeoPopButton from '../ui/NeoPopButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cred-bg overflow-hidden px-6 pt-24 pb-16">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cred-accentTeal/15 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-cred-accentPink/10 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-cred-accentGreen/10 blur-[90px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none -z-20" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cred-accentGreen animate-ping" />
            <span className="text-xs uppercase tracking-widest font-semibold text-cred-accentGreen">
              exclusively for credit worthy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-gradient-white-grey mb-8 font-sans"
          >
            rewards for paying <br />
            <span className="text-white relative">
              credit card bills
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-gradient-to-r from-cred-accentTeal to-cred-accentPink rounded-full opacity-60" />
            </span> <br />
            on time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-cred-secondary max-w-xl mb-12 font-light leading-relaxed"
          >
            join 45M+ members who save money, track credit score, and earn premium cashback & rewards on every single bill payment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <NeoPopButton variant="teal" onClick={() => document.getElementById('features')?.scrollIntoView()}>
              Explore Features
            </NeoPopButton>
            <NeoPopButton variant="flatWhite" onClick={() => document.getElementById('neopop-showcase')?.scrollIntoView()}>
              Try NeoPOP UI
            </NeoPopButton>
          </motion.div>
        </div>

        {/* Visual Premium Cards */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[450px] w-full mt-10 lg:mt-0">
          {/* Neon rings in background */}
          <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute w-[450px] h-[450px] border border-white/[0.02] rounded-full pointer-events-none" />
          
          {/* Card 1: Gold Card */}
          <motion.div
            initial={{ opacity: 0, rotate: -25, x: -60, y: 40 }}
            animate={{ opacity: 1, rotate: -15, x: -40, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[240px] h-[360px] bg-gradient-to-br from-[#ffe082]/10 to-[#ffb300]/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-float-slow cursor-grab active:cursor-grabbing"
            style={{ zIndex: 10 }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest text-[#ffb300] font-black">metal</span>
                <span className="w-8 h-8 rounded bg-gradient-to-r from-amber-200 to-yellow-600 opacity-60" />
              </div>
              <div>
                <div className="w-10 h-7 bg-white/10 rounded-md mb-6 border border-white/10" />
                <div className="space-y-1">
                  <div className="text-[10px] tracking-widest uppercase text-white/40">member status</div>
                  <div className="text-sm font-bold text-white tracking-widest">VIP MEMBER</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Black Premium Card */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, x: 20, y: 50 }}
            animate={{ opacity: 1, rotate: 12, x: 50, y: -20 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[240px] h-[360px] bg-[#111111] border-2 border-white/10 rounded-2xl p-6 shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] animate-float-medium cursor-grab active:cursor-grabbing"
            style={{ zIndex: 20, animationDelay: '1s' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest text-white/50 font-black">black</span>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cred-accentPink" />
                </div>
              </div>
              <div>
                <div className="w-10 h-7 bg-white/15 rounded-md mb-6 border border-white/10" />
                <div className="space-y-1">
                  <div className="text-[10px] tracking-widest uppercase text-white/40">card number</div>
                  <div className="text-sm font-mono text-white tracking-widest">**** 9840</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Neon Mint Card (Center foreground) */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, y: 100 }}
            animate={{ opacity: 1, rotate: -2, y: 10 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[240px] h-[360px] bg-gradient-to-br from-cred-accentTeal/20 to-cred-accentPink/5 border-2 border-white/20 rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-float-slow cursor-grab active:cursor-grabbing"
            style={{ zIndex: 30, animationDelay: '2s' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest text-cred-accentTeal font-black">cred.pay</span>
                <span className="text-xs font-bold text-white/80">CRED</span>
              </div>
              <div className="w-12 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <div className="w-6 h-4 bg-[#ffd600]/60 rounded-sm" />
              </div>
              <div>
                <div className="space-y-1">
                  <div className="text-[10px] tracking-widest uppercase text-white/40">exclusive club</div>
                  <div className="text-base font-bold text-white tracking-widest uppercase">MEMBER SELECT</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
