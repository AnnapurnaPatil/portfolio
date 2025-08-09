'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Lightbulb, FolderOpen, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import type { Project } from '../../../types/portfolio';
import { sectionVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';
import { ProjectModal } from '../ProjectModal';

interface FreelanceProjectsSectionProps {
  projectsData: Project[];
}

export function FreelanceProjectsSection({ projectsData }: FreelanceProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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

  return (
    <>
      <motion.section 
        id="freelance-projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        variants={sectionVariants}
        className="mb-20"
        aria-labelledby="projects-heading"
      >
        <div className="section-content">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-primary" aria-hidden="true" />
            <h2 id="projects-heading" className="text-3xl font-bold text-primary">
              Freelance Projects
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {projectsData.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="relative"
              >
                <motion.button
                  onClick={() => openProjectModal(project)}
                  className="w-full p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover text-left group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View details for ${project.title}`}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FolderOpen className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" aria-hidden="true" />
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                          {getStatusIcon(project.status)}
                          {project.status}
                        </div>
                        <span className="text-xs text-primary font-medium">{project.category}</span>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {project.period.start} - {project.period.end}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies Preview */}
                  <div className="mb-4">
                    <h4 className="text-xs font-mono text-gray-500 mb-2">{`/* Tech Stack */`}</h4>
                    <div className="flex flex-wrap gap-1" role="list">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                          role="listitem"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* View Details Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {project.features.length} features • {project.outcomes?.length || 0} outcomes
                    </span>
                    <span className="text-xs text-primary group-hover:text-primary/80 transition-colors">
                      Click to view details →
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          {/* Section Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/10"
          >
            <p className="text-sm text-muted-foreground text-center">
              <span className="font-mono text-primary">{`/* `}</span>
              Click on any project above to explore detailed information, features, and technical challenges
              <span className="font-mono text-primary">{` */`}</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
