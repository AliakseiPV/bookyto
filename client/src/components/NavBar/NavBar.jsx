import React from 'react';
import "./NavBar.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {LOGIN_ROUTE, STORE_ROUTE, BASKET_ROUTE, PROFILE_ROUTE} from "../../utils/consts";
import { AUTH_FALSE, CLEAR_USERINFO } from '../../store/types';
import {Link, useNavigate} from 'react-router-dom'
import DropMenu from '../DropMenu/DropMenu';
import {useDispatch, useSelector} from "react-redux";
import { dropDownBuyer, dropDownSeller } from '../../helpers/dropMenuNav';

function NavBar() {
	const navigate = useNavigate();

	const user = useSelector(state => state.user)  
	const dispatch = useDispatch()

	const falseAuth = (user) => {
		dispatch({type: AUTH_FALSE, payload: user})
	}
	const clearUserInfo = (user) => {
		dispatch({type: CLEAR_USERINFO, payload: user})
	}

	const logout = (user) => {
		falseAuth(user)
		clearUserInfo(user)
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
								onClick={() => logout(user)}
							>
								<LockOpenOutlinedIcon className="Icon"/>
							</li>
						</>
                    }
					<li className='profile_img'>
						<Link to={PROFILE_ROUTE}
							onClick={() => navigate(PROFILE_ROUTE)}
						>
							<img src="" alt=""/>
						</Link>
					</li>
                    <li className='Drop__Icon__Menu'>
						<MenuRoundedIcon className='Icon'/>
						{user.userInfo.role === 'Seller' ?
							<DropMenu object={dropDownSeller}/>
							:
							<></>
						}
						{user.userInfo.role === 'Buyer' ?
							<DropMenu object={dropDownBuyer}/>
							:
							<></>
						}
                    </li>
                </ul>
           	</div>
        </div>
    );
}

export default NavBar;