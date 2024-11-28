import Image from 'next/image'
import React from 'react'

export default function PieChart({className}:any) {
  return (
    <div className={`${className && className} w-full rounded-[42px] bg-white px-[28px] py-[40px]`}>
        <h3 className=' text-[#2A2A2A] font-semibold text-[32px] leading-[35.2px]'>Важность малых фермерских хозяйств в глобальном сельском хозяйстве</h3>
            <Image className='my-[24px]' src={'/tel.png'} width={114} height={218} alt='img'/>
        <p className='text-[#2A2A2A] font-medium text-[16px] leading-[21.6px]'>
        Микро- и малые фермерские хозяйства производят 80% мировых продуктов питания в стоимостном выражении. 
        Они способствуют устойчивому развитию экономики, укрепляя локальные рынки, создавая рабочие места и поддерживая биоразнообразие.
          </p>
    </div>
  )
}
