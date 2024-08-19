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
git commit -m "Add new files to new-folder"

`
    const code2=`
    git remote add origin https://github.com/your-username/your-repo.git

    
    `

    const code3=`git push -u origin 

    `

    const code4=`
 import React, { useState } from 'react'

function page() {

    const [input, setinput] = useState();

    console.log(input)

  return (
    <div>

<h1>how to get value onchange in react</h1>
   <input className=' bg-slate-100 my-5 relative left-[44vw]' type="text" onChange={(e)=>setinput(e.target.value)} />

    </div>
  )
}

export default page
    `

const code5=`
 git add .
`
const code6=` git status
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



  <br/>
   <div className=' flex justify-center m-4'>
    <h1 className='  p-2 rounded-md text-green-400'>How to get input field value in React JS functional component</h1>
   </div>
  <div className='  grid sm:grid-cols-1 lg:grid-cols-2  gap-4'>
<div>

<div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img className=' w-[63vw] sm:w-[99vw] ' src="../reactjs.png" alt="How to add existing folder to GitHub repository" />
   
   
   </div>
</div>

<div className=' mx-4'>
<p className=' leading-[33px]'>
How to get the value of the input field in react js? If we want to get the value of input in react js, then for that we have to
The state should be known so that we can get the input field in react js. If you have written javascript, html
In react js the value is stored in variables but if you want to get the value of react js input field then you have to know the state only then you can get the value in react js.

 <div className=' flex justify-center'>
 <h2 className=' text-green-400'>how to get input field value in react js functional component </h2>
 </div>

 input in react js functional components 
value of filed 
how to get 
In react js, if you want to get the value of input, then the usestate should be known so that you can easily get the value in the input field.
</p>
    
</div>
  </div>
<div className=' flex justify-center'><h4 className=' text-green-300'>react get value of input on button click</h4></div>
  <div className=' mx-10'>
    <li  className=' leading-[33px]'>
    How to get the value of input field on button click in react js and where to store it? 
Let us see how to get the value of input with a functional component in react js.
    </li>
  
  </div>
      <div className=' flex justify-center'><h2 className=' text-green-400'> 
      how to get value onclick in react </h2></div>

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

<br/>
<div className=' flex justify-center'>

<img className=' w-[63vw] sm:w-[99vw] ' src="../codeimg.png" alt="How to add existing folder to GitHub repository" />

</div>
    </div>
  )
}
