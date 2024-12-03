'use client'
import Container from '@/components/container'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function TechSection() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(".tech", {opacity:0,x:-100}, { opacity: 1,x:0,y:0,  duration: .7,delay:.6,ease: "power2.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.tech',
    },})
  });
  return (
    <Container >
        <div className='rounded-[42px] tech bg-white py-[44px] opacity-0 pl-[34px] pr-[40px] w-full my-[28px]'>
        <h3 className='text-[#2A2A2A] font-medium text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[28px] xl:leading-[38px]  '>Growz: технологии, которые работают  на вас и природу</h3>
        <h3 className='text-[#2A2A2A] font-medium text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[28px] xl:leading-[38px]  '>Ваш партнер  на пути к устойчивому фермерству</h3>
        <p className='mt-[15px] md:mt-[64px] w-full max-w-[753px] md:text-end ml-auto text-[#2A2A2A] font-normal leading-[18px] md:text-[16px] md:leading-[20px] xl:text-[18px] xl:leading-[32px]'>Современное решение для малых фермеров, которое помогает увеличить урожайность и доходы с использованием умных технологий и данных.</p>
        </div>
    </Container>
  )
}
