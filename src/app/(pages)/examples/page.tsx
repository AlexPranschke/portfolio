import React from "react";
import Link from "next/link";

const navItems = [
    { name: 'JS', path: '/' },
    { name: 'React', path: '/skills' },
    { name: 'Tailwind', path: '/projects' },
    { name: 'NextJS', path: '/skills/courses' },
    { name: 'Examples', path: '/examples' },
    { name: 'Contact', path: '/contact' }
  ];


export default function Examples(){
    return(
<>
        <div className=" justify-center items-center flex flex-col g-2 p-2 w-max">
            <h1>
                Examples
            
            </h1>
            <Link href="/">test</Link>
        </div>





</>
    );
}