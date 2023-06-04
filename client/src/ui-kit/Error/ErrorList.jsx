import React from 'react'
import './ErrorList.scss'
import classnames from 'classnames';

const ErrorList = ({errors, className}) => {
    return (
        <div className={classnames('ErrorList', className)}>
            <ul>
                {errors.map(error =>
                    <li key={error}>{error}</li>
                )}
            </ul>
        </div>
    );
};

export default ErrorList;