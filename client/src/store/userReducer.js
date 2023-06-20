import data from "../TestData/user.json"

const defaultUser = {
	isAuth: false,
	userInfo: {}
}

export const userReducer = (state = defaultUser, action) => {
	switch (action.type) {
		case "AUTH_TRUE":
			return {...state, isAuth: true}
		case "AUTH_FALSE":
			return {...state, isAuth: false}
		case "USER_ROLE":
			return {...state, userInfo: data.role}
		case "CLEAR_USERINFO":
			return{...state, userInfo: ''}	
		default:
			return state
	}
}