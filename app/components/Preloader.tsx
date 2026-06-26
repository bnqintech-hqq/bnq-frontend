'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar speed controller
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); // Smooth exit delay
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 bg-[#020617] z-[9999] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center max-w-sm w-full px-8">
            
            {/* 🛸 Pulsing Logo Icon */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mb-12 flex justify-center w-full"
            >
              <Image
                src="/1.png"
                alt="Loading..."
                width={400}  
                height={150} 

                className="object-contain filter brightness-[3.5] contrast-125 drop-shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                style={{ width: '100%', height: 'auto', maxWidth: '280px', maxHeight: '150px' }} 
                priority
              />
            </motion.div>

            {/* Cyber Loading Bar */}
            <div className="w-full h-[4px] bg-slate-800/80 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            {/* Percentage Display */}
            <div className="flex justify-between items-center w-full mt-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                Initializing Ecosystem
              </span>
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 font-bold">
                {progress}%
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}