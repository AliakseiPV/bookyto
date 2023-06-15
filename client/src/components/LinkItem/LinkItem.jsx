import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';

const LinkItem = ({navigation, text, icon, className}) => {
    const navigate = useNavigate();
    return (
        <Link 
            to={navigation}
            onClick={() => navigate(navigation)}
            className={classnames('Link', className)}
        >
            {text}
            {icon ? icon : <></>}
        </Link>
    );
};

export default LinkItem;