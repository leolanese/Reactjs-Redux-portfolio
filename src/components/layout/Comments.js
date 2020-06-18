import React, { Component} from 'react';

export const Comment = function(props) {
  return (
    <div className="Comment">
      <div className="container p-3 my-3 border">
        <span>
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <h1 className="UserInfo-name">{props.author.name}</h1>
        </span>
        <p>{props.text}</p>
        <p>{props.extraText}</p>
      </div>
      <div className="UserInfo"></div>
      <div className="Comment-text"></div>
    </div>
  );
}

export default Comment;
