import './styles.css';

const Card = ({image,title,subtitle}:any) =>{
    return(
        <div className="card flex flex-col items-center justify-center text-center rounded-lg w-full h-[16rem] sm:!h-[15rem] lg:!w-[13-rem] my-4 mx-2 py-6 gap-2 relative !bg-white">
            <img src={image} alt="" className='mix-blend-multiply h-[7rem]'/>
            <span className='font-mova text-[1.3rem] lg:!text-[1rem] text-[--orange] font-medium text-shadow'>{title}</span>
            <span className='font-mova text-[1.3rem] lg:!text-[1rem] text-[--gray] font-medium text-shadow'>{subtitle}</span>
            {/* <button className="font-mova card-button bg-white pb-2">LEARN MORE</button> */}
        </div>
    )
}

export default Card;