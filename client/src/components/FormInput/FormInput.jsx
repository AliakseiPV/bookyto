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
                       onMouseLeave,
                       onMouseEnter
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
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </>
    );
};

export default FormInput;