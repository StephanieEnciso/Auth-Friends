import './App.css';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {


  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (
    <Router>
      <ul>
        <li>
          <Link to = '/login'>Login</Link>
        </li>
        <li>
          <Link onClick = {logout}>Logout</Link>
        </li>
       
      </ul>
      <div className="App">
        <Switch>
          <PrivateRoute exact path = '/friends' component = {FriendsList} />
          <PrivateRoute path = '/friends' component = {AddFriend} />
          <Route path = '/login' component = {LoginForm} />
          <Route component = {LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
