import React from 'react'
import {Link} from 'react-router-dom'
import FormItem from '../components/FormItem'
import {LOGIN_ROUTE} from '../utils/consts'
import Form from '../components/Form/Form'
import {errorChecks} from '../helpers/errors'
import {Button} from '../ui-kit'
import {signUpValues} from '../helpers/initialValues'

const SignUp = () => {
    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <div className='SignUp__Wrapper'>
        <div className='SignUp__Form'>
            <h1>Sign Up</h1>
            <Form 
                onSubmit={handleSubmit}
                validationParams={errorChecks}
                initialValues={signUpValues}
                className={'Form_default center'}
            >
                <FormItem
                    htmlFor='firstName'
                    labelText='First Name'
                    nameInput='firstName'
                    typeInput='firstName'
                    classNameInput={'Input'}
                    classNameLabel={'Label center__left'}
                />
                <FormItem
                    htmlFor='lastName'
                    labelText='Last Name'
                    nameInput='lastName'
                    typeInput='lastName'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <FormItem
                    htmlFor='email'
                    labelText='Email'
                    nameInput='email'
                    typeInput='email'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <FormItem
                    htmlFor='password'
                    labelText='Password'
                    nameInput='password'
                    typeInput='password'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <FormItem
                    htmlFor='password_confirmation'
                    labelText='Confirm password'
                    nameInput='repeatPassword'
                    typeInput='password'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <FormItem
                    htmlFor='default_radio'
                    labelText='Buyer'
                    nameInput='user_role'
                    typeInput='radio'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <FormItem
                    htmlFor='default_radio'
                    labelText='Seller'
                    nameInput='user_role'
                    typeInput='radio'
                    classNameInput={'Input'}
                    classNameLabel={'Label'}
                />
                <Button
                    className={"Button button__large"}
                    buttonType='submit'
                    buttonText='Sign Up'
                />
            </Form>
            <div className='SignUp__Link'>
                Already have an account?
                <span>
                    <Link to={LOGIN_ROUTE}>
                        Login
                    </Link>
                </span>
            </div>
        </div>
        </div>
    );
};

export default SignUp;