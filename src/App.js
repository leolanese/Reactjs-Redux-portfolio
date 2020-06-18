import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";

import About from "./components/pages/About";
import SocialMedia from "./components/pages/SocialMedia";
import NotFound from "./components/pages/NotFound";
import Specialisation from "./components/pages/Specialisation"

import { about } from "./components/content/brief";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Comment } from "./components/layout/Comments";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header
              title="Portfolio - Leo Lanese"
              />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/specialisation" component={Specialisation} />
                <Route path="/socialMedia" component={SocialMedia} />
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
