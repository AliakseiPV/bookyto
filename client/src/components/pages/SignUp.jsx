import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import {emailValidation, passwordValidation} from '../../helpers/validation';
import FormError from "../FormError";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [emailError, setEmailError] = useState(['Email field is empty'])
    const [passwordError, setPasswordError] = useState(['Password is empty'])
    const [repeatPasswordError, setRepeatPasswordError] = useState(['Password is empty'])
    const [disableButton, setDisableButton] = useState(true)
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [repeatPasswordFocus, setRepeatPasswordFocus] = useState(false)

    function handleSubmit (e) {
        e.preventDefault();
    }

    useEffect(() => {
        setDisableButton(passwordError.length || emailError.length || repeatPasswordError.length)
    }, [passwordError, emailError, repeatPasswordError])

    function confirmPasswordHandler (e) {
        let confirmPassword = e.target.value
        setRepeatPasswordError([])
        setRepeatPassword(confirmPassword)

        if (!confirmPassword) {
            setRepeatPasswordError(errors => [...errors, 'Password is empty'])
            return;
        }
        if (!(password === confirmPassword)) {
            setRepeatPasswordError(errors => [...errors, 'Passwords are not the same'])
        }
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
                        onFocusInput={() => setEmailFocus(true)}
                        onBlurInput={() => setEmailFocus(false)}
                    />
                    {(emailFocus && emailError.length) ? <FormError errors={emailError}/> : <></>}
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
                        onFocusInput={() => setPasswordFocus(true)}
                        onBlurInput={() => setPasswordFocus(false)}
                    />
                    {(passwordFocus && passwordError.length) ? <FormError errors={passwordError}/> : <></>}
                </div>
                <div>
                    <FormInput
                        htmlFor='password_confirmation'
                        labelText='confirm password'
                        valueInput={repeatPassword}
                        typeInput='text'
                        name='confirm'
                        requiredBool={true}
                        onChangeHandler={confirmPasswordHandler}
                        onFocusInput={() => setRepeatPasswordFocus(true)}
                        onBlurInput={() => setRepeatPasswordFocus(false)}
                    />
                    {(repeatPasswordFocus && repeatPasswordError.length) ? <FormError errors={repeatPasswordError}/> : <></>}
                </div>
                <div>
                    <label>Who are you:</label>
                    <div>
                        <FormInput
                            htmlFor='default_radio'
                            labelText='Buyer'
                            valueInput='buyer'
                            typeInput='radio'
                            name='user_role'
                        />
                    </div>
                    <div>
                        <FormInput
                            htmlFor='default_radio'
                            labelText='Seller'
                            valueInput='seller'
                            typeInput='radio'
                            name='user_role'
                        />
                    </div>
                </div>
                <div>
                    <FormButton
                        buttonType='submit'
                        isDisabled={disableButton}
                        buttonText='Sign Up'
                    />
                </div>
                <div>
                    Already have an account?
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;