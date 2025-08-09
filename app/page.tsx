'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SEO } from './components/SEO';
import { SkipNavigation } from './components/SkipNavigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FreelanceProjectsSection } from './components/sections/FreelanceProjectsSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

// Import data
import {
  personalInfo,
  aboutData,
  skillsData,
  educationData,
  certificationsData,
  experienceData,
  freelanceProjects,
  awardsData,
  socialLinks
} from '../data/portfolio-data';

export default function Home() {
  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen bg-background">
        <SkipNavigation />
        
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          <Suspense fallback={<LoadingSpinner size="lg" text="Loading portfolio..." />}>
            <HeroSection personalInfo={personalInfo} />
            
            <AboutSection aboutData={aboutData} />
            
            <SkillsSection skillsData={skillsData} />
            
            <EducationSection educationData={educationData} />
            
            <CertificationsSection certificationsData={certificationsData} />
            
            <ExperienceSection experienceData={experienceData} />
            
            <FreelanceProjectsSection projectsData={freelanceProjects} />
            
            <AwardsSection awardsData={awardsData} />
            
            <ContactSection 
              personalInfo={personalInfo} 
              socialLinks={socialLinks} 
            />
            
            <Footer personalInfo={personalInfo} />
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}
