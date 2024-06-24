import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";







export const metadata = {
  title: "हिंदी कहानिया 55+ 😊😉 प्रतीक्षा का फल हिंदी कहानिया hindi best story new 2024  ",
  description: "  हिंदी कहानिया 55+ 😊😉 प्रतीक्षा का फल हिंदी कहानिया hindi best story new 2024 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
<Navbar/>
        {children}
        

       <Foter/>
        </body>
    </html>
  );
}
