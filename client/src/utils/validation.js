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
        for (let element of emailErrors) {
            if (!element.filter.test(String(emailValue))) {
                setEmailError(errors => [...errors, element.error])
            }
        }
        setEmail(emailValue)
    }


export const passwordValidation = (event, setPassword, setPasswordError) => {
        setPasswordError([])
        const passwordValue = event.target.value;
        const regexCheck = [
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

        for (let element of regexCheck) {
            if (!element.filter.test(String(passwordValue))) {
                setPasswordError(errors => [...errors, element.error])
            }
        }
       setPassword(passwordValue)
    }