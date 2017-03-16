import React, {Component} from 'react';
import  { render } from 'react-dom';
import { Link } from 'react-router';

import * as BooksActions from '../actions/BooksActions';
import ItemStore from '../stores/store';
import Header from './Header';

export default class Books extends React.Component {

	constructor () {
		super();
	    this.getBooks = this.getBooks.bind(this);
   		this.state = {
      		books: ItemStore.getAll()
   		};
 	}

    componentWillMount() {
    	BooksActions.loadBooks();
   		ItemStore.on("change", this.getBooks);
 	}

  	componentWillUnmount() {
    	ItemStore.removeListener("change", this.getBooks);
 	}

    getBooks() {
	    this.setState({
	      books: ItemStore.getAll()
	    });
  	}

	render() {

		const { books } = this.state;
		console.log(books);

		return(
			<div>
				<Header />
				<div className="container">
				<h1>Books</h1>
					{ books.map((item, index) => {
						return(
						<div className="col-sm-3" key={index}> 
							<Link to={"/author/" + item.name}>
								{ item.name } 
							</Link>
						</div>
						)
					})
					}
		 		</div>
		 	</div>
	 	)
	}

}