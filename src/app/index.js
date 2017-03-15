import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Home from './components/Home';
import Electronics from './components/Electronics';
import Books from './components/Books';

const app = document.getElementById('app');

ReactDOM.render(
            <Router history={hashHistory}>
                <Route path="/" component={Home}></Route>
			    <Route path="/electronics" component={Electronics}></Route>
			    <Route path="/books" component={Books}></Route>
            </Router>, app );


