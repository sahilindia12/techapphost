import Image from "next/image";
import { Rajdhani  } from 'next/font/google'
 
const roboto = Rajdhani ({
    weight: '500',
    subsets: ['latin'],
  })
export default function Home() {
  return (
 <>
 
 
  <h2 >thi si shindi wnd</h2>
 
  <h2 className =' text-orange-200 text-3xl' class={roboto.className }> आज हम दखने की कैस्वे लिखा जाता है तो आये जानते हा किस वही आप लोग दकेह होअग की मिया मेरा तो brekup हो है 
  </h2>
 </>
  );
}
