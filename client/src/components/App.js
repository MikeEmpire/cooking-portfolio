import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "../store";

import '../styles/main.css';

import Home from './Home';
import CookingPage from './containers/CookingPage';
import AdsHome from './containers/AdsPage';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cooking" component={CookingPage} />
            <Route path="/ads" component={AdsHome} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
