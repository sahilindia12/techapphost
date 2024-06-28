
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

        <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>

{/* table */}


  
<table class="table mx-9">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default page