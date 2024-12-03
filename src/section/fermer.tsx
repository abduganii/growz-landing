'use client'
import Container from '@/components/container'
import { AgroIcons1, AgroIcons2, AgroIcons3, LineIcons, MenIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FermerSection() {
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(".fermet", {opacity:0,x:-60}, { opacity: 1,x:0,y:0,  duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.fermet',
    }})
    gsap.fromTo(".fermet1", {opacity:0,x:60}, { opacity: 1,x:0,y:0,  duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.fermet',
    }})
    
  }); 
  return (
    <Container className='mt-[40px]  flex md:flex-row flex-col-reverse  gap-4'>
        <div className='w-full bg-white  fermet opacity-0  rounded-2xl border-solid border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
            <h3 className='font-semibold  w-full max-w-[767px] mb-6 text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[29px] xl:leading-[37.8px] flex items-center text-[#2A2A2A]'>Интерактивная поддержка  <span className='px-1'>  <MenIcons/> </span>   фермера</h3>
            <p className='flex items-start gap-4 font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons1/> </span>Алгоритмы, помогут фермерам с агротехническими действиями
            на каждом этапе роста урожая.</p>
            <p className='flex items-start gap-4 font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons2/> </span> Консультации на базе ИИ для идентификации вредителей и заболеваний,
а также рекомендации по их устранению.
.</p>
            <p className='flex items-start gap-4 font-medium leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons3/> </span>Доступ к персонализированным консультациям, основанным
на анализе данных, с возможностью загрузки фотографий
и добавления полей для анализа.</p>
        </div>
        <Image className='w-full  fermet1  opacity-0  h-[220px] md:max-w-[308px] md:h-[368px] object-cover rounded-[42px]' src={'/neture.png'} width={308} height={368} alt='img'/>
    </Container>
  )
}

