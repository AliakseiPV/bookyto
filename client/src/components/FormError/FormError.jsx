import React from 'react';

const FormError = ({errors}) => {
    return (
        <ul>
            {errors.map(error =>
                <li key={error}>{error}</li>
            )}
        </ul>
    );
};

export default FormError;