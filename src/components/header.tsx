'use client'

import { useState } from "react";
import Hamburger from "./hamburger";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
  <>
  <div className="flex justify-end border-b-2 shadow-md h-20 ">

    
    
    <Hamburger></Hamburger>
</div>
  </>



  );
}
