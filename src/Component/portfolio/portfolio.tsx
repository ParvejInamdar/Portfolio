import { motion } from 'framer-motion';
import 'swiper/css';
import { angular, dawrat, ionic, java, javascript, junodating, luxecrews, mysql, react, tailwind, typescript, portfolio3d } from '../../Assests/index';
import WorkedCard from '../Worked_project_card/worked_card';
import './styles.css';

const Portfolio = () => {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="h-full sm:!min-h-[80vh] lg:!h-screen flex flex-col items-center justify-center w-full px-5 py-2">
            <div className="relative w-full mb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className='flex flex-col items-center justify-center w-full lg:ml-8'>
                    <span className='lg:!opacity-30 text-[1.5rem] sm:!text-[2rem] lg:!text-[6rem] text-[--black] font-bold font-mova text-shadow text-center lg:!text-start'>Recent Project</span>
                    <span className='text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] text-[--orange] font-bold font-mova text-shadow text-center lg:!text-start'>A Showcase of My Projects and Contributions</span>
                </motion.div>
                <div className="blur right-5 !bg-blue-200"></div>
            </div>
            <div className="grid grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-4 sm:!gap-12 lg:!gap-20 relative">
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <WorkedCard
                        appImage={portfolio3d}
                        appName='Portfolio'
                        webLink='https://parvejinamdar.vercel.app'
                        technology={[react, typescript, tailwind]}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <WorkedCard
                        appImage={dawrat}
                        appName='Dawrat'
                        webLink='https://dawrat.com'
                        appstoreLink='https://apps.apple.com/app/dawrat/id680414804'
                        technology={[angular, typescript, ionic, tailwind]}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <WorkedCard
                        appImage={luxecrews}
                        appName='LuxeCrews'
                        playstoreLink='https://play.google.com/store/apps/details?id=com.luxecrews.app'
                        appstoreLink='https://apps.apple.com/us/app/luxecrews/id1576654608'
                        technology={[react, javascript, java, mysql]}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <WorkedCard
                        appImage={junodating}
                        appName='Juno Dating'
                        playstoreLink='https://play.google.com/store/apps/details?id=com.junodatingapp'
                        appstoreLink='https://apps.apple.com/us/app/junodating/id1582585894'
                        technology={[react, javascript, java, mysql]}
                    />
                </motion.div>
            </div>

        </div>
    )
}

export default Portfolio;