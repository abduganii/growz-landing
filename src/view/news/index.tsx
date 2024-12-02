'use client'
import Container from '@/components/container'
import { DownIcons } from '@/components/icons';
import NewsCard from '@/components/news-card'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function NewsPage() {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handlePage  = (p:any) => {
    if(p <= 4){
      params.set('page', p  );
      replace(`${pathname}?${params.toString()}`);
    }
  };
  return (
    <Container >
      <div className='w-full bg-white py-[21px] px-[24px] rounded-[42px] mt-[20px]'>
        <h3 className='font-semibold leading-[38px] text-[32px] mb-[32px] '>Новости</h3>
          <div className='w-full flex-wrap gap-[24px] flex '>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          <NewsCard link={'/news/1'} className={'colm1'} image={'/news.jpg'} title={"title"} text={"text"} date={'24.09.2024'}/>
          </div>
          {4 > 1 ?  <div className="flex justify-center space-x-2 mt-6">
            <button className='text-[#007E27] rotate-90' onClick={() => handlePage(2 - 1)} disabled={false}>
          <DownIcons color={"#007E27"}/>
            </button>
        {Array.from({ length: 4}, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(Number(p))}
            className={`px-3 py-1 rounded-lg text-[14px] leading-[24px]  border ${
              p === 2
                ? "bg-[#007E27] text-white border-[#007E27]"
                : "bg-white text-[#007E27] border-gray-300"
            } hover:bg-[#76e79a] hover:text-white`}
          >
            {p}
          </button>
        ))}
         <button className='text-[#007E27] -rotate-90' onClick={() => handlePage(2 + 1)} disabled={false}>
          <DownIcons color={"#007E27"}/>
            </button>
      </div>:""}
      </div>
    </Container>
  )
}
