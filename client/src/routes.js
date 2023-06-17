import BookPage from './pages/BookPage'
import {Login} from './pages/Login'
import {SignUp} from './pages/SignUp'
import StorePage from './pages/StorePage'
import {
	REGISTRATION_ROUTE,
	LOGIN_ROUTE,
	STORE_ROUTE,
	BOOK_ROUTE,
	SETTINGS_ROUTE,
	BASKET_ROUTE,
	DASHBOARD_ROUTE,
	MYLIBRARY_ROUTE,
	PROFILE_ROUTE,
	UPLOAD_ROUTE
} from './utils/consts'
import { Basket } from './pages/Basket'

export const BuyerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: ''
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const SellerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: ''
    },
    {
        path: DASHBOARD_ROUTE,
        Component: ''
    },
    //upload product maybe change name later 
    {
        path: UPLOAD_ROUTE,
        Component: ''
    },
    //list of seller products
    {
        path: BOOK_ROUTE,
        Component: ''
    }
]

export const PublicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: STORE_ROUTE,
        Component: StorePage
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    }
]