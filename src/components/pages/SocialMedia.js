import React from "react";

import { CommentsThanks } from "./../layout/CommentsThanks";
import { about_media } from "./../content/brief";

import { Title } from './../layout/title';
import { SubTitle } from './../layout/subtitle';

export default () => {
  return (
    <div>
      <Title></Title>
      <SubTitle></SubTitle>

      <CommentsThanks
        text={about_media.text}
      />

    <div class="container p-3 my-3 border">
      <h3>ReactJS Experience:</h3>
      <ul>
          <li>
            <a href="https://github.com/leolanese/reactjs-redux-portfolio" title="Check the ReactJS code">Check the Github ReactJS source code</a>
          </li>
          <li>
            <a href="https://github.com/search?q=user%3Aleolanese+react" title="Some other interesting ReactJS projects">Some other ReactJS projects</a>
          </li>
          <li>
            <a href="https://www.leolanese.com/portfolio_react/index.html">DEMO</a>
          </li>
      </ul>
      <h3>Angular Experience:</h3>
      <ul>
          <li>
            <a href="https://github.com/leolanese/Angular-Profile" title="Check the ReactJS code">Check the Github Angular source code</a>
          </li>
          <li>
            <a href="https://github.com/leolanese?tab=repositories&q=angular&type=&language=" title="Some other interesting ReactJS projects">Some other Angular projects</a>
          </li>
          <li>
            <a href="https://www.leolanese.com/portfolio_angular/index.html">DEMO</a>
          </li>
      </ul>
    </div>
  </div>
  );
};
