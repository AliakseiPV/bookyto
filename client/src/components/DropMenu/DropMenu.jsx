import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./DropMenu.scss"

const DropMenu = ({object}) => {
	const navigate = useNavigate(); 
    return (
		<div className="Drop__Menu">
			<div className='arrow__top'></div>
			<ul>
				{object.map((item) =>
					<li key={item.name}>
						<Link to={item.path}
							onClick={() => navigate(item.path)}
						>
							{item.name}	
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
}

export default DropMenu;