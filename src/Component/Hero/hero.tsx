import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { github, instagram, linkedin, userImg2, vectorblue, webdev, webdev2, leetcode } from '../../Assests';
import FloatingDiv from '../FloatingDiv/floatingdiv';
import './styles.css';

const Hero = () => {
    const transition = { duration: 2, type: 'spring' };
    const navigate = useNavigate();
    const gitUserName = 'ParvejInamdar'

    const handleNavigate = () => {
        navigate('/hireme')
    };

    // const openWhatsApp = () => {
    //     window.open(`https://wa.me/${phoneNumber}`, '_blank');
    // };

    const openGithub = () => {
        window.open(`https://github.com/${gitUserName}`, '_blank');
      };

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/parvej-inamdar-008725171', '_blank');
    }

    const openLeetCode = () => {
        window.open('https://leetcode.com/ParvejInamdar/', '_blank');
    }

    return (
        <div className='flex flex-col-reverse lg:!flex-row items-center h-screen max-h-full relative w-full px-5 lg:!px-16'>
            <div className='h-full flex flex-col justify-center items-center lg:!items-start gap-4 md:!gap-8 intro-name pt-8 md:!pt-0 xl:mt-16 w-full'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className="w-full flex flex-col items-center lg:!items-start justify-center gap-1">
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--black] font-bold font-mova text-shadow'>Hi, I Am</span>
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--orange] font-bold font-mova text-shadow effect-type'>Parvej Inamdar</span>
                    <span className='text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] text-[--gray] font-[200] px-0 sm:!px-8 lg:!px-0 font-mova text-shadow text-center lg:!text-start'>Experienced Frontend Developer with a Passion for Perfecting Web Design and Development.Focused on Producing High-Quality, Interactive Web Solutions.</span>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={transition}
                    onClick={handleNavigate}
                    className="button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-[10rem] mt-4 z-40">Hire me</motion.button>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className="flex items-center justify-center gap-8 mt-4 intro-icons p-2">
                    <div onClick={openGithub}><img src={github} alt='Github' className=' w-[2.5rem] h-[2.5rem]' /></div>
                    <div onClick={openLinkedin}><img src={linkedin} alt='Linkedin' className=' w-[2.5rem] h-[2.5rem]' /></div>
                    <div onClick={openLeetCode}><img src={leetcode} alt='Linkedin' className=' w-[2.5rem] h-[2.5rem]' /></div>
                    {/* <div><img src={instagram} alt='Instagram' className=' w-[2.5rem] h-[2.5rem]' /></div> */}
                </motion.div>
            </div>
            <div className='h-full w-full flex items-center justify-center xl:!ml-16   relative'>
                <div className='flex relative items-center justify-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // Initial animation values
                        whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                        transition={{ duration: 2 }} // Animation duration
                        className='h-[22rem] w-[22rem] sm:!h-[30rem] sm:!w-[30rem] lg:!w-[40rem] lg:!h-[40rem]'>
                        <img src={vectorblue} alt='Vector' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} // Initial animation values
                        whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                        transition={{ duration: 2 }} // Animation duration
                        className='absolute z-100 mt-0 lg:!-mt-[5rem] -ml-[2rem] sm:!-ml-[3rem] h-[13rem] w-[13rem] sm:!h-[20rem] sm:!w-[20rem] lg:!h-[25rem] lg:!w-[25rem]'>
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
                        whileInView={{ left: '8%' }}
                        transition={transition}
                        className='absolute bottom-0 lg:!bottom-16'>
                        <FloatingDiv image={webdev2} texttitle={'Designer'} />
                    </motion.div>
                    <div className="blur !bg-[rgb(238,210,255)] right-0 top-12"></div>
                    <div className="blur !bg-[#be4d9a] bottom-16 left-0 !w-[21rem] !h-[11rem]"></div>
                </div>
            </div>
        </div>

    )
}

export default Hero;