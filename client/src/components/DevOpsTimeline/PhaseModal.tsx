import React from 'react';
import Modal from '@/components/ui/modal';
import { Phase } from '@/data/phases';

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: Phase | null;
}

const PhaseModal: React.FC<PhaseModalProps> = ({ isOpen, onClose, phase }) => {
  if (!phase) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={phase.title}
    >
      <div dangerouslySetInnerHTML={{ __html: phase.details }} />
    </Modal>
  );
};

export default PhaseModal;
