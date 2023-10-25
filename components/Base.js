'use client'
import React from 'react'
import { useState } from 'react'

const Base = () => {
    const [Toggler, setToggler] = useState(true)
    


  return (
    <div>
    {Toggler ? (
        <>

        </>
    ) : (
        <>

        </>
    )}
    </div>
  )
}

export default Base