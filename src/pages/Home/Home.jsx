import Slider from 'src/components/Slider/Slider'
import React from 'react'
import TutorialGuide from 'src/components/TutorialGuide/TutorialGuide'
import Brand from 'src/components/Brand/Brand'
import Experienced from 'src/components/Experienced/Experienced'
import SampleProcess from 'src/components/SampleProcess/SampleProcess'

export default function Home() {
  return (
    <div className="container">
      <Slider />
      <TutorialGuide />
      <Brand />
      <Experienced />
      <SampleProcess />
    </div>
  )
}
