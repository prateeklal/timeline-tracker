import React, { useState } from 'react';
import TimelinePhase from './TimelinePhase';
import PhaseModal from './PhaseModal';
import phases, { Phase } from '@/data/phases';
import { motion } from 'framer-motion';
import { RocketIcon, Sparkles } from 'lucide-react';

const Timeline: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  const handlePhaseClick = (phaseId: number) => {
    const phase = phases.find(p => p.id === phaseId) || null;
    setSelectedPhase(phase);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="timeline-container py-12 relative" data-testid="timeline-container">
        {/* Decorative blurred background elements */}
        <motion.div 
          className="absolute -top-20 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-30 z-0 hidden md:block"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-30 z-0 hidden md:block"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        <motion.div 
          className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl opacity-30 z-0 hidden md:block"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      
        {/* Animated timeline line */}
        <motion.div 
          className="timeline-line"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Phase cards */}
        {phases.map((phase, index) => (
          <TimelinePhase 
            key={phase.id}
            phase={phase}
            onClick={handlePhaseClick}
            position={index % 2 === 0 ? 'left' : 'right'}
            index={index}
          />
        ))}
        
        {/* Timeline end indicator with enhanced styling */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: phases.length * 0.15 + 0.3, duration: 0.7, type: "spring" }}
          className="relative mx-auto w-32 h-32 flex items-center justify-center z-10 mt-8"
        >
          <div className="absolute w-16 h-16 rounded-full bg-primary/10 animate-ping" />
          <div className="absolute w-12 h-12 rounded-full bg-primary/20" />
          <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                  style={{ 
                    top: '50%', 
                    left: '50%', 
                    transform: `rotate(${i * 45}deg) translateY(-10px)` 
                  }}
                />
              ))}
            </motion.div>
            <div className="relative z-10 flex items-center justify-center flex-col">
              <Sparkles size={18} className="text-primary mb-1" />
              <span className="text-xs font-medium text-primary">Journey Awaits</span>
            </div>
          </div>
        </motion.div>
      </div>

      <PhaseModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        phase={selectedPhase}
      />
    </>
  );
};

export default Timeline;
