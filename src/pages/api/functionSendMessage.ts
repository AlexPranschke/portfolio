// src/pages/api/send-message.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const functionSendMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message, name, email } = req.body;

    // Handle the message (e.g., save to a database or send an email)
    console.log('Received message:', message);
    console.log('Sender name:', name);
    console.log('Sender email:', email);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default functionSendMessage;
