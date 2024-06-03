import React from "react";
import Image from "next/image";
import bracketIcon from "../shared/bracket-curly-svgrepo-com(1).svg"
import reverseBracketIcon from "../shared/bracket-curly-svgrepo-com(2).svg"
export default function About(){
    return(
<>
        <div className=" flex  flex-row justify-center items-center ">
        <div className=" mt-auto translate-y-48 flex-col g-2 p-2 ">
            
       
            
        </div>
        <div className=" justify-center items-center flex flex-col g-2 p-2  ">
       
            <ul className="text-3xl mt-32 space-y-32  ">
              <li className="p-2 border-gray-500 shadow-2xl">1 year experience as front-end developer</li >
              <li className="p-2 border-gray-500 shadow-2xl">2 years experience as automation technician</li>
              <li className="p-2  border-gray-500 shadow-2xl">Graduate with an Engineering degree in Automation<br></br> and Robotics from the Gdańsk University of Technology.</li>
            </ul>
          

        </div>
        <div className=" mb-auto translate-y-[-10] flex-col g-2 p-2 ">
            
        
            
        </div>
        </div>




</>




    );
}