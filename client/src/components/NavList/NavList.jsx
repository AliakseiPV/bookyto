import React from 'react';
import {Link} from "react-router-dom";

const NavList = ({list, className, iconClassName, icon}) => {
	return (
		<ul className={className}>
			{list.map((item)=>
				<li key={item.name}>
					<Link to={item.path}>
						{icon ? <icon className={iconClassName}/> : item.name}
					</Link>
				</li>
			)}
		</ul>
	);
};

export default NavList;