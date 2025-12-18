import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center">
              <span className="material-icons-round text-white text-lg">dataset</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight dark:text-white">Datalog</span>
          </div>
          <button className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none">
            <span className="material-icons-round">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
