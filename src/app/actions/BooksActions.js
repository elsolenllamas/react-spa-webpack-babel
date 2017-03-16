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


export function loadAuthor(name){
    return axios.get('http://openlibrary.org/search.json?author=' + name)
        .then((response) => {
        	console.log(response.data.docs);
	        dispatcher.dispatch({
	        	type: "GET_AUTHOR",
	        	author: response.data.docs
	        })
        })
        .catch((err) => {
        	dispatcher.dispatch({
	        	type: "GET_AUTHOR_ERROR",
	        	err
	        })
        })
}
