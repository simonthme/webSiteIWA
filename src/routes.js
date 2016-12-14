/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/app/app';
import Home from './components/home/home';
import Series from './components/series/series';
import Films from './components/films/films';


export default class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/series" component={Series} />
        </Route>
      </Router>
    );
  }
}
