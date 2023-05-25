import React, { useState } from 'react';
import { Button } from '../ui-kit';

export const FormContext = React.createContext({
    form: {}, 
})

const Form = (props) => {
    const {children, onSubmit, initialValues, errorChecks} = props
  
    const [form, setForm] = useState(initialValues)
    const [inputErrors, setInputErrors] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})

        if(errorChecks && errorChecks[name]) {
            handleErrors(errorChecks, name, value)
        }
        
    }

    const handleErrors = (error, name, value) => {
        let errorArray = []
        for (let element of error[name]) {
            if (!element.filter.test(String(value))) {
                errorArray = [...errorArray, element.error]
            }
        }
        setInputErrors({[name]: errorArray})
    }
    
    return (
        <form>
            <FormContext.Provider value={{
                form, handleChange, inputErrors
            }}>
                {children}
            </FormContext.Provider>

            <Button
                buttonType='submit'
                isDisabled={false}
                buttonText='Sign Up'
            />
        </form>
    );
};

export default Form;