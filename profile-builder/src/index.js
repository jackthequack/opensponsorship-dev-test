import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ParentForm from './pages/ParentForm';
import Profile from './pages/Profile'
import List from './pages/List'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

ReactDOM.render((
  <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <div className="App">
        <ParentForm />
      </div>
      </Route>
      <Route path="/list/:slug">
        <div className="App">
          <Profile />
      </div>
      </Route>
      <Route path="/list">
        <div className="App">
          <List />
      </div>
      </Route>
      
    </Switch>
    {/* <App /> */}
  </BrowserRouter>
  ), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
