const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;

const Home = require('./pages/Home');

const App = () => {
  return (
    <Router>
      <div>
        <header>This is my funny header</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <p>Not Found</p>} /> 
        </Switch>
      </div>
    </Router>
  );
};

module.exports = App;
