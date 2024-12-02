'use client'
import React from 'react'
import Container from './container'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import Lang from './lang/lang'

export default function Header() {
  return (
    <header className='w-full sticky top-[0px] mt-[44px]'>
        <Container >
            <div className='bg-white w-full flex gap-[10px] items-center  rounded-3xl py-[19px] px-[39px] justify-between'>
                 <Link href={'/'}><Image src={'/logo.svg'} width={136} height={36} alt='img'/></Link>
                 <div className='flex items-center lg:ml-[-40px]  gap-2 md:gap-[20px] lg:gap-[60px]'>
                    <Link className='font-normal text-[12px] leading-[18px] md:text-[18px] md:leading-[24px] text-[#1B1B1B]' href={'/'}>Главная</Link>
                    <Link className='font-normal text-[12px] leading-[18px] md:text-[18px] md:leading-[24px] text-[#1B1B1B]' href={'/news'}>Новости</Link>
                 </div>
                 <Lang/>
            </div>
        </Container>
    </header>
  )
}
