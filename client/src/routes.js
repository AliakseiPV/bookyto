import BookPage from '../src/components/pages/BookPage/BookPage'
import Login from '../src/components/pages/Login/Login'
import SignUp from '../src/components/pages/SignUp/SignUp'
import StorePage from '../src/components/pages/StorePage/StorePage'
import {REGISTRATION_ROUTE, LOGIN_ROUTE, STORE_ROUTE, BOOK_ROUTE, SETTINGS_ROUTE, FAVOURITES_ROUTE, BASKET_ROUTE, SELLER_ROUTE, DASHBOARD_ROUTE, PRODUCT_ROUTE} from './utils/consts'

export const BuyerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: ''
    },
    {
        path: FAVOURITES_ROUTE,
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
]