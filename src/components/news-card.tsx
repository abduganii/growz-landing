'use client'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

export default function NewsCard({className,title,link,image,date,text}:any) {
  return (
    <div className={`${className && className} group w-full `}>
        {image &&  <Image  className='w-full rounded-xl aspect-[1.6/1]' width={368} height={220} alt='img' src={image}/>}
        <Link href={link} className="group-hover:text-[#23C16B] inline-block cursor-pointer whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-1" >{title}</Link>
        {text &&   <p className="text-sm font-normal leading-6 text-left  text-[#5B6871] dark:text-white line-clamp-3" dangerouslySetInnerHTML={{__html:text}}/>}
        <p className="text-sm font-normal leading-6 mb-4 text-left flex items-center text-[#5B6871] dark:text-white" > 
        {/* {dayjs(date).format('YYYY.MM.DD')} */}
        {date}
        </p>
    </div>
  )
}
