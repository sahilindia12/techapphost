import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";







export const metadata = {
  title: " Top 10 हिंदी कहानिया  in Hindi hindi story 2024 Top 10 हींदी  stories in hindi for students ",
  description: " 55+Top 10 हिंदी कहानिया  in Hindi hindi story 2024 Top 10 हींदी  stories in hindi hindi story 2024 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
<Navbar/>
        {children}
        

       
        </body>
    </html>
  );
}
