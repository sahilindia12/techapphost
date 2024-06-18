

'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page() {
    const [apii, setapi] = useState([]);

useEffect(() => {
 const api = async()=>{
    const call = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setapi(call.data)
   
 }
 api()
}, []);
console.log(apii)

  return (
    <div>


{

    apii.map((item)=>{
        return(<>
        <label>title</label>
         <h1 className=' my-5 bg-orange-200'>{item.title}</h1>
         <label>id</label>
         <h1 className=' my-5 bg-orange-200'>{item.id}</h1>
         <label>userid</label>
         <h1 className=' my-5 bg-orange-200'>{item.userId}</h1>
        </>)
    })
}

    </div>
  )
}

export default page