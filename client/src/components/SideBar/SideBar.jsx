import React from 'react';
import './SideBar.scss'
import {List} from '../../ui-kit';

const SideBar = ({array}) => {
    return (
		<List list={array}
			  navBool={false}
			  className={'text_black'}
			  onClickHandler={() => {}}
		/>
    );
};

export default SideBar;