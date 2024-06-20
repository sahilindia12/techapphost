
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import sad from '@/app/componet/sad';
import { toast } from 'react-toastify';
import { att, att1, att10, att2, att3, att4, att5, att6, att7, att8, att9 } from '@/app/componet/attitude';
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




        <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी  </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{att}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude1.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att1)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att1)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{att1}

 </p>
 
 
 

 </div>
 </div>



 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude2.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att2)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att2)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{att2}

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude3.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att3)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att3)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{att3}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude4.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(att4)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att4)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{att4}


 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude5.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att5)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att5)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{att5}


 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude6.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att6)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att6)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{att6}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude7.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att7)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att7)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{att7}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude8.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(att8)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att8)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{att8}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude9.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(att9)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att9)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 
{att9}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>हिंदी 😎😎 attitude सायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../attitude/attitude10.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(att10)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(att10)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{att10}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

 </div>
  )
}
