import React from 'react';
import './StorePage.scss'
import {SellerOptions, SideBar} from '../../components';
import { useNavigate } from 'react-router-dom';
import { UPLOAD_ROUTE, DASHBOARD_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';
import { genres } from '../../utils/bookgenres';

const StorePage = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const btn1 = {
        text: 'Upload',
        navigate: () => {navigate(UPLOAD_ROUTE)},
        ClassName: 'button__medium'
    }
    const btn2 = {
        text: 'DashBoard',
        navigate: () => {navigate(DASHBOARD_ROUTE)},
        ClassName: 'button__medium'
    }

    return (
        <div>
            <div>
                {(user.isAuth && user.userInfo.role === 'Seller') 
                    ?
                    <div>
                        <SellerOptions
                            text='Hello'
                            btn1={btn1}
                            btn2={btn2}
                            userName={user.userInfo.name}
                        />
                    </div>
                    : 
                    <></>
                }
                <div>Trending books</div>
            </div>
            <div>
                <h1>Browse Genres</h1>
                <div>
                    <div>Search Bar</div>
                    <div>
                        <SideBar array={genres}/>
                    </div>
                    <div>Store</div>
                </div>
            </div>
        </div>
    );
};

export default StorePage;