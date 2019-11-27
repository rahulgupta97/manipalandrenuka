import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as components from '../utils/export/exportComponents';
import { Helper } from '../utils/export/exportHelpers';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={Helper.locations.introPath} component={components.Intro} />
        <Route exact path={Helper.locations.aboutPath} component={components.About} />
        <Route exact path={Helper.locations.interestsPath} component={components.Interests} />
        <Route exact path={Helper.locations.galleryPath} component={components.Gallery} />
        <Route component={components.Intro} />
      </Switch>
    );
  }
}