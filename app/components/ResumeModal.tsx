'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const resumePath = `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/resume.pdf`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl h-[95vh] mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">Resume - Annapurna Patil</h2>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Download Button */}
                <a
                  href={resumePath}
                  download="Annapurna_Patil_Resume.pdf"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                  aria-label="Download resume"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                
                {/* Open in New Tab Button */}
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                  aria-label="Open resume in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open
                </a>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <iframe
                src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1&view=FitH&zoom=page-width`}
                className="w-full h-full border-0"
                title="Resume - Annapurna Patil"
                loading="lazy"
                style={{ minHeight: '600px' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
