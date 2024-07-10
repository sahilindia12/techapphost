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
     git remote remove origin 
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

<Link href={'../'}>home</Link>

  <br/>
   <div className=' flex justify-center m-4'>
    <h1 className='  p-2 rounded-md text-green-400'>How to add existing folder to GitHub repository</h1>
   </div>
  <div className='  grid sm:grid-cols-1 lg:grid-cols-2  gap-4'>
<div>

<div  className=" p-2 overflow-hidden border-2  rounded-md shadow-lg flex justify-center"> 
   
   
   <img className=' w-[63vw] ' src="../github.png" alt="How to add existing folder to GitHub repository" />
   
   
   </div>
</div>

<div className=' mx-4'>
<p className=' leading-[33px]'>
Whenever we upload any folder or repo of ours on github
 which is from our local system then we update it or 
 change anything in our application then after that we 
 again update that folder or repo on github. This also has to be done from the same folder 
from which the exiting folder has to be uploaded.
We can solve this error in some ways, let us know how to do it.

 <div className=' flex justify-center'>
 <h2 className=' text-green-400'>how to add a folder to github repository </h2>
 </div>

 First of all we have to bring our project or after that we have to do whatever work we need to do with our project, after that we have to add it to our local system first by using git command so that our project can be added to git on the local system.
</p>
    
</div>
  </div>
<div className=' flex justify-center'><h4 className=' text-green-300'>git command exiting folder upload to github server</h4></div>
  <div className=' mx-10'>
    <li  className=' leading-[33px]'>
    After getting this sanity, you all have to run the github command or after that you have to run the git command again which is given below, what do you have to run so that the exiting folder can be uploaded to github again?
    </li>
  
  </div>
      <div className=' flex justify-center'><h2 className=' text-green-400'> how to add folder to github from vscode </h2></div>

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
<div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code)} className=' text-white size-7'/>
     </div>
     <span className=' text-white'>{code}</span>
     </div>

     <br/>
     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code5)} className=' text-white size-7'/>
     </div>
     <span className=' text-white'>{code5}</span>
     </div>

     <br/>

     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code6)} className=' text-white size-7'/>
     </div>
     <span className=' text-white'>{code6}</span>
     </div>
<br/>
     <div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code1)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code1}</pre>
     </div>

    

   
<br/>


<div className=' flex justify-center'><h4 className=' text-green-300'>git command exiting folder upload to github server</h4></div>
  <div className=' mx-10'></div>
  <li  className=' leading-[33px]'>
  Here you have to provide the URL of the same repo or folder from which you want to update the exiting code on GitHub which you have copied and cloned.    </li>

  

<br/>
<div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code2)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code2}</pre>
     </div>
<br/>

<div className=' p-3  rounded-md  lg:mx-[23vw] bg-slate-900'>
     <div className='  flex justify-end'>
   <IoIosCopy onClick={()=>handleCopy(code3)} className=' text-white size-7'/>
     </div>
     <pre className=' text-white'>{code3}</pre>
     </div>




    </div>
  )
}
