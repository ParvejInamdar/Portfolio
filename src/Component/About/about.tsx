import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

function About() {
    return (
        <div className="mx-auto">
            <motion.div variants={textVariant()}>
                <p className='sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'>Introduction</p>
                <h2 className='sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.2, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mx-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
                sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
                quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
                vitae dignissimos minus eaque culpa unde tempore dolore aperiam
                obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
                veniam dolorum ipsum doloribus.
            </motion.p>
        </div>


    )
}

export default About;