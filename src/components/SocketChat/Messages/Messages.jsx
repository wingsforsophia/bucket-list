import { MessageSharp } from '@material-ui/icons';
import React from 'react';
import './Messages.css';


const Message = ({messages: user, name, messages}) => {
  let isSentByCurrentUser = false;

 
  if (name) {
    isSentByCurrentUser = true;
  }

  return (
    <>
   <h2>Conversation: {name.name} & {!name.name} </h2>
    
   {isSentByCurrentUser ? ( 
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{messages}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{name.name}</p>
        </div>
      </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{messages}</p>
          </div>
          <p className="sentText pl-10 ">{name.name}</p>
        </div>
      )} </>
);
}
       

export default Message;