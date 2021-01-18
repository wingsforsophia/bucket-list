import React from 'react';

const PostMessage = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <div key={idx}>{postPart}</div>
        ))
      }
    </div>
  </div>
);

export default PostMessage;
