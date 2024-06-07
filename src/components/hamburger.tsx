'use client'

import Link from 'next/link';
import Image from 'next/image';
import hamburgerIcon from '../shared/hamburger-menu-svgrepo-com.svg';
import closeIcon from '../shared/close-svgrepo-com.svg'
import { useState } from "react";
export default function Hamburger() {
const [isOpen, setIsOpen] = useState(false);
const [activeItem, setActiveItem] = useState(null);
const handleItemClick = (index:any) => {
  setActiveItem(index);
 console.log(activeItem);
};

function isHamburgerOpen(){
    setIsOpen(!isOpen);
}
const navItems = [
  { name: 'About', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Courses', path: '/skills/courses' },
  { name: 'Examples', path: '/examples' },
  { name: 'Contact', path: '/contact' }
];
    return(
<>
        <button onClick={isHamburgerOpen}> <Image
        src={hamburgerIcon} // Ścieżka do obrazu
        alt="Opis obrazu"
        width={40} // Szerokość obrazu
        height={40} // Wysokość obrazu
      /></button>
        <div className='z-40' style={{
            position: 'fixed',
            top: 0,
            right: isOpen ? 0 : '-400px',
            width: '400px',
            height: '100%',
            backgroundColor: 'darkgrey',
            transition: 'right 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1em',
          }}>
            <button className='ml-auto p-2 mb-8' onClick={isHamburgerOpen}> <Image
              src={closeIcon} // Ścieżka do obrazu
              alt="Opis obrazu"
              width={30} // Szerokość obrazu
              height={30} // Wysokość obrazu
            /></button>
         <ul className='flex flex-col text-2xl gap-8 w-full text-justify-'>
      
      {navItems.map((item, index) => (
        <li key={index} className={`hover:bg-gray-200 active:bg-gray-400 rounded-md ${
          activeItem === index ? 'text-gray-300' : ''
        }`}>
          <Link href={item.path} className='block p-2 w-full border-b-2  hover:border-none' onClick={()=>handleItemClick(index)}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
          </div>

          </>
    );
}