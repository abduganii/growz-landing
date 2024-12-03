'use client'
import Container from '@/components/container'
import { LineIcons, REdLeayIcons, SliderIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function SliderSection() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(".slitLeft",{opacity:0,x:-100},{ opacity: 1,x:0, duration: 0.7,delay:.5,ease: "power2.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.slitLeft',
    },})
    gsap.to(".slitRight", { opacity: 1,x:0, duration: 0.7,delay:.5,ease: "power2.out",scrollTrigger: {
        toggleActions: 'restart none none reset',
        trigger: '.slitRight',
      },})
     
    
  }); 
  return (
    <Container className='mt-[40px]  flex flex-col-reverse md:flex-row gap-4 '>
        <div className='w-full relative opacity-0 slitLeft bg-white rounded-2xl pt-[40px] pb-[88px] px-[35px]'>
          <h3 className='font-semibold  w-full max-w-[767px] mb-6 text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[33px] text-[#2A2A2A]'>Сельское хозяйство отвечает примерно за <span className='font-extrabold  text-[#FF4E4E] relative'>30% <span className="absolute bottom-[-8px] left-0"><LineIcons/></span></span> <br /> глобальных выбросов парниковых газов, но это не всё</h3>
          <p className='flex items-start gap-4 font-medium text-[14px]  w-full max-w-[735px] leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px]' ><span className='w-[30px] min-w-[30px] max-w-[30px] h-[30px]'><REdLeayIcons/></span> Непродуманные методы ведения сельского хозяйства, оторванные от природы, снижают разнообразие экосистем.</p>
          <div className="flex gap-5 items-center bg-[#EFEFEF] pr-1 pl-3 pt-3 absolute bottom-0 right-0 rounded-tl-[32px]  after:content-[''] after:absolute after:right-0 after:w-[30px] after:h-[30px] after:bg-white after:rounded-br-[32px] after:top-[-30px] before:content-[''] before:absolute before:right-0 before:w-[30px] before:h-[30px] before:bg-[#EFEFEF] before:top-[-30px]">
            <div className='w-[148px] flex bg-white rounded-[50px] border-[#E2E2E2] border-solid border-1 cursor-pointer overflow-hidden'>
              <div className='rotate-180 p-[12px] w-1/2 flex items-center border-solid border-l-1 border-[#E2E2E2] justify-center hover:bg-[#edecec] active:bg-white'><SliderIcons/></div>
              <div className=' p-[12px] w-1/2 flex items-center justify-center hover:bg-[#edecec] active:bg-white'><SliderIcons/></div>
            </div>
            <span className='absolute left-[-20px] bottom-0  bg-[#EFEFEF] w-[20px] h-[20px] before:absolute before:right-0 before:w-[20px] before:h-[20px] before:bg-[#FFFFFF] before:rounded-br-[22px]'></span>
          </div>
        </div>
        <Image className='w-full  slitRight opacity-0 max-h-[300px] md:max-w-[308px] md:h-[544px] object-cover rounded-[42px]' src={'/neture.png'} width={308} height={544} alt='img'/>

    </Container>
  )
}
