import { useState } from 'react';
import './styles.css';
const ExperienceCard = ({ technology,Location,join_date,leave_date,position,performed_task,organization_name,company_name,preference }: any) => {

    const [showFrontContent, setShowFrontContent] = useState(false);

    const changeContentStatus = () => {
        setShowFrontContent((prevStatus) => !prevStatus)
    }

    return (
        <div className="bg-gray-50 shadow-lg w-full h-full flex rounded-lg overflow-hidden relative border">
            <div className={`flex h-full w-full ${!showFrontContent ? 'fade-in' : 'fade-out'}`} >
                <div className='z-10 h-full w-full flex flex-col'>
                    <div className=' ml-3 mr-2 flex'>
                        <div className='hover-effect text-[1.8rem] sm:!text-[2rem] lg:!text-[2.5rem] text-white font-overcameOutline text-shadow pt-2 pb-1'>{organization_name}</div>
                        <div className='text-white text-[.9rem] sm:!text-[1rem] lg:!text-[1rem] font-mova text-shadow flex items-end ml-1'>{Location}</div>
                    </div>
                    <div className='text-white text-[1rem] sm:!text-[.9rem] lg:!text-[1.2rem] font-mova text-shadow mx-3 py-1'>From : {join_date}</div>
                    <div className='text-white text-[1rem] sm:!text-[.9rem] lg:!text-[1.2rem] font-mova text-shadow mx-3 py-1'>To : {leave_date}</div>
                    <div className='h-full w-full ml-4 mt-4 lg:!ml-8 lg:!mt-8'>
                        <div className='h-16 w-16 border-2 border-white rounded-full px-2 py-2'>
                            <div className='h-full w-full rounded-full bg-white flex items-center justify-center'>
                                <span className='font-bold text-[--yellow] text-lg'>{preference}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full relative h-full flex flex-col items-center justify-center'>
                    <div className='absolute right-5 top-5 text-[--orange] text-[1rem] lg:!text-[1.3rem] font-arenq text-shadow font-semibold'>{company_name}</div>
                    <div className='w-full text-[--black] text-[17px] sm:!text-[1.1rem] lg:!text-[1.8rem] font-overcameOutline font-semibold text-shadow pb-1 flex items-end justify-end pr-2 lg:!pr-4'>
                        {position}
                    </div>
                    {technology && <div className='flex py-3 mx-2 justify-end items-end w-full'>
                        {technology.map((item: any,index:any) => (
                            <div key={index} className='h-[1.3rem] w-[1.3rem] lg:!h-[3rem] lg:!w-[3rem] mx-2'>
                                <img src={item} alt='' />
                            </div>))}
                    </div>}
                </div>
            </div>
            <div className={`absolute z-100 flex flex-col h-full w-full bg-green-100 pt-2 ${showFrontContent ? 'fade-in' : 'fade-out'}`}>
                {performed_task.map((item:string,index:number)=><div key={index} className='h-[1.5rem] lg:!h-[2rem] w-full mx-2 my-1 flex items-center relative'>
                    <div className='bg-blue-200 h-full px-1 flex items-center rounded-lg mr-1 font-semibold text-[--gray] text-[.8rem] lg:!text[1.5rem]'>{index <= 9 ? `0${index+1}` : index}</div>
                    <div className='bg-gradient-to-r from-orange-500 to-yellow-500 h-full pl-2 text-[.6rem] lg:!text-[1rem] flex items-center w-full font-mova text-shadow text-white rounded-lg mr-4'>{item}</div>
                </div>)}
            </div>
            <div onClick={changeContentStatus} className='absolute px-2 py-1 text-[.8rem] lg:!text-[1rem] lg:!px-3 lg:!py-2 right-3 bottom-3 rounded-md text-orange-500 font-beckman bg-yellow-100 hover:!bg-orange-200 cursor-pointer z-10 text-shadow'>
                {!showFrontContent ? 'View more' : 'Back'}
            </div>
            <div className={`absolute left-0 top-0 bottom-0 w-[58%] lg:!w-[50%] bg-gradient-to-r from-orange-500 to-yellow-500 transform -skew-x-[25deg] origin-top-left -z-0 ${!showFrontContent ? 'fade-in' : 'fade-out'}`}></div>
        </div>
    )
}

export default ExperienceCard;