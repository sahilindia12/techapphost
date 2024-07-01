import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";


export const metadata = {
  title: " How to add existing folder to GitHub repository 2024",


  description: " how to add a folder to github repository  git command exiting folder upload to github server"



};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
 <Navbar/>
       <div className=" mx-4"> 
       {children}
       </div>
        
       
        </body>
    </html>
  );
}
