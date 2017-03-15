import React, {Component} from 'react';
import  { render } from 'react-dom';

import Header from './Header';

export default class Electronics extends React.Component {

render() {

	return (
			<div>
				<Header />
	            <h1>Electronics</h1>
	        </div>
        );

  }

}