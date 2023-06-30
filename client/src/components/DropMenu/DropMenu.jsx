import React from 'react';
import "./DropMenu.scss"
import {NavList} from "../index";
import classNames from 'classnames';

const DropMenu = ({fillData, className}) => {

    return (
		<div className={classNames("Drop-Menu scale-in-ver-top", className)}>
			<div className='arrow-top'></div>
			<NavList
				list={fillData}
				className={'List'}
			/>
		</div>
	);
}

export default DropMenu;