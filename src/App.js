import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";
import AddContactAction from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import SocialMedia from "./components/pages/SocialMedia";
import NotFound from "./components/pages/NotFound";

import { about, about_media } from "./components/content/brief";

import { Provider } from "react-redux";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Comment } from "./components/layout/Comments";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="Portfolio - Leo Lanese" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContactAction} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/socialMedia" component={SocialMedia} />
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
