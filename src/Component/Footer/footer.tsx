import { footerlinkedin, telegram, whatsapp, instagramcontact } from '../../Assests';
import './styles.css';

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
        <div className="footer h-[20vh] lg:!h-[30vh] bg-gradient-to-b from-blue-100 to-green-300 relative">
            <div className="font-mova  flex flex-col items-center justify-center gap-2 lg:!gap-4 h-full relavtive">
                <span className='text-[--black] font-bold text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] font-mova text-shadow'>Let's Talk</span>
                <div className="flex gap-4">
                    {/* <div className='logo'>
                        <img src={footerinsta} alt='' />
                    </div> */}
                    <div className='logo h-[2.5rem] w-[2.5rem] lg:!h-[4rem] lg:!w-[4rem] cursor-pointer' onClick={openLinkedin}>
                        <img src={footerlinkedin} alt='' />
                    </div>
                    {/* <div className='logo'>
                        <img src={footerfacebook} alt='' />
                    </div> */}
                    <div className='logo h-[2.5rem] w-[2.5rem] lg:!h-[4rem] lg:!w-[4rem] cursor-pointer' onClick={openWhatsApp}>
                        <img src={whatsapp} alt='' />
                    </div>
                    <div className='logo h-[2.5rem] w-[2.5rem] lg:!h-[4rem] lg:!w-[4rem] cursor-pointer' onClick={openTelegram}>
                        <img src={telegram} alt='' />
                    </div>
                    {/* <div className='logo' onClick={openTelegram}>
                        <img src={instagramcontact} alt='' />
                    </div> */}
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