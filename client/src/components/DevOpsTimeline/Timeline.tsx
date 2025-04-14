import React, { useState } from 'react';
import TimelinePhase from './TimelinePhase';
import PhaseModal from './PhaseModal';
import phases, { Phase } from '@/data/phases';
import { motion } from 'framer-motion';

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
      <div className="timeline-container py-12" data-testid="timeline-container">
        {/* Vertical timeline line */}
        <div className="timeline-line" />
        
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
        
        {/* Timeline end indicator */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: phases.length * 0.1 + 0.2, duration: 0.5 }}
          className="relative mx-auto w-20 h-20 flex items-center justify-center"
        >
          <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute w-6 h-6 rounded-full bg-primary/40" />
          <div className="w-4 h-4 rounded-full bg-primary" />
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
