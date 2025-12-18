import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="pt-24 px-4 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 text-xs font-medium text-blue-600 dark:text-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Datalog v2.0 is now live
            <span className="material-icons-round text-[10px]">arrow_forward</span>
          </div>
        </div>
        <section className="relative pt-8 pb-16 px-4 overflow-hidden">
          <div className="hero-bg-effect dark:block hidden"></div>
          <div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
          <div className="relative z-10 max-w-lg mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              AI-Powered Databases Built for <span className="text-primary">Infinite Scale</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Transform your raw data into actionable intelligence. Deploy in seconds, scale automatically, and query with natural language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative mt-12 mx-auto max-w-sm h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-accent-purple/30 rounded-full blur-2xl"></div>
            <img alt="Abstract data visualization" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhb7tlwyHdbyXREds8rKhWh7ClfKuQNXVcML8di9IWBEhVD1IzNl7ntbE2ExsP-AFwDP-EeE5fKLXFuOSxbhNOslL_CcuiPkpoCDe6zN_tjuvf4Kh7jOBK6DWw3WK7oFq4IbDGsLaCz_XsqsMv5GoJDM-2CmdsVE_Ngp4QZiRtjl6DEgiLyJowaafE-OiAKvJ3w5pkpx_QxkLA-2LG2AIiFXr8XH3sa5lUFMS28RvQBNFwjZN0MoMP8zEIn4slbj0cMYY8cWzq8NI"/>
            <div className="absolute bottom-4 left-4 right-4 z-20 glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <div className="h-1.5 w-24 bg-white/20 rounded mb-1.5"></div>
                <div className="h-1.5 w-16 bg-white/10 rounded"></div>
              </div>
              <span className="text-xs text-white/60 font-mono">99.9%</span>
            </div>
          </div>
        </section>
        <section className="border-y border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-surface-dark py-8 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 mb-6">Trusted by innovative teams</p>
          <div className="flex justify-center gap-8 opacity-50 grayscale overflow-x-auto px-4 no-scrollbar">
            <div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">diamond</span> <span className="font-bold text-lg">Gemini</span></div>
            <div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">bolt</span> <span className="font-bold text-lg">Spark</span></div>
            <div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">layers</span> <span className="font-bold text-lg">Stack</span></div>
            <div className="flex items-center gap-2 shrink-0"><span className="material-icons-round text-2xl">hub</span> <span className="font-bold text-lg">Nexus</span></div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white dark:bg-background-dark">
          <div className="max-w-lg mx-auto mb-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4 dark:text-white">Streamline Your Workflow With Our AI Platform</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to manage complex data structures without the overhead.</p>
          </div>
          <div className="space-y-6 max-w-lg mx-auto">
<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/0 hover:from-primary/20 hover:to-primary/5 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
<div className="relative bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden h-full">
<div className="h-48 bg-gray-100 dark:bg-black/50 border-b border-gray-200 dark:border-white/5 p-4 relative flex items-center justify-center overflow-hidden">
<div className="w-full max-w-[85%] bg-gray-900 rounded-lg p-3 shadow-xl border border-white/10 font-mono text-[10px] text-gray-300">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<p><span className="text-purple-400">const</span> <span className="text-blue-400">aiModel</span> = <span className="text-yellow-300">await</span> init();</p>
<p className="mt-1 text-gray-500">// Processing data...</p>
<div className="mt-2 flex items-center gap-2 bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30 text-blue-200 w-fit">
<span className="material-icons-round text-[10px]">check_circle</span> Optimized
                            </div>
</div>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-primary">
<span className="material-icons-round">psychology</span>
</div>
<h3 className="text-lg font-bold mb-2 dark:text-white">Collaborative Intelligence</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Seamlessly merge human insight with AI processing power for faster decisions.</p>
</div>
</div>
</div>
<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/0 hover:from-accent-purple/20 hover:to-accent-purple/5 transition-all duration-500">
<div className="relative bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden h-full">
<div className="h-48 bg-gray-100 dark:bg-black/50 border-b border-gray-200 dark:border-white/5 p-4 relative flex items-center justify-center">
<div className="w-32 h-40 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200 dark:border-white/10 p-3 flex flex-col items-center justify-center relative transform rotate-[-5deg]">
<div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-2 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73stRlEV0el9ZFaZwToOKYdlTIggE_EpjpRBFvz_-4ngUuFMJpBPMTCvplQpJ2ixKc22iMRSma6yvMlEwI65QpupJeiYPUrBSf-RmCBcbpJlv6s1svnJA1Vg7DZh1ZgChXkiSskOgqiaKURVwz598Bs9G38pxnuCS2aqGmovGrhY99RJ3NdXDzrSMdYij2IjDWteBrWQ-Qo3-Qjum8Bxl1uq23GlARn0xHlJIFIztqh8w-q3-y-sB4TCFVuTT0EOv1ObahUJt4Os"/>
</div>
<div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
<div className="h-1.5 w-10 bg-gray-100 dark:bg-gray-800 rounded"></div>
<div className="mt-3 w-full h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/20">
<span className="material-icons-round text-green-500 text-sm">fingerprint</span>
</div>
</div>
<div className="w-32 h-40 bg-white/50 dark:bg-[#1a1a1a]/50 rounded-xl border border-gray-200 dark:border-white/5 absolute transform rotate-[5deg] -z-10"></div>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 text-accent-purple">
<span className="material-icons-round">security</span>
</div>
<h3 className="text-lg font-bold mb-2 dark:text-white">Secure Authentication</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Enterprise-grade security built-in from day one. SSO, MFA, and more.</p>
</div>
</div>
</div>
<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/0 hover:from-green-500/20 hover:to-green-500/5 transition-all duration-500">
<div className="relative bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden h-full">
<div className="h-48 bg-gray-100 dark:bg-black/50 border-b border-gray-200 dark:border-white/5 p-4 relative flex items-center justify-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg">
<span className="material-icons-round text-gray-400">dns</span>
</div>
<div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-primary to-gray-300 w-16 relative">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
</div>
<div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg">
<span className="material-icons-round text-primary">cloud_done</span>
</div>
</div>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-500">
<span className="material-icons-round">rocket_launch</span>
</div>
<h3 className="text-lg font-bold mb-2 dark:text-white">Easy Deployment</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Push to production with a single git commit. Zero downtime migrations.</p>
</div>
</div>
</div>
<div className="group relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/0 hover:from-orange-500/20 hover:to-orange-500/5 transition-all duration-500">
<div className="relative bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden h-full">
<div className="h-48 bg-gray-100 dark:bg-black/50 border-b border-gray-200 dark:border-white/5 p-4 relative flex items-center justify-center">
<div className="w-full max-w-[80%] h-24 flex items-end justify-between gap-1 px-4">
<div className="w-full bg-gray-300 dark:bg-gray-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-gray-300 dark:bg-gray-800 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-primary/40 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-primary/60 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-primary rounded-t-sm h-[85%] relative group-hover:scale-y-110 transition-transform origin-bottom">
<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100">85%</div>
</div>
<div className="w-full bg-gray-300 dark:bg-gray-800 rounded-t-sm h-[60%]"></div>
</div>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 text-orange-500">
<span className="material-icons-round">insights</span>
</div>
<h3 className="text-lg font-bold mb-2 dark:text-white">Visitor Insights</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Real-time analytics dashboard to track performance and user behavior.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 px-4 relative overflow-hidden bg-gray-50 dark:bg-black">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
<div className="max-w-lg mx-auto relative z-10">
<div className="mb-12">
<h2 className="font-display text-3xl font-bold mb-4 dark:text-white leading-tight">
                    Transform Your Business With <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">Intuitive AI Solutions</span>
</h2>
<p className="text-gray-600 dark:text-gray-400">
                    Don't just store data—understand it. Datalog creates a semantic layer over your information.
                </p>
</div>
<div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden mb-8">
<div className="p-6">
<h3 className="text-xl font-bold mb-2 dark:text-white">Build Smarter, Scale Faster</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Automated indexing means you never have to worry about query optimization again.</p>
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
<img alt="Dashboard Interface" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUPeOy3Z4Iq3eJPXAN8cjnw1KxGvGWg6WUNviZoWCf9Ilm8YDTT_HP-gdv7elIkqo9UC2Fn_9qJLIsldOJAknNnlpiavwQPQ2e6_KHODdZf-M5CtZVEsc5CJhwi92D5dEdZudblsXVAZHMdJLRdQK1GARSCaENqlCvOaXZ49x75qTJJPWarZgrYlqGF4x1b9hPgDwQlDlCmjGj9fZIca-7nWNmOu2uBOiC3MHP5xYnCV-NwztbiOxCJEJCwHNaXQcf1DfpCBgYv94"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 bg-gray-800/80 backdrop-blur-md rounded-lg p-3 border border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-300">Query Speed</span>
<span className="text-xs text-green-400 font-mono">0.02ms</span>
</div>
<div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[95%]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
<div className="p-6">
<h3 className="text-xl font-bold mb-2 dark:text-white">Seamless Integration</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Connect with your favorite tools in minutes with our extensive library of pre-built connectors.</p>
<div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4">
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transform hover:scale-105 transition-transform">
<span className="material-icons-round text-3xl text-blue-400">code</span>
</div>
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transform translate-y-4 hover:scale-105 transition-transform">
<span className="material-icons-round text-3xl text-yellow-400">storage</span>
</div>
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transform -translate-y-4 hover:scale-105 transition-transform">
<span className="material-icons-round text-3xl text-green-400">api</span>
</div>
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm transform hover:scale-105 transition-transform">
<span className="material-icons-round text-3xl text-purple-400">webhook</span>
</div>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
<line stroke="white" stroke-dasharray="4 4" stroke-width="1" x1="30%" x2="70%" y1="50%" y2="50%"></line>
</svg>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 px-4 bg-background-dark text-white border-t border-white/5">
<div className="max-w-lg mx-auto">
<h2 className="font-display text-2xl font-bold mb-8 text-center">Practical Use Cases That Drive Results</h2>
<div className="space-y-4">
<div className="group border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="font-medium text-lg text-gray-300 group-hover:text-primary transition-colors">Fraud Detection</h3>
<span className="material-icons-round text-gray-500 group-hover:rotate-90 transition-transform">chevron_right</span>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-sm text-gray-500 mt-2">Identify anomalies in transaction data in real-time using our specialized graph algorithms.</p>
<img alt="Fraud detection" className="mt-3 rounded-lg opacity-60 w-full h-32 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr0mllB_cgJ3FvKs-QF0pSxpEAc-0Maz32qaIyr88BHJYIj0M22XJGLeKe-zKrkJLS38DCXQdjZaMXxeEz-ZvffjM8iufmhTyCPaRd3oUuBp5er7VJHwfZQYqs3EfUvc0AuBLT4JWbd7ktku41B_CwlYH3tonSFQaDGoQatVM6gjJpmLbVlb1gUhEETQ9ZmGht8_0ngJWcepplU0r8YKS-kGb60fXGXSBpdq9tK4fJkB-UfdXpa2chuyvX9JrBzRKo8ls-rbUAvw0"/>
</div>
</div>
<div className="group border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="font-medium text-lg text-gray-300 group-hover:text-primary transition-colors">Customer Insights</h3>
<span className="material-icons-round text-gray-500">chevron_right</span>
</div>
</div>
<div className="group border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="font-medium text-lg text-gray-300 group-hover:text-primary transition-colors">Predictive Maintenance</h3>
<span className="material-icons-round text-gray-500">chevron_right</span>
</div>
</div>
<div className="group border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="font-medium text-lg text-gray-300 group-hover:text-primary transition-colors">Supply Chain Optimization</h3>
<span className="material-icons-round text-gray-500">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 px-4 relative overflow-hidden bg-black">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple rounded-full blur-[100px] opacity-20"></div>
</div>
<div className="relative z-10 max-w-lg mx-auto text-center">
<span className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="material-icons-round text-yellow-400">star</span>
<span className="material-icons-round text-yellow-400">star</span>
<span className="material-icons-round text-yellow-400">star</span>
<span className="material-icons-round text-yellow-400">star</span>
<span className="material-icons-round text-yellow-400">star</span>
</span>
<h2 className="font-display text-3xl font-bold text-white mb-6">"Datalog transformed how we handle our massive datasets. It's not just a database; it's our competitive advantage."</h2>
<div className="flex items-center justify-center gap-4 mb-12">
<img alt="CEO" className="w-12 h-12 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFzt4UWrUH9IZicC_iuMTC-mSaoyYfT-DfN7FtRxYr8kFCKalVlxm5oJ_qpqvlM28-60F9Txr8DAkpCinDWeOzy6Jpmhaeqv1PA8z_3tSQvtHuccCoK-uNqCNPHUS-1ymya7IBODkveApPsRRScSoj2bw0jNh3jfGSrFqYc5KUKXZlGt9kUVEU72ZLqUd1w-HtRLJrcu1SOigdBmcJQTrBIXzAA1a6y65Lom9nJ4SUPVkKe3lYSI7jvx0M8HAJtMitr-JZnFyqTWQ"/>
<div className="text-left">
<div className="text-white font-bold">James Walker</div>
<div className="text-gray-400 text-sm">CTO, FinTech Corp</div>
</div>
</div>
<div className="p-8 rounded-2xl glass-panel border border-white/10">
<h3 className="text-xl text-white font-bold mb-2">Ready to scale?</h3>
<p className="text-gray-400 mb-6">Join the waitlist for early access to our enterprise features.</p>
<form className="flex flex-col gap-3">
<input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Enter your work email" type="email"/>
<button className="w-full px-4 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors" type="submit">
                        Request Access
                    </button>
</form>
</div>
</div>
</section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
