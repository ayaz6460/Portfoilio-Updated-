
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
    liveLink: 'https://enigmos.vercel.app',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 2,
    title: 'College Fee Payment System',
    description: 'Complete fee-payment platform with Cashfree Gateway integration. Features dynamic PDF receipt generation with QR code verification.',
    tech: ['Node.js', 'Express', 'Supabase', 'Cashfree API', 'PDFKit'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://xovacy.in',
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
    liveLink: '/projects',
    githubLink: 'https://github.com/NotAyaz'
  }
];

export const ALL_PROJECTS: Project[] = [
  ...PROJECTS,
  {
    id: 5,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store inventory, orders, and analytics with real-time updates.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'Property listing platform with map integration, virtual tours, and advanced filtering capabilities.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 7,
    title: 'Healthcare App',
    description: 'Patient management system with appointment scheduling, telemedicine features, and secure record keeping.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NotAyaz'
  },
  {
    id: 8,
    title: 'Restaurant Landing Page',
    description: 'Elegant landing page for a fine dining restaurant with reservation system and menu showcase.',
    tech: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/NotAyaz'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/NotAyaz',
  linkedin: 'https://www.linkedin.com/in/notayaz/',
  instagram: 'https://instagram.com/iam_ayaz.07',
  email: 'mailto:ayaz16318@gmail.com'
};
