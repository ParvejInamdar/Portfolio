import { useEffect, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
function NavBar() {
    const [active, setActive] = useState('');
    const [colorChange, setColorchange] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
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

    return (
        <div className={`absolute top-0 flex w-full items-center justify-between h-[10vh] ${colorChange ? 'bg-gradient-to-b from-orange-100 to-yellow-200 !shadow-lg' : ''}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial animation values
                whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                transition={{ duration: 2 }} // Animation duration
                className='z-100 px-10 cursor-pointer'>
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
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial animation values
                whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                transition={{ duration: 2 }} // Animation duration
                className=' px-10'>
                <div className='flex w-full nav-list'>
                    <ul className='flex w-full'>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>Home</li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>About</li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>PortFolio</li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>Services</li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>Expriences</li>
                        <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 ${colorChange ? 'hover:text-white' : 'hover:text-[--orange]'}`}>Contact Us</li>
                    </ul>
                </div>
            </motion.div>
            {/* <div className='nav-right'>
                <div className='nav-list'>
                    <ul>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>Home</li>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>About</li>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>PortFolio</li>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>Services</li>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>Expriences</li>
                        <li className='p-3 font-mova text-shadow text-[--gray]'>Contact Us</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default NavBar;