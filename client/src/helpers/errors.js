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

const passwordErrors = [
    {
        filter: /^\s*\S+.*/,
        error: "Password field is empty"
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
    }
]

const repeatPasswordErrors = [
    {
        filter: /^\s*\S+.*/,
        error: "Password field is empty"
    },
    {
        filter: (values) => {
            if (values.repeatPassword !== values.password) {
                return "Passwords do not matches"
            }
            return null;
        }
    }
]

export const errorChecks = {
    email: emailErrors,
    password: passwordErrors,
    repeatPassword: repeatPasswordErrors
}




