'use client'
import BarChart from '@/components/bar-chart'
import GrowzCard from '@/components/growz-card'
import Container from '@/components/container'
import PieChart from '@/components/pie-chart'
import AgroSection from '@/section/agro'
import FermerSection from '@/section/fermer'
import FormSEction from '@/section/form'
import HeroSection from '@/section/hero'
import MarketSection from '@/section/market'
import SliderSection from '@/section/slider'
import TechSection from '@/section/tech'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocale, useTranslations } from 'next-intl'
export default function HomePagae({data,socials,slider}:any) {
  const t = useTranslations()
  const locale = useLocale()
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".card", { opacity: 1,x:0, duration: 0.7,delay:.5,ease: "power2.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card',
    }})
    gsap.to(".card1", { opacity: 1,x:0, duration: 0.7,delay:.5,ease: "power2.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card1',
    }})
    gsap.to(".card2", { opacity: 1,x:0, duration: 0.7,delay:.5,ease: "power2.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card2',
    }})
    })
  return (
    <>
    <HeroSection data={data} socials={socials}/>
    <SliderSection slider={slider}/>
    <TechSection/>
    <FermerSection data={data}/>
    <Container className='flex sm:flex-row flex-col card  opacity-0 gap-5 mt-[28px]'>
      <GrowzCard image={`/tel1_${locale}.png`} title={t('growzCardTitle1')} text={t('growzCardText1')}/>
      <GrowzCard image={`/tel2_${locale}.png`} title={t('growzCardTitle2')} text={t('growzCardText2')}/>
    </Container>
    <MarketSection data={data}/>
    <Container className='flex sm:flex-row flex-col card1 opacity-0 gap-5 mt-[28px]'>
    <GrowzCard image={`/tel3_${locale}.png`} title={t('growzCardTitle3')} text={t('growzCardText3')}/>
    <GrowzCard image={`/tel4_${locale}.png`} title={t('growzCardTitle4')} text={t('growzCardText4')}/>
    </Container>
    <AgroSection/>
    <Container  className='flex lg:flex-row flex-col card2  opacity-0 gap-5 mb-[28px]'>
      <BarChart/>
      <PieChart/>
    </Container>
    <FormSEction data={data}/>
    </>
  )
}
