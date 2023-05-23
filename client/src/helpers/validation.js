export const emailValidation = (event, setEmail, setEmailError) => {
        setEmailError([])
        const emailValue = event.target.value
        const emailErrors = [
            {
                filter: /^\s*\S+.*/,
                error: "Email field is empty"
            },
            {
                filter: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                error: "Email field is not correct"
            }
        ]
        checkRegex(emailErrors, emailValue, setEmailError)
        setEmail(emailValue)
    }


export const passwordValidation = (event, setPassword, setPasswordError) => {
        setPasswordError([])
        const passwordValue = event.target.value;
        const passwordErrors = [
            {
                filter: /^\s*\S+.*/,
                error: "Password is empty"
            },
            {
                filter: /^(?=[^a-z]*[a-z])/,
                error: "Password must include at least one lower case"
            },
            {
                filter: /^(?=[^A-Z]*[A-Z])/,
                error: "Password must include at least one upper case"
            },
            {
                filter: /^(?=\D*\d)/,
                error: "Password must include at least one number"
            },
            {
                filter: /^(?=[^!#%]*[!#%])/,
                error: "Password must include at one special character (only !#% are allowed)"
            },
            {
                filter: /^([A-Za-z0-9!#%])(?!.* )/,
                error: "Password has symbols which are not allowed"
            },
            {
                filter: /.{8,32}/,
                error: "Password has to be between 8 to 32 characters long"
            },
        ]

        checkRegex(passwordErrors, passwordValue, setPasswordError)
        setPassword(passwordValue)
}

function checkRegex(errors, value, setValue) {
    for (let element of errors) {
        if (!element.filter.test(String(value))) {
            setValue(errors => [...errors, element.error])
        }
    }
}