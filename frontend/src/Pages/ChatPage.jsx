import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
    const [chats,setChats] = useState([]);

    const fetchChats = async() => {
        const {data} = await axios.get('/api/chat'); // destructuring for getting data only
        setChats(data);
    }
    // calls for the first time when it renders
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
        {chats.map((chat)=>{
            return <div key={chat._id}>{chat.chatName}</div>
        })}
    </div>
  )
}

export default ChatPage;