import React, { useRef,useState, useEffect } from 'react'
import Message from './Message'

import {db} from '../Firebase'
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessages from './SendMessages';

const style = {
    main: `flex flex-col p-[10px]`,
  };
  
  const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
  
    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <>
        <main className={style.main}>
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            
        </main>
        {/* Send Message Compoenent */}
    
        <SendMessages scroll={scroll} />
        <span ref={scroll}></span>
        
      </>
    );
  };
  
  export default Chat;