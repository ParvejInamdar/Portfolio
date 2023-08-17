const SideBar = (props: any) => {
    return (
        <div className=' h-full w-[80%] sm:!w-[60%] bg-gradient-to-b from-orange-300 to-yellow-300 flex flex-col p-6'>
            <div onClick={props.isOpen} className='bg-gray-200 rounded-md py-2 px-2 w-full items-center justify-center flex font-mova uppercase'> close </div>
            <div className='flex w-full mt-4'>
                <ul className='flex w-full flex-col'>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('hero')}>Home</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('service')}>Services</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('experience')}>Experience</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('work')}>Work</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('portfolio')}>Portfolio</li>
                    <li className={`p-3 font-mova text-shadow text-[1.2rem] text-[--black] tracking-[.1rem] mx-3 text-white`} onClick={()=>props.scrollToSection('contact')}>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;