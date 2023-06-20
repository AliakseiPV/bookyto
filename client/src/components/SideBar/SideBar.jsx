import React from 'react';
import './SideBar.scss'

const SideBar = ({array}) => {
    return (
        <ul className='SideBar'>
          {array.map((item) => 
            <li key={item}>
                {item}
            </li>
          )}
        </ul>
    );
};

export default SideBar;