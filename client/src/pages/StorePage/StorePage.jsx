import React from 'react';
import './StorePage.scss'
import {BookItem, BookList, SideBar} from '../../components';
import { useNavigate } from 'react-router-dom';
import { UPLOAD_ROUTE, DASHBOARD_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';
import { genres } from '../../utils/bookgenres';
import {Button} from "../../ui-kit";
import {Book} from "@mui/icons-material";

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
            <div className='Store'>
                <h1>Browse Genres</h1>
                <div className='Store__Container'>
                    <div>
                        <SideBar array={genres}/>
                    </div>
					<div>
						<div>Search Bar</div>
						<BookList/>
					</div>
                </div>
            </div>
        </div>
    );
};

export default StorePage;