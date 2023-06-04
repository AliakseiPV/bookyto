import React from 'react';
import './Label.scss'
import classnames from 'classnames';

const Label = ({labelText, htmlFor, className}) => {
    return (
       <label htmlFor={htmlFor} className={classnames('Label', className)}>
           {labelText}
       </label>
    );
}

export default Label;