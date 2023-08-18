import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hamburger } from '../../Assests';
import SideBar from '../SideBar/sidebar';
import './styles.css';

function NavBar() {
    const [colorChange, setColorchange] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const text = 'PARVEJ';
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, text.length]);

    const scrollToSection = (id: any) => {
        const section = document.getElementById(id);
        setIsOpen(false);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    setActiveSection(sectionId || '');
                }
            });
        }, options);

        const sections = ['hero', 'service', 'experience', 'work', 'portfolio', 'contact'];

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);


    return (
        <div className={`absolute top-0 flex w-screen xl:!w-full items-center justify-between max-h-screen lg:!h-[10vh] ${colorChange ? 'bg-gradient-to-b from-orange-100 to-yellow-200 !shadow-lg' : ''}`}>
            <div className='h-full flex justify-start items-center'>
                <div className='flex items-center justify-center mix-blend-multiply xl:!hidden py-2 mx-2 sm:!mx-4 z-50' onClick={() => setIsOpen(true)}>
                    <img src={hamburger} alt="" className='h-12 w-12' />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Initial animation values
                    whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 2 }} // Animation duration
                    className='z-100 xl:!px-10 cursor-pointer hidden xl:!flex'>
                    <div className='font-mova'>
                        <span className='text-shadow text-[1.8rem] text-opacity-30'>
                            {text.split('').map((char, index) => (
                                <span
                                    key={index}
                                    className={`${index === currentIndex ? 'skew' : ''
                                        }`}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial animation values
                whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                transition={{ duration: 2 }} // Animation duration
                className=' px-10 hidden xl:!flex'>
                <div className='flex w-full nav-list'>
                    <ul className='flex w-full'>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}  ${activeSection === 'hero' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('hero')} to={`#${activeSection}`}>Home</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'} ${activeSection === 'service' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('service')} to={`#${activeSection}`}>Services</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'} ${activeSection === 'experience' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('experience')} to={`#${activeSection}`}>Exprience</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'} ${activeSection === 'work' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('work')} to={`#${activeSection}`}>Work</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'} ${activeSection === 'portfolio' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('portfolio')} to={`#${activeSection}`}>PortFolio</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'} ${activeSection === 'contact' ? 'text-white' : ''}`}><Link onClick={() => scrollToSection('contact')} to={`#${activeSection}`}>Contact Us</Link></li>
                    </ul>
                </div>
            </motion.div>
            {isOpen &&
                <div className='h-screen w-full absolute top-0 left-0 z-50 bg-black/20'>
                    <SideBar isOpen={() => setIsOpen(false)} scrollToSection={(id: any) => scrollToSection(id)} />
                </div>}
        </div>
    )
}

export default NavBar;