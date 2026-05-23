
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { 
  CreditCard, 
  Gift, 
  TrendingUp, 
  Wallet, 
  Coins, 
  CircleDollarSign 
} from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      id: 'cc-pay',
      icon: <CreditCard className="w-8 h-8 text-cred-accentTeal" />,
      title: 'Credit Card Bill Payments',
      description: 'Pay bills for any credit card instantly. Get instant confirmation, tracking updates, and credit limit restoration alerts.',
      glow: 'teal'
    },
    {
      id: 'rewards',
      icon: <Gift className="w-8 h-8 text-cred-accentPink" />,
      title: 'Exclusive Rewards',
      description: 'Claim premium rewards from high-end partner brands. Trade your CRED coins for experiences, items, and mystery jackpots.',
      glow: 'pink'
    },
    {
      id: 'credit-score',
      icon: <TrendingUp className="w-8 h-8 text-cred-accentGreen" />,
      title: 'Credit Score Tracking',
      description: 'Monitor your Experian and CRIF credit scores regularly. Get smart alerts on score changes, late fees, and credit utilization ratios.',
      glow: 'green'
    },
    {
      id: 'upi-pay',
      icon: <Wallet className="w-8 h-8 text-white" />,
      title: 'Seamless UPI Payments',
      description: 'Experience lightning-fast UPI transfers with robust safety layers. Send money, scan QR codes, and pay directly from bank accounts.',
      glow: 'white'
    },
    {
      id: 'coins',
      icon: <Coins className="w-8 h-8 text-cred-accentYellow" />,
      title: 'CRED Coins',
      description: 'Earn 1 CRED coin for every rupee paid on bills. Accumulate coins and burn them to win cashback or access exclusive flash sales.',
      glow: 'gold'
    },
    {
      id: 'cashback',
      icon: <CircleDollarSign className="w-8 h-8 text-cred-accentPink" />,
      title: 'Guaranteed Cashback',
      description: 'Get assured cashbacks directly in your credit card balance when you pay bills. Watch card balances decrease with every cycle.',
      glow: 'pink'
    }
  ];

  // Container motion variables
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="features" className="py-28 bg-cred-bg px-6 relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cred-accentTeal/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] font-black text-cred-accentTeal mb-4"
          >
            our features
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight"
          >
            more ways to simplify your financial life.
          </motion.h3>
        </div>

        {/* Bento/Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feat) => (
            <motion.div key={feat.id} variants={itemVariants}>
              <GlassCard 
                glowColor={feat.glow} 
                className="h-full flex flex-col justify-between min-h-[260px] border border-white/5 bg-cred-card/40"
              >
                <div>
                  <div className="mb-6 w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{feat.title}</h4>
                  <p className="text-cred-secondary text-sm font-light leading-relaxed">{feat.description}</p>
                </div>
                
                {/* Subtle detail arrow in NeoPOP hint style */}
                <div className="mt-8 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                    <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
