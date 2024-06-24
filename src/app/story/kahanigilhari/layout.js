import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";







export const metadata = {
  title: " गिलहरी और प्यासा पक्षी  हिंदी कहानिया 55+ best hindi story 2024 ",
  description: "  गिलहरी और प्यासा पक्षी  हिंदी कहानिया 55+ best hindi story 2024 ",
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
