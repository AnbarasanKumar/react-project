import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Lock, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-cred-accentTeal" />,
      title: 'bank-grade encryption',
      desc: 'your financial data is fully encrypted with AES-256 standard, keeping all details safe.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cred-accentGreen" />,
      title: 'pci-dss compliant',
      desc: 'validated Level 1 service provider ensuring maximum safety across card payment integrations.'
    },
    {
      icon: <EyeOff className="w-5 h-5 text-cred-accentPink" />,
      title: 'zero spam policy',
      desc: 'your data belongs strictly to you. we never share or monetize your transaction histories.'
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-[#070707] px-6 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cred-accentGreen/10 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-white/5 pointer-events-none -z-10" />
      
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Text Details */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-cred-accentGreen uppercase tracking-widest text-sm font-bold mb-4"
          >
            security & privacy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-8"
          >
            we protect your money <br />
            like it's our own.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cred-secondary text-base sm:text-lg font-light leading-relaxed max-w-xl mb-12"
          >
            security is not a feature at CRED. It is the core architecture. Every payment transaction, bank verify statement, and credit check is secured by multiple defense layers.
          </motion.p>

          {/* Pillars List */}
          <div className="space-y-6 w-full max-w-lg">
            {securityPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4 items-start text-left bg-white/[0.01] p-5 rounded-xl border border-white/[0.02]"
              >
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-1">{pillar.title}</h4>
                  <p className="text-cred-secondary text-xs font-light leading-normal">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Animated Lock Visual */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-[#0f0f0f] border border-white/5 flex flex-col justify-center items-center shadow-2xl overflow-hidden"
          >
            {/* Background grid */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
            
            {/* Animated locks rings */}
            <div className="absolute w-[200px] h-[200px] rounded-full border border-cred-accentGreen/20 flex items-center justify-center animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[150px] h-[150px] rounded-full border border-dashed border-cred-accentGreen/10 animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Big Lock Shield */}
            <motion.div
              className="relative w-24 h-28 bg-[#1a1a1a] border border-white/10 rounded-2xl flex flex-col justify-center items-center shadow-2xl z-10"
              whileHover={{ scale: 1.05 }}
            >
              {/* Shackle */}
              <div className="absolute -top-10 w-12 h-14 border-4 border-white/20 border-b-0 rounded-t-full pointer-events-none" />
              
              {/* Shield details */}
              <ShieldCheck className="w-10 h-10 text-cred-accentGreen" />
            </motion.div>

            <span className="text-[10px] tracking-[0.3em] font-black uppercase text-cred-accentGreen mt-6 z-10 animate-pulse">
              system secure
            </span>

            {/* Glowing bottom badge */}
            <div className="absolute bottom-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-cred-accentGreen/10 border border-cred-accentGreen/20">
              <CheckCircle className="w-3.5 h-3.5 text-cred-accentGreen" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-cred-accentGreen">100% Safe Payments</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Security;
