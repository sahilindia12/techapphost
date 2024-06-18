

'use client'
import React, { useEffect, useState } from 'react'
import AdUnitsIcon from '@mui/icons-material/AdUnits';

import styles  from './sahil.module.css'

import axios from 'axios';
function page() {
    const [api, setapi] = useState([]);
    const [lod, setlod] = useState(true);

    console.log(api)

useEffect(() => {
    const api = async()=>{

const call = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
setapi(call)
setlod(false)

    }

    api()
   
}, []);
    console.log()
  return (
    <div>page


<  AdUnitsIcon className=' bg-red-500 text-white size-[24vw]   rounded-md hover:size-10'/>



<div className={styles.lodd}>hlflsadkfjl</div>




{/* 
     <div className=' flex justify-center '>
        
     <video width="600" controls>
        <source src="./https://youtu.be/TwFBtV13KQQ?si=l-VlTaNu4dPKTVZY" type="video/mp4" />
        Your browser does not support the video tag.
      </video>  
        </div>  */}



        < input type="text"/>

        {


lod?<h2>yes</h2>:<h2>nhi</h2>
        }


        {

         

       lod?<div className=' flex justify-center'><span className={styles.loader}></span></div>:
       api.map((item)=>{
        return(


            < div className=' mx-10'>
            
       <div>
<label>title</label>
       <h2>{item.title}</h2>
       </div>
       <div>
<label>body</label>
       <h2>{item.body}</h2>
       </div>
       <div>
<label>userId</label>
       <h2>{item.userId}</h2>
       </div>
            </div>
        )
    })

        }

  
    </div>
  )
}

export default page
