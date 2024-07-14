'use client'

import React, { useState } from 'react'

function page() {

    const [input, setinput] = useState();

    console.log(input)

  return (
    <div>

<h1>how to get value onchange in react</h1>
   <input className=' bg-slate-100 my-5 relative left-[44vw]' type="text" onChange={(e)=>setinput(e.target.value)} />

    </div>
  )
}

export default page