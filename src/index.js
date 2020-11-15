import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Navbar />
      <App />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={App} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
