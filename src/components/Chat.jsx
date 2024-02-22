import React, { useEffect, useState } from 'react'
import { addDoc, collection,onSnapshot,orderBy,query,serverTimestamp, where } from 'firebase/firestore'
import { auth,db } from '../firebase-config'

const Chat = ({room}) => {

  const [newMessage,setnewMessage]=useState("")
  const [messages,setMessages]=useState([]);

  const messagesRef=collection(db,"messages");

  useEffect(()=>{
    const querymessages=query(messagesRef, where("room","==",room),orderBy("createdAt"))
    const unsub=onSnapshot(querymessages,(sanp)=>{
      let messages=[];
      sanp.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id});
      });
      setMessages(messages);

    });
    return ()=>unsub();
  },[]);

const handleSubmit=async(e)=>{
  e.preventDefault();
  if(newMessage==="")return;


  await addDoc(messagesRef,{
    text:newMessage,
    createdAt:serverTimestamp(),
    user:auth.currentUser.displayName,
    room:room
  });
  setnewMessage("")
}

  return (
    <>
    <div className='header'>
      <h1 className='' >Welcome to Room : {room.toUpperCase()}</h1>
    </div>
    <div>{messages.map((message)=>
      <h1 key={messages.id}><span className=' text-2xl font-bold'>{message.user}</span>  :{message.text}</h1>)}</div>
    <form onSubmit={handleSubmit} className='new-message-form'>
    <input type="text" className='' placeholder='Type Your Message Here !!' onChange={(e)=>setnewMessage(e.target.value)} value={newMessage} />
    <button className='' type='submit'>Send</button>
    </form>
    </>
  )
}

export default Chat