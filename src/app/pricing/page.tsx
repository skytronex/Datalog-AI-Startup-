import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 relative min-h-screen pb-20">
        <div className="hero-bg-effect dark:block hidden"></div>
        <div className="absolute inset-0 grid-bg z-0 pointer-events-none h-[80vh]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              Choose the plan that fits your data needs. Scale seamlessly as you grow with our semantic data layer.
            </p>
            <div className="flex items-center justify-center gap-3 select-none">
              <span className="text-sm font-medium text-white">Monthly</span>
              <div className="relative inline-block w-12 mr-2 align-middle transition duration-200 ease-in cursor-pointer">
                <div className="block w-12 h-7 rounded-full bg-gray-800 border border-white/10"></div>
                <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">Yearly <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded ml-1 font-bold uppercase tracking-wide">Save 20%</span></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
<div className="glass-panel rounded-2xl p-6 lg:p-8 flex flex-col h-full hover:bg-white/[0.02] transition-colors relative group">
<div className="mb-6">
<h3 className="text-lg font-bold text-white mb-2">Starter</h3>
<p className="text-sm text-gray-400">Perfect for individuals and hobby projects.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white">$0</span>
<span className="text-gray-500 font-medium">/mo</span>
</div>
<button className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all mb-8 hover:border-white/20">
                    Get Started
                </button>
<div className="space-y-4 flex-1 border-t border-white/5 pt-6">
<div className="flex items-start gap-3">
<span className="material-icons-round text-gray-500 text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">5GB Vector Storage</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-gray-500 text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">10k Monthly Queries</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-gray-500 text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Community Support</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-gray-500 text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">1 Project</span>
</div>
</div>
</div>
<div className="glass-panel-highlight rounded-2xl p-6 lg:p-8 flex flex-col h-full transform md:-translate-y-4 relative z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent-purple text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-lg shadow-primary/25 border border-white/20">
                    Most Popular
                </div>
<div className="mb-6">
<h3 className="text-lg font-bold text-white mb-2">Pro</h3>
<p className="text-sm text-gray-300">For growing startups and serious developers.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white">$49</span>
<span className="text-gray-500 font-medium">/mo</span>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium transition-all shadow-lg shadow-primary/25 mb-8 transform hover:scale-[1.02] border border-primary-dark">
                    Get Started
                </button>
<div className="space-y-4 flex-1 border-t border-white/10 pt-6">
<div className="flex items-start gap-3">
<span className="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
<span className="text-sm text-white font-medium">Everything in Starter, plus:</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">100GB Vector Storage</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">500k Monthly Queries</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Priority Email Support</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-primary text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Advanced Analytics</span>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 lg:p-8 flex flex-col h-full hover:bg-white/[0.02] transition-colors">
<div className="mb-6">
<h3 className="text-lg font-bold text-white mb-2">Enterprise</h3>
<p className="text-sm text-gray-400">For large-scale applications and custom needs.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<button className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all mb-8 hover:border-white/20">
                    Contact Sales
                </button>
<div className="space-y-4 flex-1 border-t border-white/5 pt-6">
<div className="flex items-start gap-3">
<span className="material-icons-round text-accent-purple text-sm mt-0.5">check_circle</span>
<span className="text-sm text-white font-medium">Everything in Pro, plus:</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-accent-purple text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Unlimited Vector Storage</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-accent-purple text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Dedicated Success Manager</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-accent-purple text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">SSO &amp; Audit Logs</span>
</div>
<div className="flex items-start gap-3">
<span className="material-icons-round text-accent-purple text-sm mt-0.5">check_circle</span>
<span className="text-sm text-gray-300">Custom SLAs</span>
</div>
</div>
</div>
</div>
<div className="mt-24 pt-10 border-t border-white/5">
<p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 mb-8">Powering next-gen AI companies</p>
<div className="flex justify-center gap-8 md:gap-16 opacity-40 grayscale overflow-x-auto px-4 no-scrollbar">
<div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">diamond</span> <span className="font-bold text-lg">Gemini</span></div>
<div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">bolt</span> <span className="font-bold text-lg">Spark</span></div>
<div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">layers</span> <span className="font-bold text-lg">Stack</span></div>
<div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">hub</span> <span className="font-bold text-lg">Nexus</span></div>
</div>
</div>
<div className="mt-24 max-w-3xl mx-auto">
<h2 className="font-display text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="glass-panel rounded-xl p-5 cursor-pointer hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium mb-2 flex justify-between items-center">Can I switch plans later? <span className="material-icons-round text-gray-500 text-sm">add</span></h3>
<p className="text-sm text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
</div>
<div className="glass-panel rounded-xl p-5 cursor-pointer hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium mb-2 flex justify-between items-center">What happens if I exceed my query limit? <span className="material-icons-round text-gray-500 text-sm">add</span></h3>
<p className="text-sm text-gray-400">We'll notify you when you reach 80% of your limit. Overage charges are applied at a standard rate per 1k queries.</p>
</div>
<div className="glass-panel rounded-xl p-5 cursor-pointer hover:bg-white/5 transition-colors">
<h3 className="text-white font-medium mb-2 flex justify-between items-center">Do you offer discounts for open source? <span className="material-icons-round text-gray-500 text-sm">add</span></h3>
<p className="text-sm text-gray-400">Absolutely! Contact our team with details about your open source project for a special discount.</p>
</div>
</div>
</div>
</div>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
