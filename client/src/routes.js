import BookPage from './pages/BookPage'
import Login from './pages/Login'
import {SignUp} from './pages/SignUp'
import {About} from './pages/About'
import StorePage from './pages/StorePage'
import {REGISTRATION_ROUTE, LOGIN_ROUTE, STORE_ROUTE, BOOK_ROUTE, SETTINGS_ROUTE, ABOUT_ROUTE, BASKET_ROUTE, SELLER_ROUTE, DASHBOARD_ROUTE, PRODUCT_ROUTE} from './utils/consts'

export const BuyerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: ''
    },
    {
        path: BASKET_ROUTE,
        Component: ''
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
        path: SELLER_ROUTE,
        Component: ''
    },
    //list of seller products
    {
        path: PRODUCT_ROUTE,
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
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    }
]