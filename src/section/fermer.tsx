import Container from '@/components/container'
import { AgroIcons1, AgroIcons2, AgroIcons3, LineIcons, MenIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export default function FermerSection() {
  return (
    <Container className='mt-[40px] flex gap-4'>
        <div className='w-full bg-white rounded-2xl border-solid border-[#53B606] border pt-[40px] pb-[88px] px-[35px] '>
            <h3 className='font-semibold text-[29px] w-full max-w-[767px] mb-6 leading-[33px] flex items-center text-[#2A2A2A]'>Интерактивная поддержка  <MenIcons/>  фермера</h3>
            <p className='flex items-start gap-4 font-medium text-[20px]  leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons1/> </span>Алгоритмы, помогут фермерам с агротехническими действиями
            на каждом этапе роста урожая.</p>
            <p className='flex items-start gap-4 font-medium text-[20px]  leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons2/> </span> Консультации на базе ИИ для идентификации вредителей и заболеваний,
а также рекомендации по их устранению.
.</p>
            <p className='flex items-start gap-4 font-medium text-[20px]  leading-[26px] mt-[16px] w-full maxm-w-[735px]' ><span className='w-[32px] min-[32px]'><AgroIcons3/> </span>Доступ к персонализированным консультациям, основанным
на анализе данных, с возможностью загрузки фотографий
и добавления полей для анализа.</p>
        </div>
        <Image className='w-full max-w-[308px] h-[368px] object-cover rounded-[42px]' src={'/neture.png'} width={308} height={368} alt='img'/>
    </Container>
  )
}

