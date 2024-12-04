
'use client'

import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import { DownIcons } from '../../icons'

import {Link, usePathname} from '@/i18n/routing';
import {  useLocale, useTranslations } from 'next-intl';
import { LangArr } from '../../../../musk/data';



export default function Lang() {
  const t = useTranslations('');
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
    <div className="relative">
          <div 
            onClick={()=>setOpen(!open)} 
            className='flex items-center rounded-xl  border-[1px] border-solid cursor-pointer border-[#23C16B] gap-1  py-[3px] px-[9px]' 
            >
             {t('lang')}
            <DownIcons color='black'/>
          </div> 
          {
              open ? <ul className='max-w-[108px] absolute top-12  bg-[#0000001A] sm:py-3 rounded-xl w-full left-0"'>
                  {
                  LangArr.map((e) => (
                      <Link href={pathname} className='flex font-normal text-base p-2    hover:bg-white' locale={e?.value} key={e.id}>
                          {e.label}
                          </Link>
                      ))
                  }
              </ul>:""
          }
      </div>
    </>
  )
}
