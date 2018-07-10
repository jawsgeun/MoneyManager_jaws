import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import Posts from './containers/Posts';
import Post from './containers/Post';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/post" component={Posts}/>
            <Route path="/post/:id" component={Post}/>
        </div>
    </Router>, 
    document.getElementById('root')
);


registerServiceWorker();
