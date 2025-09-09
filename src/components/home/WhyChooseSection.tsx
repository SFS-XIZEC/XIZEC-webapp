import React from 'react'
import SectionHeading from '../SectionHeading'
import Image from 'next/image';

export interface WhyChooseType {
  heading: {
    subtitle: string;
    title: string;
  };
  cardsData: CardType[];
}

export interface CardType {
  image: {
    name: string;
    alternativeText: string;
    url: string;
  };
  title: string;
  description: string;
}

const WhyChooseSection:React.FC<{whychoose:WhyChooseType}> = ({whychoose}) => {
  return (
    <div className='flex flex-col gap-10 px-6 md:px-12 lg:px-20'>
      <SectionHeading alignCenter heading={{subtitle:whychoose?.heading?.subtitle,title:whychoose?.heading?.title}}/>

      <div className='grid grid-cols-3 gap-6'>
        {whychoose?.cardsData?.map((item,index) => (
        <WhyChooseCard data = {item} key={index}/>
      ))}
      </div>
    </div>
  )
}

export default WhyChooseSection





export const WhyChooseCard:React.FC<{data:CardType}> = ({data}) => {
    return(
        <div className='p-10 flex flex-col items-start gap-[10px] rounded-3xl border border-[#6B6B6B]'>
            <Image
            src={data?.image.url}
            alt={data?.image.name}
            width={48}
            height={48}
            />

            <p className='text-[24px] font-semibold leading-[120%]'>{data?.title}</p>
            <p className='text-textcolor'>{data?.description}</p>
        </div>
    )
}