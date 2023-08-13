import React from 'react';
import './styles.css';
import { footerwave, footerinsta, footerlinkedin, footerfacebook, telegram, whatsapp } from '../../Assests';
// import Insta from '@iconscout/react-unicons/icons/uil-instagram';
const Footer = () => {
    const phoneNumber = '8421839883';
    const username = 'beinghumanityy';

    const openWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const openTelegram = () => {
        window.open(`tg://resolve?domain=${username}`, '_blank');
      };

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/parvej-inamdar-008725171', '_blank');
    }
    return (
        <div className="footer h-[20vh] lg:!h-[30vh] bg-gradient-to-b from-orange-300 to-yellow-300">
            {/* <img src={footerwave} alt='' className='!w-full h-full mix-blend-multiply blur-sm' /> */}
            <div className="footer-content h-full">
                <span className='text-[--black] font-bold text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] font-mova text-shadow'>Let's Talk</span>
                <div className="footer-icon">
                    {/* <div className='logo'>
                        <img src={footerinsta} alt='' />
                    </div> */}
                    <div className='logo' onClick={openLinkedin}>
                        <img src={footerlinkedin} alt='' />
                    </div>
                    {/* <div className='logo'>
                        <img src={footerfacebook} alt='' />
                    </div> */}
                    <div className='logo' onClick={openWhatsApp}>
                        <img src={whatsapp} alt='' />
                    </div>
                    <div className='logo' onClick={openTelegram}>
                        <img src={telegram} alt='' />
                    </div>
                </div>
                <div>
                    <span className='text-[1rem] sm:!text-[1.3rem] lg:!text-[1.5rem] font-mova text-white text-shadow'>inamdarparvej@gmail.com</span>
                    <span className='text-[1rem] sm:!text-[1.5rem] font-mova text-white text-shadow'> | </span>
                    <span className='text-[1rem] sm:!text-[1.3rem] font-mova text-white text-shadow'>+91 8421839883</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;