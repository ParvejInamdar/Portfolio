import { motion } from 'framer-motion';
import { resume, webdev, webdev2, webdev3 } from '../../Assests';
import Card from '../Card/card';
import './styles.css';

const Services = () => {

    const transition = { duration: 4, type: 'spring' };


    return (
        <div className="flex flex-col lg:!flex-row h-full lg:!h-screen mt-8 py-2 lg:!mt-0 w-full items-center justify-center relative ml-0 lg:!ml-8">
            <div
                className="flex flex-col items-center justify-center lg:!items-start h-full w-full">
                <span className='text-[--orange] font-bold text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] font-mova text-shadow'>Services</span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className='text-[--gray] text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow px-0 sm:!px-4 lg:!px-0 text-center lg:!text-start'
                >As a designer and developer, I help companies to build amazing websites and web applications that are easy to use</motion.span>
                <a href={resume} download className='!w-[8rem]'>
                    <button className='button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-[10rem] mt-4'>
                        Download CV
                    </button>
                </a>
                <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
            </div>
            <div className="flex items-center justify-center w-full h-full relative">
                <div className='grid grid-cols-1 sm:!grid-cols-3 lg:!flex flex-col items-center lg:!items-end justify-center lg:ml-24 relative h-full w-full'>
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
                </div>
            </div>
        </div>
    )
}

export default Services;