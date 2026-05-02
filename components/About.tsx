
import React from 'react';
import GlassCard from './GlassCard';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-4">About Me</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Passionate about building real-world digital solutions.</h3>
          </Reveal>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <Reveal delay={0.4}>
              <p>
                I am a dedicated full-stack developer and Computer Science student who thrives on the intersection of clean design and powerful automation.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="font-medium text-gray-900 border-l-4 border-red-600 pl-4 italic">
                I am the Founder of Engimos and Co-Founder of Xovaxy, where I work on building modern digital solutions and innovative platforms.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <p>
                From building complex payment integrations to crafting AI-powered voice agents, my focus is always on creating functional, practical applications that solve actual problems.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <p>
                I specialize in the MERN stack and modern cloud utilities like Supabase, with a keen eye for smooth animations and premium user experiences.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-red-100 rounded-3xl blur-3xl opacity-30 -z-10 transform translate-x-4 translate-y-4"></div>
          <Reveal direction="left" delay={0.4} width="100%">
            <GlassCard className="aspect-square flex flex-col justify-center items-center text-center">
              <div className="text-6xl font-bold text-red-600 mb-2">CS</div>
              <p className="text-xl font-medium text-gray-800 uppercase tracking-widest">Student & Dev</p>
              <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-xs text-gray-500 uppercase">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-xs text-gray-500 uppercase">Coding Mindset</div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
