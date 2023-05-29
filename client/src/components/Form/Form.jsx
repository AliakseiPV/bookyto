import React, { useState } from 'react'
import {validation} from '../../helpers/validation'
import './Form.scss'

export const FormContext = React.createContext({
    form: {}
})

const Form = (props) => {
    const {children, onSubmit, validationParams, initialValues, className}= props

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(initialValues)

    const changeHandler = async (event) => {
        const {name, value} = event.target;
        const newValues = {...values, [name]: value}

        setValues(newValues)
        setErrors({...errors, [name]: validation(name, value, newValues, validationParams)}) 
    }

    return (
        <FormContext.Provider value={{
            values, changeHandler, errors
        }}>
            <form onSubmit={onSubmit} className={className}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default Form;