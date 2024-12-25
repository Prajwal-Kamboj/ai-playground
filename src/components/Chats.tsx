'use client';

const Chat = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white p-4">
            <ul className="space-y-4">
                <li className="text-lg font-semibold">Basic GPT Chat 1</li>
                <li className="text-lg font-semibold">Basic GPT Chat 2</li>
                <li className="text-lg font-semibold">Basic GPT Chat 3</li>
                <li>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => console.log('Starting new chat...')}>
                        Start New Chat
                    </button>
                </li>


            </ul>
        </div>
    );
}

export default Chat;
