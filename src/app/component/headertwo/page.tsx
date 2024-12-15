"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";


export default function Navbartwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-xl ">Avion</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 ml-">
            <Link href="/">
            <li className="block px-2 py-2 text-sm hover:underline" >Home</li> 
            </Link>
            <Link href="/about">
            <li className="block px-2 py-2 text-sm hover:underline" >About </li> 
            </Link>
            <Link href="/singup">
            <li className="block px-2  py-2 text-sm hover:underline">Blogs</li> 
            </Link>
            <div className="flex gap-4 justify-center items-center">
            <Image src={"/image copy.png"} alt=""width={40} height={10}></Image>
            <Image src={"/image copy 2.png"} alt=""width={30} height={8}></Image>
           
            </div>
         <div className="flex gap-3 items-center w-10 ">
        
        

         </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-2 items-center md:hidden">
          <Link href="" className="text-2xl">
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none 5xl:" >
                <Image src={"/Right Actions.png"} alt=""width={52} height={16}></Image>
              

            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-300">
          <Link href="/"> <h1 className="font-bold px-4 underline ">Home</h1></Link>
          <Link href="/about">
          <li className="block px-4 py-2 hover:underline" >About</li> 
          </Link>
          
          <Link href="/singup">
            <li className="block px-4 py-2 hover:underline" >Blogs</li> 
          </Link>
          <Link href="/myblogs">
            <li className="block px-4 py-2 hover:underline" >Signup</li> 
          </Link>
          
          <h1 className="font-bold px-4">All products</h1>
          <Link href="/whislist">
          <li className="block px-4 py-2 hover:underline" >product listing</li> 
          </Link>
          <Link href="/blogshome">
          <li className="block px-4 py-2 hover:underline" >Your Shoping Card</li> 
          </Link>
         
        </div>
      )}
    </nav>
  );
}
