import Container from '@/components/lang/container'
import { LineIcons } from '@/components/lang/icons'
import Image from 'next/image'
import React from 'react'

export default function SliderSection() {
  return (
    <Container className='mt-[40px] flex gap-4'>
        <div className='w-full bg-white rounded-2xl pt-[40px] pb-[88px] px-[35px]'>
            <h3 className='font-semibold text-[29px] w-full max-w-[767px] mb-6 leading-[33px] text-[#2A2A2A]'>Сельское хозяйство отвечает примерно за <span className='font-extrabold  text-[#FF4E4E] relative'>30% <span className="absolute bottom-[-8px] left-0"><LineIcons/></span></span> <br /> глобальных выбросов парниковых газов, но это не всё</h3>
            <p className='flex items-start gap-4 font-medium text-[20px]  leading-[26px]' >Непродуманные методы ведения сельского хозяйства, оторванные от природы, снижают разнообразие экосистем.</p>
        </div>
        <Image className='w-full max-w-[308px] h-[544px] object-cover rounded-[42px]' src={'/neture.png'} width={308} height={544} alt='img'/>
    </Container>
  )
}
