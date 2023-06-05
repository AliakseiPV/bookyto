import React from 'react'
import {Link} from 'react-router-dom'
import FormItem from '../../components/FormItem/FormItem'
import {REGISTRATION_ROUTE} from '../../utils/consts'
import Form from '../../components/Form/Form'
import {Button} from '../../ui-kit'
import {errorChecks} from '../../helpers/errors'
import './Login.scss'

const Login = () => {
    const loginInitialVals = {
        email: "",
        password: ""
    }

    function handleSubmit (e) {
        e.preventDefault();
    }
    return (
        <div className='Login__Wrapper'>
            <div className='Login__Form'>
                <h1>Login</h1>
                <Form
                    onSubmit={handleSubmit}
                    validationParams={errorChecks}
                    initialValues={loginInitialVals}
                    className={'center'}
                >
                   <FormItem
                    htmlFor='email'
                    labelText='Email'
                    nameInput='email'
                    typeInput='text'
                    classNameInput='bottom__border'
                    classNameLabel='shift__up'
                    classNameError='arrow__left'
                />
                <FormItem
                    htmlFor='password'
                    labelText='Password'
                    nameInput='password'
                    typeInput='password'
                    classNameInput='bottom__border'
                    classNameLabel='shift__up'
                    classNameError='arrow__left'
                />
                <Button
                    className="button__large color__blue ripple"
                    buttonType='submit'
                    buttonText='Login'
                />
                </Form>
                <div className='SignUp__Link'>
                Don't have an account?
                <span>
                    <Link to={REGISTRATION_ROUTE}>
                        Register
                    </Link>
                </span>
            </div>
            </div>
        </div>
    );
};

export default Login;