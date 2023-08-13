import './styles.css';
import 'swiper/css';
import SimpleImageSlider from 'react-simple-image-slider';
import Worked_Card from '../Worked_project_card/worked_card';
import { webdev3, java, javascript, angular, mysql, react, typescript, junodating, ionic, tailwind, luxecrews, dawrat } from '../../Assests/index';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const transition = { duration: 2, type: 'spring' };

    return (
        <div className="h-full lg:!h-screen flex flex-col items-center justify-center w-full px-2 py-2">
            <div className="relative w-full mb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={transition}
                    className='flex flex-col items-center justify-center'>
                    <span className='text-[1.5rem] sm:!text-[2rem] lg:!text-[3rem] text-[--black] font-bold font-mova text-shadow'>Recent Project</span>
                    <span className='text-[1rem] sm:!text-[1.5rem] lg:!text-[2rem] text-[--orange] font-bold font-mova text-shadow'>A Showcase of My Projects and Contributions</span>
                </motion.div>
                <div className="blur right-5 !bg-blue-200"></div>
            </div>
            <div className="grid grid-cols-1 lg:!grid-cols-3 gap-4 lg:!gap-20 relative">
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <Worked_Card
                        appImage={junodating}
                        appName='Juno Dating'
                        playstoreLink='https://play.google.com/store/apps/details?id=com.junodatingapp'
                        appstoreLink='https://apps.apple.com/us/app/junodating/id1582585894'
                        technology={[react, javascript, java, mysql]}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} // Initial animation values
                    whileInView={{ opacity: 1, x: 0 }} // Animation when the card enters the viewport
                    transition={{ duration: 1.5 }}>
                    <Worked_Card
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
                    <Worked_Card
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
                    <Worked_Card
                        appImage={dawrat}
                        appName='Portfolio'
                        webLink='https://dawrat.com'
                        technology={[react, typescript, tailwind]}
                    />
                </motion.div>
            </div>

        </div>
    )
}

export default Portfolio;