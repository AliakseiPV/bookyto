import {BookPage, Login, SignUp, StorePage, Settings, Basket, Dashboard, MyLibrary, Profile, Upload} from './pages/index'
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

export const BuyerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: Settings
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: MYLIBRARY_ROUTE,
        Component: MyLibrary
    },

]

export const SellerAuthRoutes = [
    {
        path: SETTINGS_ROUTE,
        Component: Settings
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: MYLIBRARY_ROUTE,
        Component: MyLibrary
    },
    {
        path: UPLOAD_ROUTE,
        Component: Upload
    },
    {
        path: DASHBOARD_ROUTE,
        Component: Dashboard
    },
]

