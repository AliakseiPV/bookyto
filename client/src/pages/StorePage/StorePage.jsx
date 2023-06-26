import React from 'react';
import './StorePage.scss'
import {SideBar} from '../../components';
import { useNavigate } from 'react-router-dom';
import { UPLOAD_ROUTE, DASHBOARD_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';
import { genres } from '../../utils/bookgenres';
import {Button} from "../../ui-kit";

const StorePage = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    return (
        <div>
            <div>
                {(user.isAuth && user.userInfo.role === 'Seller') 
                    ?
                    <div>
						<p>Do you wish to:</p>
						<Button
							  buttonType='button'
							  buttonText='Upload'
							  onClickHandler={() => navigate(UPLOAD_ROUTE)}
							  className={'button__medium color__orange'}
						  />
						<Button
							buttonType='button'
							buttonText='See Dashboard'
							onClickHandler={() => navigate(DASHBOARD_ROUTE)}
							className={'button__medium color__blue'}
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