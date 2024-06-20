
'use client'

import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from 'react-toastify';
import { cute, cute1 } from '@/app/componet/sad';

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
 
   <div className=' flex justify-center'> {copied?<button onClick={()=>handleCopy('copy1')} className=' text-green-500 '>   < ContentCopyIcon/></button>:
   <button onClick={()=>handleCopy('copy1')} className=' size-10 text-orange-500 '>   < ContentCopyIcon/></button>
   }
   
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
{cute}
 
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
 
   <div className=' flex justify-center'> <button onClick={()=>handleCopy('cute2')} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

{cute1}
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 

 कभी कभी आपकी याद सताती है, कभी कभी आपकी याद रुलाती है।
दिल की धड़कन और मेरी सदा है तू, मेरी पहली और आखिरी वफ़ा है तू।

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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 तू है मेरे दिल की धड़कन, तू है मेरी आरजू।
 तेरे बिना टूट कर बिखर जाएंगे, तुम मिल जाओ तो गुलाब बन जाएंगे।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 तुम्हारी याद में जीने की आरजू है अब, तो चाहत में मरने का इरादा भी है।
 तेरे ख्याल से खुद को छुपा नहीं सकता, तेरे सिवा किसी और को चाह नहीं सकता।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 
 </p>
 
 तेरे नाम से दिल धड़कता है, तुझे देख दिल बहकता है।
मेरी हर खुशी, हर बात तेरी है, सांसों में छुपी ये मुलाकात तेरी है।


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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 दिल की आरजू तुझसे है, तेरी वफ़ा पे यकीन हमको।
तुम्हारे प्यार की तलब यूँ हुई है, जैसे परिंदे को हवा की लगी है।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 तेरे प्यार में जीना सीख लिया, अब मरने का कोई ग़म नहीं।
 तेरी आदाओं में हमने दिल को खो दिया, तेरे ख्वाबों में हमने जीना सीख लिया।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 तेरे बिना अधूरी सी है, मेरी कहानी, तेरे बिना अधूरी सी है, मेरी ज़िन्दगी।
 तेरी एक मुस्कान मेरी जान ले लेती है, तेरी एक नजर मेरा दिल चुरा लेती है।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>
 
 तुमसे मोहब्बत करने का इरादा है, जिंदगी भर साथ निभाने का वादा है।
 तेरी मोहब्बत में जीना सीख लिया, तेरे बिना मरने का ख्वाब कभी न देखा।
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
 
   <div className=' flex justify-center'> <button onClick={''} className=' text-orange-500 '>   < ContentCopyIcon/></button>
   </div>
 <p className=' pt-[22%] lg:text-[22px]'>

 दिल के हर कोने में तुम बसते हो, मेरी हर धड़कन में तुम धड़कते हो।
तुम्हारे बिना जिंदगी में कोई रंग नहीं, तुम्हारे बिना दिल में कोई उमंग नहीं।
 </p>
 
 
 

 </div>
 </div>

 
 
{/* newllie */}

 </div>
  )
}
