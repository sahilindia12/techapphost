import Foter from "@/app/head/Footer";
import Navbar from "@/app/head/Nav";







export const metadata = {
  title: "  लड़कियों के लिए बेवफा शायरी दर्द भरी बेवफा शायरी इन हिंदी 50+ शायरी 2024 ",
  description: "लड़कियों के लिए बेवफा शायरी दर्द भरी बेवफा शायरी इन हिंदी 50+ शायरी 2024",
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
