import React from 'react'
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: any;
  tags: string[];
}
const card: React.FC<propsType> = ({ title, desc, img,  tags }) =>{ 
  return (
    <div className='border border-accent w-[350px] h-auto' data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom" >
    <div>
   <Image className='w-[350px] h-auto'
    src={img}
    width={350}
    height={350}
    alt={title} 
     />
    
    </div>

    <div className='p-4 space-y-4'>
      <div className='text-4xl font-extralight'>{title}</div>
      <div>{desc}</div>
      <div>
      {tags.map((el) => (
      <div className='tags' key={el}>
        {el}
      </div>
    ))}
      </div>
     </div>
  </div>
  );
};

export default card
