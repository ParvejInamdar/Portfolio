import { motion } from 'framer-motion';
import { useState } from 'react';
import { appstore, playstore, web } from '../../Assests/index';
import './styles.css';

const Worked_Card = ({ appName, appImage, playstoreLink, appstoreLink, webLink, technology }: any) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Function to toggle the flip state on click
    const handleFlip = () => {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };

    return (
        <motion.div
            className={`flex flex-col h-[13rem] w-[18rem] sm:!h-[15rem] sm:!w-[18rem] shadow-xl relative px-2 py-2 rounded-lg bg-gradient-to-br from-yellow-100 to-green-100 container`}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 1 }}>
            {!isFlipped && <>
                <div className='flex items-center w-full justify-center py-2'>
                    <span className='font-poppins font-semibold text-[1.5rem] lg:!text-[2rem] text-white text-center orange-text-shadow py-1'>{appName}</span>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='-ml-20 sm:!-ml-12 lg:!-ml-16 rounded-lg h-[5rem] w-[5rem] sm:!h-[6rem] sm:!w-[6rem] lg:!h-[8rem] lg:!w-[8rem] bg-white border b-shadow'>
                        <img src={appImage} alt='' className='rounded-lg h-full w-full' />
                    </div>
                    <div className='px-8 h-full py-4 flex flex-col items-center justify-center gap-6 lg:!gap-8'>
                        {webLink && <div className='flex cursor-pointer px-4'>
                            <img src={web} alt='Website' className='h-[25px] w-[25px] mx-2' />
                            <a className='font-mova font-medium text-[1rem] sm:!text-[1.3rem] text-[#E2A76F] text-shadow' target='_blank' href={appstoreLink}>Web</a>
                        </div>}

                        {playstoreLink && <div className='flex cursor-pointer'>
                            <img src={playstore} alt='Playstore' className='h-[25px] w-[25px] mx-2' />
                            <a className='font-mova font-medium text-[1rem] sm:!text-[1.3rem] text-[#E2A76F] text-shadow' target='_blank' href={playstoreLink}>PlayStore</a>
                        </div>}

                        {appstoreLink && <div className='flex cursor-pointer'>
                            <img src={appstore} alt='Appstore' className='h-[25px] w-[25px] mx-2' />
                            <a className='font-mova font-medium text-[1rem] sm:!text-[1.3rem] text-[#E2A76F] text-shadow' target='_blank' href={appstoreLink}>AppStore</a>
                        </div>}
                    </div>
                </div>
            </>}
            {(isFlipped && technology) ?
                (<motion.div
                    className='flex flex-col h-full'
                    style={{ transform: 'scaleX(-1)' }}
                >
                    <span className='font-poppins font-semibold text-white text-[1.5rem] lg:!text-[2rem] text-center py-2 orange-text-shadow'>Technology Used</span>
                    <div className='flex justify-around items-center w-full h-full mx-1 mb-8'>
                        {technology.map((item: any) => {
                            return <img src={item} alt='' className='h-[3rem] w-[3rem] hover:scale-110' />
                        })}
                    </div>
                </motion.div>) : (
                    isFlipped && <motion.div
                        className='flex flex-col items-center justify-center h-full'
                        style={{ transform: 'scaleX(-1)' }}
                    >
                        <span className='font-mova font-semibold text-[--orange] text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] text-center'>No Data Found.</span>
                    </motion.div>
                )
            }
            <motion.div
                onClick={handleFlip} className={`absolute flex items-center justify-center cursor-pointer rounded-sm ${!isFlipped ? 'bottom-2 right-2' : 'bottom-2 left-2 scale-x-[-1]'}`}
            >
                <span className='text-blue-700 font-mova px-2 py-1 rounded-sm'>{!isFlipped ? 'Next' : 'Prev'}</span>
            </motion.div>
        </motion.div>
    )
}

{/* <motion.div
className="flippable-content"
onClick={handleFlip}
whileTap={{ scale: 0.9 }} // Add a scaling effect on tap/click
>next
<motion.div
    className={`content ${isFlipped ? 'flipped' : ''}`}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.6 }}
>
    <div className="front">Front Content</div>
    <div className="back">Back Content</div>
</motion.div>
</motion.div> */}

export default Worked_Card;