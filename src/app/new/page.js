
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {

  const [ip, setip] = useState();

    return (
    <div>page


<input className=' bg-red-400 ' placeholder=' inter value' type="text"  onChange={(e)=>setip(e.target.value)} />
      <button><Link href={`./new/${ip} `}>go </Link> </button>
    </div>
  )
}
