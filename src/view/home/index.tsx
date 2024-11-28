import BarChart from '@/components/bar-chart'
import GrowzCard from '@/components/growz-card'
import Container from '@/components/lang/container'
import PieChart from '@/components/pie-chart'
import AgroSection from '@/section/agro'
import FermerSection from '@/section/fermer'
import FormSEction from '@/section/form'
import HeroSection from '@/section/hero'
import MarketSection from '@/section/market'
import SliderSection from '@/section/slider'
import TechSection from '@/section/tech'
import React from 'react'

export default function HomePagae() {
  return (
    <>
    <HeroSection/>
    <SliderSection/>
    <TechSection/>
    <FermerSection/>
    <Container className='flex gap-5 mt-[28px]'>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
    </Container>
    <MarketSection/>
    <Container className='flex gap-5 mt-[28px]'>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
      <GrowzCard image={'/tel.png'} title={'Каталог удобрений и агрохимии с подбором под фазу роста'} text={'Каталог Growz предлагает широкий выбор удобрений и агрохимикатов с возможностью подбора продукции, идеально подходящей для текущей фазы роста ваших культур. Это обеспечивает точное и эффективное применение ресурсов для повышения урожайности.'}/>
    </Container>
    <AgroSection/>
    <Container  className='flex gap-5 mb-[28px]'>
      <BarChart/>
      <PieChart/>
    </Container>
    <FormSEction/>
    </>
  )
}
