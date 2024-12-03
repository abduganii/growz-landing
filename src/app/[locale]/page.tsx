"use server"

import HomePagae from "@/view/home";

const res:any = {
    data: {
      id: 1,
      hero_video: "https://youtu.be/AcJVy0C5WAE?si=akADCyST3Ws3y9wo",
      instagram_link: null,
      youtube_link: null,
      telegram_link: null,
      our_nature_img: null,
      marketplace_img: null,
      email: null,
      phone: null,
      createdAt:' 2024-12-03T06:06:25.366Z',
      updatedAt: '2024-12-03T06:06:25.366Z',
      work_time: null,
      address: null
    },
    meta: {}
}
export default async function Home() {

  return (
    <>
     <HomePagae data={res?.data}/>
    </>
  );
}
