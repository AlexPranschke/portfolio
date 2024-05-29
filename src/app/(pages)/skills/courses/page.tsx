import React from "react";
import Tail from "@/styles/styles";
export default function Courses(){


    const wesbos = [
        'Beginner JavaScript',
        'React For Beginners',
        'Master Gatsby',
        'Fullstack Advanced React and GraphQL',
        'Learn Redux'

    ];

    const udemy =[
        'Alpine JS Vs.3 for Beginners',
        'Tailwind CSS - a new way to > THINK < CSS'
    ]

    return(
        

       
<>
        <div className=" justify-center gap-10 items-center flex flex-col g-2 p-2 ">
            <h1 className={Tail.hcs}>
                I have learned those:
            </h1>
            <h2 className={Tail.h2cs}>
                wesbos.com
            </h2>
            <ul className="space-y-5 text-center">
            {wesbos.map((cwesbos, index) => (
        <li key={index} className="block">{cwesbos}</li>
      ))}
    </ul>
            <h2 className={Tail.h2cs}>
                udemy.com
            </h2>
            <ul className="space-y-5 ">
            {udemy.map((cudemy, index) => (
        <li key={index} className="block">{cudemy}</li>
      ))}
    </ul>
        </div>





</>




    );
}