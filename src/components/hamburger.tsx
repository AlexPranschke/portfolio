'use client'

import Link from 'next/link'
import { useEffect } from "react";
import { useState } from "react";
export default function Hamburger() {
const [isOpen, setIsOpen] = useState(false);


function isHamburgerOpen(){
    setIsOpen(!isOpen);
}

    return(
<>
        <button onClick={isHamburgerOpen}>otworz</button>
        <div style={{
            position: 'fixed',
            top: 0,
            right: isOpen ? 0 : '-200px',
            width: '200px',
            height: '100%',
            backgroundColor: 'lightgrey',
            transition: 'right 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1em',
          }}>
            <button onClick={isHamburgerOpen}>zamknij</button>
            <Link href="/skills">Skills</Link>
            
            <Link href="/projects">Projects</Link>
            <a href="#">Menu Item 3</a>
            <a href="#">Menu Item 4</a>
          </div>
          </>
    );
}