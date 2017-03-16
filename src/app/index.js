import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Home from './components/Home';
import Books from './components/Books';
import Author from './components/Author';

const app = document.getElementById('app');

ReactDOM.render(
            <Router history={hashHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/author/:key" component={Author}></Route>
			    <Route path="/books" component={Books}></Route>
            </Router>, app );


