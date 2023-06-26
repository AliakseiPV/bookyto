import React from 'react';
import './SideBar.scss'
import {List} from '../../ui-kit';

const SideBar = ({array}) => {
    return (
		<div className="SideBar">
		<List list={array}
			  className={'text_black'}
			  onClickHandler={() => {}}
		/>
		</div>
    );
};

export default SideBar;