import React, { useEffect, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import ExperienceCard from '../ExpericenceCard/experiencecard';
import { angular, ionic, typescript, tailwind, githubtech, git, react, bitbucket } from '../../Assests';
import Tabbar from '../TabBar/tabbar';

const Experience = () => {
    const [width, setWidth] = useState(1501);
    const [activeTab,SetActiveTab] = useState("Experience")
    const transition = { duration: 2, type: 'spring' };

    const handleResize = () => {
        let width = window.innerWidth;
        setWidth(width);
        console.log("eidt", width)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    })

    return (
        <div className='h-full lg:!h-screen flex items-center justify-center mx-auto pt-8'>
            <div className="flex h-full flex-col relative items-center justify-center w-full">
                <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: false }}
                 transition={transition}
                className='flex flex-col items-center justify-center py-8 w-full lg:ml-4'>
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--orange] font-bold font-mova text-shadow'>Experience</span>
                    <span className='text-[--gray] text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow'>Progressive Journey: From Past Achievements to Present Contributions</span>
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
                        <div className="circle h-[4rem] w-[4rem] text-[1.2rem] sm:!text-[1.5rem] lg:!text-[2rem] lg:!h-[6rem] lg:!w-[6rem]">2+</div>
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
                        <div className="circle h-[4rem] w-[4rem] text-[1.2rem] sm:!text-[1.5rem] lg:!text-[2rem] lg:!h-[6rem] lg:!w-[6rem]">3+</div>
                        <span className='text-[--gray] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Companies</span>
                        <span className='text-[--orange] font-mova text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem]'>Work</span>
                    </motion.div>
                </div>
                <Tabbar tabName={["Experience","Education"]} changeTab={(activeTab:any)=>SetActiveTab(activeTab)}/>
                {activeTab === 'Experience' && <div className='flex w-full items-center justify-center relative mt-4'>
                    <div className='grid grid-cols-1 sm:!grid-cols-2 sm:!grid-rows-2  place-items-center w-full relative'>
                        <div className="blur right-0 bottom-0 !bg-purple-200"></div>
                        <div className='order-1 sm:order-1 sm:col-start-1 sm:row-start-1 w-full place-items-center relative'>
                            <motion.div
                                className='my-4 w-full h-[15rem] sm:!w-[21rem] sm:!h-[18rem] lg:!w-[30rem] lg:!h-[20rem]'
                                initial={{ opacity: 0, x: -40 }} // Initial animation values
                                whileInView={{ opacity: 1, x: width < 1023 ? 0 : width > 1500 ? 80 : 40 }} // Animation when the card enters the viewport
                                transition={{ duration: 2 }} // Animation duration
                                key={4}
                            >
                                <ExperienceCard
                                    key={6}
                                    organization_name={'Dawrat'}
                                    company_name={'TAA LAB'}
                                    technology={[ionic, angular, typescript, tailwind]}
                                    Location={"Kuwait"}
                                    join_date={'01/01/2023'}
                                    leave_date={"Present"}
                                    position={'Jr Web Developer'}
                                    preference={2}
                                    performed_task={['Created Clean and Complex Designs.', 'Developed new Features with clean and reusable code.', 'Converted Angular component into Ionic', 'Integrated third party libraries.',
                                        'Bug Fixing and API Integration.']}
                                />
                            </motion.div>
                        </div>
                        <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
                        {/* <div className='hidden lg:!block absolute left-[50%] top-[20%] h-[70%]'>
                    <div className='h-full w-full relative flex items-center flex-col'>
                        <div className='h-16 w-16 flex items-center justify-center relative rounded-full'>
                            <div className='h-full w-full bg-yellow-200 rounded-full'>
                            </div>
                            <div className='absolute h-10 w-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center font-semibold text-white'>2</div>
                        </div>
                        <div className='h-full w-[2px] border-2 border-orange-500 border-dashed my-2'></div>
                        <div className='h-16 w-16 flex items-center justify-center relative'>
                            <div className='h-full w-full bg-yellow-200 rounded-full'>
                            </div>
                            <div className='absolute h-10 w-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center font-semibold text-white'>1</div>
                        </div>
                    </div>
                </div> */}
                        <div className='order-2 sm:order-2 sm:col-start-2 sm:row-start-2 w-full relative'>
                            <motion.div
                                initial={{ opacity: 0, x: width < 1023 ? 40 : 160 }} // Initial animation values
                                whileInView={{ opacity: 1, x: width < 1023 ? 0 : width > 1500 ? 80 : 40 }} // Animation when the card enters the viewport
                                transition={{ duration: 2 }}
                                key={5}
                                className='my-4 w-full h-[15rem] sm:!w-[21rem] sm:!h-[18rem] lg:!w-[30rem] lg:!h-[20rem]'>
                                <ExperienceCard
                                    key={7}
                                    organization_name={'Kinotis'}
                                    company_name={'Biz4Solutions'}
                                    technology={[react, bitbucket]}
                                    Location={"Pune"}
                                    join_date={'08/02/2022'}
                                    leave_date={"15/02/2022"}
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
                {activeTab === 'Education' && <div className='h-[50%] w-full relative'>
                <div className='h-full w-[2px] border-2 border-orange-500 border-dashed my-2 absolute left-1/2'></div></div>
                }
            </div>
        </div>
    )
}

export default Experience;