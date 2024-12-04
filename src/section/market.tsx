'use client'
import Container from '@/components/container'
import { AgroIcons1, AgroIcons2, AgroIcons3, TelIIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl'


export default function MarketSection({data}:any) {
  gsap.registerPlugin(ScrollTrigger);
  const t = useTranslations()
  useGSAP(() => {
    gsap.fromTo(".market", {opacity:0,x:-100}, { opacity: 1,x:0,y:0, duration: 0.7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.market',
    }})
    gsap.fromTo(".market1", {opacity:0,x:100}, { opacity: 1,x:0,y:0, duration: 0.7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.market',
    }})
  }); 
  return (
    <Container className='mt-[40px] flex md:flex-row flex-col gap-4 '>
        <Image className='w-full h-[220px] md:max-w-[308px] md:h-[368px] market opacity-0 object-cover rounded-[42px]' src={data?.marketplace_img|| '/neture.png'} width={308} height={368} alt='img'/>
        <div className='w-full bg-white rounded-2xl border-solid market1 opacity-0 border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
            <h3 className='font-semibold  w-full max-w-[767px] mb-6 text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[37.8px] flex items-center text-[#2A2A2A]'>Маркетплейс  <span className='px-1'> <TelIIcons/></span> для сельхозтоваров</h3>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons1/> </span>{t('marketText1')}</p>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons2/> </span>{t('marketText2')}</p>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons3/> </span>{t('marketText3')}</p>
        </div>
    </Container>
  )
}
