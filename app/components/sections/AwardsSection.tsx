'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import type { Award as AwardType } from '../../../types/portfolio';
import { sectionVariants, containerVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';

interface AwardsSectionProps {
  awardsData: AwardType[];
}

export function AwardsSection({ awardsData }: AwardsSectionProps) {
  return (
    <motion.section
      id="awards"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="awards-heading"
    >
      <div className="section-content">
        <h2 id="awards-heading" className="text-3xl font-bold mb-8 text-primary">
          Awards & Honors
        </h2>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-400/10">
                  <Award className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{award.title}</h3>
                  <p className="text-primary font-medium text-sm">{award.issuer}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                  {award.category}
                </span>
                <span className="text-sm font-mono text-muted-foreground">{award.date}</span>
              </div>
              
              <p className="text-sm text-muted-foreground">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
