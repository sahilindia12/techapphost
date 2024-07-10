'use client'

import React, { useEffect, useState } from 'react'

export default function page() {
    const [po, setpo] = useState(5);
    useEffect(() => {
        
      const uu=()=>{
      for (let ka = 0; ka < 44444; ka++) {
     
        console.log(`this is `)
      }
      }

      uu()
    }, []);

  
  return (
    <div>pagefsdf</div>
  )
}
