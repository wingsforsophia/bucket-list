import React, { useState } from "react";
import queryString from 'query-string';
import useMessengerService from '../../useMessengerService'
import Messages from '../../components/SocketChat/MessageList/Messages/Messages';
import InfoBar from '../../components/SocketChat/MessageList/InfoBar/InforBar';

import './Messenger.css';



let socket;
const Messenger = ({ user, chatbox }) => {
  const [name, setName] = useState(user);
  const [room, setRoom] = ('chat');
  const {sentMessages, sendMessage} = useMessengerService(chatbox);
  const [messages, setNewMessages] = useState('');


  const handleNewMessage=(event)=>{
    setNewMessages(event.target.value)
    
    
  }
  console.log(setNewMessages)

  const handleSendMessage = () => {
    sendMessage(messages)
    setNewMessages('')
  }
  console.log(handleSendMessage)
  
  console.log(name)
  console.log(messages)
  console.log(sentMessages)
  console.log(chatbox)

  return (

    <div>
  
    <h1>Messenger: {user.name} <i>is online</i></h1>
    <InfoBar room={room} />
    <br/>
      <Messages messages={messages}  name={user}/>
    
    
    
    <br/>
    <input type="text" id="avatar" hidden name="avatar" value= {user.avatar }/>
<input type="text"  hidden name="username" value={user.name} id="username"/>
<input type="text" onChange={handleNewMessage} value={messages} className='messenger' id="message"  placeholder='Send a message...'

/>
<button onClick={ handleSendMessage }>Submit</button>


</div>
  );
  
}



export default Messenger;