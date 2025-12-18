import React from 'react';

const MobilePricingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Datalog Pricing</h2>
        <div className="size-10"></div> {/* Spacer for visual balance */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto px-4 pb-12 pt-6">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-2">
            Unlock the power of AI
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Choose the plan that fits your data needs.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-8">
          <div className="flex h-12 w-full max-w-[320px] items-center rounded-full bg-surface-darker border border-gray-800 p-1 relative">
            <label className="flex-1 relative z-10 cursor-pointer text-center h-full flex items-center justify-center rounded-full transition-all duration-200 ease-out has-[:checked]:bg-surface-dark has-[:checked]:text-white has-[:checked]:shadow-sm text-gray-500 hover:text-gray-300">
              <span className="text-sm font-semibold">Monthly</span>
              <input checked name="billing" type="radio" value="monthly" className="sr-only" />
            </label>
            <label className="flex-1 relative z-10 cursor-pointer text-center h-full flex items-center justify-center rounded-full transition-all duration-200 ease-out has-[:checked]:bg-surface-dark has-[:checked]:text-white has-[:checked]:shadow-sm text-gray-500 hover:text-gray-300">
              <span className="text-sm font-semibold flex items-center gap-1">
                Yearly
                <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">-20%</span>
              </span>
              <input name="billing" type="radio" value="yearly" className="sr-only" />
            </label>
          </div>
        </div>

        {/* Pricing Cards Stack */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col p-6 rounded-2xl bg-surface-dark border border-gray-800 transition-transform active:scale-[0.99]">
<div className="mb-4">
<h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Starter</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">$0</span>
<span className="text-gray-500 text-sm font-medium">/mo</span>
</div>
<p className="text-gray-400 text-sm mt-2">Perfect for hobbyists exploring AI models.</p>
</div>
<ul className="flex flex-col gap-3 mb-6">
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        5 Data Projects
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        Community Support
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        Basic Analytics
                    </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-surface-darker hover:bg-gray-800 border border-gray-700 text-white font-semibold text-sm transition-colors">
                    Start Free
                </button>
</div>
<div className="relative flex flex-col p-6 rounded-2xl bg-[#151a25] border border-primary shadow-[0_0_40px_-10px_rgba(19,91,236,0.3)] ring-1 ring-primary/20 overflow-hidden group">
<div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="mb-4 relative z-10">
<div className="flex justify-between items-center mb-1">
<h3 className="text-primary text-sm font-bold uppercase tracking-wider">Pro</h3>
<span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">Most Popular</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">$29</span>
<span className="text-gray-400 text-sm font-medium">/mo</span>
</div>
<p className="text-gray-300 text-sm mt-2">For growing teams needing raw power.</p>
</div>
<ul className="flex flex-col gap-3 mb-6 relative z-10">
<li className="flex items-center gap-3 text-sm text-white">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Unlimited Projects
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Priority Support (24/7)
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        Advanced Analytics &amp; Export
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                        API Access (10k req/mo)
                    </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] relative z-10">
                    Get Started
                </button>
</div>
<div className="flex flex-col p-6 rounded-2xl bg-surface-dark border border-gray-800 transition-transform active:scale-[0.99]">
<div className="mb-4">
<h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Enterprise</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<p className="text-gray-400 text-sm mt-2">No limits, full security &amp; compliance.</p>
</div>
<ul className="flex flex-col gap-3 mb-6">
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        Dedicated Account Manager
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        SSO Integration (SAML)
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        On-premise Deployment
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="material-symbols-outlined text-gray-500 text-[20px]">check</span>
                        Custom SLA
                    </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-transparent hover:bg-surface-darker border border-primary/50 text-primary font-semibold text-sm transition-colors">
                    Contact Sales
                </button>
</div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6 px-2">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            <div className="border-b border-gray-800 pb-4 px-2">
<button className="flex w-full items-center justify-between text-left group">
<span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">Can I cancel my subscription?</span>
<span className="material-symbols-outlined text-gray-500">add</span>
</button>
</div>
<div className="border-b border-gray-800 pb-4 px-2">
<button className="flex w-full items-center justify-between text-left group">
<span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">Is there a free trial for Pro?</span>
<span className="material-symbols-outlined text-gray-500">add</span>
</button>
</div>
<div className="border-b border-gray-800 pb-4 px-2">
<button className="flex w-full items-center justify-between text-left group">
<span className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">Do you offer discounts for students?</span>
<span className="material-symbols-outlined text-gray-500">add</span>
</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePricingPage;
