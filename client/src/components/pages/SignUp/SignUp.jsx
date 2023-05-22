import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from "../../FormInput/FormInput";
import FormButton from "../../FormButton/FormButton";
import {emailValidation, passwordValidation} from "../../../utils/validation";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [emailError, setEmailError] = useState(["Email field is empty"])
    const [passwordError, setPasswordError] = useState(["Password is empty"])
    const [repeatPasswordError, setRepeatPasswordError] = useState("Password is empty")
    const [disableButton, setDisableButton] = useState(true)

    function handleSubmit (e) {
        e.preventDefault();
    }

    useEffect(() => {
        (!passwordError.length && !emailError.length && !repeatPasswordError) ? setDisableButton(false) : setDisableButton(true);
    }, [passwordError, emailError, repeatPasswordError])

    function confirmPasswordHandler (e) {
        let confirmPassword = e.target.value
        setRepeatPassword(confirmPassword)
        if(!(password === confirmPassword)) {
            setRepeatPasswordError("Passwords are not the same")
            return
        }
        setRepeatPasswordError('')
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
                        valueInput={repeatPassword}
                        typeInput='text'
                        name='confirm'
                        requiredBool={true}
                        onChangeHandler={confirmPasswordHandler}
                    />
                </div>
                <div>
                    <label>Are you a:</label>
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