import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className=''>
    <div className='py-2 px-36 flex justify-between'>
        <h1 className=' header '>SHAREMED</h1>
        <Button />
    </div>
    <div className='navigation px-36 text-white py-3 '>
        <ul className='list-none flex justify-between'>
            <li><Link href='/Start-test'>Start Test</Link></li>
            <li><a>View results</a></li>
            <li><a>View Schedules</a></li>
            <li><a>Donate</a></li>
            <li><a>Learn</a></li>
            <li><a>About Us</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Nav