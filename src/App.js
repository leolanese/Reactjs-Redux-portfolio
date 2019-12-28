import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContactAction from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { Provider } from "react-redux";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Comment(props) {
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

const about = {
  text:
    "I'm a passionately curious Front-end Engineer. Coding better code for a better world. London, UK.",
  extraText:
    "I have been working in different countries for several clients as a Software Engineer with Front-end focus but also Back-end using: Angular 4/6/7/8, AngularJS, ReactJS, Svelte, ContextAPI/Redux:@ngrx, react-redux/redux-thunk, IP/OOP/Functional Programming/Reactive Functional Programming, javaScript/ES6+/TS, Callback/ Promise/ Observable, RxJS, Responsive Web Design, Mobile First, CSS/SASS, Angular Material 2/CDK, HTML5, Web/Mobile usability and accessibility. Sonar. Karma/Jasmine/Jest, GIT, CI/CD, Jenkins, GitLab. Using architectures Monolithic/Micro-frontends. Using backend technologies: RestAPI, Java(JSP), Python 3+, PHP and data-bases: PouchDB, MongoDB and MySQL. These have been the main roles I have fulfilled during this time, also combined with smaller freelance commercial and personal projects.",
  author: {
    name: "UI Software Engineer",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/461911767384616961/qNMRa7-w_normal.jpeg"
  }
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="About - Leo Lanese" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContactAction} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
            ,
            <Comment
              text={about.text}
              extraText={about.extraText}
              author={about.author}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
