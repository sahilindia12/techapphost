import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";







export const metadata = {
  title: " कहानी खोया हुआ खजाना हिंदी कहानिया 20 story 2024 ",
  description: "  कहानी खोया हुआ खजाना हिंदी कहानिया 20 story 2024",
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
