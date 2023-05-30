import React from 'react';
import './Label.scss'

const Label = ({labelText, htmlFor, className}) => {
    return (
       <label htmlFor={htmlFor} className={`Label ${className}`}>
           {labelText}
       </label>
    );
}

export default Label;