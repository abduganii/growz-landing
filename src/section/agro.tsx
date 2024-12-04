'use client'
import Container from '@/components/container'
import { AgroIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl'
  export default function AgroSection() {
    const t = useTranslations()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(".agro", {opacity:0,x:-100}, { opacity: 1,x:0,y:0, duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.agro',
    }})
    gsap.fromTo(".agro1", {opacity:0,x:100}, { opacity: 1,x:0,y:0, duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.agro',
    }})
  }); 
  return (
    <Container className='flex lg:flex-row flex-col  gap-4 my-[28px]'>
       <div className='w-full bg-white  lg:max-w-[390px] agro opacity-0 rounded-[42px] border-solid border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
        <AgroIcons/>
        <h3 className='text-[32px] mt-[12px] font-semibold leading-[43px]'>{t('agroTitle1')} Потенциал роста
        <h3 className='text-[#53B606]'>{t('agroTitle2')}</h3></h3>
       </div>
       <div className='w-full agro1 opacity-0 py-[57px] flex sm:flex-row flex-col items-center gap-[33px] px-[50px] bg-no-repeat bg-center bg-cover  rounded-[42px] ' style={{"backgroundImage":`url('/image.jfif')`}}>
        <Image  src={'/tels.png'} width={239} height={254} alt='img'/>
        <h3 className='font-bold text-[18px] leading-[21px] md:text-[22px] md:leading-[29px] text-white'>{t('agroText1')}
            <h3 className='mt-[24px]'>{t('agroText2')}</h3>
       </h3>
       </div>
    </Container>
  )
}
