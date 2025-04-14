import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { Code, GitBranch, CloudCog } from 'lucide-react';

const DevOpsTimelineContainer: React.FC = () => {
  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.header 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-4 mb-6">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.3, type: 'spring' }}
              className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <Code size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.5, type: 'spring' }}
              className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <GitBranch size={24} className="text-primary" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.7, type: 'spring' }}
              className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <CloudCog size={24} className="text-primary" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            DevOps Learning Journey
          </h1>
          
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive roadmap starting from April 14, 2025, designed for Senior Front-End 
            Developers transitioning into the DevOps ecosystem. Click on any phase to explore details.
          </p>
        </motion.header>

        <Timeline />

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center text-muted-foreground/70 mt-8 text-xs max-w-md mx-auto"
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
