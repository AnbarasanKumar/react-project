

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'about us', url: '#' },
      { label: 'careers', url: '#' },
      { label: 'press', url: '#' },
      { label: 'trust & security', url: '#' }
    ],
    products: [
      { label: 'CRED pay', url: '#' },
      { label: 'credit card payment', url: '#' },
      { label: 'credit score check', url: '#' },
      { label: 'rewards store', url: '#' }
    ],
    legal: [
      { label: 'privacy policy', url: '#' },
      { label: 'terms & conditions', url: '#' },
      { label: 'data protection', url: '#' },
      { label: 'security disclosure', url: '#' }
    ]
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.05] px-6 pt-12 pb-8 md:pt-20 md:pb-12 font-sans">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        {/* Column 1: Brand & Logo */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white border border-white flex items-center justify-center font-black text-black text-sm">
              C
            </div>
            <span className="text-xl font-black tracking-[0.2em] text-white">CRED</span>
          </div>
          <p className="text-cred-secondary text-sm font-light leading-relaxed max-w-sm">
            CRED is a members-only club that rewards individuals for paying their credit card bills on time. Join our community to simplify payments and unlock luxury rewards.
          </p>
          
          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-md bg-[#121212] border border-white/5 flex items-center justify-center text-cred-secondary hover:text-white hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-md bg-[#121212] border border-white/5 flex items-center justify-center text-cred-secondary hover:text-white hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-md bg-[#121212] border border-white/5 flex items-center justify-center text-cred-secondary hover:text-white hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-md bg-[#121212] border border-white/5 flex items-center justify-center text-cred-secondary hover:text-white hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-md bg-[#121212] border border-white/5 flex items-center justify-center text-cred-secondary hover:text-white hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Company
          </h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="text-cred-secondary hover:text-white text-sm font-light capitalize transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Products */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Products
          </h4>
          <ul className="space-y-2">
            {footerLinks.products.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="text-cred-secondary hover:text-white text-sm font-light capitalize transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Resources & Legal
          </h4>
          <ul className="space-y-2">
            {footerLinks.legal.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="text-cred-secondary hover:text-white text-sm font-light capitalize transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/5 max-w-6xl w-full mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cred-muted">
        <span>© {new Date().getFullYear()} CRED clone. Built with React and Tailwind CSS. All rights reserved.</span>
        <span>Made for demonstration purposes only.</span>
      </div>
    </footer>
  );
};

export default Footer;
