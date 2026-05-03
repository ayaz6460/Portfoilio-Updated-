import React, { useState, useEffect } from 'react';
import { ALL_PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [startIndex, setStartIndex] = useState(0);
    const projectsPerPage = 4;

    const validProjects = ALL_PROJECTS.filter(project => project.id !== 4);
    const projectsToShow = validProjects.slice(startIndex, startIndex + projectsPerPage);

    const handleNext = () => {
        if (startIndex + projectsPerPage < validProjects.length) {
            setStartIndex(startIndex + projectsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - projectsPerPage >= 0) {
            setStartIndex(startIndex - projectsPerPage);
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 py-24 px-4 md:px-12" style={{ perspective: '2000px' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={startIndex}
                    initial={{ opacity: 0, rotateY: -90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="max-w-7xl mx-auto bg-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 overflow-hidden origin-center"
                >
                    <div className="mb-20">
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-8 group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
                        </Link>

                        <h2 className="text-xs font-black tracking-[0.4em] text-red-500 uppercase mb-4">Complete Portfolio</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            Personal & Client <span className="text-gray-500">Websites.</span>
                        </h1>
                        <p className="max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                            A comprehensive collection of my work, including client projects, freelance commissions, and personal experiments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {projectsToShow.map((project) => (
                            <div key={project.id} className="group relative">
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
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-between items-center mt-16">
                        <div>
                            {startIndex > 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all hover:scale-105"
                                >
                                    <ChevronLeft size={16} /> Go Back
                                </button>
                            )}
                        </div>
                        <div>
                            {startIndex + projectsPerPage < validProjects.length && (
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-3 text-xs font-black tracking-[0.2em] uppercase text-white bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 px-8 py-4 rounded-full transition-all hover:scale-105"
                                >
                                    View More <ChevronRight size={16} />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default AllProjects;
