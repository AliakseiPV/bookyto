import React from 'react';
import classnames from "classnames";
import './List.scss'

const List = ({list, className, onClickHandler}) => {

	return (
		<ul className={classnames('List', className)}>
			{list.map((item) =>
				<li key={item} onClick={() => {onClickHandler()}}>
					{item}
				</li>
			)}
		</ul>
	);
}

export default List;