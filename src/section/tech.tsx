import Container from '@/components/container'
import React from 'react'

export default function TechSection() {
  return (
    <Container >
        <div className='rounded-[42px] bg-white py-[44px] pl-[34px] pr-[40px] w-full my-[28px]'>
        <h3 className='text-[#2A2A2A] font-medium text-[28px] leading-[38px]'>Growz: технологии, которые работают  на вас и природу</h3>
        <h3>Ваш партнер  на пути к устойчивому фермерству</h3>
        <p className='mt-[64px] w-full max-w-[753px] text-end ml-auto text-[#2A2A2A] font-normal text-[18px] leading-[32px]'>Современное решение для малых фермеров, которое помогает увеличить урожайность и доходы с использованием умных технологий и данных.</p>
        </div>
    </Container>
  )
}
