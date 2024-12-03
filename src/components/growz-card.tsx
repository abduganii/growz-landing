'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image'
import React from 'react'

export default function GrowzCard({className,image,title,text}:any) {
  useGSAP(() => {
    gsap.to(".cardImge",  
      { 
        rotation: 3600, // Rotate 360 degrees
        duration: 20,   // Animation duration in seconds
        repeat: -1,    // Infinite loop
        ease: 'linear'
      })
    }); 
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white p-[28px] pb-[40px]`}>
        {image && <div className='w-full flex items-center rounded-[42px] bg-[#F8F8F8] justify-center aspect-[1.6/1]'>
            <Image className='cardImge w-full max-w-[114px]' src={image} width={114} height={218} alt='img'/>
        </div>}
        <h3 className='mt-4 mb-3 text-[#2A2A2A] font-semibold text-[20px] leading-[22px]  lg:text-[24px] lg:leading-[25.2px] xl:text-[32px] xl:leading-[35.2px]'>{title}</h3>
        <p className='text-[#2A2A2A] font-medium text-[14px] leading-[18px] lg:text-[16px]  xl:text-[16px] xl:leading-[21.6px]'>{text}</p>
    </div>
  )
}
