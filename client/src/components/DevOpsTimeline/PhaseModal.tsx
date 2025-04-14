import React from 'react';
import Modal from '@/components/ui/modal';
import { Phase } from '@/data/phases';
import { Calendar, Target, ExternalLink } from 'lucide-react';

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: Phase | null;
}

const PhaseModal: React.FC<PhaseModalProps> = ({ isOpen, onClose, phase }) => {
  if (!phase) return null;

  // Create a sanitization function for links
  const sanitizeHTML = (html: string) => {
    // This is a basic approach - in production you'd use a library like DOMPurify
    return html
      .replace(/class="modal-link"/g, 'class="modal-link"')
      .replace(/<a /g, '<a rel="noopener noreferrer" target="_blank" ');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={phase.title}
    >
      <div className="mb-4 flex items-center gap-2 text-sm text-card-foreground border-l-4 border-primary/30 pl-3 py-1">
        <Calendar size={16} className="text-primary" />
        <span>{phase.period}</span>
      </div>
      
      <div className="mb-4 bg-primary/5 p-3 rounded-md border border-primary/10">
        <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
          <Target size={16} className="text-primary" />
          <span>Focus Areas</span>
        </h3>
        <p className="text-sm text-card-foreground">{phase.focus}</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
          <ExternalLink size={16} className="text-primary" />
          <span>Resources & Details</span>
        </h3>
      </div>
      
      <div 
        className="prose prose-sm dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(phase.details) }} 
      />
    </Modal>
  );
};

export default PhaseModal;
