import React, { useState } from "react";
import queryString from 'query-string';
import useMessengerService from '../../useMessengerService'
import Messages from '../../components/SocketChat/Messages/Messages';
import InfoBar from '../../components/SocketChat/InfoBar/InfoBar';

import './Messenger.css';


const Messenger = ({ chat, user, chatbox }) => {
  const [name, setName] = useState(user);
  const [room, setRoom] = ('chat');
  const {messages, sendMessage} = useMessengerService(chatbox);
  const [aMessage, setNewMessages] = useState('');


  const handleNewMessage=(event)=>{
    setNewMessages(event.target.value)
    
  }


  const handleSendMessage = () => {
    sendMessage(aMessage)
    setNewMessages('')
  }
 
  
  
  console.log(sendMessage)
 console.log(chat)


  return (
  
    <>
    <div>
     <h1>Messenger: {user.name} <i>is online </i></h1>
   <InfoBar room={room} />
    <br/>
    <Messages messages={chat}   name={user} idx={user._id}/>  

    
    <br/>
    <input type="text" id="avatar" hidden name="avatar" value= {user.avatar }/>
<input type="text"  hidden name="username" value={user.name} id="username"/>
<input type="text" onChange={handleNewMessage} value={aMessage} className='messenger' id="message"  placeholder='Send a message...'

/>
<button onClick={ handleSendMessage }>Submit</button>


</div>
</>
 );
  
}



export default Messenger;