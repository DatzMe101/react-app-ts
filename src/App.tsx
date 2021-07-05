import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
