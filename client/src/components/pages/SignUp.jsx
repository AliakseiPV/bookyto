import React from 'react';
import { Link } from 'react-router-dom';
import FormItem from '../FormItem';
import {LOGIN_ROUTE} from "../../utils/consts";
import Form from '../Form'
import {emailErrors, passwordErrors} from '../../helpers/errors'
import {signUpValidation} from '../../helpers/validation'

const SignUp = () => {

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

    return (
        <div>
            <h1>Sign Up</h1>
            <Form 
                onSubmit={handleSubmit} 
                initialValues = {initialValues} 
                errorChecks = {{
                    email: emailErrors, 
                    password: passwordErrors, 
                }}
                validation={signUpValidation}
            >
                <FormItem
                    htmlFor='firstName'
                    labelText='First Name'
                    nameInput='firstName'
                    typeInput='firstName'
                />
                <FormItem
                    htmlFor='lastName'
                    labelText='Last Name'
                    nameInput='lastName'
                    typeInput='lastName'
                />
                <FormItem
                    htmlFor='email'
                    labelText='Email'
                    nameInput='email'
                    typeInput='email'
                />
                <FormItem
                    htmlFor='password'
                    labelText='Password'
                    nameInput='password'
                    typeInput='password'
                />
                <FormItem
                    htmlFor='password_confirmation'
                    labelText='Confirm password'
                    nameInput='repeatPassword'
                    typeInput='password'
                />
                <FormItem
                    htmlFor='default_radio'
                    labelText='Buyer'
                    nameInput='user_role'
                    typeInput='radio'
                />
                <FormItem
                    htmlFor='default_radio'
                    labelText='Seller'
                    nameInput='user_role'
                    typeInput='radio'
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