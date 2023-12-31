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
            className='w-full sm:!w-auto mt-8 mb-4 py-2 border-1 border-green-100 rounded-md bg-green-50 shadow-lg'>
            <ul className='flex items-center justify-center'>
                {tabName.map((item: String,index:any) => {
                    return (<li key={index} onClick={() => nextTab(item)} className={`py-2 font-mova px-10 lg:!px-12 mx-2 lg:!mx-4 text-[1rem] lg:!text-[1.5rem] rounded-md cursor-pointer ${activeTab === item ? 'bg-gradient-to-tl from-orange-400 to-yellow-300 text-white text-shadow' : 'border-2 border-yellow-500 text-yellow-500 bg-white hover:!bg-yellow-50 text-shadow'}`}>{item}</li>)
                })}
            </ul>
        </motion.div>
    )
}

export default Tabbar