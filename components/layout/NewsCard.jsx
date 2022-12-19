import Image from 'next/image';
import GIRL from "../../public/images/girl-plY.webp";


const NewsCard = ({image,span,category,title,content}) => {
  return (
    <div>
      <div className='relative'>
        <Image src={image} className='w-full' alt='' />
        <p className='absolute bottom-0 left-0 bg-slate-200 py-1 px-2 text-[0.8rem]'>{title}</p>
      </div>
      <div className='mt-3'>
        <h3 className='font-medium text-lg'>{span}</h3>
        <h2 className='font-bold text-xl my-2'>{category}</h2>
        <p className='text-sm'>
          {content}
        </p>
      </div>
      <div className='flex justify-between mt-5 text-sm'>
        <p>12/16/2022</p>
        <p>Reading time 2 min</p>
      </div>
    </div>
  );
};

export default NewsCard;