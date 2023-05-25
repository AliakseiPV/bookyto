import React, { useEffect, useState } from 'react';
import { Button } from '../ui-kit';
import {validation, comparePasswords} from '../helpers/validation'

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

        if(errorChecks[name]) {
            validation(errorChecks, inputErrors, setInputErrors, name, value) 
            comparePasswords('repeatPassword', form.repeatPassword, value, inputErrors, setInputErrors) 
        }
        if(name === 'repeatPassword') {
            comparePasswords('repeatPassword', form.password, value, inputErrors, setInputErrors)
        }
    }

    useEffect(() => {
        console.log(form.repeatPassword)
        console.log(form.password)
        
    }, [form.repeatPassword, form.password])
    
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