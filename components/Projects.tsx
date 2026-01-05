
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-black text-white rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-6 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-red-500 uppercase mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Featured Projects</h3>
          </div>
          <p className="max-w-md text-gray-400 leading-relaxed text-sm md:text-base">
            A selection of my recent works involving AI, automation, and full-stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative w-full">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[16/10] md:h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 md:opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md px-2 md:px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-xs md:text-sm line-clamp-2 mb-4 md:mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 md:space-x-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-white/20 px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-white hover:text-black transition-all"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
