import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import authService from './services/authService'

const SOCKET_SERVER_URL = "http://localhost:3001";
const newMessageEvent = "receiveMessage";

const useMessengerService = (chatbox) => {
  const [messages, setMessage] = useState([]);
  const socketRef = useRef();
  
  const d = new Date()
 
  useEffect(() => {
    let user = authService.getUser()

    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { chatbox: chatbox, user: user.name, timestamp: true, avatar: user._avatar, user: user._id},
    });

    socketRef.current.on(newMessageEvent, (message) => {
      const incomingMessage = {
        ...message,
        sentByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessage((messages) => [...messages, incomingMessage]);
    });

    socketRef.current.on('disconnect', (data) => {
      console.log('Unable to connect, please check connection');
    });


    return () => {
      socketRef.current.disconnect();
    };
  }, [chatbox]);

  const sendMessage = (messageBody) => {
    let user = authService.getUser()
    socketRef.current.emit(newMessageEvent, {
      body: messageBody,
      senderId: socketRef.current.id,
      userId: user._id,
      avatar: user._avatar,
      name: user.name,
      timestamp: d.toUTCString()
      
    });
  };

  return { messages, sendMessage };



};

export default useMessengerService;