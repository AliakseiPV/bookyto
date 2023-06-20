import React from 'react';
import './SideBar.scss'
import List from "../../ui-kit/List/List";

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