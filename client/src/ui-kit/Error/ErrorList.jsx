import React from 'react';

const ErrorList = ({errors}) => {
    return (
        <ul>
            {errors.map(error =>
                <li key={error}>{error}</li>
            )}
        </ul>
    );
};

export default ErrorList;