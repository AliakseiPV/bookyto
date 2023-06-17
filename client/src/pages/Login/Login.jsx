import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import FormItem from '../../components/FormItem/FormItem'
import {REGISTRATION_ROUTE} from '../../utils/consts'
import Form from '../../components/Form/Form'
import {Button} from '../../ui-kit'
import {errorChecks} from '../../helpers/errors'
import './Login.scss'
import data from "../../TestData/user.json"
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
	const user = useSelector(state => state.user)

	const trueAuth = (user) => {
		dispatch({type:"AUTH_TRUE", payload: user})
	}
	const userRole = (user) => {
		dispatch({type:"USER_ROLE", payload: user})
	}


    const loginInitialVals = {
        email: "",
        password: ""
    }

    function checkData (e, loginData) {
        if((loginData.email === e.target.email.value) && (loginData.password === e.target.password.value)) {
            trueAuth(user)
			userRole(user)
			console.log(user)
        }
    }

    function handleSubmit (e) {
        e.preventDefault(); 
        checkData(e, data)
        console.log(user)
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
                <div className='Login__Link'>
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