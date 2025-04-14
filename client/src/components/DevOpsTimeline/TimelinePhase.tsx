import React from 'react';
import { Phase } from '@/data/phases';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface TimelinePhaseProps {
  phase: Phase;
  onClick: (phaseId: number) => void;
  position: 'left' | 'right';
  index: number;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, onClick, position, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`phase-card ${position === 'left' ? 'phase-card-left' : 'phase-card-right'}`}
      onClick={() => onClick(phase.id)}
      whileHover={{ y: -5 }}
      data-testid={`timeline-phase-${phase.id}`}
    >
      {/* Timeline dot */}
      <div 
        className="phase-dot" 
        style={{ 
          backgroundColor: `var(--${phase.gradientFrom})`, 
          boxShadow: `0 0 0 4px var(--${phase.gradientTo}, rgba(59, 130, 246, 0.5))` 
        }} 
      />
      
      {/* Connector line */}
      <div 
        className={`phase-connector ${position === 'left' ? 'connector-left' : 'connector-right'}`}
        style={{ backgroundColor: `var(--${phase.gradientFrom})` }}
      />
      
      {/* Card content */}
      <div className="card-header-gradient from-primary/80 to-primary">
        <h2 className="text-xl font-bold text-white mb-1">{phase.title}</h2>
        <div className="flex items-center gap-2 text-white/90 text-sm mt-auto">
          <Calendar size={14} className="opacity-75" />
          <span>{phase.period}</span>
        </div>
      </div>
      
      <div className="space-y-3 mt-2">
        <div className="flex items-start gap-2">
          <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm"><span className="font-medium">Focus:</span> {phase.focus}</p>
        </div>
        
        <button 
          className="w-full mt-4 text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-md transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick(phase.id);
          }}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default TimelinePhase;
