import React from 'react'
import Container from './container'
import Image from 'next/image'
import { InstaIcons, InstaIcons24 } from './icons'

export default function Footer() {
  return (
    <Container className='mt-[24px] pb-[34px]' >
        <div className='bg-white w-full pt-[40px] flex flex-wrap md:flex-nowrap items-start gap-[50px] lg:gap-[80px] xl:gap-[126px] px-[52px] pb-[66px] rounded-[42px]'>
        <Image src={'/logo.svg'} width={136} height={36} alt='img'/>
            <div className='ml-[20px]'>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'> Наши соц.сети</p>
                <p className='mb-3 w-full text-[18px] leading-[24px] font-normal text-[#1F1F1F] flex items-center gap-2'><span className='w-[24px] h-[24px] inline-block'><InstaIcons24/></span>Instagram</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F] flex items-center gap-2'><span className='w-[24px] h-[24px] inline-block'><InstaIcons24/></span>Instagram</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F] flex items-center gap-2'><span className='w-[24px] h-[24px] inline-block'><InstaIcons24/></span>Instagram</p>
            </div>
            
         
            <div>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'>Связь с нами</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>г. Ташкент, Юнусабадский район, Ниезбек Йули, 34а </p>
            </div>
        </div>
    </Container>
  )
}
