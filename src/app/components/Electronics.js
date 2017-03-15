import React, {Component} from 'react';
import  { render } from 'react-dom';

import Header from './Header';

export default class Electronics extends React.Component {

render() {

	return (
			<div>
				<Header />
				<div className="container">
	            	<h1>Electronics</h1>
	            </div>
	        </div>
        );

  }

}