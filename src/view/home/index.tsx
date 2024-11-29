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
export default function HomePagae() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".card", { opacity: 1,x:0, duration: 4,delay:.5,ease: "power3.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card',
    }})
    gsap.to(".card1", { opacity: 1,x:0, duration: 4,delay:.5,ease: "power3.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card1',
    }})
    gsap.to(".card2", { opacity: 1,x:0, duration: 4,delay:.5,ease: "power3.out", scrollTrigger: {
      toggleActions: 'restart none none reset',
      trigger: '.card2',
    }})
    })
  return (
    <>
    <HeroSection/>
    <SliderSection/>
    <TechSection/>
    <FermerSection/>
    <Container className='flex sm:flex-row flex-col card  opacity-0 gap-5 mt-[28px]'>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
    </Container>
    <MarketSection/>
    <Container className='flex sm:flex-row flex-col card1 opacity-0 gap-5 mt-[28px]'>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
    </Container>
    <AgroSection/>
    <Container  className='flex md:flex-row flex-col card2  opacity-0 gap-5 mb-[28px]'>
      <BarChart/>
      <PieChart/>
    </Container>
    <FormSEction/>
    </>
  )
}
