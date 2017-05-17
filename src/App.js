import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Details from './pages/Details';
import Forecast from './pages/Forecast';
import Header from './layouts/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast" component={Forecast} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
