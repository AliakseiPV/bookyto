import React, { useEffect, useState } from 'react';
import { Button } from '../ui-kit';
import {validation} from '../helpers/validation'

export const FormContext = React.createContext({
    form: {}, 
})

const Form = (props) => {
    const {children, onSubmit, initialValues, errorChecks} = props
  
    const [form, setForm] = useState(initialValues)
    const [inputErrors, setInputErrors] = useState({})
    const [buttonDisable, setButtonDisable] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})

        if(errorChecks[name]) {
            validation(errorChecks, setInputErrors, name, value)
        
        }

    }

    useEffect(() => {
        console.log(inputErrors)
        // console.log(inputErrors['email'])
        // console.log(inputErrors['password'])
    },[inputErrors])
    
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