import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { Code, GitBranch, CloudCog, Server, Terminal } from 'lucide-react';

const DevOpsTimelineContainer: React.FC = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <motion.header 
          className="mb-12 text-center relative z-10 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-40 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-3xl rounded-full -z-10 opacity-60" />
          
          {/* Icon section with improved animation */}
          <div className="flex justify-center gap-5 mb-8">
            <motion.div 
              initial={{ scale: 0, rotate: -10 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="h-14 w-14 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5"
            >
              <Code size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: 10 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ delay: 0.35, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="h-14 w-14 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5"
            >
              <GitBranch size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: -10 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="h-14 w-14 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5"
            >
              <CloudCog size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: 10 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ delay: 0.65, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="h-14 w-14 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5"
            >
              <Server size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: -10 }} 
              animate={{ scale: 1, rotate: 0 }} 
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className="h-14 w-14 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5"
            >
              <Terminal size={24} className="text-primary" />
            </motion.div>
          </div>
          
          {/* Title with enhanced gradient effect */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            DevOps Learning Journey
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A comprehensive roadmap starting from April 14, 2025, designed for Senior Front-End 
            Developers transitioning into the DevOps ecosystem. Click on any phase to explore details.
          </motion.p>
          
          {/* Decorative dots */}
          <div className="flex justify-center gap-1.5 mt-8">
            {[0, 1, 2, 3, 4].map(i => (
              <motion.div 
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-primary/60"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, type: 'spring' }}
              />
            ))}
          </div>
        </motion.header>

        <Timeline />

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center text-muted-foreground/70 mt-12 mb-8 text-xs max-w-md mx-auto bg-card/30 p-4 rounded-lg backdrop-blur-sm border border-primary/5"
        >
          <p>
            Note: Timelines are approximate and can be adjusted based on learning pace and depth.
            Focus areas may vary depending on specific team needs and technology stacks.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default DevOpsTimelineContainer;
