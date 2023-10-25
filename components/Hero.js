import React from 'react'
import Card from './Card'
import Fcard from './Fcard'
import Scard from './Scard'

const Hero = () => {
  return (
    <div className=' border mt-4 px-36 flex w-full justify-between '>
        <Card />
        <Scard />
        <div className=' flex flex-col px-2'>
        <Fcard />
        
        </div>
        
    </div>
  )
}

export default Hero