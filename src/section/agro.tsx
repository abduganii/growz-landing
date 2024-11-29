'use client'
import Container from '@/components/container'
import { AgroIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
  export default function AgroSection() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".agro", { opacity: 1, duration: 1,delay:0.5, ease: "power1.inOut",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.agro',
    }})
  }); 
  return (
    <Container className='flex lg:flex-row flex-col agro opacity-0 gap-4 my-[28px]'>
       <div className='w-full bg-white  lg:max-w-[390px] rounded-[42px] border-solid border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
        <AgroIcons/>
        <h3 className='text-[32px] mt-[12px] font-semibold leading-[43px]'>Потенциал роста
        <h3 className='text-[#53B606]'>Agro-tech рынка</h3></h3>
       </div>
       <div className='w-full py-[57px] flex sm:flex-row flex-col items-center gap-[33px] px-[50px] bg-no-repeat bg-center bg-cover  rounded-[42px] ' style={{"backgroundImage":`url('/image.jfif')`}}>
        <Image  src={'/tels.png'} width={239} height={254} alt='img'/>
        <h3 className='font-bold text-[18px] leading-[21px] md:text-[22px] md:leading-[29px] text-white'>Малые фермы — это будущее мирового сельского хозяйства
            <h3 className='mt-[24px]'> Их поддержка — наш путь к стабильности, эффективности и устойчивости</h3>
       </h3>
       </div>
    </Container>
  )
}
