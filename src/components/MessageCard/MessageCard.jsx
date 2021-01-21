import React from "react";


const MessageCard = (props) => {
  return (
    <>
      <h1>
        {props.content}-{props.postedBy}
      </h1>
      <br />
    </>
  );
};

export default MessageCard;
