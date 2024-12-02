import React from "react";
import Image from "next/image";
import Container from "@/components/container";

export default function NewsIdPage() {
  return (
    <Container>
        <div className="w-full p-[36px] bg-white rounded-[42px] mt-[36px]">
            <div className="w-full m-auto md:max-w-[996px]">
                <Image
                className="w-full object-cover rounded-xl aspect-[1.8/1] mb-12"
                alt="img"
                src={'/news.jpg'}
                width={760}
                height={480}
                />

                <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871] dark:text-white mb-4">
                {/* {dayjs(news?.created_at).format('YYYY.MM.DD')} */}
                20.12.2024
                </p>
                <h3 className="mb-3 text-2xl font-semibold leading-[29.05px]" dangerouslySetInnerHTML={{__html:'Название'}}/>

                <div className="text-[#48535B] dark:text-white  leading-[26px] reach" dangerouslySetInnerHTML={{__html:'disl'.replace(
                    /<oembed url="https:\/\/youtu\.be\/(.+?)".*><\/oembed>/g,
                    (match:any, videoId:any) => {
                    return `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    }
                )}}/>
                
            </div>
        </div>


    </Container>
  );
}
