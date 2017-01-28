/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/app/app';
import HomeContainer from './components/home/containers/homeContainer';
import SeriesContainer from './components/series/containers/seriesContainer';
import FilmsContainer from './components/films/containers/movieContainer';
import ProfileContainer from './components/profile/containers/profileContainer';


export default class Root extends Component {

  requireAuth(nextState, replace) {
    if (!localStorage.token) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }


  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
          <Route path="/films" component={FilmsContainer} />
          <Route path="/series" component={SeriesContainer} />
          <Route path="/profile" component={ProfileContainer} onEnter={this.requireAuth.bind(this)}/>
        </Route>
      </Router>
    );
  }
}
