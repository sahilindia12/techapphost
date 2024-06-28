import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";


export const metadata = {
  title: " Next js 14  deploy after refresh page not found react 2024 ",

  description: " next js refresh page without reload  router.refresh not working nextjs"



};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
 <Navbar/>
        {children}
        
       
        </body>
    </html>
  );
}
