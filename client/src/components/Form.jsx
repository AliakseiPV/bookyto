import React, { useEffect, useState } from 'react';
import { Button } from '../ui-kit';
import {validation} from '../helpers/validation'

export const FormContext = React.createContext({
    form: {}, 
})

const Form = (props) => {
    const {children, onSubmit, initialValues, errorChecks} = props
  
    const [form, setForm] = useState(initialValues)
    const [inputErrors, setInputErrors] = useState(new Map())
    const [buttonDisable, setButtonDisable] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})

        validation(
            errorChecks, 
            name, 
            form.password, 
            form.repeatPassword, 
            value, inputErrors, 
            setInputErrors, 
            setButtonDisable
        )

        // if (errorChecks[name]) {
        //     validation(errorChecks, inputErrors, setInputErrors, name, value)  
        //     comparePasswords('repeatPassword', form.repeatPassword, value, inputErrors, setInputErrors) 
        // }
        // if (name === 'repeatPassword') {
        //     comparePasswords('repeatPassword', form.password, value, inputErrors, setInputErrors)
        // }

        // finalValidation(inputErrors, setButtonDisable)
    }

    return (
        <form onSubmit={onSubmit}>
            <FormContext.Provider value={{
                form, handleChange, inputErrors
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