'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import type { Certification } from '../../../types/portfolio';
import { sectionVariants, itemVariants, VIEWPORT_MARGIN } from '../../../lib/constants';

interface CertificationsSectionProps {
  certificationsData: Certification[];
}

export function CertificationsSection({ certificationsData }: CertificationsSectionProps) {
  return (
    <motion.section 
      id="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={sectionVariants}
      className="mb-20"
      aria-labelledby="certifications-heading"
    >
      <div className="section-content">
        <h2 id="certifications-heading" className="text-3xl font-bold mb-8 text-primary">
          Certifications
        </h2>
        
        <div className="space-y-6">
          {certificationsData.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all duration-300 glow-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">via {cert.platform}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-muted-foreground mb-1">{cert.date}</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    cert.status === 'Completed' 
                      ? 'bg-green-400/10 text-green-400' 
                      : 'bg-yellow-400/10 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{cert.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-mono text-gray-500 mb-2">{`/* Skills Covered */`}</h4>
                <div className="flex flex-wrap gap-2" role="list">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                      role="listitem"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground font-mono">
                  Credential ID: {cert.credentialId}
                </div>
                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    aria-label={`Verify ${cert.title} certification`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
