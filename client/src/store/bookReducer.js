import { AUTH_TRUE, AUTH_FALSE, USER_ROLE, USER_NAME, CLEAR_USERINFO } from "./types"
import data from '../TestData/user.json'

const defaultUser = {
	isAuth: false,
	userInfo: {}
}

export const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		case AUTH_TRUE:
			return {...state, isAuth: true}
		case AUTH_FALSE:
			return {...state, isAuth: false}
		case USER_ROLE:
			return {...state, userInfo: {...state.userInfo, role: data.role }}
		case USER_NAME:
			return {...state, userInfo: {...state.userInfo, name: data.name }}
		case CLEAR_USERINFO:
			return{...state, userInfo: ''}	
		default:
			return state
	}
}