
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { toast } from 'react-toastify';
import { bewa, bewa1, bewa10, bewa2, bewa3, bewa4, bewa5, bewa6, bewa7, bewa8, bewa9 } from '@/app/componet/bewafa';
import { brt, brt1, brt10, brt11, brt12, brt13, brt14, brt2, brt3, brt4, brt5, brt6, brt7, brt8, brt9 } from '@/app/componet/brithday';
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




        <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Happy birthday wishes</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt}
 
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Happy birthday wishes job</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt1.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt1)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt1)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt1}

 </p>
 
 
 

 </div>
 </div>



 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 प्यार में धोखा क्यों मिलता है शायरी? </h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt2.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt2)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt2)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{brt2}

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Heart touching birthday wishes for employee</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt3.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt3)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt3)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{brt3}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Heart touching birthday wishes for colleague</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt4.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt4)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt4)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt4}


 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Professional birthday wishes for employee</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt4.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt5)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt5)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
{brt5}


 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Short birthday wishes for employee</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt5.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt6)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt6)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{brt6}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Simple birthday wishes for colleague</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt6.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt7)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt7)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{brt7}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Heart touching birthday wishes for colleague</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt7.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy(brt8)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt8)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt8}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>Motivational birthday wishes for colleague</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt8.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt9)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt9)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 
{brt9}
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
Short formal birthday wishes</h1></div>
    {/* <div  className=" flex justify-center "><h1> <span className="  text-[44px]">हिंदी </span> <span className=" text-[44px] text-orange-400">सायरी</span> </h1></div> */}
 
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt.png" alt="" />
   
   
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
 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 Happy birthday wishes to employee from HR</h1></div>
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt3.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt10)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt10)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt10}
 </p>
 
 
 

 </div>
 </div>
 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 Happy birthday wishes to employee from HR</h1></div>
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt2.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt11)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt11)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt11}
 </p>
 
 
 

 </div>
 </div>

 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 Happy birthday wishes to employee from HR</h1></div>
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt9.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt12)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt12)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt12}
 </p>
 
 
 

 </div>
 </div>
{/* newllie */}
<div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
Happy birthday wishes 2024 wishes</h1></div>
<div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt3.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt13)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt13)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt13}
 </p>
 
 
 

 </div>
 </div>
 <div className=' flex justify-center'><h1 className='  lg:text-[32px] my-4 text-orange-500'>
 Happy brithday sayari hindi wishes</h1></div>
 <div className="  grid sm:grid-cols-1 grid-cols-2  lg:px-10   ">
 <div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img src="../brithday/brt7.png" alt="" />
   
   
   </div>

 <div  className="   sm:mt-5 lg:mx-5 px-[33px] pt-[5%] p-2 overflow-hidden  border-2  rounded-md shadow-lg "> 
 
   <div className=' flex justify-center'>{copied?<button onClick={()=>handleCopy(brt14)} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy(brt14)} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{brt14}
 </p>
 
 
 

 </div>
 </div>

 </div>
  )
}
