import React, { useState } from 'react';
import { Button } from '../ui-kit';

export const FormContext = React.createContext({
    form: {}, 
})

const Form = (props) => {
    const {children, onSubmit, values, setValues, validationParams, validation}= props
  
    // const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(new Map())


    const onChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
        console.log(validation(name, value, errors, setErrors, ...validationParams))

        // validation(
        //     errorChecks,
        //     name,
        //     value,
        //     errors,
        //     setErrors,
        //     setButtonDisable,
        //     values.password,
        //     values.repeatPassword,
        // )
    }

    return (
            <FormContext.Provider value={{
                values, onChange, errors
            }}>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </FormContext.Provider>
    );
};

export default Form;