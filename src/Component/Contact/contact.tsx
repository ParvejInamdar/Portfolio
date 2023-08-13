import React, { useRef, useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


const Contact = () => {

    const form: any = useRef();
    const username: any = useRef('');
    const useremail: any = useRef('');
    const message: any = useRef('');
    const contact: any = useRef('');
    const [messageSent, setMessageSent] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [userContactError, setUserContactError] = useState(false);
    const transition = { duration: 2, type: 'spring' };

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!username.current.value || !useremail.current.value || !contact.current.value) {
            if (!username.current.value) {
                setUserNameError(true);
            }
            if (!useremail.current.value) {
                setEmailError(true);
            }
            if (!contact.current.value) {
                setUserContactError(true)
            }
        }
        else {
            emailjs.sendForm('service_ya90q4v', 'template_tlqx9di', form.current, 'ZfyJkbjvvLEvx2AxM')
                .then((result: any) => {
                    username.current.value = '';
                    useremail.current.value = '';
                    contact.current.value = '';
                    message.current.value = '';
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

    return (
        <div className="w-full flex flex-col lg:!flex-row items-center justify-around h-full lg:!h-screen py-6 z-100">
            {/* <div className="w-full flex items-center justify-center py-4"> */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={transition}
                className="w-full flex flex-col justify-start lg:!justify-center items-center lg:!items-start lg:!pl-16 py-4 lg:!mb-16 h-full">
                <span className='text-[--orange] font-bold text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] font-mova text-shadow'>Let's Build Something Together</span>
                {/* <span className='text-[--yellow] font-bold text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] font-mova text-shadow'>Let's Build Something Together</span> */}
                <span className='text-[--gray] font-bold text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-shadow pr-8'>You need Beautiful designs for your website or You need to build Web Application Leave a Request</span>
                <div className="blur !bg-[#c1f5ff] !top-[24rem] !w-[21rem] !h-[11rem] !-left-[10rem]"></div>
            </motion.div>
            {/* </div> */}
            <div className="w-full contact-right flex items-center justify-center relative">
                <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center font-mova w-full px-4 gap-4 mb-2'>
                    <div className='w-full'>
                        <input ref={username} type="text" name="user_name" className='user w-full' placeholder='Name*' onChange={(e) => {
                            setUserNameError(false);
                        }} />
                        {userNameError && <div className='text-red-500 font-semibold text-sm'>User name is required*</div>}
                    </div>
                    <div className='w-full'>
                        <input ref={useremail} type="email" name="user_email" className='user w-full' placeholder='Email*' onChange={(e) => {
                            setEmailError(false)
                        }} />
                        {emailError && <div className='text-red-500 font-semibold text-sm'>Email-id is required*</div>}
                    </div>
                    <div className='w-full'>
                        <input ref={contact} type="number" name="contact_number" className='user w-full' placeholder='Contact No.*' onChange={(e) => { setUserContactError(false) }} />
                        {userContactError && <div className='text-red-500 font-semibold text-sm'>Contact Number is required*</div>}
                    </div>
                    <textarea ref={message} name='message' className='user w-full' placeholder='Message' />
                    {messageSent &&
                        <div className='text-green-500 font-semibold'>
                            <h1>Message Sent successfully.</h1>
                        </div>
                    }
                    <input type='submit' value="Send" className='button bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-white hover:to-white hover:text-yellow-500 border-2 border-yellow-500 text-white px-4 py-2 !flex !items-center !justify-center text-[1rem] sm:!text-[1.1rem] lg:!text-[1.3rem] rounded-full font-mova w-1/2' />
                    <div className='blur top-[1rem] right-2 bg-[--purple]'>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;