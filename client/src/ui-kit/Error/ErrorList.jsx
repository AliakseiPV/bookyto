import React from 'react'
import './ErrorList.scss'

const ErrorList = ({errors, className}) => {
    return (
        <div className={`ErrorList ${className} `}>
            <ul>
                {errors.map(error =>
                    <li key={error}>{error}</li>
                )}
            </ul>
        </div>
    );
};

export default ErrorList;