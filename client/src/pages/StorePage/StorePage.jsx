import React from 'react';
import './StorePage.scss'
import {BookList, SideBar, Slider} from '../../components';
import { useNavigate } from 'react-router-dom';
import { UPLOAD_ROUTE, DASHBOARD_ROUTE } from '../../utils/consts';
import { useSelector } from 'react-redux';
import { genres } from '../../utils/bookgenres';
import {Button, Input} from "../../ui-kit";
import SearchIcon from '@mui/icons-material/Search';


const StorePage = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();



    return (
        <div className='Store'>
            <div className="Store__top center">
                <div className="Store__seller-container">
                    {/* {(user.isAuth && user.userInfo.role === 'Seller') 
                        ? */}
                        <div className='Store__seller'>
                            <p>Do you wish to</p>
                            <div className="Store__seller-options">
                                <Button
                                    buttonType='button'
                                    buttonText='Upload'
                                    onClickHandler={() => navigate(UPLOAD_ROUTE)}
                                    className={'small orange radius-5 shadow'}
                                />
                                <Button
                                    buttonType='button'
                                    buttonText='See Dashboard'
                                    onClickHandler={() => navigate(DASHBOARD_ROUTE)}
                                    className={'small blue radius-5 shadow'}
                                />
                            </div>
                        </div>
                         {/* :  
                        <></>
                    }  */}
                </div>
            </div>
            <div className='Store__trending'>
                    <h1>Trending books</h1>
                    <div className="Store__trending-books">
                        <div className="Store__left-row"></div>
                            {/* <img src={testData.map(data => data.book_cover)} alt="" /> */}
                            <Slider/>
                        <div className="Store__right-row"></div>
                    </div>
                </div>
            <div className='Store__container'>
                <h1>Browse Genres</h1>
                <div className='Store__wrapper center'>
                    <div className='Store__sidebar'>
                        <SideBar array={genres}/>
                    </div>
					<div className='Store__books'>
						<div className='Store__search'>
                            <Input><SearchIcon/></Input>
                        </div>
						<BookList/>
					</div>
                </div>
            </div>
        </div>
        
    );
};

export default StorePage;