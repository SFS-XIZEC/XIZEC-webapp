import React from 'react'
import Heading from '../Heading'

const HeroSection = () => {
 const headingData = {
  head: "Welcome To XIZEC",
  title:
    "Transforming Businesses With Smart IT Solutions",
  text: "At XIZEC, we empower companies with tailored technology strategies that drive growth, efficiency, and innovation. From IT consulting to digital transformation, our experts deliver solutions that solve today’s challenges and prepare you for tomorrow.",
};
  return (
   <div className='relative flex flex-col gap items-center justify-center mt-[120px]'>
    <Heading headingData={headingData} alingCenter/>
   </div>
  )
}

export default HeroSection
