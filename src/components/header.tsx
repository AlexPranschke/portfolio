'use client'

import { useState } from "react";
import Hamburger from "./hamburger";
export default function Header() {
  

  return (
  <>
  
  

  
  <div className="flex flex-row border-b-2 shadow-md h-[15%] place-items-center p-2 z-50">
 
  
 
  <p className="ml-60">Github : https://github.com/AlexPranschke/</p>
  <div className="ml-auto mt-3 mr-2">
    <Hamburger />
  </div>
</div>

  </>



  );
}
