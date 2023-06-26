import React from 'react';
import data from "../../TestData/book.json"
import './BookList.scss'
import {BookItem} from "../index";

const BookList = () => {
	let books = data
	return (
		<div className="Book__List">
			{data.map((book) =>
			<BookItem key={book.id} book={book}/>
			)}
		</div>
	);
};

export default BookList;