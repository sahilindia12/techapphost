'use client'





'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { IoIosCopy } from "react-icons/io";
import { useRouter } from 'next/navigation';
export default function page() {
    const code =`  
     
    
git init
    `
const code1=`
const { NextResponse } = require("next/server")

export const UPDATE=async()=>{
    return NextResponse.json({'name':"your name"})
}
`
    const code2=`
  const { NextResponse } = require("next/server")

export const DELETE=async()=>{
    return NextResponse.json({'name':"your name"})
}

    
    `

    const code3=`
    const { NextResponse } = require("next/server")

export const POST=async()=>{
    return NextResponse.json({'name':"your name"})
}

    `

    const code4=`
   const { NextResponse } = require("next/server")

export const GET=async()=>{
    return NextResponse.json({'name':"your name"})
}
    `

const code5=`
 git add .
`
const code6=` const { NextResponse } = require("next/server")

export const DELETE=async()=>{
    return NextResponse.json({'name':"your name"})
}
`


const router=useRouter()
    const [copied, setCopied] = useState(false);

    const handleCopy = async (cod) => {
      try {
        await navigator.clipboard.writeText(cod);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        toast.success("coped")
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    };
    
  return (
    <div>

<Link href={'../'}>home</Link>

  <br/>
   <div className=' flex justify-center m-4'>
    <h1 className='  p-2 rounded-md text-green-400'>next js 14 api routes</h1>
   </div>
  <div className='  grid sm:grid-cols-1 lg:grid-cols-2  gap-4'>
<div>

<div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img className=' w-[63vw] ' src="../github.png" alt="How to add existing folder to GitHub repository" />
   
   
   </div>
</div>

<div className=' mx-4'>
<p className=' leading-[33px]'>
What is api route in next js? 
Before we use api route, you should know next js.
What is api route in 14 and how is it used? Next js is a full stack framework, you can use it for both frontend and backend.
Using next js we can create full stack projects like 
We can create it which makes our work easier. Ever since Next JS came, it is being liked a lot.

 <div className=' flex justify-center'>
 <h2 className=' text-green-400'>next js 14 api routes app router </h2>
 </div>

 We use next js api route to crate the api, we use route to write the next js api and backend.
 In next js we use route to write the backend. In next js, if you want to create an api, then you have to write route.js in the name of your file, only then you will be able to create an api, otherwise you cannot create an api.
 </p>
    
</div>
  </div>
<div className=' flex justify-center'><h4 className=' text-green-300'>next js 14 api  get post delete put routes example </h4></div>
  <div className=' mx-10'>
    <li  className=' leading-[33px]'>
    How to create get post delete update api route in next js 14 and what is its use? We know how to create CRUP api route in next js 14.
    In next js 14, api route is used in the backend to create api. In next js 14, you can very easily create API ROUTE for all GET POST DELETE UPDATE.    </li>
  
  </div>
      <div className=' flex justify-center'><h2 className=' text-green-400'>next js 14 get api routes example </h2></div>

{/* <div className=' bg-slate-400 sm:mx-6 lg:mx-[25vw] rounded-md shadow-lg'>
<div  className=' flex   justify-center '  > <button className=' my-10' onClick={handleCopy}>
        {copied ?  <ContentCopyIcon className='  size-10 text-green-500'></ContentCopyIcon> : <ContentCopyIcon className=' text-red-500'></ContentCopyIcon>}
      </button></div>
    


     
</div> */}

<div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code4)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code4}</pre>
     </div>

<br/>      <div className=' flex justify-center'><h2 className=' text-green-400'>next js 14 post api routes example </h2></div>

{/* <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code3)} className=' text-white size-7'/>
     </div>

     </div> */}


     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code3)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code3}</pre>
     </div>

     <br/><div className=' flex justify-center'><h2 className=' text-green-400'>next js 14 deletet api routes example </h2></div>

     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code6)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code6}</pre>
     </div>
<br/>       <div className=' flex justify-center'><h2 className=' text-green-400'>next js 14 update api routes example </h2></div>

     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code1)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code1}</pre>
     </div>

    

   
<br/>     






    </div>
  )
}
