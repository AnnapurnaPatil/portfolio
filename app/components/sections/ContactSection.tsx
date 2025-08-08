'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import type { PersonalInfo, SocialLink } from '../../../types/portfolio';
import { sectionVariants, VIEWPORT_MARGIN } from '../../../lib/constants';
import { getIcon } from '../../../lib/utils';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
}

export function ContactSection({ personalInfo, socialLinks }: ContactSectionProps) {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="contact-heading"
    >
      <div className="section-content">
        <h2 id="contact-heading" className="text-3xl font-bold mb-8 text-primary">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="font-mono text-sm text-gray-500 mb-4">
              {`/* Let's connect and build something amazing together */`}
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question, want to discuss a project, or just want to say hello, 
              feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
            <div className="font-mono text-sm text-gray-500 mb-4">
              {`/* Find me on these platforms */`}
            </div>
            
            <div className="grid gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Visit ${social.platform} profile: ${social.username}`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: `${social.color}15` }}
                  >
                    {getIcon(social.icon, `w-5 h-5`, social.color)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {social.platform}
                    </p>
                    <p className="text-sm text-muted-foreground">{social.username}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                <span className="text-sm font-medium text-primary">Available for opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Currently open to full-time positions and freelance projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
