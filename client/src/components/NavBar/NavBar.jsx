import React from 'react';
import "./NavBar.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, DASHBOARD_ROUTE, STORE_ROUTE, BASKET_ROUTE, ABOUT_ROUTE} from "../../utils/consts";
import {Link, useNavigate} from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();

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
                    <Link to={ABOUT_ROUTE}
                          onClick={() => navigate(ABOUT_ROUTE)}
                          className="Nav__Bar__Link"
                    >
                        About
                    </Link>
                    <li>
                        <Link to={BASKET_ROUTE}
                              onClick={() => navigate(BASKET_ROUTE)}
                              className="Nav__Bar__Link"
                        >
                              Basket
                            <ShoppingCartIcon className="Icon"/>
                        </Link>
                    </li>
                </ul>
            </div>
           <div className="Nav__Bar__Profile">
               login and profile
           </div>
        </div>
    );
}

export default NavBar;