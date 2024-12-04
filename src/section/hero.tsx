'use client'
import Lang from '@/components/lang/lang'
import Container from '@/components/container'
import { InstaIcons, NavigateIcons } from '@/components/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from '@/i18n/routing'


export default function HeroSection({data,socials}:any) {

useGSAP(() => {
  let tl = gsap.timeline();
  tl.fromTo(".here",{opacity:0,x:-15,y:25}, { opacity: 1,x:0,y:0, duration: .4,ease: "power2.out"})
    .fromTo(".image",{opacity:0}, {opacity: 1,  duration: .4,ease: "power2.out"})
    .fromTo(".box", {opacity:0,},{opacity: 1, duration: .4,ease: "power2.out"});
  
}); 

const [embedUrl,setEmbedUrl] = useState('')
useEffect(()=>{

    if(data?.hero_video){
        const videoId = data?.hero_video.includes('v=') 
        ? data?.hero_video.split('v=')[1].split('&')[0]  // Extract video ID from regular data?.hero_video
        : data?.hero_video.split('/').pop()?.split('?')[0]; // Extract from shortened URL, ignore query params
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`)
    }
},[data])
  return (
      <div  className='relative  top w-full py-[30px] md:py-[84px] bg-no-repeat bg-top bg-cover 2xl:px-[92px] rounded-b-[42px]  3xl:h-screen' style={{"backgroundImage":`url('/neture.png')`}}>
          <Container className='here opacity-0'  >
            <div className='bg-[#EFEFEF] p-[15px] md:p-[30px]  rounded-[42px]'>
              <div className='bg-[#FFFFFF] frame p-[15px] pr-[15px] pb-[10px] md:p-[30px] md:pr-[43px] md:pb-[17px] rounded-[42px] relative'>
                <div className='mb-[20px] md:mb-[56px] flex justify-between items-center' >
                  <Image src={'/logo.svg'} width={136} height={36} alt='img'/>
                  <Lang/>
                </div>
                <div className='lg:flex  items-center w-full mb-[40px] md:mb-[74px] gap-[40px] justify-between'>
                <iframe
                  width={512} 
                  className='w-full mx-auto  mb-[20px] lg:mb-0 opacity-0 image rounded-2xl object-cover max-w-[512px] aspect-[1/1] md:aspect-[1.2/1]'
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe> 
                    <div className='w-full lg:max-w-[549px]  opacity-0 box '>
                      <h3 className='font-semibold text-[18px] leading-[26px] md:text-[23px] md:leading-[30px] xl:text-[32px] xl:leading-[43px]  text-[#2A2A2A] mb-[16px] lg:mb-[32px]'>
                      Интеллектуальное фермерство для устойчивого будущего
                      на основе   данных и ИИ
                      </h3>

                      <p className='text-[#2A2A2A] font-normal text-[14px] leading-[18px]  md:text-[17px] md:leading-[22px] xl:text-[20px] xl:leading-[27px] '>
                      <span className='text-[#1AA95B] font-semibold text-[16px] leading-[20px]  md:text-[18px] md:leading-[24px] xl:text-[24px] xl:leading-[32px] '>Growz</span> — это лучшая цифровая платформа для мелких фермеров, разработанная для повышения производительности, устойчивости и доступа к рынку.
                      
                          <p className='mt-[15px]'> Независимо от того, управляете ли вы урожаем, ищете индивидуальные советы по ведению сельского хозяйства или ищете лучшие предложения по удобрениям и агрохимикатам, <span className='text-[#1AA95B] font-bold'>Growz</span>  здесь поможет вам во всем</p>
                      </p>
                    </div>
                </div>
                <Link href={'/news'} className='py-[7px] md:py-[14px] ml-auto px-[13px] md:px-[26px] max-w-[300px] justify-center mr-[220px] rounded-[51px] font-medium text-[14px] leading-[18px] md:text-[20px] md:leading-[27px] flex gap-[4px] md:gap-[24px] items-center border-solid border border-[#B9B9B9]'>
                Наши новости
                  <span className='hidden md:inline-block'> <NavigateIcons/></span>
                  </Link>
                <div className="flex gap-5 items-center bg-[#EFEFEF] p-1 pl-3 pt-3 absolute bottom-0 right-0 rounded-tl-[32px]  after:content-[''] after:absolute after:right-0 after:w-[30px] after:h-[30px] after:bg-white after:rounded-br-[32px] after:top-[-30px] before:content-[''] before:absolute before:right-0 before:w-[30px] before:h-[30px] before:bg-[#EFEFEF] before:top-[-30px]">
                  {
                    socials?.length && socials?.map((e:any)=>(
                      <a target="_blank" href={e?.link}  dangerouslySetInnerHTML={{__html:e?.icon}}/>
                    ))
                  }
                  <span className='absolute left-[-30px] bottom-0  bg-[#EFEFEF] w-[30px] h-[30px] before:absolute before:right-0 before:w-[30px] before:h-[30px] before:bg-[#FFFFFF] before:rounded-br-[32px]'></span>
                </div>
              </div>
            </div>
        
          </Container>
    </div>
  )
}
