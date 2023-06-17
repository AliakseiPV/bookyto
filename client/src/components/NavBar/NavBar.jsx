import React, { useContext, useState } from 'react';
import "./NavBar.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {LOGIN_ROUTE, DASHBOARD_ROUTE, STORE_ROUTE, BASKET_ROUTE, SETTINGS_ROUTE} from "../../utils/consts";
import {Link, useNavigate} from 'react-router-dom'
import DropMenu from '../DropMenu/DropMenu';
import {useDispatch, useSelector} from "react-redux";

function NavBar() {
	const user = useSelector(state => state.user)
    const navigate = useNavigate();

	const dispatch = useDispatch()

	const falseAuth = (user) => {
		dispatch({type:"AUTH_FALSE", payload: user})
	}


    return (
        <div className="Nav__Bar">
			<Link to={STORE_ROUTE}
				  onClick={() => navigate(STORE_ROUTE)}
				  className='Nav__Bar__Logo'
			>
				Bookyto
			</Link>
           	<div className="Nav__Bar__Nav">
                <ul>
                    {!user.isAuth ?
                        <li className='Nav__Bar__Icon__Wrapper'>
                            <Link to={LOGIN_ROUTE} 
                                    onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                    <LockOutlinedIcon className="Icon"/>
                            </Link>
                        </li>
                        :
						<>
							<li className='Nav__Bar__Icon__Wrapper'>
								<Link to={BASKET_ROUTE}
									  onClick={() => navigate(BASKET_ROUTE)}
								>
									<ShoppingCartIcon className="Icon"/>
								</Link>
							</li>
							<li
								className='lock__icon'
								onClick={() => falseAuth(user)}
							>
								<LockOpenOutlinedIcon className="Icon"/>
							</li>
						</>
                    }
					<li className='profile_img'>
						<img src="" alt=""/>
					</li>
                    <li className='Drop__Icon__Menu'>
						<div className='arrow__top'></div>
						<MenuRoundedIcon className='Icon'/>
						<DropMenu object={[{name:'settings', route:SETTINGS_ROUTE}]}/>
                    </li>
                </ul>
           	</div>
        </div>
    );
}

export default NavBar;