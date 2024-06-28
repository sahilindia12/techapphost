

'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';
export default function page() {
    const code =`  
     
    
<IfModule mod_rewrite.c>

RewriteEngine on 
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^(.*)$ $1.html [NC,L]
  
</IfModule>
    `

    
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
    
  return (
    <div>
  
   <div className=' flex justify-center m-4'>
    <h1 className='  p-2 rounded-md text-green-400'>next js deploy after refresh page not found react</h1>
   </div>
  <div className=' mx-3 grid sm:grid-cols-1 lg:grid-cols-2  gap-4'>
<div>

<div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../opo.jpg" alt="" />
   
   
   </div>
</div>

<div className=' mx-4'>
<p className=' leading-[33px]'>
Whenever we host our Next JS project on an online server, 
we get to see an error that whenever we reload or refresh our 
Next JS project, we get the error of page not found.
Such errors are seen in the projects of Next JS or React JS 
which today we know is the error of page not found.

react js or next js is a single page application which gives this error in which there is only one page or our entire
 application is made up of many components.

 <div className=' flex justify-center'>
 <h2 className=' text-green-400'>how to sovle page not found next js 14 and react js </h2>
 </div>

 To remove this error in Next js and React js, we need to do a little configuration in our host provider.
We will have to do this so that our error can be corrected.
</p>
    
</div>
  </div>
<div className=' flex justify-center'><h4 className=' text-green-300'>router.refresh not working nextjs</h4></div>
  <div className=' mx-10'>
    <li  className=' leading-[33px]'>
    First of all you will have to open the search panel and after that you will have to go to the domain on which you have kept your website and then inside that you will have
     to find the hidden file in your settings.
    </li>
<h3>hidden file name = <span className=' text-green-400 text-2xl'>.htaccess</span></h3>
    <li  className=' leading-[33px]'>
    You have to find this file and add another new code which will help you in this error and then you will have to send this file to another new file of your file same .htaccess.
    You can create a name with this and paste your code inside it.
    </li>
  </div>
      <div className=' flex justify-center'><h2 className=' text-green-400'> how to add  .htaccess code in  file </h2></div>

<div className=' bg-slate-400 sm:mx-6 lg:mx-[25vw] rounded-md shadow-lg'>
<div  className=' flex   justify-center '  > <button className=' my-10' onClick={handleCopy}>
        {copied ?  <ContentCopyIcon className='  size-10 text-green-500'></ContentCopyIcon> : <ContentCopyIcon className=' text-red-500'></ContentCopyIcon>}
      </button></div>
    <div className=' flex justify-center'>
   
    <pre className=' text-green-400 lg:text-[22px]'>
        {code}
    </pre>
    </div>
</div>

    </div>
  )
}
