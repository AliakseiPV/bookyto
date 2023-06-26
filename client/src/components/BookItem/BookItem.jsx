import React from 'react';
import data from '../../TestData/book.json'
import './BookItem.scss'

const BookItem = ({book}) => {
	return (
		<div className='Book'>
				<div className='Book__Wrapper'>
					<img className="Book__Image" src= {book.book_cover} alt="" width='130' height='180'/>
				</div>
			<div className='Book__Info'>
				<h2 className='Book__Title'>{book.title}</h2>
				<span className='Book__Writer-Name'>{book.writer}</span>
				<span className='Book__Book-Price'>{book.price}</span>
			</div>
		</div>
	);
};

export default BookItem;