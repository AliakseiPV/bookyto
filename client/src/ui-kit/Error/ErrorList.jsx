import React from 'react'
import './ErrorList.scss'

const ErrorList = ({errors, className}) => {
    return (
        <div className={`${className} arrow__left`}>
            <ul>
                {errors.map(error =>
                    <li key={error}>{error}</li>
                )}
            </ul>
        </div>
    );
};

export default ErrorList;