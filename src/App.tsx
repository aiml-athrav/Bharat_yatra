import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative font-sans">
      {/* Background abstract elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/20 blur-[120px]" />
      
      {/* Navbar Placeholder */}
      <nav className="w-full px-8 py-6 flex justify-between items-center relative z-10 border-b border-white/5 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500"
        >
          Bharat Yatra
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-6"
        >
          <button className="text-gray-300 hover:text-white transition-colors">About</button>
          <button className="text-gray-300 hover:text-white transition-colors">Leaderboard</button>
          <button className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all font-medium">
            Login
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-purple-500 pb-2">
              Discover India's
            </span>
            <span className="block text-white">Untold History.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            An interactive journey through time. Explore historical events, meet legendary figures, and test your knowledge in this immersive web experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-lg font-bold text-white shadow-xl shadow-purple-500/25 border border-white/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Cards / Visuals Placeholder */}
        <div className="absolute w-full max-w-5xl mx-auto h-[400px] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 opacity-30 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-gray-900 to-transparent absolute z-10" />
          {/* We will add the SVG map or character animations here later */}
          <div className="w-full h-full border border-white/10 rounded-t-3xl bg-white/5 backdrop-blur-3xl" />
        </div>
      </main>
    </div>
  );
}

export default App;
