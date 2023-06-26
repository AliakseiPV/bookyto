import React from 'react';
import "./DropMenu.scss"
import {NavList} from "../index";

const DropMenu = ({object}) => {
    return (
		<div className="Drop__Menu">
			<div className='arrow__top'></div>
			<NavList
				list={object}
				className={'List'}
			/>
		</div>
	);
}

export default DropMenu;