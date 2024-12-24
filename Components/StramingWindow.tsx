'use client';

import {useChat} from "ai/react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const StreamingWindow = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div className="message-container flex flex-col h-full p-6 justify-between"
             style={
            { justifyContent:'space-between', paddingLeft:'8rem', paddingRight:'8rem', marginTop: '4rem'}
        }
        >
            <div className="flex mb-10" style={{  padding:'1rem', borderRadius:'1rem'}}>
                <div className="messages">
                    {messages.map((message) => (
                        <div key={message.id} className={`message ${message.role}`}>
                            <strong>{message.role === 'user' ? 'You:' : 'AI:'}</strong> {message.content}
                        </div>
                    ))}
                </div>
            </div>

            <div className="ml-3 mr-3 w-full align-bottom" style={{marginBottom:'2rem'}}>
                <form onSubmit={handleSubmit} className="form-container flex gap-2 w-full items-center">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask AI"
                        className="w-full"
                        // style={{height:'4rem', fontSize:'1.5rem', padding:'1rem'}}
                    />
                    {/*<Button type="submit">Send</Button>*/}
                </form>
            </div>


        </div>
    );
};

export default StreamingWindow;
