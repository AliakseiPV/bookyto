import React from 'react'
import {Link} from 'react-router-dom'
import FormItem from '../FormItem'
import {LOGIN_ROUTE} from '../../utils/consts'
import Form from '../Form'
import {errorChecks} from '../../helpers/errors'
import {Button} from '../../ui-kit'
import {signUpValues} from '../../helpers/initialValues'

const SignUp = () => {
    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form 
                onSubmit={handleSubmit}
                validationParams={errorChecks}
                initialValues={signUpValues}
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
                <Button
                    className={"Button button__small button__medium"}
                    buttonType='submit'
                    buttonText='Sign Up'
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