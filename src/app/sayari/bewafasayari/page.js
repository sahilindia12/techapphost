
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { toast } from 'react-toastify';
import { bewa, bewa1, bewa10, bewa2, bewa3, bewa4, bewa5, bewa6, bewa7, bewa8, bewa9 } from '@/app/componet/bewafa';
export default function page() {
  
  const [copied, setCopied] = useState(false);

  const handleCopy = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      toast.success("Success Notification !", {
        position: "top-center"
      });
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };
  return (
    <div className=" xl:mx-5 sm:mx-3">




        <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>लड़का बेवफा  शायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{bewa}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>प्यार में धोखा बेवफा शायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa1.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa1)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa1)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{bewa1}

 </p>
 
 
 

 </div>
 </div>



 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 प्यार में धोखा क्यों मिलता है शायरी? </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa2.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa2)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa2)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{bewa2}

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>प्यार के मैसेज धोखा शायरी लव फोटो</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa3.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa3)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa3)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{bewa3}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>प्यार में धोखा इमेज</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa4.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(bewa4)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa4)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{bewa4}


 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>विश्वास पर धोखा शायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa5.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa5)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa5)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{bewa5}


 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>पीठ पीछे धोखा शायरी</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa6.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa6)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa6)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{bewa6}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>पीठ पीछे धोखा शायरी 2 Line</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa2.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa7)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa7)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{bewa7}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>झूठ और धोखा शायरी </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa5.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(bewa8)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa8)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{bewa8}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>धोखा शायरी स्टेटस</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa6.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(bewa9)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa9)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 
{bewa9}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
लोग हमें धोखा क्यों देते हैं?</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../bewa/bewa1.jpg" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(bewa10)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(bewa10)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{bewa10}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

 </div>
  )
}
