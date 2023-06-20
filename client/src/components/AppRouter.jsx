import React from 'react';
import { PublicRoutes, SellerAuthRoutes, BuyerAuthRoutes } from '../routes';
import {Routes, Route} from 'react-router-dom'
import {StorePage} from '../pages'
import { useSelector } from 'react-redux';

const AppRouter = () => {
    const user = useSelector(state => state.user)
    return (
        <Routes> 
            {user.isAuth && user.userInfo.role === 'Buyer' && BuyerAuthRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {user.isAuth && user.userInfo.role === 'Seller' && SellerAuthRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {PublicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<StorePage/>}/>
        </Routes>
    );
};

export default AppRouter; 