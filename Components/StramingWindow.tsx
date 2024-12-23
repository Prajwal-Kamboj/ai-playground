'use client';

import {useChat} from "@ai-sdk/react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const StreamingWindow = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div className="message-container flex">
            <div className="flex">
                <div className="messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.role}`}>
                            <strong>{message.role === 'user' ? 'You:' : 'AI:'}</strong> {message.content}
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit} className="form-container flex gap-2">
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type in a prompt"
                    className="w-full"
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
};

export default StreamingWindow;
