import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Input, Button} from '../../ui-kit';
import {emailValidation, passwordValidation} from '../../helpers/validation';
import FormError from "../FormError";
import FormItem from '../FormItem';

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailError, setEmailError] = useState(['Email field is empty'])
    const [passwordError, setPasswordError] = useState(['Password field is empty'])
    const [repeatPasswordError, setRepeatPasswordError] = useState(['Password field is empty'])
    const [disableButton, setDisableButton] = useState(true)

    function handleSubmit (e) {
        e.preventDefault();
        if((e.target.password.value !== e.target.confirm.value))
        {
            setRepeatPasswordError("Passwords did not match")
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
                        validate='Email field is empty'
                        htmlFor='email'
                        labelText='Email'
                        nameInput='email'
                        typeInput='email'
                        requiredBool={true}
                        onChangeHandler={emailValidation}
                    />
                </div>
                <div>
                    <FormItem
                        validate='Password field is empty'
                        htmlFor='password'
                        labelText='Password'
                        nameInput='password'
                        typeInput='password'
                        requiredBool={true}
                        onChangeHandler={passwordValidation}
                    />
                </div>
                <div>
                    <FormItem
                        validate={"Password field is empty"}
                        htmlFor='password_confirmation'
                        labelText='Confirm password'
                        nameInput='confirm'
                        typeInput='password'
                        requiredBool={true}
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
                            name='user_role'
                        />
                    </div>
                    <div>
                        <Input
                            htmlFor='default_radio'
                            labelText='Seller'
                            valueInput='seller'
                            typeInput='radio'
                            name='user_role'
                        />
                    </div>
                </div>
                <div>
                    <Button
                        buttonType='submit'
                        isDisabled={false}
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