import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleMessageSubmit = async () => {
        if (inputMessage.trim() === '') return;

        const newMessages = [...messages, { role: 'user', content: inputMessage }];
        setMessages(newMessages);
        setInputMessage('');

        try {
            const response = await axios.post('http://localhost:3000/chat', { messages: newMessages });

            const botReply = response.data.message.content;
            
            setMessages([...newMessages, { role: 'bot', content: botReply }]);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={message.role === 'user' ? 'user-message' : 'bot-message'}>
                        {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleMessageSubmit}>Send</button>
        </div>
    )
}

export default Test