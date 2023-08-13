import React from 'react';
import './styles.css';
const FloatingDiv = ({image,texttitle,textsubtitle}:any) =>{
    return(
        <div className="flex justify-around items-center h-[3rem] w-auto !bg-white rounded-md floating-div px-2 py-4">
            <img className='h-[3.5rem] w-[3.5rem] lg:!h-[4rem] lg:!w-[4rem] p-2' src={image} alt='' />
            <span className='font-mova font-semibold text-sm sm:text-[1rem] leading-[14px] text-shadow'>
                {texttitle}
                <br />
                {textsubtitle && textsubtitle}
            </span>
        </div>
    )
}

export default FloatingDiv;