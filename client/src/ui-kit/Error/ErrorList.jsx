import React from 'react'
import './ErrorList.scss'

const ErrorList = ({errors, className}) => {
    return (
        <ul className={className}>
            {errors.map(error =>
                <li key={error}>{error}</li>
            )}
        </ul>
    );
};

export default ErrorList;