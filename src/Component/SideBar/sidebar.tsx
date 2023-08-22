import { motion } from "framer-motion";

const SideBar = (props: any) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -30 }} // Initial animation values
        whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
        transition={{ duration: 0.5 }}
        className=' h-full w-[80%] sm:!w-[60%] bg-gradient-to-b from-orange-300 to-yellow-300 flex flex-col p-6'>
            <div onClick={props.isOpen} className='bg-gray-200 rounded-md text-[1.2rem] sm:!text-[1.5rem] py-2 px-2 w-full items-center justify-center flex font-mova uppercase'> close </div>
            <div className='flex w-full mt-4'>
                <ul className='flex w-full flex-col'>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('hero')}>Home</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('service')}>Services</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('experience')}>Experience</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('work')}>Work</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('portfolio')}>Portfolio</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] sm:!text-[1.5rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </motion.div>
    )
}

export default SideBar;