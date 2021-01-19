import React, {useEffect} from 'react'
import io from 'socket.io-client';
import './Messenger.css'

let isTyping = document.getElementById("isTyping");
let chatroom = document.getElementById("chatroom");

const UserMessenger=({user, users})=> {
   

const socket = io('server');
    
    
    const sendMessage = () => {
        socket.emit('hello!');
      }
useEffect(() => {
      socket.on("new_message", (data) => {
        isTyping.innerText = "";
        let newMessage = document.createElement("p");
        newMessage.innerHTML = `<p><img id="avatarPhoto" height="30" src="${data.avatar}" alt=""> ${data.username}: ${data.message}</p>`;
        chatroom.prepend(newMessage);
        fetch("/chatroom", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            avatar: data.avatar,
            username: data.username,
            message: data.message,
          }),
        });
      });
      socket.on('new_message', (data) => {
        io.sockets.emit('new_message', {message: data.message, username: data.username, avatar: data.avatar})
      })
 
      

    return (
        <div>
           

            <h1>This is {user.name} Messenger</h1>
         

            <form action="POST">
    <input id="m" autocomplete="on" />
    <input type="text" id="avatar" hidden name="avatar" value= {user.avatar }/>
    <input type="text" hidden name="username" value={user.name} id="username"/>
    <input type="text" id="message"></input>
      <button onClick={ sendMessage }>Submit</button>
    </form>

        </div>
    )
}
)}
export default UserMessenger
