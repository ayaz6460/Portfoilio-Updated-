
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import GlassCard from './GlassCard';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold px-4">What I bring to the table.</h3>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <GlassCard delay={0}>
                <h4 className="text-xl font-bold mb-6 border-b pb-4 border-gray-100 flex items-center justify-between">
                  {category.title}
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                </h4>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 font-medium text-sm md:text-base"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
