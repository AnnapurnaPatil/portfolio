'use client';

import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import type { Education } from '../../../types/portfolio';
import { sectionVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';

interface EducationSectionProps {
  educationData: Education[];
}

export function EducationSection({ educationData }: EducationSectionProps) {
  return (
    <motion.section 
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="education-heading"
    >
      <div className="section-content">
        <h2 id="education-heading" className="text-3xl font-bold mb-8 text-primary">
          Education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((edu) => (
            <motion.div 
              key={edu.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-muted-foreground">
                      {edu.period.start} - {edu.period.end}
                    </p>
                    <p className="text-sm font-semibold text-secondary">{edu.grade}</p>
                  </div>
                </div>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-mono text-gray-500 mb-2">{`/* Achievements */`}</h4>
                    <ul className="space-y-1" role="list">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Star className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
