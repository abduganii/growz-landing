import Image from 'next/image'
import React from 'react'
import BarChartCom from './bar-char-com'

export default function BarChart({className}:any) {
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white px-[28px] py-[40px]`}>
        <h3 className=' text-[#2A2A2A] font-semibold text-[32px] leading-[35.2px]'>Анализ рынка агрохимикатов</h3>
            {/* <Image className='my-[24px]' src={'/tel.png'} width={114} height={218} alt='img'/> */}
            <BarChartCom/>
        <p className='text-[#2A2A2A] font-medium text-[16px] leading-[21.6px]'>
          Глобальный рынок агрохимикатов был оценен в 288 миллиардов долларов США в 2024 году и, как ожидается, будет расти со среднегодовым темпом роста (CAGR) в 5,4% в период с 2024 по 2030 год.
        Это обусловлено растущим спросом на удобрения и средства защиты растений по всему миру.</p>
    </div>
  )
}


