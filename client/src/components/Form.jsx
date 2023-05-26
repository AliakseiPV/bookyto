import React, { useState } from 'react';
import { Button } from '../ui-kit';

export const FormContext = React.createContext({
    form: {}, 
})

const Form = (props) => {
    const {children, onSubmit, initialValues, errorChecks, validation} = props
  
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(new Map())
    const [buttonDisable, setButtonDisable] = useState(false)

    const onChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})

        validation(
            errorChecks, 
            name,  
            value, errors, 
            setErrors, 
            setButtonDisable,
            values.password, 
            values.repeatPassword,
        )
    }

    return (
        <form onSubmit={onSubmit}>
            <FormContext.Provider value={{
                values, onChange, errors
            }}>
                {children}
            </FormContext.Provider>

            <Button
                buttonType='submit'
                isDisabled={buttonDisable}
                buttonText='Sign Up'
            />
        </form>
    );
};

export default Form;