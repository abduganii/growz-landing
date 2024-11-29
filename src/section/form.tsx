import Container from '@/components/container'
import React from 'react'

export default function FormSEction() {
  return (
    <Container>
        <div className='py-[49px] px-[70px] flex gap-[32px] bg-no-repeat bg-center bg-cover  rounded-[42px] ' style={{"backgroundImage":`url('/image.jfif')`}}>
            <div className='w-full max-w-[366px]'>
                <a target="_blank" href='+998951454545' className='inline-block w-full mb-4 px-[50px] py-[20px] text-white bg-[#53B606] rounded-[30px]'>
                    <p className='font-bold text-[20px] mb-1 leading-[28px]'>growzgmail.com</p>
                    <p className='font-bold text-[20px] leading-[28px]'>+99895 145-45-45</p>
                </a>
                <div className='inline-block w-full mb-4 px-[50px] py-[20px] bg-white rounded-[30px]'>
                    <p className='font-bold  mb-1 text-[20px] leading-[28px]'>Время работы:</p>
                    <p className='font-normal  text-[20px] leading-[28px]'>Пн-пт: 9:00 - 17:00</p>
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
