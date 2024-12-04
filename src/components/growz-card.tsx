'use client'
import Image from 'next/image'
import React from 'react'

export default function GrowzCard({className,image,title,text}:any) {

  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white p-[28px] pb-[40px]`}>
        {image && <div className='w-full flex items-center rounded-[42px] bg-[#F8F8F8] justify-center aspect-[1.6/1]'>
            <Image  src={image} width={300} height={330} alt='img'/>
        </div>}
        <h3 className='mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]'>{title}</h3>
        <p className='text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]'>{text}</p>
    </div>
  )
}
