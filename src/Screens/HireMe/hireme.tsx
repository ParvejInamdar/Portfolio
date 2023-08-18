import React, { useRef, useState } from 'react';
import { FeDev, react, angular, tailwind, typescript, bitbucket, backbutton, javascript, githubtech } from '../../Assests';
import './styles.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HireMe = () => {
    const techImg = [react, angular, javascript, typescript, tailwind, githubtech, bitbucket];
    const form: any = useRef();
    const username: any = useRef('');
    const useremail: any = useRef('');
    const jobDescription: any = useRef('');
    const contact: any = useRef('');
    const [messageSent, setMessageSent] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [userContactError, setUserContactError] = useState(false);
    const [jobDescriptionError, setJobDescriptionError] = useState(false);
    const navigate = useNavigate();

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!username.current.value || !useremail.current.value || !contact.current.value || !jobDescription.current.value) {
            console.log("inside if")
            if (!username.current.value) {
                setUserNameError(true);
            }
            if (!useremail.current.value) {
                console.log("inside email")
                setEmailError(true);
            }
            if (!contact.current.value) {
                console.log("inside contact")
                setUserContactError(true)
            }
            if (!jobDescription.current.value) {
                console.log("inside job")
                setJobDescriptionError(true)
            }
        }
        else {
            emailjs.sendForm('service_ya90q4v', 'template_meezsmy', form.current, 'ZfyJkbjvvLEvx2AxM')
                .then((result: any) => {
                    username.current.value = '';
                    useremail.current.value = '';
                    contact.current.value = '';
                    jobDescription.current.value = '';
                    setMessageSent(true);
                    setTimeout(() => {
                        setMessageSent(false)
                    }, 5000);
                    console.log(result.text);
                }, (error: any) => {
                    console.log(error.text);
                });
        }
    };

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className='h-screen bg-gradient-to-br from-red-200 to-blue-200'>
            <div className='absolute px-2 py-2 top-2 left-2 lg:!top-4 lg:!left-4 z-40 back-button' onClick={goBack}>
                <img src={backbutton} alt="backbutton" className='h-[2rem] w-[2rem] lg:!h-[3rem] lg:!w-[3rem] rounded-full' />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }} // Initial animation values
                whileInView={{ opacity: 1, y: 0 }} // Animation when the card enters the viewport
                transition={{ duration: 2 }}
                className='h-full w-full px-2 sm:!px-16 lg:!px-48 py-16 relative'>
                <div className='flex flex-col lg:!flex-row border shadow-3d h-full w-full rounded-md'>
                    <div className='min-h-[30vh] h-3/4 lg:!h-full w-full lg:!w-3/4 relative rounded-tl-md rounded-bl-md gap-4 z-50'>
                        <img src={FeDev} alt='' className='absolute w-full h-full rounded-tl-md rounded-bl-md' />
                        <div className='absolute z-50 bg-gradient-to-t from-blue-500/30 to-green-500/30 h-full w-full py-4 px-8 rounded-tl-md rounded-bl-md'>
                            {/* <div className='text-[3.5rem] font-bold font-poppins text-shadow text-white'>Hire Me</div>
                            <div className='text-[1.2rem] text-red-900 font-[200] px-0 sm:!px-8 lg:!px-0 font-mova text-shadow'>Passionate Front-End Developer Transforming Designs into Seamless, Interactive Web Solutions</div> */}
                            {/* <div className='flex flex-wrap mb-4'>
                                {techImg.map((item: any, index: any) => {
                                    return <img key={index} src={item} className='w-[3rem] h-[3rem] mr-4 mt-4 rounded-md' />
                                })}
                            </div> */}
                        </div>
                    </div>
                    <div className=' h-full w-full rounded-tr-md rounded-br-md bg-yellow-50 flex flex-col'>
                        <div className='flex flex-col px-2 lg:!px-6 py-1 justify-center items-center'>
                            <div className='text-[2.5rem] font-bold font-poppins text-shadow text-white'>Hire Me</div>
                            <div className='text-[1.1rem] text-red-900 font-mova text-shadow text-center'>Passionate Front-End Developer Transforming Designs into Seamless, Interactive Web Solutions</div>
                            <div className='flex flex-wrap justify-around'>
                                {techImg.map((item: any, index: any) => {
                                    return <img key={index} src={item} className='w-[2.5rem] h-[2.5rem] mr-4 mt-4 rounded-md' />
                                })}
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col pb-2 px-5 lg:!px-20 justify-center w-full h-full'>
                            <div className='py-1'>
                                <input ref={username} type="text" name="user_name" className='user w-full' placeholder='Name*' onChange={(e) => { setUserNameError(false) }} />
                                {userNameError && <div className='text-red-500 font-semibold text-xs'>User name is required*</div>}
                            </div>
                            <div className='py-1'>
                                <input ref={useremail} type="email" name="user_email" className='user w-full' placeholder='Email*' onChange={(e) => { setEmailError(false) }} />
                                {emailError && <div className='text-red-500 font-semibold text-xs'>Email is required*</div>}
                            </div>
                            <div className='py-1'>
                                <input ref={contact} type="number" name="contact" className='user w-full' placeholder='Contact*' onChange={(e) => { setUserContactError(false) }} />
                                {userContactError && <div className='text-red-500 font-semibold text-xs'>Contact is required*</div>}
                            </div>
                            <div className='py-1'>
                                <textarea ref={jobDescription} name="job_description" className='user w-full' placeholder='Job Description*' onChange={(e) => { setJobDescriptionError(false) }} />
                                {jobDescriptionError && <div className='text-red-500 font-semibold text-xs'>Job Dexcription is required*</div>}
                            </div>
                            {messageSent &&
                                <div className='text-green-500 font-semibold flex items-center justify-center pb-1'>
                                    <h1>Message Sent successfully.</h1>
                                </div>
                            }
                            <input type='submit' value="Send" className='button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.2rem] rounded-full font-mova' />
                        </form>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default HireMe;