import React from 'react';
import "./DropMenu.scss"

const DropMenu = ({object}) => {
    return (
		<div className="Drop__Menu">
			<ul>
				{object.map((item) =>
					<li key={item.name}>{item.name}</li>
				)}
			</ul>
		</div>
	);
}

export default DropMenu;