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
import { useScrollPosition } from '../../hooks/useScrollPosition';

function NavBar() {
	const navigate = useNavigate();
	const scrollPosition = useScrollPosition()
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
        <div className="Nav-Bar" style={{top: scrollPosition === 'down' ? -58 : 0}}>
			<Link to={STORE_ROUTE}
				  onClick={() => navigate(STORE_ROUTE)}
				  className='Nav-Bar__Logo'
			>
				Bookyto
			</Link>
           	<div className="Nav-Bar__Nav">
                <ul>
                    {!user.isAuth ?
                        <li className='Nav-Bar__Icon-Wrapper'>
                            <Link to={LOGIN_ROUTE} 
                                    onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                    <LockOutlinedIcon className="Nav-Bar__Icon"/>
                            </Link>
                        </li>
                        :
						<>
							<li className='Nav-Bar__Icon-Wrapper'>
								<Link to={BASKET_ROUTE}
									  onClick={() => navigate(BASKET_ROUTE)}
								>
									<ShoppingCartIcon className="Nav-Bar__Icon"/>
								</Link>
							</li>
							<li
								onClick={() => logout(user)}
							>
								<LockOpenOutlinedIcon className="Nav-Bar__Icon"/>
							</li>
						</>
                    }
					<li className='Nav-Bar__profile-img'>
						<Link to={PROFILE_ROUTE}
							onClick={() => navigate(PROFILE_ROUTE)}
						>
							<img src="" alt=""/>
						</Link>
					</li>
                    <li className='Dropdown'>
						<MenuRoundedIcon className='Nav-Bar__Icon'/>
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