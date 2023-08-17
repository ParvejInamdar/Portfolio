import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { github, instagram, linkedin, userImg2, vectorblue, webdev, webdev2 } from '../../Assests';
import FloatingDiv from '../FloatingDiv/floatingdiv';
import './styles.css';

const Hero = () => {
    const transition = { duration: 2, type: 'spring' };
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/hireme')
    };

    return (
        <div className='flex flex-col-reverse lg:!flex-row items-center h-screen max-h-full relative w-full px-5 lg:!px-16'>
            <div className='h-full flex flex-col justify-center items-center lg:!items-start gap-4 md:!gap-8 intro-name pt-8 md:!pt-0 w-full'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className="w-full flex flex-col items-center lg:!items-start justify-center gap-1">
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--black] font-bold font-mova text-shadow'>Hi, I Am</span>
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--orange] font-bold font-mova text-shadow effect-type'>Parvej Inamdar</span>
                    <span className='text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] text-[--gray] font-[200] px-0 sm:!px-8 lg:!px-0 font-mova text-shadow'>Experienced Frontend Developer with a Passion for Perfecting Web Design and Development.Focused on Producing High-Quality, Interactive Web Solutions.</span>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={transition}
                    onClick={handleNavigate}
                    className="button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-[10rem] mt-4 z-50">Hire me</motion.button>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className="flex items-center justify-center gap-8 mt-4 intro-icons p-2">
                    <img src={github} alt='Github' className=' w-[2rem] h-[2rem]' />
                    <img src={linkedin} alt='Github' className=' w-[2rem] h-[2rem]' />
                    <img src={instagram} alt='Github' className=' w-[2rem] h-[2rem]' />
                </motion.div>
            </div>
            <div className='h-full w-full flex items-center justify-center  lg:!-mt-12 relative'>
                <div className='flex relative items-center justify-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // Initial animation values
                        whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                        transition={{ duration: 2 }} // Animation duration
                        className='h-[20rem] w-[20rem] sm:!h-[25rem] sm:!w-[25rem] lg:!w-[40rem] lg:!h-[40rem]'>
                        <img src={vectorblue} alt='Vector' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // Initial animation values
                        whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                        transition={{ duration: 2 }} // Animation duration
                        className='absolute z-100 lg:-mt-[5rem] -ml-[2rem] h-[10rem] w-[10rem] sm:!h-[15rem] sm:!w-[15rem] lg:!h-[25rem] lg:!w-[25rem]'>
                        <img src={userImg2} className='rounded-[45%]' alt='Vector' />
                    </motion.div>
                    <motion.div
                        initial={{ right: '0%' }}
                        whileInView={{ right: '10%' }}
                        transition={transition}
                        className='absolute top-0 lg:!top-16'>
                        <FloatingDiv image={webdev} texttitle={'Web'} textsubtitle={'Developer'} />
                    </motion.div>
                    <motion.div
                        initial={{ left: '-10%' }}
                        whileInView={{ left: '15%' }}
                        transition={transition}
                        className='absolute bottom-0 lg:!bottom-16'>
                        <FloatingDiv image={webdev2} texttitle={'Designer'} />
                    </motion.div>
                    <div className="blur !bg-[rgb(238,210,255)] right-0 top-12"></div>
                    <div className="blur !bg-[#c1f5ff] bottom-16 left-0 !w-[21rem] !h-[11rem]"></div>
                </div>


            </div>
        </div>

    )
}

export default Hero;