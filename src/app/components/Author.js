import React, {Component} from 'react';
import  { render } from 'react-dom';
import { Link } from 'react-router';

import * as BooksActions from '../actions/BooksActions';
import ItemStore from '../stores/store';
import Header from './Header';

export default class Author extends React.Component {

	constructor (props) {
		super(props);
		console.log(this.props);
		this.getAuthor = this.getAuthor.bind(this);
   		this.state = {
      		author: ItemStore.getAllAuthorData()
   		};
 	}

    componentWillMount() {
    	name = this.props.params.key;
    	BooksActions.loadAuthor(name);
    	ItemStore.on("change", this.getAuthor);
 	}

  	componentWillUnmount() {
  		ItemStore.removeListener("change", this.getAuthor);
 	}

 	getAuthor() {
	    this.setState({
	      author: ItemStore.getAllAuthorData()
	    });
  	}

	render() {

		const { author } = this.state;

		console.log(this.state);
		return(
			<div>
				<Header />
				<div className="container">
				<h1>Author: {name}</h1>
				{ author.map((item, index) => {
						return(
						<div className="col-sm-12 book-container" key={index}> 
							<div className="row">
								<div className="col-xs-1">
									<img src={'http://covers.openlibrary.org/b/isbn/' + item.isbn[0] +'-S.jpg'}/>
								</div>
								<div className="col-xs-11">
									<span><strong>{ item.title }</strong></span>
									<span className="clearfix"> ({item.first_publish_year})</span>
								</div>
							</div>
						</div>
						)
					})
					}
		 		</div>
		 	</div>
	 	)
	}

}