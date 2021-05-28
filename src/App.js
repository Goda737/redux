import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Home from './components/home/home';
import Login from './components/login/login';


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Redirect to="/home"/>
              </Route>
              <Route path={'/home'} component={Home}/>
              <Route path={'/login'} component={Login}/>
          </Switch>
      </Router>
  );
}

export default App;
