'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { PersonalInfo } from '../../types/portfolio';
import { sectionVariants, VIEWPORT_MARGIN } from '../../lib/constants';
import { scrollToTop } from '../../lib/utils';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="border-t border-border pt-8"
    >
      <div className="section-content">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © 2024 {personalInfo.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Designed with a code-like aesthetic for developers, by developers.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Scroll back to top of page"
          >
            <ChevronDown className="w-4 h-4 rotate-180" aria-hidden="true" />
            <span className="text-sm font-mono">Back to top</span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
