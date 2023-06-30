import React, {useState} from "react";
import './BurgerMenu.scss'
import { DropMenu } from "../DropMenu";
import {useSelector} from "react-redux";
import { dropDownBuyer, dropDownSeller } from '../../helpers/dropMenuNav';

const Navbar = () => {
    const user = useSelector(state => state.user)  

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return(
        <>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
            {user.userInfo.role === 'Seller' ?
				<DropMenu 
                    fillData={dropDownSeller} 
                    className={menu_class}
                />
                :
                <></>
            }
            {user.userInfo.role === 'Buyer' ?
                <DropMenu 
                    fillData={dropDownBuyer} 
                    className={menu_class}/>
                :
                <></>
            }				
        </>
    )
}

export default Navbar