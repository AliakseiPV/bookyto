import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {REGISTRATION_ROUTE, STORE_ROUTE} from '../../utils/consts'
import {Form, FormItem} from '../../components'
import {Button} from '../../ui-kit'
import {errorChecks} from '../../helpers/errors'
import './Login.scss'
import data from "../../TestData/user.json"
import {useDispatch, useSelector} from "react-redux";
import {AUTH_TRUE, USER_ROLE, USER_NAME} from '../../store/types'

const Login = () => {
    const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const navigate = useNavigate()

	const trueAuth = (user) => {
		dispatch({type: AUTH_TRUE, payload: user})
	}
	const userRole = (user) => {
		dispatch({type: USER_ROLE, payload: user})
	}
    const userName = (user) => {
        dispatch({type: USER_NAME, payload: user})
    }

    const loginInitialVals = {
        email: "",
        password: ""
    }

    function checkData (e, loginData) {
        if((loginData.email === e.target.email.value) && (loginData.password === e.target.password.value)) {
            trueAuth(user)
			userRole(user)
            userName(user)
			console.log(user)
        }
    }

    function handleSubmit (e) {
        e.preventDefault(); 
        checkData(e, data)
       	navigate(STORE_ROUTE)
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
                    classNameInput='bottom-border'
                    classNameLabel='shift-up'
                    classNameError='arrow-left'
                />
                <FormItem
                    htmlFor='password'
                    labelText='Password'
                    nameInput='password'
                    typeInput='password'
                    classNameInput='bottom-border'
                    classNameLabel='shift-up'
                    classNameError='arrow-left'
                />
                <Button
                    className="large blue ripple"
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