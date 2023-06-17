import React, { useContext, useState } from 'react';
import {Context} from '../../index'
import "./NavBar.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, DASHBOARD_ROUTE, STORE_ROUTE, BASKET_ROUTE, ABOUT_ROUTE} from "../../utils/consts";
import {Link, useNavigate} from 'react-router-dom'
import DropMenu from '../DropMenu';

function NavBar() {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const [active, setActive] = useState(false)


    return (
        <div className="Nav__Bar">
            <div className="Nav__Bar__Container">
                <h1>Bookyto</h1>
                <ul>
                    <li>
                        <Link to={STORE_ROUTE}
                              onClick={() => navigate(STORE_ROUTE)}
                              className="Nav__Bar__Link"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                
                        <Link to={ABOUT_ROUTE}
                            onClick={() => navigate(ABOUT_ROUTE)}
                            className="Nav__Bar__Link"
                        >
                            About
                        </Link>
                    </li>
                    { user.isAuth ? 
                        <li>
                            <Link to={BASKET_ROUTE}
                                onClick={() => navigate(BASKET_ROUTE)}
                                className="Nav__Bar__Link"
                            >
                                Basket
                                <ShoppingCartIcon className="Icon"/>
                            </Link>
                        </li>
                        :
                        <></>
                    }
                </ul>
            </div>
           <div className="Nav__Bar__Profile">
                <ul>
                    { user.isAuth ?
                        <li>
                            <Link to={LOGIN_ROUTE} 
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                    className=""    
                            >
                                    <LockOutlinedIcon/>
                                    Login
                            </Link>
                        </li>
                        : 
                        <li onClick={() => {console.log('logout')}}>
                            <LockOpenOutlinedIcon/>
                            Logout
                        </li>
                    }
                    <li>
                        <div className='profile_img'></div>
                        <div className='drop__menu'>
                            <MenuRoundedIcon
                                onClick={() => setActive(!active)}
                            />
                            {console.log(user)}
                            {/* { user.userInfo} */}
                            <DropMenu active={active}/>
                        </div>
                        
                    </li>
                </ul>
           </div>
        </div>
    );
}

export default NavBar;