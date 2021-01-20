import React, { Component } from "react";
import "./MessageBoard.css";
import MessageSearch from '../../components/MessageSearch/MessageSearch'
import {getMessagesByCategory} from '../../services/api-calls'

class MessageBoard extends Component {
  state = {
    messages: [],
  };
  componentDidMount

  render() {
    return (
      <div>
        <MessageSearch />
        {this.messages}
      </div>
    );
  }
}

export default MessageBoard;
