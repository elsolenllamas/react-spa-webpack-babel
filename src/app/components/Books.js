import React, {Component} from 'react';
import  { render } from 'react-dom';

import Header from './Header';

export default class Books extends React.Component {

render() {

	return (
			<div>
				<Header />
	            <h1>Books</h1>
	        </div>
        );

  }

}