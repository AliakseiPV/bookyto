export const validation = (errorsFilter, errors, setErrors, name, value) => {
    let errorArray = []
    for (let element of errorsFilter[name]) {
        if (!element.filter.test(String(value))) {
            errorArray = [...errorArray, element.error]
        }
    }
    setErrors(errors.set(name, errorArray))
}

export const comparePasswords = (inputName, password, comparedPassword, errors, setErrors) => {
    if (password !== comparedPassword) {
        setErrors(errors.set(inputName,['Passwords do not match']))
    } else {
        setErrors(errors.set(inputName,[]))
    }
}

export const finalValidation = (errorsMap, setButtonDisable) => {
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
