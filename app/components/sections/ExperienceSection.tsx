'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink, FolderOpen } from 'lucide-react';
import type { Experience } from '../../../types/portfolio';
import { sectionVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';

interface ExperienceSectionProps {
  experienceData: Experience[];
}

export function ExperienceSection({ experienceData }: ExperienceSectionProps) {
  return (
    <motion.section 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="experience-heading"
    >
      <div className="section-content">
        <h2 id="experience-heading" className="text-3xl font-bold mb-8 text-primary">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      {exp.hasProjects && (
                        <motion.a
                          href={exp.projectsUrl || '#'}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all duration-200 border border-primary/20 hover:border-primary/40"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View freelance projects"
                        >
                          <FolderOpen className="w-4 h-4" aria-hidden="true" />
                          Freelance Projects
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </motion.a>
                      )}
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {exp.location}
                    </p>
                    <span className="inline-block px-2 py-1 rounded text-xs bg-secondary/10 text-secondary mt-2">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm font-mono text-muted-foreground">
                      {exp.period.start} - {exp.period.end}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-mono text-gray-500 mb-2">{`/* Key Achievements */`}</h4>
                  <ul className="space-y-2" role="list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1" aria-hidden="true">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-mono text-gray-500 mb-2">{`/* Technologies Used */`}</h4>
                  <div className="flex flex-wrap gap-2" role="list">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
