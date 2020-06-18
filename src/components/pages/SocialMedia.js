import React from "react";

import { CommentsThanks } from "./../layout/CommentsThanks";
import { about_media } from "./../content/brief";

export default () => {
  return (
    <div>
    <div>
      <h1 className="display-4">Portfolio - Leo Lanese</h1>
      <p className="lead">ReactJS + Redux </p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>

    <div>
      <label>Check the ReactJS code at:</label>
      <img src="https://github.com/leolanese/reactjs-redux-portfolio" />
    </div>
    <div>
      <label>Check the ReactJS code at:</label>
      <img src="https://github.com/leolanese/reactjs-redux-portfolio" />
    </div>

    <CommentsThanks
      text={about_media.text}
    />

   </div>
  );
};
