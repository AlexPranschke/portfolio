'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleSendRequest } from '../lib/handleSendRequest';
import config from '../../tailwind.config';

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const lcs = "";
  const ics = "rounded-md border-2 mb-6 h-12 bg-gradient-to-r from-gray-200 to-blue-200";
  const ics2 = "rounded-md border-2 mb-6 h-24 bg-gradient-to-r from-gray-200 to-blue-200";
  const bcs = "rounded-md border hover:bg-gray-300 active:bg-gray-400 mb-5";

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await handleSendRequest({ message, name, email });
      setMessage('');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };

  const randomPosition = () => ({
    x: typeof window !== 'undefined' ? (((Math.random() * (-1))-0.5)) * window.innerWidth : 0,
    y: typeof window !== 'undefined' ?(Math.random()-2) * window.innerHeight :0,
  });

  const setPosition = () => ({
    x:0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 + 400  :0 ,
  });

  const characterVariants = {
    hidden: { opacity: 0, x: randomPosition().x, y: randomPosition().y, rotate: Math.random() * 360 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
};

  useEffect(() => {
    setIsFormOpen(true);
  }, []);

  const transitionDuration = 1;
  const transitionDelayIncrement = 0.3;
  const formName = ['N', 'a', 'm', 'e', ':'];
  const formEmail = ['E', 'm', 'a', 'i','l',':'];
  const formMessage = ['M', 'e', 's', 's','a','g','e',':'];
  const buttonText = "Send Message";
  return (
    <AnimatePresence>
    <motion.div
            initial={setPosition() }
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 3, delay: transitionDelayIncrement * 1 }}
            className="min-w-fit w-[25%]  bg-gradient-to-r from-gray-500 to-gray-600 flex flex-row items-center justify-center border-[2px] bg-gray-100 border-gray-500 rounded-3xl"
           >
      
        {isFormOpen && (
          <motion.form
            onSubmit={handleSendMessage}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mt-[5%] w-[90%] right-[450px]      z-0 "
          >
            <motion.div
              className="flex flex-col w-full"
              initial={randomPosition()}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.3
               }}
               
              
            >
            
               <motion.div
      className="flex flex-"
      initial={randomPosition()}
      animate={{ x: 0, y: 0 }}
      transition={{ 
        duration: transitionDuration, 
        delay: transitionDelayIncrement * 2, 
        
      }}>
        {formName.map((char, index) => (
          <motion.p
            key={index}
            className=""
            
            initial="hidden"
            animate="visible"
            variants={characterVariants}
            transition={{
              duration: transitionDuration*3,
              delay: Math.random()/2 ,
          }}>
            {char}
          </motion.p>
        ))}
    </motion.div>


              {/* <motion.label
                htmlFor="name"
                className={lcs}
                initial={randomPosition()}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: transitionDuration, delay: transitionDelayIncrement * 2 }}
              >
                Name:
              </motion.label> */}
              <motion.input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={ics}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: transitionDuration, delay: transitionDelayIncrement * 1 }}
              />
              <motion.div
      className="flex flex-"
      initial={randomPosition()}
      animate={{ x: 0, y: 0 }}
      transition={{ 
        duration: transitionDuration, 
        delay: transitionDelayIncrement * 2, 
        
      }}>
        {formEmail.map((char, index) => (
          
            <motion.p
              key={index}
              className=""
              
              initial="hidden"
              animate="visible"
              variants={characterVariants}
              transition={{
                duration: transitionDuration*3,
                delay: Math.random()/2 ,
            }}>
              {char}
            </motion.p>
          ))}
    </motion.div>

    <motion.input
    
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: transitionDuration, delay: transitionDelayIncrement * 4 }}
              
                required
                className="rounded-md border-2 mb-6 h-12 bg-gradient-to-r from-gray-200 to-blue-200"
              />
               <motion.div
      className="flex flex-"
      initial={randomPosition()}
      animate={{ x: 0, y: 0 }}
      transition={{ 
        duration: transitionDuration, 
        delay: transitionDelayIncrement * 2, 
        
      }}>
        {formMessage.map((char, index) => (
          <motion.p
          key={index}
          className=""
          
          initial="hidden"
          animate="visible"
          variants={characterVariants}
          transition={{
              duration: transitionDuration*3,
              delay: Math.random()/2 ,
          }}>
          {char}
        </motion.p>
      ))}
    </motion.div>
              {/* <motion.label
                htmlFor="message"
                className="form-label"
                initial={randomPosition()}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: transitionDuration, delay: transitionDelayIncrement * 4 }}
              >
                Message:
              </motion.label> */}
              <motion.textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={ics2}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                
              
                transition={{ duration: transitionDuration, delay: transitionDelayIncrement * 5 }}
              ></motion.textarea>
             <button
                className="button "
                
                
            >
                {buttonText.split('').map((char, charIndex) => (
                    <motion.span
                        key={charIndex}
                        className="button-char"
                        initial="hidden"
                        animate="visible"
                        variants={characterVariants}
                        transition={{
                            duration: transitionDuration,
                            delay: transitionDelayIncrement * charIndex,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char} {/* Replace space with non-breaking space */}
                    </motion.span>
                ))}
            </button>
            </motion.div>
          </motion.form>
        )}
      
    </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
