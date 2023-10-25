import React from 'react'
import Link from 'next/link'

const Fcard = () => {
  return (
    <div className='py-10'>
       <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Empowering Lives Through Medicine Donation</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Medicine donation is a powerful act of kindness that extends healthcare access and offers hope to those in need. At HealthHub, we understand the vital role it plays in bridging healthcare gaps and making healthcare a universal right.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rouded-xl focus:ring-4 focus:outline-none   navigation">
        <Link href='/Donatet'>Take a test</Link>
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
    </div>
  )
}

export default Fcard