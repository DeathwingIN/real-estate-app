import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
 
  return (
    <div>
      {/* top */}
<div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
  <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
    Find your next <span className='text-slate-500'> perfect</span>
    <br/>
    place with ease
  </h1>
  
  <div className='text-gray-400 text-xs sm:text-sm'>
    PrimeNest Estate is the best place to find your next perfect place to live. 
    <br/>
    We have a wide range of properties for you to choose from.
  </div>
  <Link to={"/Search"} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
    Let's Get Started...
  </Link>
</div>


        {/* swiper */}




          {/* losting result for offer, sales and rent */}
    </div>
  )
}
