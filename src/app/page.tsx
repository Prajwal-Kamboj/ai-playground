import StreamingWindow from "../../Components/StramingWindow";
import Chat from "../../Components/Chats";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <header className="opacity-60 font-semibold text-2xl p-4">
                Sentient Foundation Assignment
            </header>
            <div className=" flex-grow flex gap-8 p-4 justify-center items-center">
                <div className="flex-grow">
                    <StreamingWindow />
                </div>
            </div>
        </div>
    );
}
