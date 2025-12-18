import React from 'react';

const IntegrationsPage = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-24">
      {/* Ambient Glow Effect */}
      <div className="fixed top-0 left-0 right-0 h-96 bg-primary/10 blur-[100px] pointer-events-none z-0"></div>

      {/* Sticky Header Area */}
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Integrations</h2>
          <div className="flex size-10 items-center justify-center">
            <div className="size-8 rounded-full overflow-hidden bg-gradient-to-br from-primary to-purple-500 border border-white/20">
              <img className="w-full h-full object-cover" alt="User profile avatar gradient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfXVkvWg_hQ95NaDWzeNewUI8YyWSGQrkvDjI6hcZkB-aZMmDl8FtCb2rURd6CHHUiV6WVV2FEPFQEwo9dIABoZGpt2oj4vGj-yTOhsHSigDx3WsR1Z5CDgPjYCR3ZlAtJ2eDCeMRvkUtm9g2dIgyiQ-rG8APe_nDsf_SIN7erHmHSFwQxYUHrupEJeRA2uNB81zAMNjA-ympG3ZvFEViFyLqstEoVejMnfB-A3QnOfEVH2kr1oKx3t7N3lohiUGePKsC3oc3Ob6c"/>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2">
          <label className="flex flex-col w-full">
            <div className="flex w-full items-center rounded-xl h-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700/50 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
              <div className="text-gray-400 flex items-center justify-center pl-4 pr-2">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="flex w-full flex-1 bg-transparent border-none text-gray-900 dark:text-white focus:outline-none placeholder:text-gray-400 text-base font-normal h-full" placeholder="Search tools..." value=""/>
            </div>
          </label>
        </div>

        {/* Scrollable Categories (Chips) */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-transform active:scale-95">
            <p className="text-sm font-bold whitespace-nowrap">All</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors active:scale-95">
<p className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">Analytics</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors active:scale-95">
<p className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">Communication</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors active:scale-95">
<p className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">DevTools</p>
</button>
<button className="flex h-9 shrink-0 items-center justify-center px-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors active:scale-95">
<p className="text-gray-600 dark:text-gray-300 text-sm font-medium whitespace-nowrap">CRM</p>
</button>
        </div>
      </div>

      {/* Main Content Scroll Area */}
      <div className="flex-1 flex flex-col z-10">
        {/* Hero Text */}
        <div className="px-5 pt-6 pb-2">
          <h1 className="text-gray-900 dark:text-white text-[28px] font-bold leading-[1.1] tracking-tight">
            Seamless Integration for <span className="text-primary">Effortless Workflows</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
            Connect your favorite tools to automate data ingestion and supercharge your AI models.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-[#4A154B]/10 flex items-center justify-center p-2">
<img alt="Slack Logo" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFMgUeaO4l17nImvwn7u25mjkVsP25hGeSg2ztc87G_J9yjYFSFkIi_8U5MOecPp1KHN-l5LkW2l_Ere_T24wftgbksnwewN9rCwizfGPT_kbiPlzcycyl9OVRyHsiK8EwVIfQlagGTQajrpD-iQZXQ7Osu0dV3fPwHrPtbz-HU3jRhANKcvVhI3YlepSbLkWcpFrbbzcDOM_AnDB4JYRt01u95TOfYRAoYVYaKLY2jh7pUzo8mUh3u4b8hNcQy__pwht-XHFnva4"/>
</div>
<span className="inline-flex size-6 items-center justify-center rounded-full bg-green-500/10 text-green-500">
<span className="material-symbols-outlined text-[16px] font-bold">check</span>
</span>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Slack</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Real-time team communication and alerts.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white text-xs font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                        Configure
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-gray-900/10 dark:bg-white/10 flex items-center justify-center p-2">
<img alt="GitHub Logo" className="size-8 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhSxq9Qq0luhr4TrK3pcR7aVX_0FrPgi_bM6zh8-JSCuAfjek0eYf72JTaYVmcUrC838n9kPIC3zzfVE1UcDCXOSJd3TsHyqekJPw6du8HcsXfueT_ECntPSgAN6sGr4DJwUhsVOo-Xh0TtkbGMMAaUaGfAxb0d5nuowRm5_XGkpM5gjZPIQg6cQzixENKk07yudVcUQVd8X0dQikHKldxbQ7wV8wKvftkIxKXXNtq9hfBGEiAo7gkekAo_PbQw5dPPSYKS6m0pxA"/>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">GitHub</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Code repositories and issue tracking sync.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-[#0052CC]/10 flex items-center justify-center p-2">
<img alt="Jira Logo" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRf4hyCKhZWnQNnfAqipEFejBWOCueCfnYYX_s0vCFy1cxBcW9-x1xxUxlIG_8bUbAhi0SxrCDCa_RBclcpV-qihv3tEViuo601pJcLC0YqkQ6t-hcOIdrC9Ire1E-GF9GzSEVNlUaDK6xUQaA-kmrluzLwFi4K1pdNtBr5GZvGh-pC2sKlmLB1ATX8D3CrsPKUNzBraPKYdE4Fzy4wZxmgbwD-07nEYiitQmjBszFodhYe-xtUecBdDJ_2HQD91YTvauI6_ScyyE"/>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Jira</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Agile project management and bug tracking.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-[#34A853]/10 flex items-center justify-center p-2">
<span className="material-symbols-outlined text-green-600 text-3xl">table_chart</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Sheets</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Import data directly from spreadsheets.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-gray-900/10 dark:bg-white/10 flex items-center justify-center p-2">
<img alt="Notion Logo" className="size-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRLG2dxrDK3cRmL15b-31sbtbagvl_THHDTLPNsGDnsxeUOHZoEq3cMRS5xXMKWOl627SlPSBuSTb2nocmVfuQaGuTW4UCa3XbcfL7GrMDcwyU4oF99trwSXzTQGljrhRywNeCuA-HCWGIWw-HULh1GVAUvhRMXCd3RHaysynJTVwYFxBn2AhAYtFTYASRsLPeAU1hqtMFwdkGuDKOg-9HYoWTRRrNzdNrNHhzpIWMqVYvbpuSQqhhPU45sYQmK2k-T9-WUXrm4g"/>
</div>
<span className="inline-flex size-6 items-center justify-center rounded-full bg-green-500/10 text-green-500">
<span className="material-symbols-outlined text-[16px] font-bold">check</span>
</span>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Notion</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Sync wikis, notes, and databases.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white text-xs font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                        Configure
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-[#5E6AD2]/10 flex items-center justify-center p-2">
<span className="material-symbols-outlined text-[#5E6AD2] text-3xl">token</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Linear</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Issue tracking for high-performance teams.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-[#00A1E0]/10 flex items-center justify-center p-2">
<img alt="Salesforce Logo" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzTY9UX0iNHv54EmCCECa81zGbN-s8UZxGznvb2TKblGDszkVSiklaEEunly2NiU1xOqD_TBVS0OfwW56-_pCeK3rOQJURwA-bmA0_3ZlwHTnpKxdgXaLcDqnojppiOvSA2kaqXV5RURrixiOJ7RYO6uWtP6sXW9RCIEFq9_1D5JKuDgn0-s3BEkJsM17sBqj2mu9X_amZAuu5QFTgrkPLQmJ5yEI8nXrjNsjBKsL5q0DzaACKw4guAzLKxOtmiS6UmtUFwWkI5OI"/>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Salesforce</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">CRM data integration and customer insights.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
<div className="group relative flex flex-col p-4 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-700 transition-all">
<div className="flex justify-between items-start mb-3">
<div className="size-12 rounded-xl bg-purple-500/10 flex items-center justify-center p-2">
<img alt="Figma Logo" className="size-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ96ApNMJz7zoRUx5hF4GNVdb9kYcALuMiFieAqyo3h8trNUdnWPZS4LjczTe81GV5zRKf_cRk4OAmjKMzQGQjbRAcXKDSCRFieFGD8yCeiZBzNaLjI2VlzvXPoPS3aHEZcQ7jA1ZxxxAXiOZNGfIsWsb1HHx5em-K7c5A0KcGWJ7qzPbbUWUqseHNoFwZOuocj8lGZWDDwIzGk5Z2g8Z-oua6nsgmYlPytzNvVJiBRDv_CeaSbqzd7Ka2GsPAENA_J9HJyON2E-A"/>
</div>
</div>
<div className="flex-1">
<h3 className="text-gray-900 dark:text-white font-bold text-base mb-1">Figma</h3>
<p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">Design file access and asset extraction.</p>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        Connect
                    </button>
</div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-[#101622]/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="flex justify-around items-center h-20 pb-4">
          <button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[26px]">grid_view</span>
<span className="text-[10px] font-medium">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-primary">
<span className="material-symbols-outlined text-[26px] fill-1">layers</span>
<span className="text-[10px] font-medium">Integrations</span>
</button>
<div className="relative flex flex-col items-center justify-center w-full h-full space-y-1 group">
<button className="flex items-center justify-center size-12 rounded-full bg-primary text-white shadow-lg shadow-primary/40 -mt-6 mb-1 transform group-active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[28px]">add</span>
</button>
</div>
<button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[26px]">notifications</span>
<span className="text-[10px] font-medium">Activity</span>
</button>
<button className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[26px]">settings</span>
<span className="text-[10px] font-medium">Settings</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
