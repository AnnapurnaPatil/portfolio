'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SkillCategory } from '../../../types/portfolio';
import { sectionVariants, containerVariants, VIEWPORT_MARGIN } from '../../../lib/constants';
import { getIcon, getSkillLevelColor } from '../../../lib/utils';

interface SkillsSectionProps {
  skillsData: SkillCategory[];
}

export function SkillsSection({ skillsData }: SkillsSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  
  const cardWidth = 320; // w-80 = 320px
  const gap = 24; // gap-6 = 24px
  const totalCardWidth = cardWidth + gap;
  const maxOffset = -(totalCardWidth * skillsData.length);

  const scrollNext = () => {
    setCurrentOffset(prev => {
      const newOffset = prev - totalCardWidth;
      return newOffset <= maxOffset ? 0 : newOffset;
    });
  };

  const scrollPrev = () => {
    setCurrentOffset(prev => {
      const newOffset = prev + totalCardWidth;
      return newOffset > 0 ? maxOffset : newOffset;
    });
  };

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
          {/* Navigation buttons - only visible when paused */}
          {isPaused && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 border border-border hover:bg-background transition-all duration-200 shadow-lg"
                aria-label="Previous skills"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 border border-border hover:bg-background transition-all duration-200 shadow-lg"
                aria-label="Next skills"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}

          {/* Moving category cards container */}
          <motion.div
            className="flex gap-6"
            animate={isPaused ? { x: currentOffset } : {
              x: [0, -(320 * skillsData.length + 24 * skillsData.length)]
            }}
            transition={isPaused ? {
              type: "spring",
              stiffness: 300,
              damping: 30
            } : {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
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
            {isPaused ? "Movement paused • Use arrow buttons to navigate" : "Hover to pause movement"}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
