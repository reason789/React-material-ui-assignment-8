import './App.css';
import User from './Componets/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetail from './Componets/UserDetail/UserDetail';
import Comment from './Componets/Comment/Comment';
import NotFound from './Componets/NotFound/NotFound';
function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
                <User></User>
            </Route>
            <Route path="/user/:id">
                <UserDetail></UserDetail>
            </Route>
            <Route path="/user/:id">
                <Comment></Comment>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
