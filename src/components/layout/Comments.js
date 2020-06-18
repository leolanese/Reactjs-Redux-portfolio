import React from 'react';

export const Comment = function(props) {
  return (
    <div className="comment">
      <div className="container p-3 my-3 border wrapper-box">
        <div class="card text-center">
          <div class="card-header">
            <img
                className="avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
              />
          </div>
          <div class="card-body">
            <h5 class="card-title">{props.author.name}</h5>
            <p class="card-text">{props.text}{props.extraText}</p>
            <a href="mailto:developer@leolanese.com" class="btn btn-primary">Contact me!</a>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Comment;
