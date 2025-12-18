import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="relative pt-24 pb-16 px-4">
        <div className="hero-bg-effect dark:block hidden"></div>
        <div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12 text-center sm:text-left">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
              Insights &amp; <span className="text-primary">Engineering</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Deep dives into database architecture, AI infrastructure, and the future of data at scale.
            </p>
          </div>
          <div className="mb-16 rounded-2xl overflow-hidden glass-panel border border-white/10 group cursor-pointer relative shadow-2xl transition-transform hover:scale-[1.01] duration-500">
<div className="grid grid-cols-1 lg:grid-cols-2 h-full">
<div className="relative h-64 lg:h-auto overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent lg:bg-gradient-to-r z-10 opacity-90"></div>
<img alt="Featured Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhb7tlwyHdbyXREds8rKhWh7ClfKuQNXVcML8di9IWBEhVD1IzNl7ntbE2ExsP-AFwDP-EeE5fKLXFuOSxbhNOslL_CcuiPkpoCDe6zN_tjuvf4Kh7jOBK6DWw3WK7oFq4IbDGsLaCz_XsqsMv5GoJDM-2CmdsVE_Ngp4QZiRtjl6DEgiLyJowaafE-OiAKvJ3w5pkpx_QxkLA-2LG2AIiFXr8XH3sa5lUFMS28RvQBNFwjZN0MoMP8zEIn4slbj0cMYY8cWzq8NI"/>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center relative z-20">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider">Featured</span>
<span className="text-gray-400 text-sm flex items-center gap-1">
<span className="material-icons-round text-sm">schedule</span> 8 min read
                        </span>
</div>
<h2 className="font-display text-3xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">
                        Scaling Vector Search to Billions: Our Journey to 99.99% Availability
                    </h2>
<p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                        When we hit the 100M vector milestone, our existing infrastructure began to show cracks. Here's how we re-architected our indexing engine using Rust and a novel distributed graph approach to achieve sub-millisecond latency at infinite scale.
                    </p>
<div className="flex items-center gap-3">
<img alt="Author" className="w-10 h-10 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFzt4UWrUH9IZicC_iuMTC-mSaoyYfT-DfN7FtRxYr8kFCKalVlxm5oJ_qpqvlM28-60F9Txr8DAkpCinDWeOzy6Jpmhaeqv1PA8z_3tSQvtHuccCoK-uNqCNPHUS-1ymya7IBODkveApPsRRScSoj2bw0jNh3jfGSrFqYc5KUKXZlGt9kUVEU72ZLqUd1w-HtRLJrcu1SOigdBmcJQTrBIXzAA1a6y65Lom9nJ4SUPVkKe3lYSI7jvx0M8HAJtMitr-JZnFyqTWQ"/>
<div>
<div className="text-white font-medium text-sm">Sarah Chen</div>
<div className="text-gray-500 text-xs">Principal Engineer</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-2/3">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-white">Recent Posts</h3>
<div className="flex gap-2">
<button className="p-1 rounded hover:bg-white/10 text-white"><span className="material-icons-round">grid_view</span></button>
<button className="p-1 rounded hover:bg-white/10 text-gray-500"><span className="material-icons-round">list</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<article className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
<div className="h-48 relative overflow-hidden">
<div className="absolute top-4 left-4 z-10">
<span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-accent-purple">Engineering</span>
</div>
<img alt="Post thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUPeOy3Z4Iq3eJPXAN8cjnw1KxGvGWg6WUNviZoWCf9Ilm8YDTT_HP-gdv7elIkqo9UC2Fn_9qJLIsldOJAknNnlpiavwQPQ2e6_KHODdZf-M5CtZVEsc5CJhwi92D5dEdZudblsXVAZHMdJLRdQK1GARSCaENqlCvOaXZ49x75qTJJPWarZgrYlqGF4x1b9hPgDwQlDlCmjGj9fZIca-7nWNmOu2uBOiC3MHP5xYnCV-NwztbiOxCJEJCwHNaXQcf1DfpCBgYv94"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
<span>Oct 24, 2023</span>
<span>•</span>
<span>5 min read</span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                Understanding HNSW: The Algorithm Behind Modern Vector Databases
                            </h4>
<p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                Hierarchical Navigable Small World graphs are efficient, but how do they actually work? We visualize the algorithm step-by-step.
                            </p>
<a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto" href="#">
                                Read Article <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</article>
<article className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
<div className="h-48 relative overflow-hidden bg-gray-900">
<div className="absolute top-4 left-4 z-10">
<span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-green-400">Product</span>
</div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
<span className="material-icons-round text-6xl text-white/10 group-hover:text-green-500/20 transition-colors">rocket_launch</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
<span>Oct 20, 2023</span>
<span>•</span>
<span>3 min read</span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                Introducing Datalog 2.0: Faster, Smarter, and More Secure
                            </h4>
<p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                A complete breakdown of the new features in our latest major release, including real-time replication and RBAC.
                            </p>
<a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto" href="#">
                                Read Article <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</article>
<article className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
<div className="h-48 relative overflow-hidden">
<div className="absolute top-4 left-4 z-10">
<span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-blue-400">AI Research</span>
</div>
<img alt="Post thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr0mllB_cgJ3FvKs-QF0pSxpEAc-0Maz32qaIyr88BHJYIj0M22XJGLeKe-zKrkJLS38DCXQdjZaMXxeEz-ZvffjM8iufmhTyCPaRd3oUuBp5er7VJHwfZQYqs3EfUvc0AuBLT4JWbd7ktku41B_CwlYH3tonSFQaDGoQatVM6gjJpmLbVlb1gUhEETQ9ZmGht8_0ngJWcepplU0r8YKS-kGb60fXGXSBpdq9tK4fJkB-UfdXpa2chuyvX9JrBzRKo8ls-rbUAvw0"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
<span>Oct 15, 2023</span>
<span>•</span>
<span>12 min read</span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                The Economics of Large Language Model Inference
                            </h4>
<p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                Optimizing cost per token without sacrificing latency. We analyze the trade-offs between different hardware configurations.
                            </p>
<a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto" href="#">
                                Read Article <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</article>
<article className="glass-panel rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
<div className="h-48 relative overflow-hidden">
<div className="absolute top-4 left-4 z-10">
<span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-orange-400">Security</span>
</div>
<img alt="Post thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73stRlEV0el9ZFaZwToOKYdlTIggE_EpjpRBFvz_-4ngUuFMJpBPMTCvplQpJ2ixKc22iMRSma6yvMlEwI65QpupJeiYPUrBSf-RmCBcbpJlv6s1svnJA1Vg7DZh1ZgChXkiSskOgqiaKURVwz598Bs9G38pxnuCS2aqGmovGrhY99RJ3NdXDzrSMdYij2IjDWteBrWQ-Qo3-Qjum8Bxl1uq23GlARn0xHlJIFIztqh8w-q3-y-sB4TCFVuTT0EOv1ObahUJt4Os"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
<span>Oct 12, 2023</span>
<span>•</span>
<span>6 min read</span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                Implementing Row-Level Security in Distributed Systems
                            </h4>
<p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                                How to maintain strict access controls in a sharded database environment without performance penalties.
                            </p>
<a className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto" href="#">
                                Read Article <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</article>
</div>
<div className="mt-12 flex justify-center">
<button className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium flex items-center gap-2">
                        Load More Articles
                        <span className="material-icons-round text-sm">expand_more</span>
</button>
</div>
</div>
<aside className="lg:w-1/3 space-y-8">
<div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<span className="material-icons-round text-white">mark_email_unread</span>
</div>
<h3 className="text-xl font-bold text-white mb-2">Join the Newsletter</h3>
<p className="text-sm text-gray-400 mb-6">Get the latest engineering insights and Datalog updates delivered to your inbox weekly.</p>
<form className="space-y-3">
<input className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" placeholder="you@company.com" type="email"/>
<button className="w-full px-4 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors text-sm shadow-lg shadow-blue-500/20" type="submit">
                                Subscribe
                            </button>
</form>
<p className="text-xs text-gray-600 mt-4 text-center">No spam. Unsubscribe anytime.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-white/10">
<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
<span className="material-icons-round text-accent-purple">sell</span> Popular Topics
                    </h3>
<div className="flex flex-wrap gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Engineering</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Artificial Intelligence</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Vector Search</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Tutorials</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Infrastructure</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Security</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 hover:text-white transition-colors" href="#">Open Source</a>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-white/10">
<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
<span className="material-icons-round text-yellow-400">trending_up</span> Trending
                    </h3>
<div className="space-y-4">
<a className="flex gap-3 group" href="#">
<span className="text-2xl font-bold text-white/10 group-hover:text-primary/50 transition-colors">01</span>
<div>
<h5 className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">Migrating from SQL to Vector DBs</h5>
<span className="text-xs text-gray-500">Oct 20 • 4k views</span>
</div>
</a>
<a className="flex gap-3 group" href="#">
<span className="text-2xl font-bold text-white/10 group-hover:text-primary/50 transition-colors">02</span>
<div>
<h5 className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">Best Practices for Semantic Caching</h5>
<span className="text-xs text-gray-500">Oct 18 • 3.2k views</span>
</div>
</a>
<a className="flex gap-3 group" href="#">
<span className="text-2xl font-bold text-white/10 group-hover:text-primary/50 transition-colors">03</span>
<div>
<h5 className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">The State of AI Databases 2024</h5>
<span className="text-xs text-gray-500">Oct 22 • 2.8k views</span>
</div>
</a>
</div>
</div>
</aside>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
