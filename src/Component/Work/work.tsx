import { motion } from 'framer-motion';
import { biz, dawrat, techciti, webdev } from '../../Assests';
import './styles.css';

const Works = () => {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="flex h-full lg:!h-screen flex-col lg:!flex-row items-center justify-around">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={transition}
                className="flex flex-col justify-center items-center lg:!items-start w-full my-8 lg:!my-0 lg:!ml-16">
                <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--black] font-bold font-mova text-shadow'>Corporate Journey</span>
                <span className='text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] text-[--orange] font-bold font-mova text-shadow'>Making an Impact Across Organizations</span>
                <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
            </motion.div>
            <div className="work-right flex items-center justify-center w-full py-4 px-2 pl-0 lg:!pl-16  relative">
                <motion.div
                    initial={{ rotate: 45, opacity: 0.5 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3, type: 'spring' }}
                    className="work-maincircle relative h-[15rem] w-[15rem] sm:!h-[20rem] sm:!w-[20rem] rounded-full">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 2 }}
                        className="work-seccircle h-[4rem] w-[4rem]  sm:!h-[6rem] sm:w-[6rem] rounded-full -top-[1.5rem] left-[5.5rem] sm:!-top-[3rem] sm:!left-[7rem] relative group flex items-center justify-center">
                        <img className='h-[3rem] rounded-full' src={dawrat} alt='' />
                        <div className="absolute top-full left-0 mt-1 ml-3 bg-gradient-to-r from-orange-300 to-yellow-100 border border-gray-300 !text-[12px] rounded-lg px-2 py-1 w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-beckman text-white text-shadow">
                            <p>Dawrat</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 2 }}
                        className="work-seccircle h-[4rem] w-[4rem]  sm:!h-[6rem] sm:w-[6rem] rounded-full top-[5.5rem] -left-[1.5rem] sm:!top-[7rem] sm:!-left-[3rem] relative group flex items-center justify-center">
                        <img className='h-[3rem] rounded-full' src={biz} alt='' />
                        <div className="absolute top-full left-0 mt-1 mr-3 bg-gradient-to-r from-orange-300 to-yellow-100 border border-gray-300 !text-[12px] rounded-lg px-2 py-1 w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-beckman text-white text-shadow">
                            <p>Biz4Solutions</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 2 }}
                        className="work-seccircle h-[4rem] w-[4rem]  sm:!h-[6rem] sm:w-[6rem] rounded-full top-[5.5rem] left-[5.5rem] sm:!top-[7rem] sm:!left-[7rem] relative group flex items-center justify-center">
                        <img className='h-[3rem] rounded-full' src={techciti} alt='' />
                        <div className="absolute top-full left-0 mt-1 ml-3 bg-gradient-to-r from-orange-300 to-yellow-100 border border-gray-300 !text-[12px] rounded-lg px-2 py-1 w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-beckman text-white text-shadow">
                            <p>Techciti</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 2 }}
                        className="work-seccircle h-[4rem] w-[4rem]  sm:!h-[6rem] sm:w-[6rem] rounded-full top-[5.5rem] left-[12.5rem] sm:!top-[7rem] sm:!left-[17rem]">
                        <img className='h-[3rem]' src={webdev} alt='' />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 2 }}
                        className="work-seccircle h-[4rem] w-[4rem]  sm:!h-[6rem] sm:w-[6rem] rounded-full top-[12.5rem] left-[5.5rem] sm:!top-[17rem] sm:!left-[7rem]">
                        <img className='h-[3rem]' src={webdev} alt='' />
                    </motion.div>
                </motion.div>
                <div className="blur right-0 !bg-purple-300"></div>
            </div>
        </div>
    )
}

export default Works;