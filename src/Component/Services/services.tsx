import { motion } from 'framer-motion';
import { github, resume, webdev, webdev2, webdev3, react, angular, tailwind, typescript, bitbucket, javascript, githubtech, python, ionic, git, html, css, node, mongo, mysql } from '../../Assests';
import Card from '../Card/card';
import './styles.css';
import { useState } from 'react';

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
        if(idname !== prevId){
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
                <a href={resume} download={'Parvej_Inamdar_CV_8421839883'} className='!w-[8rem]'>
                    <button className='button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-[10rem] mt-4'>
                        Download CV
                    </button>
                </a>
                <div className='w-full flex items-center justify-center lg:!justify-start text-[--orange] font-bold text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow my-5 capitalize'>
                    {techName}
                </div>
                <div className="blur service-blur-left !bg-[#ABF1FF94]"></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full relative">
                <div className='w-full px-5 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center w-full -mb-4'>
                        <div id='node' onClick={() => setTechnologyName('Node js', 'node')} onMouseEnter={() => zoomout('node')} onMouseLeave={() => zoomin('node')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={node} alt='' className='-rotate-45' />
                        </div>
                        <div id='html' onClick={() => setTechnologyName('html', 'html')} onMouseEnter={() => zoomout('html')} onMouseLeave={() => zoomin('html')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={html} alt='' className='-rotate-45' />
                        </div>
                        <div id='css' onClick={() => setTechnologyName('CSS', 'css')} onMouseEnter={() => zoomout('css')} onMouseLeave={() => zoomin('css')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={css} alt='' className='-rotate-45' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full -mb-4'>
                        <div id='python' onClick={() => setTechnologyName('python', 'python')} onMouseEnter={() => zoomout('python')} onMouseLeave={() => zoomin('python')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={python} alt='' className='-rotate-45' />
                        </div>
                        <div id='tailwind' onClick={() => setTechnologyName('tailwind', 'tailwind')} onMouseEnter={() => zoomout('tailwind')} onMouseLeave={() => zoomin('tailwind')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={tailwind} alt='' className='-rotate-45' />
                        </div>
                        <div id='ionic' onClick={() => setTechnologyName('ionic', 'ionic')} onMouseEnter={() => zoomout('ionic')} onMouseLeave={() => zoomin('ionic')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={ionic} alt='' className='-rotate-45' />
                        </div>
                        <div id='angular' onClick={() => setTechnologyName('angular', 'angular')} onMouseEnter={() => zoomout('angular')} onMouseLeave={() => zoomin('angular')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={angular} alt='' className='-rotate-45' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full -mb-4'>
                        <div id='javascript' onClick={() => setTechnologyName('javascript', 'javascript')} onMouseEnter={() => zoomout('javascript')} onMouseLeave={() => zoomin('javascript')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={javascript} alt='' className='-rotate-45' />
                        </div>
                        <div id='react' onClick={() => setTechnologyName('react / React-Native', 'react')} onMouseEnter={() => zoomout('react')} onMouseLeave={() => zoomin('react')} className='b-shadow cursor-pointer h-[90px] w-[90px] rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={react} alt='' className='-rotate-45' />
                        </div>
                        <div id='typescript' onClick={() => setTechnologyName('typescript', 'typescript')} onMouseEnter={() => zoomout('typescript')} onMouseLeave={() => zoomin('typescript')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2'>
                            <img src={typescript} alt='' className='-rotate-45' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full -mb-4'>
                        <div id='git' onClick={() => setTechnologyName('git', 'git')} onMouseEnter={() => zoomout('git')} onMouseLeave={() => zoomin('git')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={git} alt='' className='-rotate-45' />
                        </div>
                        <div id='bitbucket' onClick={() => setTechnologyName('bitbucket', 'bitbucket')} onMouseEnter={() => zoomout('bitbucket')} onMouseLeave={() => zoomin('bitbucket')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-4 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={bitbucket} alt='' className='-rotate-45' />
                        </div>
                        <div id='github' onClick={() => setTechnologyName('github', 'github')} onMouseEnter={() => zoomout('github')} onMouseLeave={() => zoomin('github')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={githubtech} alt='' className='-rotate-45 rounded-md' />
                        </div>
                        <div id='mongo' onClick={() => setTechnologyName('mongo db', 'mongo')} onMouseEnter={() => zoomout('mongo')} onMouseLeave={() => zoomin('mongo')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={mongo} alt='' className='-rotate-45' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2 w-full -mb-4'>
                        <div id='mysql' onClick={() => setTechnologyName('mysql', 'mysql')} onMouseEnter={() => zoomout('mysql')} onMouseLeave={() => zoomin('mysql')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={mysql} alt='' className='-rotate-45' />
                        </div>
                        <div id='mysql' onClick={() => setTechnologyName('mysql', 'mysql')} onMouseEnter={() => zoomout('mysql')} onMouseLeave={() => zoomin('mysql')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={mysql} alt='' className='-rotate-45' />
                        </div>
                        <div id='mysql' onClick={() => setTechnologyName('mysql', 'mysql')} onMouseEnter={() => zoomout('mysql')} onMouseLeave={() => zoomin('mysql')} className='shadow-left cursor-pointer h-16 w-16 rounded-xl bg-gradient-to-b from-yellow-100 to-orange-300 rotate-45 p-3 mx-[56px] mb-2 transition-transform duration-200'>
                            <img src={mysql} alt='' className='-rotate-45' />
                        </div>
                    </div>
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