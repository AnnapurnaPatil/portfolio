'use client';

import { motion } from 'framer-motion';
import { Terminal, Mail } from "lucide-react";
import type { PersonalInfo } from '../../../types/portfolio';
import { sectionVariants } from '../../../lib/constants';
import { scrollToSection } from '../../../lib/utils';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <motion.section
      id="main-content"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="hero-heading"
    >
      <div className="section-content" role="main">
        {/* Terminal Header */}
        <div 
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-muted/50 border border-border w-fit" 
          role="banner" 
          aria-label="Terminal indicator"
        >
          <Terminal className="w-4 h-4 text-primary" aria-hidden="true" />
          <span className="text-sm text-muted-foreground font-mono">~/portfolio</span>
        </div>
        
        {/* Main Title */}
        <h1 
          id="hero-heading" 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-mono">
          {personalInfo.title}
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Code Block with Personal Info */}
        <div className="bg-muted/30 border border-border rounded-xl p-6 font-mono text-sm mb-8">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
              <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true"></div>
            </div>
            <span>developer.ts</span>
          </div>
          <div className="space-y-2">
            <div><span className="text-blue-400">const</span> <span className="text-yellow-400">developer</span> = {`{`}</div>
            <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-orange-400">&quot;{personalInfo.name}&quot;</span>,</div>
            <div className="ml-4"><span className="text-green-400">title</span>: <span className="text-orange-400">&quot;{personalInfo.title}&quot;</span>,</div>
            <div className="ml-4"><span className="text-green-400">email</span>: <span className="text-orange-400">&quot;{personalInfo.email}&quot;</span>,</div>
            <div className="ml-4"><span className="text-green-400">location</span>: <span className="text-orange-400">&quot;{personalInfo.location}&quot;</span>,</div>
            <div className="ml-4"><span className="text-green-400">status</span>: <span className="text-orange-400">&quot;Available for opportunities&quot;</span></div>
            <div>{`};`}</div>
          </div>
        </div>

        {/* Status Indicator and Get in Touch Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card w-fit" 
            role="status" 
            aria-live="polite"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
            <span className="text-sm font-mono text-muted-foreground">
              Ready for new opportunities
            </span>
          </div>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Navigate to contact section"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Get in Touch
          </button>
        </div>
      </div>
    </motion.section>
  );
}
