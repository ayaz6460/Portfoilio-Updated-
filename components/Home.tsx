
import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const targetId = location.state.scrollTo;
            const element = document.getElementById(targetId);
            if (element) {
                // Slight delay to ensure layout is ready
                setTimeout(() => {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
