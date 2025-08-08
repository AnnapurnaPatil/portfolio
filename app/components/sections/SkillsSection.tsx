'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { SkillCategory } from '../../../types/portfolio';
import { sectionVariants, containerVariants, VIEWPORT_MARGIN } from '../../../lib/constants';
import { getIcon, getSkillLevelColor } from '../../../lib/utils';

interface SkillsSectionProps {
  skillsData: SkillCategory[];
}

export function SkillsSection({ skillsData }: SkillsSectionProps) {
  const [isPaused, setIsPaused] = useState(false);

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
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Moving category cards container */}
          <motion.div
            className="flex gap-6"
            animate={isPaused ? {} : {
              x: [0, -(320 * skillsData.length + 24 * skillsData.length)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ 
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {/* First set of category cards */}
            {skillsData.map((category, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-80 p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {getIcon(category.icon, "w-5 h-5 text-primary")}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.category}</h3>
                </div>
                
                <table className="w-full">
                  <tbody>
                    {category.skills.map((skill, skillIndex) => (
                      <tr key={skillIndex} className="border-b border-transparent">
                        <td className="text-muted-foreground py-1.5 pr-4">{skill.name}</td>
                        <td className={`text-xs font-mono ${getSkillLevelColor(skill.level)} py-1.5 text-center w-20`}>
                          {skill.level}
                        </td>
                        <td className="text-xs text-muted-foreground py-1.5 text-right w-8">
                          {skill.years}y
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {skillsData.map((category, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-80 p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {getIcon(category.icon, "w-5 h-5 text-primary")}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.category}</h3>
                </div>
                
                <table className="w-full">
                  <tbody>
                    {category.skills.map((skill, skillIndex) => (
                      <tr key={skillIndex} className="border-b border-transparent">
                        <td className="text-muted-foreground py-1.5 pr-4">{skill.name}</td>
                        <td className={`text-xs font-mono ${getSkillLevelColor(skill.level)} py-1.5 text-center w-20`}>
                          {skill.level}
                        </td>
                        <td className="text-xs text-muted-foreground py-1.5 text-right w-8">
                          {skill.years}y
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Pause on hover hint */}
        <div className="flex justify-center mt-4">
          <div className="text-xs text-muted-foreground">
            {isPaused ? "Movement paused • Move mouse away to resume" : "Hover to pause movement"}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
