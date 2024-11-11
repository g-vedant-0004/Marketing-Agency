import React from 'react'
import Logo1 from '../assets/logos/amazon.png'
import Logo2 from '../assets/logos/dribbble.png'
import Logo3 from '../assets/logos/hubspot.png'
import Logo4 from '../assets/logos/notion.png'
import Logo5 from '../assets/logos/netflix.png'
import Logo6 from '../assets/logos/zoom.png'

const LogoCarousel = () => {
  return (
    <div className='pt-24 overflow-hidden'>
      <div className='flex space-x-12 justify-between items-center animate-marquee'>
        <img src={Logo1} alt="" className='h-12' />
        <img src={Logo2} alt="" className='h-12' />
        <img src={Logo3} alt="" className='h-12' />
        <img src={Logo4} alt="" className='h-12' />
        <img src={Logo5} alt="" className='h-12' />
        <img src={Logo6} alt="" className='h-12' />
      </div>
    </div>
  )
}

export default LogoCarousel
