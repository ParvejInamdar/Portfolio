import { motion } from 'framer-motion';
import { resume} from '../../Assests';
import Card from '../Card/card';
import './styles.css';
import { useState } from 'react';
import { skills } from '../../Constants';

const Services = () => {
    const transition = { duration: 4, type: 'spring' };
    const [techName, setTechName] = useState('react');
    const [prevId, setPrevId] = useState('react');

    const setTechnologyName = (techName: string, idname: string) => {
        let item = document.getElementById(idname);
        let previtem = document.getElementById(prevId);
        if (previtem) {
            console.log("previtem", previtem)
            previtem.classList.remove('b-shadow', 'scale-110', 'transition-transform', 'duration-300', 'from-orange-300', 'to-yellow-100');
            previtem.classList.add('shadow-left', 'scale-100', 'transition-transform', 'duration-300', 'from-yellow-100', 'to-orange-300')
        }
        if (item) {
            item?.classList.remove('shadow-left', 'scale-110', 'transition-transform', 'duration-300', 'from-yellow-100', 'to-orange-300');
            item?.classList.add('b-shadow', 'scale-100', 'transition-transform', 'duration-300', 'from-orange-300', 'to-yellow-100');
        }
        if (idname !== prevId) {
            setPrevId(idname);
        }
        setTechName(techName);
    }

    const zoomout = (idname: string) => {
        if (idname !== prevId) {
            let item = document.getElementById(idname);
            item?.classList.remove('scale-100');
            item?.classList.add('scale-110', 'transition-transform', 'duration-200');
        }
    }

    const zoomin = (idname: string) => {
        let item = document.getElementById(idname);
        item?.classList.remove('scale-110')
        item?.classList.add('scale-100', 'transition-transform', 'duration-200');
    }


    return (
        <div className="flex flex-col lg:!flex-row h-full sm:!h-[75vh] lg:!h-screen mt-8 py-2 lg:!mt-0 w-full items-center justify-center relative ml-0 lg:!ml-8">
            <div
                className="flex flex-col items-center justify-center lg:!items-start h-full w-full">
                <span className='text-[--orange] font-bold lg:!opacity-30 text-[1.5rem] sm:!text-[2rem] lg:!text-[6rem] font-mova'>Skills</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className='text-[--gray] text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow px-0 sm:!px-4 lg:!px-0 text-center lg:!text-start'
                >As a designer and developer, I help companies to build amazing websites and web applications that are easy to use</motion.span>
                <a href={resume} download={'Parvej_Inamdar_CV_8421839883'} className='!w-[9rem]'>
                    <button className='button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-[10rem] mt-4'>
                        Download CV
                    </button>
                </a>
                {/* <div className='w-full flex items-center justify-center lg:!justify-start text-[--orange] font-bold text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow my-5'>
                    <span className='border-b-4 capitalize rounded-br-md border-gradient-to-t from-yellow-500 to-orange-500'>{techName}</span>
                </div> */}
                <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full relative">
                <div className='w-full mt-5 sm:!mt-0 flex flex-col items-center justify-center'>
                    {skills.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className='flex items-center justify-center w-full -mb-4'
                        >
                            {tech.map((item) => (
                                <motion.div
                                    key={item.id}
                                    id={item.id}
                                    onClick={() => setTechnologyName(item.name, item.id)}
                                    onMouseEnter={() => zoomout(item.id)}
                                    onMouseLeave={() => zoomin(item.id)}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 1 }}
                                    className={`cursor-pointer rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 !rotate-45 p-2 sm:!p-3 mx-[25px] sm:!mx-[56px] mb-2 ${item.cssClass}`}
                                >
                                    <img src={item.image} alt='' className='-rotate-45 rounded-md' />
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* <div className='grid grid-cols-1 sm:!grid-cols-3 lg:!flex flex-col items-center lg:!items-end justify-center lg:ml-24 relative h-full w-full'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={transition}
                        className='lg:!absolute lg:!left-16 mx-2 relative'>
                        <Card image={webdev2} title={'Web'} subtitle={'React,Angular,Html ,JS,Css'} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={transition}
                        className='lg:!absolute lg:!top-1/2 lg:!left-72 mx-2'>
                        <Card image={webdev3} title={'Mobile'} subtitle={'React-Native,Ionic,tailwind'} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={transition}
                        className='lg:!absolute lg:!left-72 lg:!bottom-1/2 lg:!w-[13rem] z-100 mx-2'>
                        <Card image={webdev} title={'Design'} subtitle={'Figma'} />
                    </motion.div>
                    <div className="blur right-0 bottom-0 -z-10 !bg-purple-200"></div>
                </div> */}
            </div>
        </div>
    )
}

export default Services;