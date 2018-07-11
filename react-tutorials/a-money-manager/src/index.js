import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import InputForm from './containers/InputForm';
import Statistics from './containers/Statistics';
import Setting from './containers/Setting';
// import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
        <Router>
            <div>
                <Header/>
                <Route exact path="/">
                    <Redirect to="/input"/>
                </Route>
                <Route path="/input" component={InputForm}/>
                <Route path="/stat" component={Statistics}/>
                <Route path="/setting" component={Setting}/>
            </div>
        </Router>
    ,document.getElementById('root'));
registerServiceWorker();
