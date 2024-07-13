'use client'


import { DirtyLensTwoTone, Filter, Key } from '@mui/icons-material';
import React, { useState } from 'react'

export default function page() {

    const [to, setto] = useState([]);
    const [dod, setdo] = useState([]);
    const [ck, setck] = useState(false);
    const [areya, setereya] = useState([]);
    console.log(areya)
    console.log(ck)
    const add=()=>{
        
   
       console.log(to)
    }
    
    const tom=12;
     

const dlt=(itm)=>{

const arr= dod.filter((itme)=>{
    return itme!==itm
})

setdo(arr)

    console.log(arr)
}





const masue=(e)=>{
   
    if (e.key === "Enter") {
        setdo([...dod,areya])
    console.log('inter call now')
  }
  else{
    console.log('not call')
  }
}

 const ckk=(c)=>{
  setck(!ck)
  console.log(ck)
 }
  return (
    <div>


        <h1>this i sarry of object </h1>




        <div className='  w-[55vw] flex justify-center'>
    
<textarea onKeyPress={(e)=>masue(e)}   placeholder=' drop cooment'className='border-2' cols="30" rows="10" onChange={(e)=>setereya(e.target.value)}></textarea>



    </div>
        <div className=' flex justify-center '>
            <input name='nam' className=' mx-10 my-9 bg-slate-100'  onClick={(e)=>masue(e)} onChange={(e)=>setto(e.target.value)} type="
            " /> <br/>
            <button className=' my-5' onClick={()=>add()}>add</button>
        </div>


         {







dod.map((item,index)=>{
    return(
        <>
        
        <div className=' flex justify-center'>

        <h1 className=' mx-5'>{item}</h1>  <button onClick={()=>dlt(item)
        } className=' bg-red-500 rounded-md shadow-md *:first-letter:'>delete</button>{index}
        </div>
        </>
    )
}) }
        

<div className=' flex justify-center'>
<div class="form-check">
  <input checked={ck} onChange={(e)=>ckk(e)} class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>

{
    ck?<h1>check now </h1>:<h2>not check </h2>
}
</div>
    </div>


  )
}
