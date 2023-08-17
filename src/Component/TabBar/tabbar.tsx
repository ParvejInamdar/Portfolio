import { motion } from 'framer-motion';
import { useState } from 'react';
import './styles.css';

const Tabbar = ({ tabName, changeTab }: any) => {
    const [activeTab, setActiveTab]: any = useState(`${tabName[0]}`);
    const transition = { duration: 4, type: 'spring' };

    const nextTab = (tab: any) => {
        setActiveTab(tab)
        changeTab(tab);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={transition}
            className='w-full lg:!w-auto mt-8 mb-4 py-2 border-1 border-green-100 rounded-md bg-green-50 shadow-lg'>
            <ul className='flex items-center justify-center'>
                {tabName.map((item: String) => {
                    return (<li onClick={() => nextTab(item)} className={`py-2 font-mova px-12 lg:!px-16 mx-2 lg:!mx-4 text-[1rem] lg:!text-[1.5rem] rounded-md cursor-pointer ${activeTab === item ? 'bg-gradient-to-tl from-orange-400 to-yellow-300 text-white text-shadow' : 'border-2 border-yellow-500 text-yellow-500 bg-white hover:!bg-yellow-50 text-shadow'}`}>{item}</li>)
                })}
            </ul>
        </motion.div>
    )
}

export default Tabbar