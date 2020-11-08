import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import App from './App';

ReactDOM.render(
    <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
, document.getElementById('root'));

