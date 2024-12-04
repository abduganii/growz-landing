'use client'
import Image from 'next/image'
import React from 'react'
import BarChartCom from './bar-char-com'
import { useTranslations } from 'next-intl'

export default function BarChart({className}:any) {
  const t = useTranslations()
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white px-[28px] py-[40px]`}>
        <h3 className=' text-[#2A2A2A] w-full text-wrap font-semibold text-[20px] leading-[25.2px] md:text-[32px] md:leading-[35.2px]'>{t('chartTitle1')}</h3>
            {/* <BarChartCom/> */}
            <Image src={'/barChart.svg'} width={401} height={307} alt='img' className='py-[24px] aspect-[1.2/1]'/>
        <p className='text-[#2A2A2A] font-medium text-[14px] leading-[18px] md:text-[16px] md:leading-[21.6px]'>
        {t('chartText1')}
        {t('chartText2')}
       </p>
    </div>
  )
}


