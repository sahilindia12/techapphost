
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { love, love1, love10, love2, love3, love4, love5, love6, love7, love8, love9 } from '@/app/componet/love';
import { toast } from 'react-toastify';

export default function page() {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      toast.success("coped")
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };
  return (
    <div className=" xl:mx-5 sm:mx-3">




        <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी  </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(love)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{love}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love1.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love1)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love1)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{love1}
 </p>
 
 
 

 </div>
 </div>



 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love2.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love2)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love2)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 

{love2}

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love3.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love3)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love3)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{love3}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love4.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(love4)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love4)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{love4}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love5.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love5)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love5)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{love5}


 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love6.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love6)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love6)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{love6}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love7.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(love7)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love7)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{love7}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love8.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(love8)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love8)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{love8}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love9.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>  {copied?<button onClick={()=>handleCopy(love9)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love9)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 
{love9}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 💑👨‍❤️‍👨 love सायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../love/love10.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(love10)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(love10)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{love10}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

 </div>
  )
}
