import React, { Component } from 'react';
import { PublicRoutes, SellerAuthRoutes, BuyerAuthRoutes } from '../routes';
import {Routes, Route} from 'react-router-dom'

const AppRouter = () => {
    return (
        <Routes>
            {PublicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;