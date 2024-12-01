"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToggleContextProvider } from "./context/toggleContextProvider";
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer";
import { BrowserRouter } from "react-router-dom";




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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >

        
        <ToggleContextProvider>
        <Sidebar/>
           <Navbar/>
        {children}
        <Footer/>
        </ToggleContextProvider>
        
      </body>
    </html>
  );
}
