export const signUpValidation = (
    formValues,
    inputName,
    currentInputValue,
    errors,
    setErrors,
    errorFilter,
) => {
    
    if (inputName === 'email') {
        setErrors({...errors, [inputName]: validation(inputName, currentInputValue, formValues, errorFilter)})
    }
    if (inputName === 'password') {
        setErrors({...errors, [inputName]: validation(inputName, currentInputValue, formValues, errorFilter)})
        setErrors({...errors, 'repeatPassword': validation('repeatPassword', currentInputValue, formValues, errorFilter)})
    }
    if (inputName === 'repeatPassword') {
        setErrors({...errors, [inputName]: validation(inputName, currentInputValue, formValues, errorFilter)})
    }
}

export const validation = (
    name, value, values, validationParams
) => {     
    let errorsArray = []

    validationParams[name]?.forEach(params => {   
        if (typeof params.filter === 'function') {
            if(params.filter(values)) {
                errorsArray = [...errorsArray, params.filter(values)]
            }
        }
        if (params.filter instanceof RegExp) {
            if (!params.filter.test(String(value))) {
                errorsArray = [...errorsArray, params.error]
            }
        }
    })
    return errorsArray
}