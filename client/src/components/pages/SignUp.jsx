import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Input, Button} from '../../ui-kit';
import {emailValidation, passwordValidation, repeatPasswordValidation} from '../../helpers/validation';
import FormItem from '../FormItem';
import {LOGIN_ROUTE} from "../../utils/consts";

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [emailError, setEmailError] = useState(['Email field is empty'])
    const [passwordError, setPasswordError] = useState(['Password field is empty'])
    const [repeatPasswordError, setRepeatPasswordError] = useState(['Password field is empty'])
    const [disableButton, setDisableButton] = useState(true)

    function handleSubmit (e) {
        e.preventDefault();
        if(password !== repeatPassword) {
            setRepeatPassword('')
        }
    }

    useEffect(() => {
        setDisableButton(passwordError.length || emailError.length || repeatPasswordError.length)
    }, [passwordError, emailError, repeatPasswordError])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div>
                    <Input 
                        htmlFor='firstName' 
                        labelText='First Name' 
                        valueInput={firstName}
                        typeInput='text'
                        nameInput='firstName'
                        requiredBool={true}
                        placeholder='Enter your first name...'
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        htmlFor='lastName' 
                        labelText='Last Name' 
                        valueInput={lastName}
                        typeInput='text'
                        nameInput='lastName'
                        requiredBool={true}
                        placeholder='Enter your surname...'
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <FormItem
                        htmlFor='email'
                        labelText='Email'
                        nameInput='email'
                        typeInput='email'
                        requiredBool={true}
                        onChangeHandler={emailValidation}
                        errors={emailError}
                        setErrors={setEmailError}
                        item={email}
                        setItem={setEmail}
                    />
                </div>
                <div>
                    <FormItem
                        htmlFor='password'
                        labelText='Password'
                        nameInput='password'
                        typeInput='password'
                        requiredBool={true}
                        onChangeHandler={passwordValidation}
                        errors={passwordError}
                        setErrors={setPasswordError}
                        item={password}
                        setItem={setPassword}
                    />
                </div>
                <div>
                    <FormItem
                        htmlFor='password_confirmation'
                        labelText='Confirm password'
                        nameInput='confirm'
                        typeInput='password'
                        requiredBool={true}
                        onChangeHandler={repeatPasswordValidation}
                        errors={repeatPasswordError}
                        setErrors={setRepeatPasswordError}
                        item={repeatPassword}
                        setItem={setRepeatPassword}
                    />
                </div>
                <div>
                    <label>Who are you:</label>
                    <div>
                        <Input
                            htmlFor='default_radio'
                            labelText='Buyer'
                            valueInput='buyer'
                            typeInput='radio'
                            nameInput='user_role'
                        />
                    </div>
                    <div>
                        <Input
                            htmlFor='default_radio'
                            labelText='Seller'
                            valueInput='seller'
                            typeInput='radio'
                            nameInput='user_role'
                        />
                    </div>
                </div>
                <div>
                    <Button
                        buttonType='submit'
                        isDisabled={disableButton}
                        buttonText='Sign Up'
                    />
                </div>
                <div>
                    Already have an account?
                    <span>
                        <Link to={LOGIN_ROUTE}>
                            Login
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;