"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { toggleContext, ToggleContextProvider } from "./context/toggleContextProvider";
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer";
import { BrowserRouter } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useContext } from "react";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children,navbarHidden }) {
  const router=useRouter()
  // const { cart }=useContext(toggleContext)
  const handleCart=()=>{
    router.push("/category/productDetails/checkout")
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden  `}
      >

        
        <ToggleContextProvider>
        <Sidebar/>
           <Navbar/>
        {children}
        <div className={" fixed text-[white] bg-[red] h-[40px] w-[150px] rounded-[10px] flex items-center justify-center bottom-10 right-10 "}>
            <button onClick={handleCart}>
              Go to the Cart
            </button>
        </div>
        <Footer/>
        </ToggleContextProvider>
        
      </body>
    </html>
  );
}
