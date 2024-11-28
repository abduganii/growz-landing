import Image from 'next/image'
import React from 'react'

export default function GrowzCard({className,image,title,text}:any) {
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white p-[28px] pb-[40px]`}>
        {image && <div className='w-full flex items-center rounded-[42px] bg-[#F8F8F8] justify-center aspect-[1.6/1]'>
            <Image src={image} width={114} height={218} alt='img'/>
        </div>}
        <h3 className='mt-4 mb-3 text-[#2A2A2A] font-semibold text-[32px] leading-[35.2px]'>{title}</h3>
        <p className='text-[#2A2A2A] font-medium text-[16px] leading-[21.6px]'>{text}</p>
    </div>
  )
}
