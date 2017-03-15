import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from "events";

class ItemStore extends EventEmitter {
	constructor() {
		super()
		this.books = [];
	}

	getAll() {
	    return this.books;
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
		}
	}
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;