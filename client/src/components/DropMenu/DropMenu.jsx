import React from 'react';
import "./DropMenu.scss"
import {NavList} from "../index";

const DropMenu = ({object}) => {
    return (
		<div className="Drop-Menu scale-in-ver-top">
			<div className='arrow-top'></div>
			<NavList
				list={object}
				className={'List'}
			/>
		</div>
	);
}

export default DropMenu;