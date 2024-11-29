'use client'
import Container from '@/components/container'
import { AgroIcons1, AgroIcons2, AgroIcons3, TelIIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function MarketSection() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".market", { opacity: 1, duration: 1,delay:0.5, ease: "power1.inOut",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.market',
    }})
  }); 
  return (
    <Container className='mt-[40px] flex md:flex-row flex-col gap-4 market opacity-0'>
        <Image className='w-full h-[220px] md:max-w-[308px] md:h-[368px] object-cover rounded-[42px]' src={'/neture.png'} width={308} height={368} alt='img'/>
        <div className='w-full bg-white rounded-2xl border-solid border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
            <h3 className='font-semibold  w-full max-w-[767px] mb-6 text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[33px] flex items-center text-[#2A2A2A]'>Маркетплейс  <TelIIcons/> для сельхозтоваров</h3>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons1/> </span>Каталог товаров (удобрения, агрохимикаты и пр.) с возможностью выбора продукции, соответствующей фазе развития культур.</p>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons2/> </span> Прямой доступ к поставщикам с актуальными предложениями, ценами и географическим распределением.</p>
            <p className='flex items-start gap-4 font-medium  leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px]' ><span className='w-[32px] min-[32px]'><AgroIcons3/> </span>Личный кабинет для поставщиков для управления товарами и предложениями</p>
        </div>
    </Container>
  )
}
