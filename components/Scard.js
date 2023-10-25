import React from 'react'
import Link from 'next/link'

const  Card = (props) => {
  return (
    <div className='py-16 px-2'>
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src="https://st2.depositphotos.com/3562337/6709/i/950/depositphotos_67099383-stock-photo-high-quality-3d-render-of.jpg"
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Pioneering a Healthier You
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Experience the future of healthcare with SHAREMED. Bridging the gap to equitable medicine access and personalized chronic disease management. Join us in redefining healthcare as a universal right. 
    </p>
  </div>
  <div class="p-6 pt-0">
  <Link href='/Start-test'>
    <button
      class="select-none rounded-lg navigation py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
             Take a test
    </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default  Card