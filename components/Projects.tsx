
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto bg-black rounded-[3rem] p-8 md:p-20 overflow-hidden">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-xs font-black tracking-[0.4em] text-red-500 uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Featured Work.</h3>
          </div>
          <p className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed font-medium">
            A selection of architectural solutions involving AI integration, payment gateways, and modern full-stack systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{project.title}</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex items-center gap-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black uppercase tracking-[0.2em] text-red-500 flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} /> Live View
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <Github size={14} /> Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
