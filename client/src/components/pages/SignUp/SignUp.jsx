import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from "../../FormInput/FormInput";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [passwordError, setPasswordError] = useState([])
    const [isSamePassword, setIsSamePassword] = useState('')
    const [buttonBool, setButtonBool] = useState(true)

    function handleSubmit (e) {
        e.preventDefault();
    }

    useEffect(() => {
        (!passwordError.length && !emailError && !isSamePassword) ? setButtonBool(false) : setButtonBool(true);
    }, [passwordError, emailError, isSamePassword])

    function emailHandler (e) {
        const emailValue = e.target.value
        setEmail(emailValue)
        const filter = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/

        if (!emailValue) {
            setEmailError("Email field can't be empty")
            return
        }
        if (!filter.test(String(emailValue).toLowerCase())) {
            setEmailError('Email field is not correct')
            return
        }
        setEmailError('')
    }


    function passwordHandler (e) {
        setPasswordError([])
        const passwordValue = e.target.value; 
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
                setPasswordError(passwordError => [...passwordError, element.error])
            }  
        }
       setPassword(passwordValue)
    }

    function confirmPasswordHandler (e) {
        let confirmPassword = e.target.value
        setCheckPassword(confirmPassword)
        if(!(password === confirmPassword)) {
            setIsSamePassword("Passwords are not the same")
            return
        }
        setIsSamePassword('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div>
                    <FormInput 
                        htmlFor='firstName' 
                        labelText='First Name' 
                        valueInput={firstName}
                        typeInput='text'
                        name='firstName'
                        requiredBool={true}
                        placeholder='Enter your first name...'
                        onChangeHandler={e => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput 
                        htmlFor='lastName' 
                        labelText='Last Name' 
                        valueInput={lastName}
                        typeInput='text'
                        name='lastName'
                        requiredBool={true}
                        placeholder='Enter your surname...'
                        onChangeHandler={e => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <FormInput 
                        htmlFor='email' 
                        labelText='Email' 
                        valueInput={email}
                        typeInput='email'
                        name='email'
                        requiredBool={true}
                        onChangeHandler={emailHandler}
                    />
                </div>
                <div>
                    <FormInput 
                        htmlFor='password' 
                        labelText='password' 
                        valueInput={password}
                        typeInput='text'
                        name='password'
                        requiredBool={true}
                        onChangeHandler={passwordHandler}
                    />
                    <FormInput 
                        htmlFor='password_confirmation' 
                        labelText='confirm password' 
                        valueInput={checkPassword}
                        typeInput='text'
                        name='confirm'
                        requiredBool={true}
                        onChangeHandler={confirmPasswordHandler}
                    />
                </div>
                {/* User/Seller */}
                <div>
                    <label>Are you a:</label>
                    <div>
                        <input type='radio' value='buyer' name='user_role'></input>
                        <label htmlFor="default_radio">
                            Buyer
                        </label>
                    </div>
                    <div>
                        <input type='radio' value='seller' name='user_role'></input>
                        <label htmlFor="default_radio">
                            Seller
                        </label>
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        disabled={buttonBool}
                    >
                        Sign Up
                    </button>
                </div>
                <div>
                    Already have an account? {" "}
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;