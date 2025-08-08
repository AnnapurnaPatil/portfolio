// Animation constants
export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.1;
export const VIEWPORT_MARGIN = "-100px";

// Animation variants
export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: ANIMATION_DURATION } 
  }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// SEO constants
export const SITE_URL = "https://anu-portfolio.vercel.app";
export const SITE_NAME = "Annapurna's Portfolio";

// Skill level colors
export const SKILL_LEVEL_COLORS = {
  Expert: 'text-green-400',
  Advanced: 'text-blue-400',
  Intermediate: 'text-yellow-400',
  Beginner: 'text-orange-400'
} as const;
