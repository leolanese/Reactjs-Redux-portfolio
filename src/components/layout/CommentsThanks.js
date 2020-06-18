import React, { Component} from 'react';

export const CommentsThanks = function(props) {
  return (
    <div className="Comment">
      <div className="container p-3 my-3 border">

        <p>{props.text}</p>

      </div>
      <div className="UserInfo"></div>
      <div className="Comment-text"></div>
    </div>
  );
}

export default CommentsThanks;
