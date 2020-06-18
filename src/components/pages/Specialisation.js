import React from 'react';

import { CommentsThanks } from "./../layout/CommentsThanks";
import { about_media } from "./../content/brief";
import { Title } from './../layout/title';
import { SubTitle } from './../layout/subtitle';
import { TechStach } from "./../layout/techstack";

export const Specialisation = function(props) {
  return (
    <div className="Comment">
      <Title></Title>
      <SubTitle></SubTitle>
      <div className="container p-3 my-3 border wrapper-box">
        <TechStach />
        <CommentsThanks
          text={about_media.text}
        />
      </div>
    </div>
    );
}

export default Specialisation;