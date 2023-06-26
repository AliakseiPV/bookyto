import React from 'react';
import './SideBar.scss'
import {List} from '../../ui-kit';

const SideBar = ({array}) => {
    return (
		<List list={array}
			  className={'text_black'}
			  onClickHandler={() => {}}
		/>
    );
};

export default SideBar;