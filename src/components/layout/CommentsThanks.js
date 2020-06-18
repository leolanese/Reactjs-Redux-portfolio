import React from 'react';

export const CommentsThanks = function(props) {
  return (
    <div className="Comment">
      <h3>Generic Technology Experience:</h3>
      <div className="container p-3 my-3 border wrapper-box">
        <p>{props.text}</p>
      </div>
      <div className="UserInfo"></div>
      <div className="Comment-text"></div>
    </div>
  );
}

export default CommentsThanks;
