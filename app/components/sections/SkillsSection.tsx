'use client';

import { motion } from 'framer-motion';
import type { SkillCategory } from '../../../types/portfolio';
import { sectionVariants, containerVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';
import { getIcon, getSkillLevelColor } from '../../../lib/utils';

interface SkillsSectionProps {
  skillsData: SkillCategory[];
}

export function SkillsSection({ skillsData }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="skills-heading"
    >
      <div className="section-content">
        <h2 id="skills-heading" className="text-3xl font-bold mb-8 text-primary">
          Skills & Technologies
        </h2>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {getIcon(category.icon, "w-5 h-5 text-primary")}
                </div>
                <h3 className="font-semibold text-lg">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono ${getSkillLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.years}y
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
