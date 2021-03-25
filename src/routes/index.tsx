import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import { Home, Repos } from '../pages';
import CustomRoute from './custom.route';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <CustomRoute path="/" exact component={Home} />
      <CustomRoute path="/repos/:user" exact component={Repos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
