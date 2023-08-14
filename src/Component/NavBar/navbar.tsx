import { useEffect, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { hamburger } from '../../Assests';
import { Link } from 'react-router-dom';
function NavBar() {
    const [active, setActive] = useState('');
    const [colorChange, setColorchange] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
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

    const scrollToSection = (id:any) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className={`absolute top-0 flex w-screen xl:!w-full items-center justify-between max-h-screen lg:!h-[10vh] ${colorChange ? 'bg-gradient-to-b from-orange-100 to-yellow-200 !shadow-lg' : ''}`}>
            <div className='h-full flex justify-start items-center'>
                <div className='h-full flex items-start justify-start mix-blend-multiply xl:!hidden py-2 mx-2 sm:!mx-4' onClick={() => setIsOpen(true)}>
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
                                    className={`${index === currentIndex ? 'char-bounce' : ''
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
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('hero')} to="#hero">Home</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('service')} to="#service">Services</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('experience')} to="#experience">Expriences</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('work')} to="#work">Work</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('portfolio')} to="#portfolio">PortFolio</Link></li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}><Link onClick={() => scrollToSection('contact')} to="#contact">Contact Us</Link></li>
                    </ul>
                </div>
            </motion.div>
            {isOpen &&
                <div className='h-screen w-full absolute top-0 left-0 z-100 bg-black/20 overflow-hidden'>
                    <div className=' h-full w-[80%] sm:!w-[60%] bg-gradient-to-b from-orange-300 to-yellow-300 flex flex-col p-6'>
                        <div onClick={() => setIsOpen(false)} className='bg-gray-200 rounded-md py-2 px-2 w-full items-center justify-center flex font-mova uppercase'> close </div>
                        <div className='flex w-full mt-4'>
                            <ul className='flex w-full flex-col'>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>Home</li>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>About</li>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>PortFolio</li>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>Services</li>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>Expriences</li>
                                <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default NavBar;