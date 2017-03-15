import axios from 'axios';
import dispatcher from "../dispatcher/dispatcher"

export function loadBooks(){
    return axios.get('http://openlibrary.org/subjects/science_fiction.json?details=true')
        .then((response) => {
	        dispatcher.dispatch({
	        	type: "GET_BOOKS",
	        	books: response.data.authors
	        })
        })
        .catch((err) => {
        	dispatcher.dispatch({
	        	type: "GET_BOOKS_ERROR",
	        	err
	        })
        })
}

