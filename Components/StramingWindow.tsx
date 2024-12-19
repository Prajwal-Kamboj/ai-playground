'use client';

import {useChat} from "@ai-sdk/react";

const StreamingWindow = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div className="message-container">
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.role}`}>
                        <strong>{message.role === 'user' ? 'You:' : 'AI:'}</strong> {message.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    className="input-prompt w-full p-2 border border-gray-400 bg-gray-800 text-white"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default StreamingWindow;
