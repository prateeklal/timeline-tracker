import React from 'react';
import { Phase } from '@/data/phases';

interface TimelinePhaseProps {
  phase: Phase;
  onClick: (phaseId: number) => void;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, onClick }) => {
  return (
    <div 
      className={`phase-bar from-${phase.gradientFrom} to-${phase.gradientTo} text-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105`} 
      onClick={() => onClick(phase.id)}
      data-testid={`timeline-phase-${phase.id}`}
    >
      <h2 className="text-lg font-semibold mb-1">{phase.title}</h2>
      <p className="text-sm font-medium mb-2">{phase.period}</p>
      <p className="text-sm"><strong>Focus:</strong> {phase.focus}</p>
    </div>
  );
};

export default TimelinePhase;
