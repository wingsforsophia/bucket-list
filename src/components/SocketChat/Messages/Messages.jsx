import React from 'react';
import './Messages.css';


const Message = ({messages: user, name, messages}) => {
  let isSentByCurrentUser = false;

 
  if (user) {
    isSentByCurrentUser = true;
  }

  return (
    <>
   <h2>Conversation: </h2>
    
   {isSentByCurrentUser ? ( 
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{messages}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{user.name}</p>
        </div>
      </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{messages}</p>
          </div>
          <p className="sentText pl-10 ">{user.name}</p>
        </div>
      )} </>
);
}
       

export default Message;