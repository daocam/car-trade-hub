import Image from 'next/image'
import ImageHero from '../../public/hero.png'
import React from 'react'

const Hero = () => {
  return (
    <div className="py-10 border stroke-black flex">
      <div className="w-[40%]">
        <p className="text-7xl font-bold leading-normal">Find, book, or rent a car -- quickly and easily!</p>
        <p className="text-3xl leading-2 font-light">Streamline your car rental exprience with our effortless booking process.</p>
      </div>
      <div className="w-[60%]">
        <Image src={ImageHero} alt="car image" />
      </div>
    </div>
  )
}

export default Hero