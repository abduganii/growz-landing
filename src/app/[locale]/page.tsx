"use server"

import { fetchData } from "@/service/get";
import HomePagae from "@/view/home";


async function getLanding() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/api/landing-page`);
}
async function getSocials() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/api/socials?sort=id:asc`);
}
async function getSlider() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/api/slider-mains?populate=*`);
}


export default async function Home() {
  const [landing, socials,slider] = await Promise.all([
    getLanding(),
    getSocials(),
    getSlider()
  ]);
  return (
    <>
     <HomePagae data={landing?.data || {}} socials={socials?.data || []} slider={slider?.data}/>
    </>
  );
}
