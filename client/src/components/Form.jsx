import React, { useState } from 'react';

export const FormContext = React.createContext({
    form: {}
})

const Form = (props) => {
    const {children, onSubmit, values, setValues, validationParams, validation}= props

    const [errors, setErrors] = useState(new Map())

    const setValue = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
        validation && validation(name, value, errors, setErrors, ...validationParams)
    }

    return (
        <FormContext.Provider value={{
            values, setValue, errors
        }}>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;