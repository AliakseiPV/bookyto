import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../FormInput/FormInput';

const SignUp = () => {
    //sign up form takes first name,last name, email, password (two times to confirm), and user/writer(radio)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [passwordError, setPasswordError] = useState([])

    function handleSubmit (e) {
        e.preventDefault(); 
        console.log(email)

    }
    function emailHandler (e) {
        const emailValue = e.target.value
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
        setEmail(emailValue)
    }

    useEffect(() => { console.log(passwordError)})

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
                        name='password'
                        requiredBool={true}
                        onChangeHandler={passwordHandler}
                    />
                    <FormInput 
                        htmlFor='password_confirmation' 
                        labelText='confirm password' 
                        valueInput={checkPassword}
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
                    <button type='submit'>
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