
import React, { useEffect } from 'react';
import { ALL_PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-screen bg-gray-50 py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto bg-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 overflow-hidden">
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

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {ALL_PROJECTS.filter(project => project.id !== 4).map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
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
                </motion.div>
            </div>
        </section >
    );
};

export default AllProjects;
