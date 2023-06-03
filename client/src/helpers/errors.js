const emailErrors = [
    {
        filter: /^\s*\S+.*/,
        error: "Field is empty"
    },
    {
        filter: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        error: "Email field is not correct"
    }
]        

const passwordErrors = [
    {
        filter: /^\s*\S+.*/,
        error: "Field is empty"
    },
    {
        filter: /^(?=[^a-z]*[a-z])/,
        error: "Password must include one lower case"
    },
    {
        filter: /^(?=[^A-Z]*[A-Z])/,
        error: "Password must include one upper case"
    },
    {
        filter: /^(?=\D*\d)/,
        error: "Password must include one number"
    },
    {
        filter: /^(?=[^!#%]*[!#%])/,
        error: "Password must include !#%"
    },
    {
        filter: /^([A-Za-z0-9!#%])(?!.* )/,
        error: "Password has symbols which are not allowed"
    },
    {
        filter: /.{8,32}/,
        error: "Password has to be between 8-32 in length"
    }

]
const repeatPasswordErrors = [
    {
        filter: /^\s*\S+.*/,
        error: "Field is empty"
    },
    {
        filter: (values) => {
            if (values.repeatPassword !== values.password) {
                return "Passwords do not matches"
            }
            return null
        }
    }
]

export const errorChecks = {
    email: emailErrors,
    password: passwordErrors,
    repeatPassword: repeatPasswordErrors
}




