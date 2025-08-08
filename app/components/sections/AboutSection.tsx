'use client';

import { motion } from 'framer-motion';
import type { AboutData } from '../../../types/portfolio';
import { sectionVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';

interface AboutSectionProps {
  aboutData: AboutData;
}

export function AboutSection({ aboutData }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="about-heading"
    >
      <div className="section-content">
        <h2 id="about-heading" className="text-3xl font-bold mb-8 text-primary">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {aboutData.introduction}
            </p>
            
            <div className="font-mono text-sm text-gray-500 mb-4">
              {`/* Current Focus */`}
            </div>
            <p className="text-muted-foreground mb-6">
              {aboutData.currentFocus}
            </p>
          </div>
          
          <div>
            <div className="font-mono text-sm text-gray-500 mb-4">
              {`/* Key Highlights */`}
            </div>
            <ul className="space-y-3" role="list">
              {aboutData.highlights.map((highlight, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-1" aria-hidden="true">▸</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="font-mono text-sm text-gray-500 mb-4 mt-8">
              {`/* Interests */`}
            </div>
            <div className="flex flex-wrap gap-2" role="list">
              {aboutData.interests.map((interest, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                  role="listitem"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
