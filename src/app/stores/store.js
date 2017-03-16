import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from "events";

class ItemStore extends EventEmitter {
	constructor() {
		super()
		this.books = [];
		this.author = [];
	}

	getAll() {
	    return this.books;
	}

	getAllAuthorData() {
	    return this.author;
	}

	handleActions(action) {
		switch(action.type) {
			case "GET_BOOKS": {
				this.books = action.books;
				this.emit("change");
				break;
			}

			case "GET_BOOKS_ERROR": {
				break;
			}

			case "GET_AUTHOR": {
				this.author = action.author;
				this.emit("change");
				break;
			}
		}
	}
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;