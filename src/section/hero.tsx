
import Lang from '@/components/lang/lang'
import Container from '@/components/container'
import { InstaIcons, NavigateIcons } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
      <div className='relative  w-full py-[84px] bg-no-repeat bg-center bg-cover px-[92px] rounded-b-[42px] ' style={{"backgroundImage":`url('/neture.png')`}}>
      <Container >
        <div className='bg-[#EFEFEF] p-[30px]  rounded-[42px]'>
          <div className='bg-[#FFFFFF] frame p-[30px] pb-[17px] rounded-[42px] relative'>
            <div className='mb-[56px] flex justify-between items-center' >
              <Image src={'/logo.svg'} width={136} height={36} alt='img'/>
              <Lang/>
            </div>
            <div className='flex w-full mb-[74px] gap-[40px] justify-between'>
              <Image className='w-full rounded-2xl object-cover max-w-[512px]' src={'/neture.png'} width={512} height={424} alt='img'/>
                <div className='w-full max-w-[549px]'>
                  <h3 className='font-semibold text-[32px] leading-[43px] text-[#2A2A2A] mb-[32px]'>
                  Интеллектуальное фермерство для устойчивого будущего
                  на основе   данных и ИИ
                  </h3>

                  <p className='text-[#2A2A2A] font-normal text-[20px] leading-[27px]'>
                  <span className='text-[#1AA95B] font-semibold text-[24px] leading-[32px]'>Growz</span> — это лучшая цифровая платформа для мелких фермеров, разработанная для повышения производительности, устойчивости и доступа к рынку.

                       <p className='mt-[15px]'> Независимо от того, управляете ли вы урожаем, ищете индивидуальные советы по ведению сельского хозяйства или ищете лучшие предложения по удобрениям и агрохимикатам,<span className='text-[#1AA95B]'>Growz</span>  здесь поможет вам во всем</p>
                  </p>
                </div>
            </div>
            <button className='py-[14px] ml-auto px-[26px] mr-[220px] rounded-[51px] font-medium text-[20px] leading-[27px] flex gap-[24px] items-center border-solid border border-[#B9B9B9]'>
            Наши новости
              <NavigateIcons/>
              </button>
            <div className="flex gap-5 items-center bg-[#EFEFEF] p-1 pl-3 pt-3 absolute bottom-0 right-0 rounded-tl-[32px]  after:content-[''] after:absolute after:right-0 after:w-[30px] after:h-[30px] after:bg-white after:rounded-br-[32px] after:top-[-30px] before:content-[''] before:absolute before:right-0 before:w-[30px] before:h-[30px] before:bg-[#EFEFEF] before:top-[-30px]">
              <InstaIcons/>
              <InstaIcons/>
              <InstaIcons/>
              <span className='absolute left-[-30px] bottom-0  bg-[#EFEFEF] w-[30px] h-[30px] before:absolute before:right-0 before:w-[30px] before:h-[30px] before:bg-[#FFFFFF] before:rounded-br-[32px]'></span>
            </div>
          </div>
        </div>
     
      </Container>

      {/* <div className='container' >
        <div className="cardLoc">
          <div className='cardImg'>
            <Image src={'/neture.png'} width={300} height={300}  alt={'imad'}/>
          </div>
          <div className="tag">
            <p>hekllo</p>
          </div>
          <div className="curve_one"></div>
          <div className="curve_two"></div>
        </div>
      </div> */}
    </div>
  )
}
