import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./DropMenu.scss"
import List from "../../ui-kit/List/List";

const DropMenu = ({object}) => {
    return (
		<div className="Drop__Menu">
			<div className='arrow__top'></div>
			<List
				list={object}
				className={'List'}
				onClickHandler={() => {}}
				navBool={true}
			/>
		</div>
	);
}

export default DropMenu;