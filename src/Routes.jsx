import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Glossary from './views/Glossary';
import SearchGlossary from './views/SearchGlossary';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/glossary"
        />
        <Route
          component={Glossary}
          exact
          path="/glossary"
        />
        <Route
          component={SearchGlossary}
          exact
          path="/search"
        />
      </Switch>
    );
  }
}
