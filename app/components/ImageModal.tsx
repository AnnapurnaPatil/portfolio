'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[]; // Changed from single imageSrc to array of images
  imageAlt: string;
  title?: string;
}

export function ImageModal({ isOpen, onClose, images, imageAlt, title }: ImageModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentImagePath = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  // Handle escape key press and reset when modal opens
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Add keyboard navigation
      if (e.key === 'ArrowLeft' && hasMultipleImages) {
        handlePrevImage();
      }
      if (e.key === 'ArrowRight' && hasMultipleImages) {
        handleNextImage();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Reset when modal opens
      setCurrentImageIndex(0);
      setImageError('');
      setZoomLevel(1);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, hasMultipleImages]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleNextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
      setZoomLevel(1); // Reset zoom when changing images
      setImageError('');
    }
  };

  const handlePrevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
      setZoomLevel(1); // Reset zoom when changing images
      setImageError('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={`relative bg-card border border-border rounded-xl shadow-2xl overflow-hidden ${
                isFullscreen 
                  ? 'w-full h-full max-w-none max-h-none' 
                  : 'w-full max-w-6xl h-[90vh] max-h-[90vh]'
              }`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "image-modal-title" : undefined}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-card/95 backdrop-blur-sm">
                <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                  {title && (
                    <h2 id="image-modal-title" className="text-base md:text-lg font-semibold text-primary truncate">
                      {title}
                      {hasMultipleImages && (
                        <span className="text-xs md:text-sm text-muted-foreground ml-1 md:ml-2 whitespace-nowrap">
                          ({currentImageIndex + 1}/{images.length})
                        </span>
                      )}
                    </h2>
                  )}
                  
                  {/* Zoom Controls - Hidden on small mobile, visible on larger screens */}
                  <div className="hidden sm:flex items-center gap-1 md:gap-2">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 0.5}
                      className="p-1.5 md:p-2 rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                    <span className="text-xs md:text-sm text-muted-foreground min-w-[40px] md:min-w-[60px] text-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 3}
                      className="p-1.5 md:p-2 rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 md:p-2 rounded-lg hover:bg-muted transition-colors"
                      aria-label="Reset zoom to fit"
                    >
                      <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Right side controls - Always visible */}
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 md:p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4 md:w-5 md:h-5" /> : <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />}
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 md:p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close image modal"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
              
              {/* Image Container with Navigation */}
              <div className="relative">
                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all duration-200"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Scrollable Image Container */}
                <div 
                  className={`bg-muted/10 ${zoomLevel > 1 ? 'overflow-auto' : 'overflow-hidden flex items-center justify-center'}`}
                  style={{ 
                    height: isFullscreen ? 'calc(100vh - 80px)' : 'calc(90vh - 80px)',
                    maxHeight: isFullscreen ? 'calc(100vh - 80px)' : 'calc(90vh - 80px)'
                  }}
                >
                  <div className={`p-4 ${zoomLevel > 1 ? 'w-max h-max' : 'w-full h-full flex items-center justify-center'}`}>
                    <div className="relative">
                      <motion.div
                        key={currentImageIndex} // This will trigger animation when image changes
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={currentImagePath}
                          alt={`${imageAlt} - Image ${currentImageIndex + 1}`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-lg shadow-lg"
                          priority
                          style={{
                            maxWidth: zoomLevel === 1 ? (isFullscreen ? 'calc(100vw - 2rem)' : 'calc(100vw - 4rem)') : 'none',
                            maxHeight: zoomLevel === 1 ? (isFullscreen ? 'calc(100vh - 120px)' : 'calc(90vh - 120px)') : 'none',
                            width: zoomLevel === 1 ? 'auto' : `${zoomLevel * 100}%`,
                            height: zoomLevel === 1 ? 'auto' : 'auto',
                            objectFit: 'contain',
                          }}
                          onError={(e) => {
                            const errorMsg = `Failed to load: ${currentImagePath}`;
                            console.error(errorMsg);
                            setImageError(errorMsg);
                          }}
                          onLoad={() => {
                            console.log('✅ Image loaded successfully:', currentImagePath);
                            setImageError('');
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Image Dots Indicator */}
                {hasMultipleImages && (
                  <div className="absolute bottom-16 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setZoomLevel(1);
                          setImageError('');
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile Zoom Controls - Only visible on small screens */}
                <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/70 rounded-full px-4 py-2 z-20">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-white min-w-[50px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white"
                    aria-label="Reset zoom to fit"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Instructions - Hidden on small screens to avoid clutter */}
              <div className="hidden sm:block absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                {hasMultipleImages 
                  ? `${images.length} images • Use arrows or ←/→ to navigate`
                  : zoomLevel === 1 
                    ? 'Use zoom controls to enlarge'
                    : 'Scroll to navigate zoomed image'
                }
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
