import React from 'react';
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <i class="bi bi-chat-fill"></i>
      <h3 className='infoBar'>You are currently in room {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><i class="bi bi-x-circle-fill"></i></a>
    </div>
  </div>
);

export default InfoBar;