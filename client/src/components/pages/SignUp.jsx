import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Input, Button} from '../../ui-kit';
import {emailValidation, passwordValidation, repeatPasswordValidation} from '../../helpers/validation';
import FormItem from '../FormItem';
import {LOGIN_ROUTE} from "../../utils/consts";
import Form, {FormContext} from '../Form'

const SignUp = () => {
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
        }]

    const initialValues = {
        firstName: "",
        lastName: "", 
        email: "",
        password: "", 
        repeatPassword: "",
    }


    function handleSubmit (e) {
        e.preventDefault();
    }

    // useEffect(() => {
    //     setDisableButton(passwordError.length || emailError.length || repeatPasswordError.length)
    // }, [passwordError, emailError, repeatPasswordError])

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit} initialValues = {initialValues} errorChecks = {{email: emailErrors, password: passwordErrors}}>
                    <FormItem
                        htmlFor='firstName'
                        labelText='First Name'
                        nameInput='firstName'
                        typeInput='firstName'
                        requiredBool={true}
                    />
                    <FormItem
                        htmlFor='lastName'
                        labelText='Last Name'
                        nameInput='lastName'
                        typeInput='lastName'
                        requiredBool={true}
                    />
                    <FormItem
                        htmlFor='email'
                        labelText='Email'
                        nameInput='email'
                        typeInput='email'
                        requiredBool={true}
                    />
                    <FormItem
                        htmlFor='password'
                        labelText='Password'
                        nameInput='password'
                        typeInput='password'
                        requiredBool={true}
                    />
                   <FormItem
                        htmlFor='password_confirmation'
                        labelText='Confirm password'
                        nameInput='repeatPassword'
                        typeInput='password'
                        requiredBool={true}
                    />
                    <FormItem
                        htmlFor='default_radio'
                        labelText='Buyer'
                        nameInput='user_role'
                        typeInput='radio'
                        requiredBool={true}
                    />
                    <FormItem
                        htmlFor='default_radio'
                        labelText='Seller'
                        nameInput='user_role'
                        typeInput='radio'
                        requiredBool={true}
                    />
                         
            </Form>
            <div>
                Already have an account?
                <span>
                    <Link to={LOGIN_ROUTE}>
                        Login
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUp;