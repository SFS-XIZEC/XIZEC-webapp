import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BannerProp {
    id:string,
    value:string,
    href:string,
    image:{
        id:number,
        url:string,
        alternativeText:string,
        name:string,
    }
}

const Banner:React.FC<{banner:BannerProp[]}> = ({banner}) => {
  return (
    <div className='bg-primary h-12 w-full px-6 py-3 flex justify-between items-center'>
     {banner?.map((item) => (
        <Link href={item?.href} key={item?.id} className='flex gap-2 items-center'>
             <Image
            src={item?.image.url}
            width={24}
            height={24}
            className={"object-cover"}
            alt={item?.image.alternativeText || "Hero Image"}
          />
          <p className='text-[16px]'>{item?.value}</p>
        </Link>
      ))}
    </div>
  )
}

export default Banner
