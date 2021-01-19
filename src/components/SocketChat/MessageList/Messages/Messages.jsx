import React from 'react';
import './Messages.css';


const Message = ({name, user, messages} ) => {
  let isSentByCurrentUser = false;

//   const trimmedName = name.trim().toLowerCase();

  if (user) {
    isSentByCurrentUser = true;
  }

  return (

        <div>
          <h1> Conversation </h1>
          <div>
            <ul>
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.sentByCurrentUser ? "my-message" : "received-message"
                  }`}
                >
                  {user}: 
                  {message}
                  
                </li>
              ))}
            </ul>
         
</div>
</div>

        );
        
}

export default Message;