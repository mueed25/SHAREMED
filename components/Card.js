import React from 'react'
import Link from 'next/link'

const  Card = (props) => {
  return (
    <div className='py-16 px-2'>
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img
      src="https://s16736.pcdn.co/wp-content/uploads/sites/203/2016/11/shutterstock_251684002.jpg.optimal.jpg"
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Your Journey to Wellness    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Empower your health journey with SHAREMED. A revolution in healthcare, it combines equitable medicine access and personalized disease management. Join us to redefine healthcare for everyone, making it a universal right.
    </p>
  </div>
  <div class="p-6 pt-0">
  <Link href='/Start-test'>
    <button
      class="select-none rounded-lg navigation py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
              Take a Test
    </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default  Card