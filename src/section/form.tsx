'use client'
import Container from '@/components/container'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FormSEction({data}:any) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".from", { opacity: 1, duration: .7,delay:0.5, ease: "power2.out",scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.from',
    }})
  }); 
  return (
    <Container className='from opacity-0'>
        <div className='py-[20px] px-[30px] md:py-[49px] md:px-[70px] flex md:flex-row flex-col gap-[32px] bg-no-repeat bg-center bg-cover  rounded-[42px] ' style={{"backgroundImage":`url('/image.jfif')`}}>
            <div className='w-full md:max-w-[366px]'>
                <div   className='inline-block w-full mb-4 px-[50px] py-[20px] text-white bg-[#53B606] rounded-[30px]'>
                    <a  href={`mailto:${data?.email || 'growzgmail.com'}`} className='font-bold text-[20px] mb-1 inline-block leading-[28px]'> {data?.email|| 'growzgmail.com'}</a>
                    <a  href={`tel:${data?.phone|| '+998999999999'}`} className='font-bold text-[20px] leading-[28px] inline-block '>{data?.phone || '+99899 999 99 99'}</a>
                </div>
                <div className='inline-block w-full mb-4 px-[50px] py-[20px] bg-white rounded-[30px]'>
                    <p className='font-bold  mb-1 text-[20px] leading-[28px]'>Время работы:</p>
                    <p className='font-normal  text-[20px] leading-[28px]'>{data?.work_time || 'Пн-пт: 9:00 - 17:00'}</p>
                </div>
            </div>
            <form className='w-full  rounded-[20px] bg-white p-10'>
                <p className='mb-6 font-medium text-[28px] leading-[31px]'>Связаться с менеджером: </p>
                <input className='w-full mb-5 py-[16px] px-[24px] border border-solid border-[#53B606] rounded-xl outline-none' type='text' placeholder='Ваше ФИО'/>
                <input className='w-full mb-5 py-[16px] px-[24px] border border-solid border-[#53B606] rounded-xl outline-none' type='text' placeholder='Ваш номер телефона'/>
                <input className='w-full mb-5 py-[16px] px-[24px] border border-solid border-[#53B606] rounded-xl outline-none' type='email' placeholder='Ваш e-mail'/>
                <button className='w-full p-[16px] text-center font-bold  text-[20px] leading-[28px] bg-[#53B606] rounded-xl text-white'>send</button>
            </form>
        </div>
    </Container>
  )
}
