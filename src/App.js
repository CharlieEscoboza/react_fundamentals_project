const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

const Header = require('./layouts/Header');
const Home = require('./pages/Home');
const Forecast = require('./pages/Forecast');

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/forecast" component={Forecast} />
      </div>
    </Router>
  );
};

module.exports = App;
