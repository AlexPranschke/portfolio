import React from "react";
import Link from "next/link";
import Carousel from "@/components/carousel";
import ScrollNavigator from "@/components/ScrollNavigator";


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
<ScrollNavigator />
<div className="  ml-20">

            <h1>
                Examples
            
            </h1>
            <Carousel itemsPerPage={4}>
                <div className="">
                    test
                </div>
                <div>
                    test2
                </div>
                <div>
                    test3
                </div>
                <div className="">
                    test4
                </div>
                <div>
                    test5ea
                </div>
                <div>
                    test6
                </div>
            
            </Carousel>
        </div>
        




</>
    );
}