import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Star } from 'lucide-react';

// Lightweight Viewport-triggered Count Up Component
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const totalFrames = Math.round(duration / 16); // ~60fps
        const increment = end / totalFrames;
        let frame = 0;

        const timer = setInterval(() => {
          frame++;
          start += increment;
          if (frame >= totalFrames) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef} className="font-sans font-black tabular-nums">{count.toLocaleString()}{suffix}</span>;
};

const Testimonials = () => {
  return (
    <section className="py-28 bg-cred-bg px-6 relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cred-accentPink/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cred-accentTeal/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-black text-cred-accentGreen mb-4">ratings & statistics</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            trusted by millions. rated by experts.
          </h3>
        </div>

        {/* Counters & Ratings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {/* Member Count */}
          <GlassCard glowColor="teal" className="flex flex-col justify-center items-center py-10 bg-cred-card/30 border border-white/5">
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-3">
              <CountUp end={45} suffix="M+" />
            </div>
            <p className="text-cred-secondary text-xs uppercase tracking-widest font-semibold">Active Members</p>
          </GlassCard>

          {/* App Store Ratings */}
          <GlassCard glowColor="pink" className="flex flex-col justify-center items-center py-10 bg-cred-card/30 border border-white/5">
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-gradient-purple-pink mb-3 flex items-center gap-1 justify-center">
              <span>4.8</span>
              <span className="text-lg text-cred-accentPink">/5</span>
            </div>
            <div className="flex gap-1 mb-3 text-cred-accentPink">
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
            </div>
            <p className="text-cred-secondary text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22.05 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22 9.09,22.05C7.79,22.1 6.8,20.77 5.96,19.56C4.25,17.08 2.94,12.5 4.69,9.47C5.56,7.96 7.12,7 8.79,7C10.06,7 11.24,7.88 12.03,7.88C12.81,7.88 14.24,6.86 15.77,7C16.41,7.03 18.21,7.26 19.41,9C19.32,9.06 17.09,10.36 17.12,13C17.15,16.14 19.82,17.2 19.85,17.21C19.83,17.28 19.42,18.66 18.71,19.5M15.97,4.86C16.63,4.07 17.07,2.97 16.95,1.87C16,1.9 14.9,2.47 14.24,3.24C13.67,3.9 13.18,5.02 13.35,6.1C14.4,6.18 15.4,5.57 15.97,4.86Z" />
              </svg>
              App Store rating
            </p>
          </GlassCard>

          {/* Play Store Ratings */}
          <GlassCard glowColor="gold" className="flex flex-col justify-center items-center py-10 bg-cred-card/30 border border-white/5">
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-gradient-gold mb-3 flex items-center gap-1 justify-center">
              <span>4.7</span>
              <span className="text-lg text-cred-accentYellow">/5</span>
            </div>
            <div className="flex gap-1 mb-3 text-cred-accentYellow">
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
            </div>
            <p className="text-cred-secondary text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
              </svg>
              Play Store rating
            </p>
          </GlassCard>
        </div>

        {/* Member Quotes Slider/Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-[#111111]/80 border border-white/5 rounded-2xl flex flex-col justify-between"
          >
            <p className="text-white text-base font-light italic leading-relaxed mb-6">
              "this is a product after my own heart. in the world of cluttered finance apps, CRED stands out with its gorgeous, smooth layouts and clear value. paying bills has become something I look forward to."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cred-accentTeal to-cred-accentPink" />
              <div>
                <h5 className="text-sm font-bold text-white">Rohit Sharma</h5>
                <p className="text-[10px] text-cred-secondary uppercase tracking-widest">CRED Member since 2021</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-[#111111]/80 border border-white/5 rounded-2xl flex flex-col justify-between"
          >
            <p className="text-white text-base font-light italic leading-relaxed mb-6">
              "absolutely love the NeoPOP interface! it is so tactile, responsive, and completely shifts standard expectations of how banking apps behave. the cashback rewards are also credit card statements' best friends."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cred-accentGreen to-cred-accentYellow" />
              <div>
                <h5 className="text-sm font-bold text-white">Aditi Nair</h5>
                <p className="text-[10px] text-cred-secondary uppercase tracking-widest">CRED Member since 2023</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
