import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { angular, bitbucket, ionic, react, tailwind, typescript,githubtech, javascript, html, css } from '../../Assests';
import ExperienceCard from '../ExpericenceCard/experiencecard';
import Tabbar from '../TabBar/tabbar';
import './styles.css';

const Experience = () => {
    const [width, setWidth] = useState(1501);
    const [activeTab, SetActiveTab] = useState("Experience")
    const transition = { duration: 2, type: 'spring' };

    const handleResize = () => {
        console.log("handle reszie")
        let width = window.innerWidth;
        setWidth(width);
        console.log("eidt", width)
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    return (
        <div className='h-full sm:!min-h-[80vh] lg:!min-h-screen flex items-center justify-center mx-auto'>
            <div className="flex h-full flex-col relative items-center justify-center w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className='flex flex-col items-center justify-center py-8 w-full lg:ml-4'>
                    <span className='lg:!opacity-30 text-[1.5rem] sm:!text-[2rem] lg:!text-[6rem] text-[--orange] font-bold font-mova'>Experience</span>
                    <span className='text-[--gray] text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow text-center'>Progressive Journey: From Past Achievements to Present Contributions</span>
                </motion.div>
                <div className='flex items-center justify-around gap-4 lg:!gap-8 w-full'>
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        key={1}
                        className="achivement flex flex-col items-center justify-center">
                        <div className="circle h-[4rem] w-[4rem] text-[1.2rem] sm:!text-[1.5rem] lg:!text-[2rem] lg:!h-[6rem] lg:!w-[6rem]">3+</div>
                        <span className='text-[--gray] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Years</span>
                        <span className='text-[--orange] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Experience</span>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        key={2}
                        className="achivement flex flex-col items-center justify-center">
                        <div className="circle h-[4rem] w-[4rem] text-[1.2rem] sm:!text-[1.5rem] lg:!text-[2rem] lg:!h-[6rem] lg:!w-[6rem]">4+</div>
                        <span className='text-[--gray] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Completed</span>
                        <span className='text-[--orange] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Projects</span>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        key={3}
                        className="achivement flex flex-col items-center justify-center">
                        <div className="circle h-[4rem] w-[4rem] text-[1.2rem] sm:!text-[1.5rem] lg:!text-[2rem] lg:!h-[6rem] lg:!w-[6rem]">2+</div>
                        <span className='text-[--gray] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Companies</span>
                        <span className='text-[--orange] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Work</span>
                    </motion.div>
                </div>
                <Tabbar tabName={["Experience", "Education"]} changeTab={(activeTab: any) => SetActiveTab(activeTab)} />
                {activeTab === 'Experience' && <div className='flex w-full items-center justify-center relative mt-4'>
                    <div className='grid grid-cols-1 sm:!grid-cols-2 place-items-center place-content-center w-full relative'>
                        <div className="blur right-0 bottom-0 !bg-purple-200"></div>
                        <div className='order-1 sm:order-1 sm:col-start-1 sm:row-start-1 w-full relative flex justify-center items-center'>
                            <motion.div
                                className='my-4 w-full h-[15rem] sm:!w-[22rem] sm:!h-[16rem] lg:!w-[30rem] lg:!h-[20rem]'
                                initial={{ opacity: 0, x: -40 }} // Initial animation values
                                whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                                transition={{ duration: 2 }} // Animation duration
                                key={4}
                            >
                                <ExperienceCard
                                    key={6}
                                    organization_name={'Dawrat'}
                                    company_name={'TAA LAB'}
                                    technology={[ionic, angular, typescript,html, tailwind,css,githubtech]}
                                    Location={"Kuwait"}
                                    join_date={'01/03/2023'}
                                    leave_date={"Present"}
                                    position={'Web Developer'}
                                    preference={2}
                                    performed_task={['Creating Clean, Complex and Responsive Designs.', 'Developing new Features with clean and reusable code.', 'Creating new Components', 'Integrating third party libraries.',
                                        'Bug Fixing and API Integration.']}
                                />
                            </motion.div>
                        </div>
                        <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
                        <div className='order-2 sm:order-2 sm:col-start-2 sm:row-start-2 w-full relative flex justify-center items-center'>
                            <motion.div
                                initial={{ opacity: 0, x: width < 1023 ? 40 : 160 }} // Initial animation values
                                whileInView={{ opacity: 1, x:0 }} // Animation when the card enters the viewport
                                transition={{ duration: 2 }}
                                key={5}
                                className='my-4 w-full h-[15rem] sm:!w-[21rem] sm:!h-[16rem] lg:!w-[30rem] lg:!h-[20rem]'>
                                <ExperienceCard
                                    key={7}
                                    organization_name={'Kinotis'}
                                    company_name={'Biz4Solutions'}
                                    technology={[react,javascript,typescript,html,css, bitbucket]}
                                    Location={"Pune"}
                                    join_date={'08/02/2022'}
                                    leave_date={"15/02/2023"}
                                    position={'Jr Programmer'}
                                    preference={1}
                                    performed_task={['Created Clean and Complex Designs.', 'Developed new Features with clean and reusable code.', 'Implemented Crashlytics in the apps.', 'Integrated third party libraries.',
                                        'Worked on UI component library Project for fast development.', 'Bug Fixing and API Integration.']}
                                />
                            </motion.div>
                        </div>
                        <div className="blur right-0 bottom-0 !bg-[#ABF1FF94]"></div>
                    </div>
                </div>}
                {activeTab === 'Education' && <div className='h-auto w-full relative mt-8 lg:!px-16'>
                <div className="blur right-0 bottom-0 !bg-purple-200"></div>
                    <div className=' grid grid-cols-1 sm:!grid-cols-2  gap-x-12  gap-y-4 lg:!gap-y-8 w-auto'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial animation values
                            whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                            transition={{ duration: 2 }}
                            className='flex flex-col items-center justify-center px-8 py-4 shadow-lg border rounded-tl-full rounded-br-full bg-gradient-to-tr from-orange-100 to-yellow-100 hover:!from-orange-200 hover:!to-yellow-200 gap-1 lg:!gap-4 relative hover:shadow-2xl hover:!-translate-y-1'>
                            <p className='text-[--orange] text-[1rem]  lg:!text-[1.5rem] text-shadow font-semibold text-white text-center'>( 2018 - 2021 )</p>
                            <p className='text-[--orange] font-mova text-[1rem]  lg:!text-[1.5rem] text-shadow text-center'>B.E - Comp. Sci. </p>
                            <p className='text-[--gray] font-mova text-[1rem]  lg:!text-[1.5rem] text-shadow text-center'>College of Engineering , Malegaon</p>
                            <p className='text-[--black] text-[1rem]  lg:!text-[1.5rem] text-shadow text-center font-semibold'>76.91% (CGPA - 8.74)</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial animation values
                            whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                            transition={{ duration: 2 }}
                            className='flex flex-col items-center justify-center px-8 py-4 shadow-lg border rounded-tl-full rounded-br-full bg-gradient-to-tr from-orange-100 to-yellow-100 hover:!from-orange-200 hover:!to-yellow-200 gap-1 lg:!gap-4 hover:shadow-2xl hover:!-translate-y-1'>
                            <p className='text-[--orange] text-[1rem] lg:!text-[1.5rem] text-shadow font-semibold text-white text-center'>( 2016 - 2018 )</p>
                            <p className='text-[--orange] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>Diploma - Comp. Engg.</p>
                            <p className='text-[--gray] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>SSPM's Polytechnic College</p>
                            <p className='text-[--black] text-[1rem] lg:!text-[1.5rem] text-shadow text-center font-semibold'>79.19%</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial animation values
                            whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                            transition={{ duration: 2 }}
                            className='flex flex-col items-center justify-center px-8 py-4 shadow-lg border rounded-tl-full rounded-br-full bg-gradient-to-tr from-orange-100 to-yellow-100 hover:!from-orange-200 hover:!to-yellow-200 gap-1 lg:!gap-4 hover:shadow-2xl hover:!-translate-y-1'>
                            <p className='text-[--orange] text-[1rem] lg:!text-[1.5rem] text-shadow font-semibold text-white text-center'>( 2016 )</p>
                            <p className='text-[--orange] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>HSC</p>
                            <p className='text-[--gray] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>Gopinath Vidyalaya & Jr.College</p>
                            <p className='text-[--black] text-[1rem] lg:!text-[1.5rem] text-shadow text-center font-semibold'>58.32%</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Initial animation values
                            whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                            transition={{ duration: 2 }}
                            className='flex flex-col items-center justify-center px-8 py-4 shadow-lg border rounded-tl-full rounded-br-full bg-gradient-to-tr from-orange-100 to-yellow-100 hover:!from-orange-200 hover:!to-yellow-200 gap-1 lg:!gap-4 hover:shadow-2xl hover:!-translate-y-1'>
                            <p className='text-[--orange] text-[1rem] lg:!text-[1.5rem] text-shadow font-semibold text-white text-center'>( 2014 )</p>
                            <p className='text-[--orange] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>SSC</p>
                            <p className='text-[--gray] font-mova text-[1rem] lg:!text-[1.5rem] text-shadow text-center'>New English School</p>
                            <p className='text-[--black] text-[1rem] lg:!text-[1.5rem] text-shadow text-center font-semibold'>80.00%</p>
                        </motion.div>
                    </div>
                    <div className="blur left-0 top-0 !bg-[#ABF1FF94]"></div>
                </div>
                }
            </div>
        </div>
    )
}

export default Experience;