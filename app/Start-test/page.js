'use client'
import React from 'react'
import { useState } from "react"
import Link from 'next/link'


const page = () => {

    const [first, setfirst] = useState(true)

  return (
    <div className='flex  flex-col px-72 py-10 '>

            {first? <> 
        <h1 className='py-4 text-2xl font-bold'>Personal Information</h1>
        <h1>Name</h1>
        <input type='text' className='border'/>
        <h1>Age</h1>
        <input type='text' className='border'/>
        <h1>Address</h1>
        <input type='text' className='border'/>
        <h1>Height</h1>
        <input type='text' className='border'/>
        <h1>Weight</h1>
        <input type='text' className='border'/>

        <h1 className='py-6 text-2xl font-bold'>Symptoms</h1>

        <li className='py-4'>Urinate (pee) a lot, often at night</li>
        <form className='flex flex-col'>
  <div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1" > Yes</label></div>
  <div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2"> No</label>
  </div>
        </form>



<li className='py-4'>Are very thirsty</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>



<li className='py-4'>Lose weight without trying</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>



<li className='py-4'>Night sweats</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>



<li className='py-4'>Coughing or chest pain</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>


<li className='py-4'>Frequent infections</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>


<li className='py-4'>Fever or chills</li>
<form className='flex flex-col'>
<div><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
<label for="vehicle1" > Yes</label></div>
<div><input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
<label for="vehicle2"> No</label>
</div>
</form>



        <button 
        className='navigation mx-10 my-10 py-3 rounded-2xl'
        ><Link href='./View-results'>Link</Link></button>
          
             </> : <>

             </>}
    </div>
    
  )
}

export default page