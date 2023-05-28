// const checkForErrors = (errorsMap) => {
//     let errors = []
//     for (let amount of errorsMap.values()) {
//         errors = errors.concat(amount)
//     }
//     return !!errors.length
// }

// export const signUpValidation = (
//     formValues,
//     inputName,
//     currentInputValue,
//     errors,
//     setErrors,
//     errorChecks,
//     setButtonDisable
// ) => {
//     if (inputName === 'email') {
//         setErrors(errors.set(inputName, createErrors(errorChecks, inputName, currentInputValue)))
//     }
//     if (inputName === 'password') {
//         setErrors(errors.set(inputName, createErrors(errorChecks, inputName, currentInputValue)))
//         setErrors(errors.set('repeatPassword', comparePasswords(formValues.repeatPassword, currentInputValue)))
//     }
//     if (inputName === 'repeatPassword') {
//         setErrors(errors.set('repeatPassword', comparePasswords(formValues.password, currentInputValue)))
//     }
//     setButtonDisable(checkForErrors(errors, setButtonDisable))
// }
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