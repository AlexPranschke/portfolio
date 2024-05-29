'use client'

import React, { FormEvent, useState } from 'react';
import { handleSendRequest } from '../lib/handleSendRequest';
import config from '../../tailwind.config';

const ContactForm: React.FC = () => {

  const [message, setMessage] = useState(''),
        [name, setName] = useState(''),
        [email, setEmail] = useState('');

  const lcs = "";
  const ics = "rounded-md mb-6 h-12"
  const ics2 = "rounded-md mb-6 h-24"
  const bcs = "rounded-md  border hover:bg-gray-300 active:bg-gray-400"



  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();
    try {
      // Przekazujemy dane do handleSendRequest
      await handleSendRequest({ message, name, email });
      // Wyczyszczamy pola formularza po wysłaniu wiadomości
      setMessage('');
      setName('');
      setEmail('');
      console.log(lcs);
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };
  

  return (
    
    <form onSubmit={handleSendMessage} className=' max-w-[100%] min-w-[400px] ' >
      <div className='flex flex-col   '>
      <label htmlFor="name" className={lcs} >Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={ics}
      />
      <label htmlFor="email" className=''>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={ics}
      />
      
      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className={ics2}
      ></textarea>
      <button type="submit" className={bcs}>Send message</button>
      </div>
    </form>
    
    
  );
};

export default ContactForm;
