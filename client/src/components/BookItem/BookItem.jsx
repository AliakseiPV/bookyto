import React from 'react';
import data from '../../TestData/book.json'
import './BookItem.scss'

const BookItem = ({}) => {
	return (
		<div className='Book'>
				<div className='Book__Wrapper'>
					<img className="Book__Image" src= {data.book_cover} alt="" width='150' height='180'/>
				</div>
			<div className='Book__Info'>
				<h2 className='Book__Title'>{data.title}</h2>
				<span className='Book__Writer-Name'>{data.writer}</span>
				<span className='Book__Book-Price'>{data.price}</span>
			</div>
		</div>
	);
};

export default BookItem;