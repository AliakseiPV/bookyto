import React from 'react';
import classnames from "classnames";
import './List.scss'
import {Link} from "react-router-dom";

const List = ({list, className, onClickHandler, icon, iconClassName, navBool}) => {

	return (
		<ul className={classnames('List', className)}>
			{list.map((item) =>
				<li key={item} onClick={() => {onClickHandler()}}>
					{navBool ?
						<Link to={item.path}>
							{icon ? <icon className={iconClassName}/> : item.name}
						</Link>
						:
						item
					}
				</li>
			)}
		</ul>
	);
}

export default List;