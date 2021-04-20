import React from 'react';

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/navbar';
import Home from './components/home';
import Client from './components/client';

import Edit from './components/edit';
import login1 from './components/login1';
//import Dashboard from './components/Dashboard';
import Subscribe from './components/subscribe';

import adminlogin from './components/adminlogin';
import Admin from './components/admin';
import Mail from './components/mail';
import Dashboard from './components/dashboard';
/*import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelector';*/

function App() {
  /*const dispatch = useDispatch();
  const currentUser = useSelector(state => selectCurrentUser(state));

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])
*/
  return (
    <div className="container">
      <Router>
      <Route exact path="/">
            <Redirect to="/home" /> : <Home/>
      </Route>
      <Navbar/>
      <Route path="/home" component={Home}/>
      <Route path="/client" component={Client}/>
      
      <Route path="/login1" component={login1}/>
      <Route path="/subscribe" component={Subscribe}/>
      <Route path="/edit/:id" component={Edit}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/adminlogin" component={adminlogin}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/mail" component={Mail}/>
      
     
      </Router>
    </div>
  );
}

export default App;
