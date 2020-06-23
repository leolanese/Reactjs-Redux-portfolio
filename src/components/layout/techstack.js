import React from 'react';

export const TechStach = function(props) {
  return (
    <div>
      <div className="container p-3 my-3 border wrapper-box">
          <h3>ReactJS Experience:</h3>
          <ul>
              <li>
                <a href="https://github.com/leolanese/reactjs-redux-portfolio" title="Check the ReactJS code" target="_blank">Check the Github Portfolio ReactJS source code</a>
              </li>
              <li>
                <a href="https://github.com/search?q=user%3Aleolanese+react" title="Some other interesting ReactJS projects" target="_blank">Some other ReactJS projects</a>
              </li>
              <li>
                React tooling: Jest, Storybook, React-formik, Yup, RBX, Axios, etc.
              </li>
          </ul>

          <h3>Angular Experience:</h3>
          <ul>
              <li>
                <a href="https://github.com/leolanese/Angular-Profile" title="Check the Angular code target="_blank>Check the Github Porfolio Angular source code</a>
              </li>
              <li>
                <a href="https://github.com/leolanese?tab=repositories&q=angular&type=&language=" title="Some other interesting Angular projects" target="_blank">Some other Angular projects</a>
              </li>
              <li>
                <a href="http://www.leolanese.com/portfolio_angular/index.html" target="_blank">Angular Portfolio DEMO</a>
              </li>
              <li>
                Angular tooling: Redux @ngrx, TypeScript, RxJS, Angular Material, CDK, Karma/Jasmine, etc.
              </li>
          </ul>
        </div>
    </div>
    );
}

export default TechStach;