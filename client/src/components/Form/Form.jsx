import React, { useState } from 'react'
import './Form.scss'

export const FormContext = React.createContext({
    form: {}
})

const Form = (props) => {
    const {children, onSubmit, validationParams, initialValues, className}= props

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(initialValues)

    const setValuesHandler = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    return (
        <FormContext.Provider value={{
            values, setValues: setValuesHandler, errors, setErrors, validationParams
        }}>
            <form onSubmit={onSubmit} className={`Form_default ${className}`}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;