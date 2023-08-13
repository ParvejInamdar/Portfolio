import './styles.css';

const Card = ({image,title,subtitle}:any) =>{
    return(
        <div className="card flex flex-col items-center justify-center text-center rounded-lg w-full h-[16rem] lg:!w-[13-rem] my-4 mx-2 gap-2">
            <img src={image} alt="" className='mix-blend-multiply h-[7rem] -mb-[1rem]'/>
            <span className='font-mova text-[1.3rem] lg:!text-[1rem] text-[--orange] font-medium'>{title}</span>
            <span className='font-mova text-[1.3rem] lg:!text-[1rem] text-[--gray] font-medium'>{subtitle}</span>
            <button className="font-mova card-button bg-white">LEARN MORE</button>
        </div>
    )
}

export default Card;