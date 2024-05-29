// src/lib/handleSendRequest.ts
export const handleSendRequest = async (data: { message: string, email:string, name:string }) => {
    const response = await fetch('/api/functionSendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  
    return response.json();
  };
  