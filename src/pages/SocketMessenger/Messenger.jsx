import React, { useState } from "react";
import queryString from 'query-string';
import useMessengerService from '../../useMessengerService'

import Messages from '../../components/SocketChat/MessageList/Messages/Messages';
import InfoBar from '../../components/SocketChat/MessageList/InfoBar/InforBar';

import './Messenger.css';


let socket;
const Messenger = ({ user, chatbox }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = ('chat');
  const {messages, sendMessage} = useMessengerService('chatbox');
  const [receiveMessage, setNewMessages] = useState('');


  const handleSendMessage = () => {
    sendMessage(receiveMessage)
    setNewMessages('')
  }

  const handleNewMessage=(event)=>{
    setNewMessages(event.target.value)
    
  }
  return (

    <div>
  
    <h1>Messenger: {user.name} </h1>
    <InfoBar room={room} />
    <Messages messages={messages} name={user}/>
    
    <br/>
    <input type="text" id="avatar" hidden name="avatar" value= {user.avatar }/>
<input type="text"  hidden name="username" value={user.name} id="username"/>
<input type="text" onChange={handleNewMessage} receiveMessage={receiveMessage} className='messenger' id="message" placeholder='Send a message...'
/>
<button onClick={ handleSendMessage }>Submit</button>


</div>
  );
  
}



export default Messenger;