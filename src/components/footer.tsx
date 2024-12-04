'use client'
import React from 'react'
import Container from './container'
import Image from 'next/image'
import { InstaIcons, InstaIcons24 } from './icons'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl'

  export default function Footer({socials}:any) {
    const t = useTranslations()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(".Footer", {opacity:0,y:200}, { opacity: 1,x:0,y:0, duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.Footermain',
    }})
 
  }); 
  return (
    <Container className='mt-[24px] Footermain  overflow-hidden pb-[34px]' >
      <div className='bg-white w-full pt-[40px] Footer opacity-0  flex flex-wrap md:flex-nowrap items-start gap-[50px] lg:gap-[80px] xl:gap-[126px] px-[52px] pb-[66px] rounded-[42px]'>
        <Image src={'/logo.svg'} width={136} height={36} alt='img'/>
            <div className='ml-[20px]'>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'> {t('set')}</p>
                {
                    socials?.length && socials?.map((e:any)=>(
                      <a className='mb-3 w-full  flex items-center gap-2' target="_blank" href={e?.link}>
                        <div className='footerSvg'  dangerouslySetInnerHTML={{__html:e?.icon}}/>
                        <p className='text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>{e?.title}</p>
                      </a>
                    ))
                  }
            </div>
            <div>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'>{t('address')}</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#523535]'>г. Ташкент, Юнусабадский район, Ниезбек Йули, 34а </p>
            </div>
        </div>
    </Container>
  )
}
