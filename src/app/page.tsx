import StreamingWindow from "../../Components/StramingWindow";
import Chat from "../../Components/Chats";
export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <header style={{
                backgroundColor: '#4a90e2',
                color: 'white',
                padding: '15px',
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                Prajwal's GPT
            </header>
            <div style={{display: 'flex', flex: 1}}>
                <div style={{flex: 3}}>
                    <Chat/>
                </div>
                <div style={{width: '1px', backgroundColor: 'white'}}></div>
                <div style={{flex: 7}}>
                    <StreamingWindow/>
                </div>
            </div>
        </div>
    );
}


