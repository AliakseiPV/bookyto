import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from "../../FormInput/FormInput";
import {emailValidation, passwordValidation} from "../../../utils/validation";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(["Email field is empty"])
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [passwordError, setPasswordError] = useState(["Password is empty"])
    const [isSamePassword, setIsSamePassword] = useState("Password is empty")
    const [buttonBool, setButtonBool] = useState(true)

    function handleSubmit (e) {
        e.preventDefault();
    }

    useEffect(() => {
        (!passwordError.length && !emailError.length && !isSamePassword) ? setButtonBool(false) : setButtonBool(true);
    }, [passwordError, emailError, isSamePassword])

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
                        onChangeHandler={(event) => emailValidation(event, setEmail, setEmailError)}
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
                        onChangeHandler={(event) => passwordValidation(event, setPassword, setPasswordError)}
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