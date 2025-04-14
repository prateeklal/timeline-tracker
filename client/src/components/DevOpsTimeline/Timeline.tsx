import React, { useState } from 'react';
import TimelinePhase from './TimelinePhase';
import PhaseModal from './PhaseModal';
import phases, { Phase } from '@/data/phases';

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
      <div className="space-y-6" data-testid="timeline-container">
        {phases.map((phase) => (
          <TimelinePhase 
            key={phase.id}
            phase={phase}
            onClick={handlePhaseClick}
          />
        ))}
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
