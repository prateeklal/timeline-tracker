import React from 'react';
import { Phase } from '@/data/phases';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface TimelinePhaseProps {
  phase: Phase;
  onClick: (phaseId: number) => void;
  position: 'left' | 'right';
  index: number;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, onClick, position, index }) => {
  // Custom animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: position === 'left' ? -70 : 70,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        delay: index * 0.15
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`phase-card ${position === 'left' ? 'phase-card-left' : 'phase-card-right'} cursor-pointer`}
      onClick={() => onClick(phase.id)}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      data-testid={`timeline-phase-${phase.id}`}
    >
      {/* Timeline dot with pulsing animation */}
      <motion.div 
        className="phase-dot" 
        style={{ 
          backgroundColor: phase.gradientFrom
        }} 
        animate={{ 
          boxShadow: [
            `0 0 0 0px ${phase.gradientFrom}40`,
            `0 0 0 6px ${phase.gradientFrom}00`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Connector line */}
      <div 
        className={`phase-connector ${position === 'left' ? 'connector-left' : 'connector-right'}`}
        style={{ backgroundColor: phase.gradientFrom }}
      />
      
      {/* Card content with gradient background */}
      <div className="card-header-gradient relative from-primary/80 to-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/10 transform translate-x-8 -translate-y-8 opacity-30" />
        <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-white/5 transform -translate-x-6 translate-y-6 opacity-20" />
        
        <h2 className="text-xl font-bold text-white mb-1 drop-shadow-sm">{phase.title}</h2>
        <div className="flex items-center gap-2 text-white/90 text-sm mt-auto backdrop-blur-sm bg-black/10 py-1 px-2 rounded-full w-fit">
          <Calendar size={14} className="opacity-75" />
          <span>{phase.period}</span>
        </div>
      </div>
      
      <div className="space-y-3 mt-3">
        <div className="flex items-start gap-2 bg-primary/5 p-2.5 rounded-md border border-primary/10">
          <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm"><span className="font-medium text-foreground">Focus:</span> {phase.focus}</p>
        </div>
        
        <motion.button 
          className="w-full mt-4 text-sm px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-md transition-colors flex items-center justify-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onClick(phase.id);
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Explore Details</span>
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TimelinePhase;
