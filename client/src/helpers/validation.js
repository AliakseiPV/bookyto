const createErrors = (errorsFilter, name, value) => {
    let errorArray = []
    for (let element of errorsFilter[name]) {
        if (!element.filter.test(String(value))) {
            errorArray = [...errorArray, element.error]
        }
    }
    return errorArray
}

const comparePasswords = (password, comparedPassword) => {
    if (password !== comparedPassword) {
        return ['Passwords do not match']
    } else {
        return []
    }
}

const checkForErrors = (errorsMap) => {
    let errors = []
    for (let amount of errorsMap.values()) {
        errors = errors.concat(amount)
    }
    return !!errors.length
}

export const signUpValidation = (
    formValues,
    inputName,
    currentInputValue,
    errors,
    setErrors,
    errorChecks,
    setButtonDisable
) => {
    if (inputName === 'email') {
        setErrors(errors.set(inputName, createErrors(errorChecks, inputName, currentInputValue)))
    }
    if (inputName === 'password') {
        setErrors(errors.set(inputName, createErrors(errorChecks, inputName, currentInputValue)))
        setErrors(errors.set('repeatPassword', comparePasswords(formValues.repeatPassword, currentInputValue)))
    }
    if (inputName === 'repeatPassword') {
        setErrors(errors.set('repeatPassword', comparePasswords(formValues.password, currentInputValue)))
    }
    setButtonDisable(checkForErrors(errors, setButtonDisable))
}
