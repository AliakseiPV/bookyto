import {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {bookReducer} from "./bookReducer";

const rootReducer = combineReducers ({
	user:userReducer,
	books: bookReducer,
})

export const store = createStore(rootReducer)
