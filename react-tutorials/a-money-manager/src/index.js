import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import InputForm from './containers/InputForm';
import Statistics from './containers/Statistics';
import Setting from './containers/Setting';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <CookiesProvider>
        <Router>
            <div>
                <Header/>
                <Route path="/input" component={InputForm}/>
                <Route path="/stat" component={Statistics}/>
                <Route path="/setting" component={Setting}/>
            </div>
        </Router>
        </CookiesProvider>
    ,document.getElementById('root'));
registerServiceWorker();
