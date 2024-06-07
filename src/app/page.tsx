import React from "react";
import Image from "next/image";
import bracketIcon from "../shared/bracket-curly-svgrepo-com(1).svg";
import reverseBracketIcon from "../shared/bracket-curly-svgrepo-com(2).svg";
import ScrollNavigator from "@/components/ScrollNavigator";
import { motion, AnimatePresence } from 'framer-motion';
import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/contactForm";

export default function About() {
    const experiences = [
        ['1 year experience as front-end developer'],
        ['2 years experience as automation technician'],
        ['Graduate with an Engineering degree in Automation', 'and Robotics from the Gdańsk University of Technology.']
    ];

    const exp1 = ['1 year experience as front-end developer'];
    const exp2 = ['2 years experience as automation technician'];
    const exp3 = ['Graduate with an Engineering degree in Automation', 'and Robotics from the Gdańsk University of Technology.'];

    return (
        <>
            <AboutMe/>
            
        </>
    );
}
