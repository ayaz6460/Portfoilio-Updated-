
import React from 'react';
import { Project, SkillCategory } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive UI/UX', 'Animations & Micro-interactions']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'MySQL / PostgreSQL']
  },
  {
    title: 'Integrations & Tools',
    skills: [
      'Payment Gateway Integration (Cashfree)',
      'Google Sheets Automation',
      'Vapi.ai Voice Agent',
      'PDF Generation with QR',
      'Bolt.new',
      'Git & GitHub'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Absence Notifier System',
    description: 'A full-stack solution for colleges to automate absence calls to parents using Vapi.ai and Google Sheets. Supports multi-language parent detection.',
    tech: ['Node.js', 'Supabase', 'Vapi.ai', 'Google Sheets API', 'Webhooks'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://engimos.com',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 2,
    title: 'College Fee Payment System',
    description: 'Complete fee-payment platform with Cashfree Gateway integration. Features dynamic PDF receipt generation with QR code verification.',
    tech: ['Node.js', 'Express', 'Supabase', 'Cashfree API', 'PDFKit'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://xovaxy.com',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 3,
    title: 'Event Registration Website',
    description: 'A modern animated website built for college fest registrations. High focus on UI/UX, fluid transitions, and preloading states.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bolt.new'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://bolt.new',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 4,
    title: 'Personal & Client Websites',
    description: 'A collection of bespoke portfolio and business websites for startups, focusing on modern branding and responsive performance.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://mohammedayaz.dev',
    githubLink: 'https://github.com/NotAyaz'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/NotAyaz',
  linkedin: 'https://www.linkedin.com/in/notayaz/',
  instagram: 'https://instagram.com/iam_ayaz.07',
  email: 'mailto:ayaz16318@gmail.com'
};
