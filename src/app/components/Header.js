import React, {Component}  from 'react';
import { IndexLink, Link } from 'react-router';


export default class Header extends React.Component{
    constructor(){
        super()
    }

    render() {

    return (
        <nav role="navigation">
        <div className="container">
          <div className="navbar-header">
          </div>
            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
        </div>
      </nav>)
    }
}


