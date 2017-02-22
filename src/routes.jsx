import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import TimelinePage from './containers/TimelinePage';
import uris from './uris';


export default () =>
  /**
   * Please keep routes in alphabetical order
   */
  <Route path={uris.pages.root} component={App} >
    <IndexRoute component={TimelinePage} />
  </Route>;
