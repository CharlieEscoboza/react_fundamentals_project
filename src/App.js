const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

const Details = require('./pages/Details');
const Forecast = require('./pages/Forecast');
const Header = require('./layouts/Header');
const Home = require('./pages/Home');

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/forecast" component={Forecast} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
  );
};

module.exports = App;
