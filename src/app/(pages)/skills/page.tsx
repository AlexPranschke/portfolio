import Link from "next/link";
import React from "react";
import Carousel from "@/components/carousel";

export default function Skills(){

    const hcs = "text-3xl m-6";

    const stacks = [
        'HTML/CSS/JS',
        'React',
        'Gatsby',
        'NextJS',
        'Tailwind',
        'Sanity',
        'Redux',
        'Alpine',
        'SQL',
        'GraphQL',
        'C/C++',
        'Embedded C'
      ];

      const skills = [
        'Skill1',
        'skills2',
        'skill1',
        'skills2','skill1',
        'skills2','skill1',
        'skills2','skill1',
        'skills2'

      ];
      

    return(
<>

    <div className="flex flex-row justify-center p-2 gap-y-5 gap-x-64 ml-[20%] mr-[80%] min-w-max ">
    
        <div className="flex-col  ">
        
            <h1 className={hcs}>
                Stack 
            </h1>
            <ul className="space-y-5">
            {stacks.map((stack, index) => (
        <li key={index} className="block">{stack}</li>
      ))}
    </ul>
        </div>
        <div className="flex-col  ">
            <h1 className={hcs}>
                Skills  
            </h1>
            <ul className="space-y-5">
            {skills.map((skill, index) => (
        <li key={index} className="block">{skill}</li>
      ))}
    </ul>
        </div>
        
       
        
        
    </div>
    




</>
    );
}