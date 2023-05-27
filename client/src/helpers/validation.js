const createErrors = (errorsFilter, errors, setErrors, name, value) => {
    let errorArray = []
    for (let element of errorsFilter[name]) {
        if (!element.filter.test(String(value))) {
            errorArray = [...errorArray, element.error]
        }
    }
    setErrors(errors.set(name, errorArray))
}

const comparePasswords = (inputName, password, comparedPassword, errors, setErrors) => {
    if (password !== comparedPassword) {
        setErrors(errors.set(inputName,['Passwords do not match']))
    } else {
        setErrors(errors.set(inputName,[]))
    }
}

const checkForErrors = (errorsMap, setButtonDisable) => {
    let errors = []
    for ( let amount of errorsMap.values()) {
        errors = errors.concat(amount)
    }
    if(errors.length) {
        setButtonDisable(true)
    } else {
        setButtonDisable(false)
    }       
}

export const signUpValidation = ( inputName, currentInputValue, errors, setErrors, errorChecks, setButtonDisable, password, repeatPassword) => {
    if(inputName === 'email') {
        createErrors(errorChecks, errors, setErrors, inputName, currentInputValue)
    }
    if (inputName === 'password') {
        createErrors(errorChecks, errors, setErrors, inputName, currentInputValue)  
        comparePasswords('repeatPassword', repeatPassword, currentInputValue, errors, setErrors) 
    }
    if (inputName === 'repeatPassword') {
        comparePasswords('repeatPassword', password, currentInputValue, errors, setErrors)
    }
    checkForErrors(errors, setButtonDisable)
}
