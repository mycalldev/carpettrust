import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
// import Footer from './components/Footer'


const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Carpet Trust",
  description: "Floor Covering Specialists",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
     <head>
     </head>
     <body className={roboto.className}>
       <Navbar />
       {children}
       {/* <Footer /> */}
     </body>
   </html>
  );
}
