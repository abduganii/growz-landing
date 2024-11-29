import React from 'react'
import Container from './container'
import Image from 'next/image'

export default function Footer() {
  return (
    <Container className='mt-[24px] pb-[34px]' >
        <div className='bg-white w-full pt-[40px] flex items-start gap-[70px] px-[52px] pb-[66px] rounded-[42px]'>
        <Image src={'/logo.svg'} width={136} height={36} alt='img'/>
            <div className='ml-[20px]'>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'>Наши ссылки</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Привязка</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Привязка</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Привязка</p>
            </div>
            <div>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'>Комьюнити</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Instagram</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Youtube</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>Telegram</p>
            </div>
            <div>
                <p className='mb-4 text-[18px] leading-[24px] font-normal text-[#5E5E5E]'>Связь с нами</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>pochtagrowz</p>
                <p className='mb-3 text-[18px] leading-[24px] font-normal text-[#1F1F1F]'>+99895 554-54-56</p>
            </div>
        </div>
    </Container>
  )
}
