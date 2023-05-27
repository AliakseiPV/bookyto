import React, { useState } from 'react';
import {signUpValues} from "../helpers/initialValues";

export const FormContext = React.createContext({
    form: {}
})

const Form = (props) => {
    const {children, onSubmit, validationParams, validation}= props

    const [errors, setErrors] = useState(new Map())
    const [values, setValues] = useState(signUpValues)

    const setValue = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
        validation && validation(values, name, value, errors, setErrors, ...validationParams)
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