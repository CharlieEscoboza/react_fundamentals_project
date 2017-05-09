const React = require('react');
const BrowserRouter = require('react-router-dom');
const Switch = BrowserRouter.Switch;
const Route = BrowserRouter.Route;
const Router = BrowserRouter.Router;


const App = () => {
  return (
    <Router>
      <div>
        <header>This is my funny header</header>
          <Switch>
            <Route exact path="/" render={() => <p>This is my funny HP</p>} />
          </Switch>
      </div>
    </Router>
  );
};

module.exports = App;
