'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, ExternalLink, Github, CheckCircle, Clock, AlertCircle, Lightbulb, Target, TrendingUp, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '../../types/portfolio';
import { Modal } from './Modal';
import { ImageModal } from './ImageModal';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!project) return null;

  const getProjectTitleWithIcon = (project: Project) => {
    const projectTitle = project.title.toLowerCase();
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    
    if (projectTitle.includes('kalaasatri') || projectTitle.includes('kalaasātri')) {
      return (
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 relative">
            <Image
              src={`${basePath}/KalaaSatri(icon).png`}
              alt="KalaaSatri icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span>{project.title}</span>
        </div>
      );
    }
    
    if (projectTitle.includes('safe ballot') || projectTitle.includes('safeballot')) {
      return (
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 relative">
            <Image
              src={`${basePath}/SafeBallot(icon).png`}
              alt="Safe Ballot icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span>{project.title}</span>
        </div>
      );
    }
    
    return project.title;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />;
      case 'In Progress':
        return <Clock className="w-4 h-4 text-yellow-500" aria-hidden="true" />;
      case 'Planned':
        return <AlertCircle className="w-4 h-4 text-blue-500" aria-hidden="true" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" aria-hidden="true" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Progress':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Planned':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const handleScreenshotClick = () => {
    if (project.images && project.images.length > 0) {
      setIsImageModalOpen(true);
    }
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  // Transform image paths to work in both development and production
  const getTransformedImages = (images: string[] | undefined) => {
    if (!images) return [];
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    return images.map(imagePath => {
      // If the path already includes /portfolio/, remove it and add the correct basePath
      const cleanPath = imagePath.replace('/portfolio', '');
      return `${basePath}${cleanPath}`;
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={getProjectTitleWithIcon(project)}>
        <div className="p-6">
          {/* Project Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </div>
                <span className="text-sm text-primary font-medium">{project.category}</span>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {project.period.start} - {project.period.end}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {project.hasScreenshot && project.images && project.images.length > 0 && (
                <motion.button
                  onClick={handleScreenshotClick}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 text-sm font-medium transition-all duration-200 border border-purple-500/20 hover:border-purple-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} design`}
                >
                  <ImageIcon className="w-4 h-4" aria-hidden="true" />
                  View Design
                </motion.button>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all duration-200 border border-primary/20 hover:border-primary/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View live ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary text-sm font-medium transition-all duration-200 border border-secondary/20 hover:border-secondary/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} source code`}
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Project Description */}
          <div className="mb-6">
            <p className="text-muted-foreground mb-3">{project.description}</p>
            {project.longDescription && (
              <p className="text-sm text-muted-foreground">{project.longDescription}</p>
            )}
          </div>
          
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-mono text-gray-500 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" aria-hidden="true" />
              {`/* Technologies Used */`}
            </h4>
            <div className="flex flex-wrap gap-2" role="list">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-mono text-gray-500 mb-3">{`/* Key Features */`}</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">▸</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-mono text-gray-500 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                {`/* Impact & Outcomes */`}
              </h4>
              <div className="grid md:grid-cols-2 gap-2">
                {project.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-mono text-gray-500 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" aria-hidden="true" />
                {`/* Technical Challenges */`}
              </h4>
              <div className="space-y-2">
                {project.challenges.map((challenge, challengeIndex) => (
                  <div key={challengeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true">⚡</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Footer */}
          <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="text-xs text-muted-foreground text-center">
              <span className="font-mono text-primary">{`/* `}</span>
              This project showcases my commitment to using technology for social impact and community empowerment
              <span className="font-mono text-primary">{` */`}</span>
            </p>
          </div>
        </div>
      </Modal>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        images={getTransformedImages(project.images)}
        imageAlt={`${project.title} screenshots`}
        title={`${project.title} - Screenshots`}
      />
    </>
  );
}
