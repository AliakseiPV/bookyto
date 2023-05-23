import React from 'react';

const FormInput = ({
                       htmlFor,
                       labelText,
                       nameInput,
                       typeInput,
                       valueInput,
                       requiredBool,
                       placeholder,
                       onChangeHandler,
                       onBlurInput,
                       onFocusInput
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
                onChange={onChangeHandler}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
            />
        </>
    );
};

export default FormInput;