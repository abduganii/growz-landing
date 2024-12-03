import Image from 'next/image'
import React from 'react'
import BarChartCom from './bar-char-com'

export default function BarChart({className}:any) {
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white px-[28px] py-[40px]`}>
        <h3 className=' text-[#2A2A2A] w-full text-wrap font-semibold text-[20px] leading-[25.2px] md:text-[32px] md:leading-[35.2px]'>Анализ рынка агрохимикатов</h3>
            {/* <BarChartCom/> */}
            <Image src={'/barChart.svg'} width={401} height={307} alt='img' className='py-[24px] aspect-[1.2/1]'/>
        <p className='text-[#2A2A2A] font-medium text-[14px] leading-[18px] md:text-[16px] md:leading-[21.6px]'>
          Глобальный рынок агрохимикатов был оценен в 288 миллиардов долларов США в 2024 году и, как ожидается, будет расти со среднегодовым темпом роста (CAGR) в 5,4% в период с 2024 по 2030 год.
        Это обусловлено растущим спросом на удобрения и средства защиты растений по всему миру.</p>
    </div>
  )
}


