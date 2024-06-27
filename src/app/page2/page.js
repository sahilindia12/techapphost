
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function page() {

    const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello moto');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      toast.success("coped")
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

    const cod=`
      return (
    <div>

<Link  href={'./'}>go 1</Link>
   
        <h1>this is 3 page</h1>
    </div>
  )
}
    `
  return (
    <div>

<Link  href={'./'}>go 1</Link>
   
        <h1>this is 3 page</h1>
    
        <div>
            
        <div className=' flex justify-center'>
        <div  className='  ml-10'>
        <button onClick={handleCopy}>
        {copied ? 'Coped' : 'copy'}
      </button>
            </div>
        <pre className='  text-green-400 shadow-lg bg-slate-600 px-9 rounded-md'>
            {cod}
        </pre>
        </div>
        </div>
    </div>
  )
}

export default page