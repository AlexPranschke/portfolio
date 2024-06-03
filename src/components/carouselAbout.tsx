import { motion } from "framer-motion";
import React from "react";

export default function CarouselAbout() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-3xl mt-32 space-y-32  ">
          <li className="p-2 border-gray-500 shadow-2xl">1 year experience as front-end developer</li>
          <li className="p-2 border-gray-500 shadow-2xl">2 years experience as automation technician</li>
          <li className="p-2 border-gray-500 shadow-2xl">Graduate with an Engineering degree in Automation<br /> and Robotics from the Gdańsk University of Technology.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-3xl mt-32 space-y-32  ">
          <li className="p-2 border-gray-500 shadow-2xl">str2 element1</li>
          <li className="p-2 border-gray-500 shadow-2xl">str2 element2</li>
          <li className="p-2 border-gray-500 shadow-2xl">str3 element3<br /> and Robotics from the Gdańsk University of Technology.</li>
        </ul>
      </motion.div>
    </div>
  );
}