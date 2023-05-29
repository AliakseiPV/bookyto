import React from 'react';
import './Input.scss'

const Input = ({
                       htmlFor,
                       labelText,
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
            <label htmlFor={htmlFor}>
                {labelText}
            </label>
            <input 
                value={valueInput}
                name={nameInput} 
                type={typeInput} 
                required={requiredBool}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                className={className}
            />
        </>
    );
};

export default Input;