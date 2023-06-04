import React from 'react';
import './Input.scss'
import classnames from 'classnames';

const Input = ({
                       nameInput,
                       typeInput,
                       valueInput,
                       requiredBool = true,
                       placeholder,
                       onChange,
                       onBlurInput,
                       onFocusInput,
                       className
}) => {
    return (
        <>
            <input 
                value={valueInput}
                name={nameInput} 
                type={typeInput} 
                required={requiredBool}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                className={classnames('Input', className)}
            />
        </>
    );
};

export default Input;