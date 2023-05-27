import React, { useState } from 'react';

export const FormContext = React.createContext({
    form: {}
})

const Form = (props) => {
    const {children, onSubmit, validationParams, validation, initialValues}= props

    const [errors, setErrors] = useState(new Map())
    const [values, setValues] = useState(initialValues)

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
        validation(values, name, value, errors, setErrors, ...validationParams)
    }

    return (
        <FormContext.Provider value={{
            values, changeHandler, errors
        }}>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;